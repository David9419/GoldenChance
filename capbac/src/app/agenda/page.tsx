"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CalendarCheck2, ChevronLeft, ChevronRight, ClipboardList, PenLine, Trophy } from "lucide-react";
import { AgendaRow } from "@/components/app/agenda-item";
import { EmptyState, PageHeader } from "@/components/app/common";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SUBJECTS } from "@/content/subjects";
import { agendaItems } from "@/lib/agenda";
import { holidayOn } from "@/lib/calendar";
import { addDays, formatLong, formatShort, formatWeekday, fromISO, mondayOf, toISO } from "@/lib/dates";
import { useData } from "@/lib/store";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";

const SPAN = 14;

export default function AgendaPage() {
  const data = useData();
  const now = useNow();
  const today = toISO(now);
  const [start, setStart] = useState(() => (fromISO(today).getDay() === 0 ? addDays(today, 1) : mondayOf(today)));
  const [selected, setSelected] = useState<string | null>(null);
  if (!data) return null;

  const end = addDays(start, SPAN - 1);
  const items = agendaItems(data, start, end, now);
  const days = Array.from({ length: SPAN }, (_, i) => addDays(start, i));
  const visibleDays = (selected ? [selected] : days).filter((d) => d >= start);
  const weekEnd = addDays(start, 6);
  const thisWeek = items.filter((i) => i.date <= weekEnd);
  const counts = {
    controle: thisWeek.filter((i) => i.type === "controle").length,
    exercice: thisWeek.filter((i) => i.type === "exercice").length,
    devoir: thisWeek.filter((i) => i.type === "devoir").length,
  };

  const dayLabel = (d: string) => (d === today ? "Aujourd’hui" : d === addDays(today, 1) ? "Demain" : formatLong(d));

  return (
    <div>
      <PageHeader
        eyebrow="Agenda"
        title="Ce qui t’attend"
        description="Contrôles, exercices notés et devoirs du professeur, jour par jour, pour t’organiser à l’avance."
        actions={
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Période précédente" onClick={() => (setStart(addDays(start, -7)), setSelected(null))}>
              <ChevronLeft />
            </Button>
            <Button variant="secondary" size="icon" aria-label="Période suivante" onClick={() => (setStart(addDays(start, 7)), setSelected(null))}>
              <ChevronRight />
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: "Contrôles", sub: "cette semaine", value: counts.controle, icon: Trophy, cls: "bg-amber-500/15 text-amber-300" },
          { label: "Exercices notés", sub: "cette semaine", value: counts.exercice, icon: ClipboardList, cls: "bg-brand-500/15 text-brand-300" },
          { label: "Devoirs", sub: "cette semaine", value: counts.devoir, icon: PenLine, cls: "bg-emerald-500/15 text-emerald-300" },
        ].map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
            <Card className="flex h-full flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
              <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", c.cls)}>
                <c.icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold">{c.value}</p>
                <p className="text-xs font-semibold text-mist-300 sm:text-sm">{c.label}</p>
                <p className="hidden text-xs text-mist-500 sm:block">{c.sub}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bande de jours */}
      <Card className="mt-6 p-3">
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d) => {
            const its = items.filter((i) => i.date === d);
            const weekend = [0, 6].includes(fromISO(d).getDay());
            const holiday = holidayOn(d, data.settings.holidays);
            return (
              <button
                key={d}
                onClick={() => setSelected(selected === d ? null : d)}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-1 rounded-xl border py-2 transition-all",
                  selected === d ? "border-brand-400/60 bg-brand-500/20" : d === today ? "border-brand-400/30 bg-fg/[0.04]" : "border-transparent hover:bg-fg/[0.04]",
                  (weekend || holiday) && "opacity-50",
                )}
              >
                <span className="text-[0.62rem] font-bold text-mist-500 uppercase">{formatWeekday(d)}</span>
                <span className="font-display text-base font-bold">{fromISO(d).getDate()}</span>
                <span className="flex h-2 gap-0.5">
                  {its.slice(0, 4).map((i) => (
                    <span key={i.id} className="size-1.5 rounded-full" style={{ background: i.type === "controle" ? "#fbbf24" : SUBJECTS[i.subject].color }} />
                  ))}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-xs text-mist-500">
          Du {formatShort(start)} au {formatShort(end)}
          {selected && (
            <button className="ml-2 cursor-pointer font-semibold text-brand-300 hover:underline" onClick={() => setSelected(null)}>
              Tout afficher
            </button>
          )}
        </p>
      </Card>

      <div className="mt-6 flex flex-col gap-6">
        {visibleDays.map((d) => {
          const its = items.filter((i) => i.date === d);
          if (!its.length) return selected ? <EmptyState key={d} icon={CalendarCheck2} title={dayLabel(d)} text="Rien de prévu ce jour-là. Profites-en pour relire tes cours !" /> : null;
          return (
            <section key={d}>
              <h2 className={cn("mb-3 flex items-center gap-2 font-display text-lg font-bold", d === today && "text-brand-300")}>
                {dayLabel(d)}
                {d < today && <span className="text-xs font-medium text-mist-500">(passé)</span>}
              </h2>
              <div className="flex flex-col gap-2">
                {its.map((i, k) => (
                  <AgendaRow key={i.id} item={i} index={k} />
                ))}
              </div>
            </section>
          );
        })}
        {!selected && items.length === 0 && <EmptyState icon={CalendarCheck2} title="Rien de prévu" text="Aucune évaluation sur cette période." />}
      </div>
    </div>
  );
}
