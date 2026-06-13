export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent dark:text-teal-300">
          MVP para estudantes de concurso público
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
          Compare editais e estude com mais estratégia.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          O Vitória Concursos mostra conteúdos em comum, assuntos novos e o aproveitamento da sua
          preparação entre diferentes concursos públicos.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-lg bg-brand px-5 py-3 text-center font-bold text-white transition hover:bg-emerald-800" href="#comparar">
            Comparar editais
          </a>
          <a className="rounded-lg border border-slate-300 px-5 py-3 text-center font-bold text-slate-800 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-100" href="#editais">
            Ver concursos disponíveis
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Exemplo de aproveitamento</p>
            <p className="mt-2 text-5xl font-black text-brand dark:text-emerald-300">72%</p>
          </div>
          <span className="rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand dark:bg-emerald-950 dark:text-emerald-200">
            Alto aproveitamento
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
            <p className="text-2xl font-black">18</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">assuntos em comum</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
            <p className="text-2xl font-black">7</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">assuntos novos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
