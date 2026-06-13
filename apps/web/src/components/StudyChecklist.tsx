import { type Subject } from "@/data/mockData";
import { type ProgressState, type StudyStatus, statusLabels } from "@/lib/progress";

const statusOptions = Object.entries(statusLabels) as [StudyStatus, string][];

export function StudyChecklist({
  subjects,
  progress,
  onStatusChange
}: {
  subjects: Subject[];
  progress: ProgressState;
  onStatusChange: (subjectId: string, status: StudyStatus) => void;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Checklist</p>
        <h2 className="mt-2 text-2xl font-bold">Meu estudo</h2>
      </div>

      <div className="mt-5 space-y-3">
        {subjects.map((subject) => (
          <div
            className="grid gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-950 sm:grid-cols-[1fr_180px] sm:items-center"
            key={subject.assuntoId}
          >
            <div>
              <p className="font-semibold">{subject.textoOriginal}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{subject.disciplina}</p>
            </div>
            <select
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
              onChange={(event) => onStatusChange(subject.assuntoId, event.target.value as StudyStatus)}
              value={progress[subject.assuntoId] ?? "nao_estudado"}
            >
              {statusOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
