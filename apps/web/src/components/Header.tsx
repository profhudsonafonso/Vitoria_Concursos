"use client";

import { useEffect, useState } from "react";

const links = ["Início", "Editais", "Comparar", "Meu estudo"];

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem("vc-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("vc-theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    const nextValue = !isDark;
    setIsDark(nextValue);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a className="text-lg font-black text-brand dark:text-emerald-300" href="#">
          Vitória Concursos
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {links.map((link) => (
            <a className="transition hover:text-brand dark:hover:text-emerald-300" href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
            onClick={toggleTheme}
            type="button"
          >
            {isDark ? "Claro" : "Escuro"}
          </button>
          <a
            className="rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800"
            href="#comparar"
          >
            Comparar editais
          </a>
        </div>
      </div>
    </header>
  );
}
