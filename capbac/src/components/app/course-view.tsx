"use client";

import { motion } from "motion/react";
import { Lightbulb, ListChecks, Sigma, Target } from "lucide-react";
import type { Chapter } from "@/content/types";
import { Card } from "@/components/ui/card";
import { RichText } from "./rich-text";

export function Objectives({ chapter, color }: { chapter: Chapter; color: string }) {
  return (
    <Card className="p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase" style={{ color }}>
        <Target className="size-4" /> Objectifs du chapitre
      </p>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {chapter.objectives.map((o) => (
          <li key={o} className="flex gap-2.5 text-sm text-mist-300">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: color }} />
            <RichText text={o} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

/** Affiche les sections de cours demandées (toutes par défaut). */
export function CourseSections({ chapter, sections, color }: { chapter: Chapter; sections?: number[]; color: string }) {
  const list = (sections?.length ? sections : chapter.sections.map((_, i) => i)).map((i) => ({ i, s: chapter.sections[i] })).filter((x) => x.s);
  return (
    <div className="flex flex-col gap-5">
      {list.map(({ i, s }) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Card className="p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl font-display text-sm font-bold text-white" style={{ background: color }}>
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
            </div>

            <div className="prose-course mt-5 flex flex-col gap-4 text-[0.98rem]">
              {s.body.map((p, k) => (
                <p key={k}>
                  <RichText text={p} />
                </p>
              ))}
            </div>

            {s.formulas && s.formulas.length > 0 && (
              <div className="mt-6 rounded-2xl border p-4 sm:p-5" style={{ borderColor: `${color}50`, background: `${color}12` }}>
                <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase" style={{ color }}>
                  <Sigma className="size-4" /> À connaître par cœur
                </p>
                <ul className="grid gap-2">
                  {s.formulas.map((f) => (
                    <li key={f} className="font-mono text-[0.92rem] leading-relaxed text-mist-100">
                      <RichText text={f} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.keyPoints && s.keyPoints.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border bg-fg/[0.03] p-4 sm:p-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-mist-300 uppercase">
                  <ListChecks className="size-4" /> L’essentiel
                </p>
                <ul className="grid gap-2">
                  {s.keyPoints.map((k) => (
                    <li key={k} className="flex gap-2.5 text-sm leading-relaxed text-mist-300">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: color }} />
                      <span>
                        <RichText text={k} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.example && (
              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/[0.06] p-4 sm:p-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-amber-300 uppercase">
                  <Lightbulb className="size-4" /> Exemple · {s.example.title}
                </p>
                <ol className="grid gap-2">
                  {s.example.steps.map((st, k) => (
                    <li key={k} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[0.65rem] font-bold text-amber-200">
                        {k + 1}
                      </span>
                      <span>
                        <RichText text={st} />
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </Card>
        </motion.section>
      ))}
    </div>
  );
}
