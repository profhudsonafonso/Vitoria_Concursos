import { ComparisonDemo } from "@/components/ComparisonDemo";
import { ExamCards } from "@/components/ExamCards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StudyDashboard } from "@/components/StudyDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-ink transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Hero />

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-warning">Problema</p>
          <h2 className="mt-3 text-2xl font-bold">Preparar um edital e mirar outro ainda é difícil.</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Estudantes de concurso público investem meses em uma preparação, mas nem sempre sabem
            quanto desse esforço pode ser reaproveitado em outro cargo, banca ou órgão.
          </p>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Solução</p>
          <h2 className="mt-3 text-2xl font-bold">Comparação objetiva de conteúdos programáticos.</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            O Vitória Concursos compara conteúdos estruturados e mostra assuntos repetidos,
            exclusivos e o percentual de aproveitamento da preparação atual.
          </p>
        </article>
      </section>

      <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Fluxo do MVP</p>
              <h2 className="mt-2 text-3xl font-bold">Do edital ao plano de estudo</h2>
            </div>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300">
              Um caminho curto para sair da dúvida e chegar a uma decisão de estudo mais clara.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Escolha um edital ou cargo", "Compare com outro concurso", "Veja assuntos iguais e novos", "Organize seu estudo"].map(
              (step, index) => (
                <div
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950"
                  key={step}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-4 font-semibold">{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <ExamCards />
      <ComparisonDemo />
      <StudyDashboard />
      <Footer />
    </main>
  );
}
