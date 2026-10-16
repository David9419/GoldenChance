"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { SubjectIcon } from "@/components/app/subject-icon";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROGRAMS } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import type { Level } from "@/content/types";
import { levelAt } from "@/lib/calendar";
import { toISO } from "@/lib/dates";
import { chapterResults, fmtNote, subjectAverages } from "@/lib/stats";
import { useData } from "@/lib/store";

export default function SubjectsPage() {
  const data = useData();
  const [level, setLevel] = useState<Level | null>(null);
  if (!data) return null;
  const current = level ?? levelAt(toISO(new Date()), data.settings) ?? "seconde";
  const avgs = subjectAverages(data, current);

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
                  {LEVELS[l].name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        }
      />
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
    </div>
  );
}
