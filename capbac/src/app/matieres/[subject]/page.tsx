"use client";

import Link from "next/link";
import { notFound, useParams, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, CalendarDays, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { EmptyState } from "@/components/app/common";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PROGRAMS } from "@/content";
import { LEVELS, SUBJECTS } from "@/content/subjects";
import type { Level, SubjectId } from "@/content/types";
import { useRole } from "@/lib/auth";
import { levelAt, levelRange, levelUnlocked, sessionsOfChapter } from "@/lib/calendar";
import { formatFull, formatShort, toISO } from "@/lib/dates";
import { chapterResults, fmtNote, noteTone, subjectAverages } from "@/lib/stats";
import { useData } from "@/lib/store";

export default function SubjectPage() {
  const { subject } = useParams<{ subject: SubjectId }>();
  const search = useSearchParams();
  const data = useData();
  const role = useRole();
  if (!SUBJECTS[subject]) notFound();
  if (!data) return null;
  const level = (search.get("niveau") as Level | null) ?? levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const meta = SUBJECTS[subject];
  const chapters = PROGRAMS[level]?.[subject] ?? [];
  const avg = subjectAverages(data, level)[subject];
  const today = toISO(new Date());

  return (
    <div className="flex flex-col gap-6">
      <Button asChild variant="ghost" size="sm" className="self-start">
        <Link href="/matieres">
          <ArrowLeft /> Toutes les matières
        </Link>
      </Button>
      <div className="relative overflow-hidden rounded-3xl border border-fg/10 p-6 sm:p-8" style={{ background: `linear-gradient(135deg, ${meta.color}33, var(--surface) 60%)` }}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <SubjectBadge subject={subject} size="lg" />
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: meta.color }}>
                {LEVELS[level].name}
              </p>
              <h1 className="font-display text-3xl font-bold">{meta.official[level]}</h1>
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <p className="text-[0.7rem] font-bold tracking-wider text-mist-500 uppercase">Moyenne</p>
              <p className={`font-display text-3xl font-bold ${noteTone(avg.avg)}`}>{fmtNote(avg.avg)}</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold tracking-wider text-mist-500 uppercase">Notes</p>
              <p className="font-display text-3xl font-bold">{avg.count}</p>
            </div>
          </div>
        </div>
      </div>

      {role === "eleve" && !levelUnlocked(level, data.settings) ? (
        <EmptyState icon={Lock} title={`Programme de ${LEVELS[level].name} verrouillé`} text={`Il s’ouvrira le ${formatFull(levelRange(level, data.settings)[0])}.`} />
      ) : !chapters.length ? (
        <EmptyState icon={Lock} title="Programme bientôt disponible" text="Les chapitres de ce niveau seront ajoutés avant la rentrée correspondante." />
      ) : (
        <div className="relative flex flex-col gap-3">
          <span className="absolute top-4 bottom-4 left-[27px] hidden w-px bg-border sm:block" />
          {chapters.map((c, i) => {
            const ex = chapterResults(data, c.id, "exercise");
            const ct = chapterResults(data, c.id, "test");
            const plan = sessionsOfChapter(c.id, data);
            const first = plan[0];
            const done = ex.count > 0;
            const isNow = plan.some((p) => p.date === today) || (first && first.date <= today && plan[plan.length - 1].date >= today);
            return (
              <motion.div key={c.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Link href={`/chapitre/${c.id}`} className="group flex items-center gap-4">
                  <span
                    className="relative z-10 hidden size-14 shrink-0 items-center justify-center rounded-2xl border font-display text-lg font-bold sm:flex"
                    style={done ? { background: meta.gradient, borderColor: "transparent", color: "white" } : { background: "#111427", borderColor: `${meta.color}40`, color: meta.color }}
                  >
                    {done ? <CheckCircle2 className="size-6" /> : i + 1}
                  </span>
                  <Card className="flex flex-1 flex-col gap-3 p-4 transition-all group-hover:-translate-y-0.5 group-hover:border-fg/20 sm:flex-row sm:items-center sm:p-5">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-mist-500 sm:hidden">Chapitre {i + 1}</span>
                        {isNow && <Badge>En ce moment</Badge>}
                        {first && (
                          <span className="flex items-center gap-1 text-xs text-mist-500">
                            <CalendarDays className="size-3" /> {formatShort(first.date)} → {formatShort(plan[plan.length - 1].date)}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-semibold group-hover:text-mist-100">{c.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-sm text-mist-500">{c.summary}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <Score label="Exercice" value={ex.official?.score ?? null} />
                      <Score label="Contrôle" value={ct.official?.score ?? null} />
                      <ChevronRight className="size-4 text-mist-500" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Score({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="text-center">
      <p className="text-[0.65rem] font-bold tracking-wider text-mist-500 uppercase">{label}</p>
      <p className={`font-display font-bold ${noteTone(value)}`}>{value === null ? "—" : `${fmtNote(value)}/20`}</p>
    </div>
  );
}
