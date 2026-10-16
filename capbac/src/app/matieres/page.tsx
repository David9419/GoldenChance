"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { SubjectIcon } from "@/components/app/subject-icon";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROGRAMS } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import type { Level } from "@/content/types";
import { useRole } from "@/lib/auth";
import { levelAt, levelRange, levelUnlocked } from "@/lib/calendar";
import { daysBetween, formatFull, toISO } from "@/lib/dates";
import { chapterResults, fmtNote, subjectAverages } from "@/lib/stats";
import { useData } from "@/lib/store";

export default function SubjectsPage() {
  const data = useData();
  const role = useRole();
  const [level, setLevel] = useState<Level | null>(null);
  if (!data) return null;
  const current = level ?? levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const avgs = subjectAverages(data, current);
  const isLocked = (l: Level) => role === "eleve" && !levelUnlocked(l, data.settings);
  const locked = isLocked(current);

  return (
    <div>
      <PageHeader
        eyebrow="Matières & cours"
        title="Toutes mes matières"
        description="Chaque matière contient le programme complet : cours, exercices notés et contrôles, chapitre par chapitre."
        actions={
          <Tabs value={current} onValueChange={(v) => setLevel(v as Level)}>
            <TabsList>
              {(["seconde", "premiere", "terminale"] as Level[]).map((l) => (
                <TabsTrigger key={l} value={l}>
                  {isLocked(l) && <Lock />}
                  {LEVELS[l].name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        }
      />
      {locked ? (
        <LockedLevel level={current} from={levelRange(current, data.settings)[0]} />
      ) : (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SUBJECT_IDS.map((id, i) => {
          const meta = SUBJECTS[id];
          const chapters = PROGRAMS[current][id];
          const done = chapters.filter((c) => chapterResults(data, c.id, "exercise").count > 0).length;
          return (
            <motion.div key={`${current}-${id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.45 }}>
              <Link
                href={`/matieres/${id}?niveau=${current}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-fg/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
                style={{ background: `linear-gradient(150deg, ${meta.color}2e, var(--surface) 60%)` }}
              >
                <SubjectIcon
                  subject={id}
                  className="absolute -right-6 -bottom-6 size-36 opacity-[0.07] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ color: meta.color }}
                />
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: meta.gradient }}>
                    <SubjectIcon subject={id} className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-mist-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mist-100" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold">{meta.name}</h2>
                <p className="text-sm text-mist-500">{meta.official[current]}</p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-wider text-mist-500 uppercase">Moyenne</p>
                    <p className="font-display text-2xl font-bold">{fmtNote(avgs[id].avg)}</p>
                  </div>
                  <p className="text-sm text-mist-300">{chapters.length ? `${chapters.length} chapitres` : "Bientôt disponible"}</p>
                </div>
                <Progress value={chapters.length ? (done / chapters.length) * 100 : 0} className="mt-3 h-1.5" indicatorStyle={{ background: meta.gradient }} />
              </Link>
            </motion.div>
          );
        })}
      </div>
      )}
    </div>
  );
}

function LockedLevel({ level, from }: { level: Level; from: string }) {
  const days = daysBetween(toISO(new Date()), from);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass flex flex-col items-center gap-4 rounded-3xl px-6 py-14 text-center">
      <motion.span
        animate={{ rotate: [0, -8, 8, -4, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
        className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#818cf8,#c026d3)] text-white shadow-xl"
      >
        <Lock className="size-7" />
      </motion.span>
      <h2 className="font-display text-2xl font-bold">Programme de {LEVELS[level].name} verrouillé</h2>
      <p className="max-w-md text-mist-300">
        Il s’ouvrira automatiquement le <strong>{formatFull(from)}</strong>
        {days > 0 && <> — dans {days} jour{days > 1 ? "s" : ""}</>}. D’ici là, concentre-toi sur ton programme actuel : chaque chapitre réussi te prépare pour la suite.
      </p>
    </motion.div>
  );
}
