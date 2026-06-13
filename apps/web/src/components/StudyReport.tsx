import { type StudyReport as StudyReportType } from "@/lib/progress";

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
      <p className="text-2xl font-black">{value}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}

export function StudyReport({ report }: { report: StudyReportType }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Relatório</p>
        <h2 className="mt-2 text-2xl font-bold">Aproveitamento</h2>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Metric label="total de assuntos" value={report.totalSubjects} />
        <Metric label="percentual estudado" value={`${report.studiedPercentage}%`} />
        <Metric label="estudado ou em andamento" value={`${report.activePercentage}%`} />
        <Metric label="assuntos pendentes" value={report.pendingCount} />
        <Metric label="para revisão" value={report.reviewCount} />
        <Metric label="com dificuldade" value={report.difficultyCount} />
      </div>

      <div className="mt-5 rounded-lg border border-emerald-200 bg-brand-soft p-4 text-brand dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
        <p className="font-bold">Recomendação</p>
        <p className="mt-1 text-sm">{report.recommendation}</p>
      </div>
    </section>
  );
}
