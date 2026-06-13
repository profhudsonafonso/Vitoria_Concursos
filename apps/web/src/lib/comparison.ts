import { cargoSubjects, cargos, subjects, type Cargo, type Subject } from "@/data/mockData";

export type ReuseLevel = "Baixo" | "Médio" | "Alto";

export type ComparisonResult = {
  cargoA: Cargo;
  cargoB: Cargo;
  commonSubjects: Subject[];
  exclusiveA: Subject[];
  exclusiveB: Subject[];
  totalUniqueSubjects: number;
  similarity: number;
  reuseLevel: ReuseLevel;
};

export function getSubjectsByCargo(cargoId: string): Subject[] {
  const subjectIds = cargoSubjects
    .filter((item) => item.cargoId === cargoId)
    .map((item) => item.assuntoId);

  return subjects.filter((subject) => subjectIds.includes(subject.assuntoId));
}

export function calculateSimilarity(commonCount: number, totalUniqueSubjects: number): number {
  if (totalUniqueSubjects === 0) {
    return 0;
  }

  return Math.round((commonCount / totalUniqueSubjects) * 100);
}

export function classifyReuseLevel(similarity: number): ReuseLevel {
  if (similarity >= 70) {
    return "Alto";
  }

  if (similarity >= 40) {
    return "Médio";
  }

  return "Baixo";
}

export function compareCargos(cargoAId: string, cargoBId: string): ComparisonResult {
  const cargoA = cargos.find((cargo) => cargo.cargoId === cargoAId) ?? cargos[0];
  const cargoB = cargos.find((cargo) => cargo.cargoId === cargoBId) ?? cargos[1];
  const subjectsA = getSubjectsByCargo(cargoA.cargoId);
  const subjectsB = getSubjectsByCargo(cargoB.cargoId);
  const normalizedA = new Set(subjectsA.map((subject) => subject.textoNormalizado));
  const normalizedB = new Set(subjectsB.map((subject) => subject.textoNormalizado));
  const uniqueNormalized = new Set([...normalizedA, ...normalizedB]);

  const commonSubjects = subjectsA.filter((subject) => normalizedB.has(subject.textoNormalizado));
  const exclusiveA = subjectsA.filter((subject) => !normalizedB.has(subject.textoNormalizado));
  const exclusiveB = subjectsB.filter((subject) => !normalizedA.has(subject.textoNormalizado));
  const similarity = calculateSimilarity(commonSubjects.length, uniqueNormalized.size);

  return {
    cargoA,
    cargoB,
    commonSubjects,
    exclusiveA,
    exclusiveB,
    totalUniqueSubjects: uniqueNormalized.size,
    similarity,
    reuseLevel: classifyReuseLevel(similarity)
  };
}
