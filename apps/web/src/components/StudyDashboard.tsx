"use client";

import { useEffect, useMemo, useState } from "react";
import { getSubjectsByCargo } from "@/lib/comparison";
import { calculateStudyReport, type ProgressState, type StudyStatus } from "@/lib/progress";
import { StudyChecklist } from "./StudyChecklist";
import { StudyReport } from "./StudyReport";

const storageKey = "vc-study-progress";

export function StudyDashboard() {
  const subjects = useMemo(() => getSubjectsByCargo("cargo_001"), []);
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === "undefined") {
      return {};
    }

    const storedProgress = window.localStorage.getItem(storageKey);
    return storedProgress ? (JSON.parse(storedProgress) as ProgressState) : {};
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress]);

  function handleStatusChange(subjectId: string, status: StudyStatus) {
    setProgress((current) => ({
      ...current,
      [subjectId]: status
    }));
  }

  const report = useMemo(() => calculateStudyReport(subjects, progress), [subjects, progress]);

  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8" id="meu-estudo">
      <StudyChecklist subjects={subjects} progress={progress} onStatusChange={handleStatusChange} />
      <StudyReport report={report} />
    </section>
  );
}
