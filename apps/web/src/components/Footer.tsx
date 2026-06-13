export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-black text-ink dark:text-white">Vitória Concursos</p>
          <p>Ferramenta de apoio ao estudo. Não promete aprovação.</p>
        </div>
        <nav className="flex flex-wrap gap-4 font-semibold">
          <a className="hover:text-brand dark:hover:text-emerald-300" href="#">
            Fontes oficiais
          </a>
          <a
            className="hover:text-brand dark:hover:text-emerald-300"
            href="https://github.com/profhudsonafonso/Vitoria_Concursos/blob/main/mvp/requisitos_mvp.md"
          >
            Requisitos do MVP
          </a>
          <a className="hover:text-brand dark:hover:text-emerald-300" href="https://github.com/profhudsonafonso/Vitoria_Concursos">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
