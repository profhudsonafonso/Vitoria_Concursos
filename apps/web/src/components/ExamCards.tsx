import { exams } from "@/data/mockData";

const statusLabel = {
  pendente: "Pendente",
  revisado: "Revisado",
  em_revisao: "Em revisão"
};

export function ExamCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="editais">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Editais disponíveis</p>
          <h2 className="mt-2 text-3xl font-bold">Prévia da base estruturada</h2>
        </div>
        <p className="max-w-xl text-slate-600 dark:text-slate-300">
          Dados mockados no formato dos CSVs, prontos para serem trocados por leitura da pasta `data/`.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {exams.map((exam) => (
          <article
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            key={exam.editalId}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">{exam.nomeConcurso}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{exam.orgao}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {statusLabel[exam.statusRevisao]}
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Banca</dt>
                <dd className="font-semibold">{exam.banca}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Ano</dt>
                <dd className="font-semibold">{exam.ano}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Estado</dt>
                <dd className="font-semibold">{exam.estado}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Área</dt>
                <dd className="font-semibold">{exam.areaPrincipal}</dd>
              </div>
            </dl>

            <div className="mt-5 flex gap-3">
              <a className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold transition hover:border-brand hover:text-brand dark:border-slate-700" href="#">
                Ver detalhes
              </a>
              <a className="rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800" href="#comparar">
                Comparar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
