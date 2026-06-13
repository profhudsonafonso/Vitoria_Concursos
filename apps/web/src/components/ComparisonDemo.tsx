"use client";

import { useMemo, useState } from "react";
import { cargos } from "@/data/mockData";
import { compareCargos } from "@/lib/comparison";

function SubjectList({ items }: { items: { assuntoId: string; textoOriginal: string; disciplina: string }[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-500 dark:text-slate-400">Nenhum assunto nesta lista.</p>;
  }

  return (
    <ul className="space-y-2">
      {items.map((subject) => (
        <li className="rounded-lg bg-slate-50 px-3 py-2 text-sm dark:bg-slate-950" key={subject.assuntoId}>
          <span className="font-semibold">{subject.textoOriginal}</span>
          <span className="block text-xs text-slate-500 dark:text-slate-400">{subject.disciplina}</span>
        </li>
      ))}
    </ul>
  );
}

export function ComparisonDemo() {
  const [cargoAId, setCargoAId] = useState("cargo_001");
  const [cargoBId, setCargoBId] = useState("cargo_002");
  const result = useMemo(() => compareCargos(cargoAId, cargoBId), [cargoAId, cargoBId]);

  return (
    <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900" id="comparar">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Comparação</p>
            <h2 className="mt-2 text-3xl font-bold">Teste a regra inicial do MVP</h2>
          </div>
          <p className="max-w-xl text-slate-600 dark:text-slate-300">
            A similaridade usa assuntos normalizados em comum divididos pelo total de assuntos únicos.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
            <label className="block text-sm font-bold" htmlFor="cargo-a">
              Cargo A
            </label>
            <select
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
              id="cargo-a"
              onChange={(event) => setCargoAId(event.target.value)}
              value={cargoAId}
            >
              {cargos.map((cargo) => (
                <option key={cargo.cargoId} value={cargo.cargoId}>
                  {cargo.nomeCargo}
                </option>
              ))}
            </select>

            <label className="mt-5 block text-sm font-bold" htmlFor="cargo-b">
              Cargo B
            </label>
            <select
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
              id="cargo-b"
              onChange={(event) => setCargoBId(event.target.value)}
              value={cargoBId}
            >
              {cargos.map((cargo) => (
                <option key={cargo.cargoId} value={cargo.cargoId}>
                  {cargo.nomeCargo}
                </option>
              ))}
            </select>

            <div className="mt-6 rounded-lg bg-white p-5 dark:bg-slate-900">
              <p className="text-sm text-slate-500 dark:text-slate-400">Similaridade</p>
              <p className="mt-1 text-5xl font-black text-brand dark:text-emerald-300">{result.similarity}%</p>
              <p className="mt-2 font-bold">Aproveitamento {result.reuseLevel}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {result.commonSubjects.length} em comum de {result.totalUniqueSubjects} assuntos únicos.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-bold">Em comum</h3>
              <div className="mt-4">
                <SubjectList items={result.commonSubjects} />
              </div>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-bold">Só em {result.cargoA.nomeCargo}</h3>
              <div className="mt-4">
                <SubjectList items={result.exclusiveA} />
              </div>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-bold">Só em {result.cargoB.nomeCargo}</h3>
              <div className="mt-4">
                <SubjectList items={result.exclusiveB} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
