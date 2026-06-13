import { type Subject } from "@/data/mockData";

export type StudyStatus = "nao_estudado" | "estudando" | "estudado" | "revisar" | "dificuldade";

export type ProgressState = Record<string, StudyStatus>;

export type StudyReport = {
  totalSubjects: number;
  studiedCount: number;
  inProgressCount: number;
  pendingCount: number;
  reviewCount: number;
  difficultyCount: number;
  studiedPercentage: number;
  activePercentage: number;
  recommendation: string;
};

export const statusLabels: Record<StudyStatus, string> = {
  nao_estudado: "Não estudado",
  estudando: "Estudando",
  estudado: "Estudado",
  revisar: "Revisar",
  dificuldade: "Tenho dificuldade"
};

export function calculateStudyReport(subjects: Subject[], progress: ProgressState): StudyReport {
  const totalSubjects = subjects.length;
  const statuses = subjects.map((subject) => progress[subject.assuntoId] ?? "nao_estudado");
  const studiedCount = statuses.filter((status) => status === "estudado").length;
  const inProgressCount = statuses.filter((status) => status === "estudando").length;
  const pendingCount = statuses.filter((status) => status === "nao_estudado").length;
  const reviewCount = statuses.filter((status) => status === "revisar").length;
  const difficultyCount = statuses.filter((status) => status === "dificuldade").length;
  const studiedPercentage = totalSubjects === 0 ? 0 : Math.round((studiedCount / totalSubjects) * 100);
  const activePercentage =
    totalSubjects === 0 ? 0 : Math.round(((studiedCount + inProgressCount) / totalSubjects) * 100);

  let recommendation = "Comece pelos assuntos pendentes com maior recorrência entre os cargos.";

  if (difficultyCount > 0) {
    recommendation = "Reserve um bloco curto para atacar os assuntos marcados com dificuldade.";
  } else if (reviewCount > 0) {
    recommendation = "Priorize uma revisão rápida antes de avançar para novos assuntos.";
  } else if (studiedPercentage >= 70) {
    recommendation = "Bom aproveitamento: compare um segundo edital e foque nos assuntos novos.";
  }

  return {
    totalSubjects,
    studiedCount,
    inProgressCount,
    pendingCount,
    reviewCount,
    difficultyCount,
    studiedPercentage,
    activePercentage,
    recommendation
  };
}
