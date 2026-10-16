"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BookMarked, Check, Feather, Flag, GraduationCap, Rocket } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { SubjectBadge } from "@/components/app/subject-icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PROGRAMS } from "@/content";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import type { Level } from "@/content/types";
import { allSessions, levelRange } from "@/lib/calendar";
import { daysBetween, formatFull, toISO } from "@/lib/dates";
import { useData } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function JourneyPage() {
  const data = useData();
  if (!data) return null;
  const s = data.settings;
  const today = toISO(new Date());
  const sessions = allSessions(data);

  const steps = [
    { id: "seconde", icon: Rocket, title: "Remise à niveau de Seconde", date: s.startDate, end: s.premiereStart, text: `Rentrée en douceur : ${s.rampUpDays} premiers jours sans contrôle ni devoir. Ensuite ${s.testsPerWeek} contrôles par semaine et 1 à 2 devoirs chaque soir, pour reprendre toutes les bases des 6 matières.` },
    { id: "premiere", icon: BookMarked, title: "Première générale", date: s.premiereStart, end: s.bacFrancaisDate, text: "Programme de Première en maths, physique-chimie, SVT, histoire-géo, anglais et français." },
    { id: "bac", icon: Feather, title: "Bac de français", date: s.bacFrancaisDate, end: s.terminaleStart, text: "Épreuves anticipées : écrit de 4 h (commentaire ou dissertation) et oral. Date exacte à confirmer selon le calendrier officiel." },
    { id: "terminale", icon: GraduationCap, title: "Terminale", date: s.terminaleStart, end: s.terminaleEnd, text: "Dernière ligne droite vers le baccalauréat. Le programme sera ajouté avant la rentrée 2027." },
  ];

  return (
    <div>
      <PageHeader eyebrow="Mon parcours" title="De la Seconde au bac" description="Toutes les grandes étapes de ton parcours, et l’avancement de chaque programme." />

      <div className="relative">
        <span className="absolute top-6 bottom-6 left-[23px] w-0.5 bg-gradient-to-b from-brand-400 via-pink-400 to-cyan-400 opacity-40" />
        <div className="flex flex-col gap-4">
          {steps.map((st, i) => {
            const done = today >= st.end;
            const active = today >= st.date && today < st.end;
            const days = daysBetween(today, st.date);
            const progress = active ? (daysBetween(st.date, today) / Math.max(1, daysBetween(st.date, st.end))) * 100 : done ? 100 : 0;
            return (
              <motion.div key={st.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex gap-4">
                <span
                  className={cn(
                    "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border",
                    done ? "border-transparent bg-emerald-500 text-emerald-950" : active ? "border-transparent bg-brand-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)]" : "border-border bg-ink-850 text-mist-500",
                  )}
                >
                  {done ? <Check className="size-5" /> : <st.icon className="size-5" />}
                </span>
                <Card className={cn("flex-1 p-5", active && "border-brand-400/40")}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-lg font-bold">{st.title}</h2>
                    {active && <Badge>En cours</Badge>}
                    {done && <Badge variant="success">Terminé</Badge>}
                    {!active && !done && days > 0 && <Badge variant="outline">Dans {days} jours</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-mist-500">À partir du {formatFull(st.date)}</p>
                  <p className="mt-2 text-sm text-mist-300">{st.text}</p>
                  {active && <Progress value={progress} className="mt-4" />}
                </Card>
              </motion.div>
            );
          })}
          <div className="flex gap-4">
            <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fbbf24,#f472b6)] text-white">
              <Flag className="size-5" />
            </span>
            <p className="self-center font-display text-lg font-bold text-gradient">Le baccalauréat !</p>
          </div>
        </div>
      </div>

      {(["seconde", "premiere"] as Level[]).map((level) => {
        const [from, to] = levelRange(level, s);
        return (
          <section key={level} className="mt-12">
            <h2 className="font-display text-2xl font-bold">Programme de {LEVELS[level].name}</h2>
            <p className="mt-1 text-sm text-mist-500">
              Du {formatFull(from)} au {formatFull(to)}
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {SUBJECT_IDS.map((id) => {
                const chapters = PROGRAMS[level][id];
                const subjSessions = sessions.filter((x) => x.level === level && x.subject === id);
                const past = subjSessions.filter((x) => x.date <= today).length;
                return (
                  <Card key={id} className="p-5">
                    <div className="flex items-center gap-3">
                      <SubjectBadge subject={id} size="sm" />
                      <div>
                        <p className="font-semibold">{SUBJECTS[id].official[level]}</p>
                        <p className="text-xs text-mist-500">
                          {subjSessions.length} séances · {chapters.length} chapitres
                        </p>
                      </div>
                    </div>
                    <Progress value={subjSessions.length ? (past / subjSessions.length) * 100 : 0} className="mt-4 h-1.5" indicatorStyle={{ background: SUBJECTS[id].gradient }} />
                    <ol className="mt-4 grid gap-1.5">
                      {chapters.map((c, i) => (
                        <li key={c.id}>
                          <Link href={`/chapitre/${c.id}`} className="flex gap-2 text-sm text-mist-300 hover:text-mist-100">
                            <span className="w-4 shrink-0 text-right font-bold text-mist-500">{i + 1}</span>
                            <span className="line-clamp-1">{c.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
