"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Coffee, Palmtree, Printer, Sun } from "lucide-react";
import { PageHeader, StatusPill } from "@/components/app/common";
import { sessionHref } from "@/components/app/session-card";
import { SubjectIcon } from "@/components/app/subject-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getChapter } from "@/content";
import { LUNCH, SLOTS, weeklyHours } from "@/content/schedule";
import { LEVELS, SUBJECT_IDS, SUBJECTS } from "@/content/subjects";
import { defaultWeek, holidayOn, KIND_LABEL, levelAt, liveStatus, sessionsOn, type Session } from "@/lib/calendar";
import { addDays, formatHour, formatShort, formatWeekday, fromISO, toISO } from "@/lib/dates";
import { useData, type AppData } from "@/lib/store";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";

export default function TimetablePage() {
  const data = useData();
  const now = useNow();
  const today = toISO(now);
  // Semaine en cours jusqu'au samedi ; dès le dimanche, la semaine qui arrive.
  const [monday, setMonday] = useState(() => defaultWeek(today));
  const [dir, setDir] = useState(0);
  const [mobileDay, setMobileDay] = useState(() => {
    const dow = fromISO(today).getDay();
    return dow >= 1 && dow <= 5 ? dow - 1 : dow === 6 ? 4 : 0;
  });

  if (!data) return null;
  const s = data.settings;
  const days = Array.from({ length: 5 }, (_, i) => addDays(monday, i));
  const level = levelAt(days[0], s) ?? levelAt(days[4], s);
  const hours = weeklyHours();
  const total = Object.values(hours).reduce((a, b) => a + b, 0);

  const go = (n: number) => {
    setDir(n);
    setMonday(n === 0 ? defaultWeek(today) : addDays(monday, 7 * n));
  };

  return (
    <div>
      <PageHeader
        eyebrow={level ? `${LEVELS[level].name} · ${LEVELS[level].tagline}` : "Emploi du temps"}
        title="Emploi du temps"
        description={`Semaine type : lundi → jeudi 10h – 16h30 (pause 12h30 – 13h30), vendredi 10h – 12h30. ${formatHoursFr(total)} de cours par semaine.`}
        actions={
          <Button variant="secondary" size="sm" onClick={() => window.print()} className="no-print">
            <Printer /> Imprimer
          </Button>
        }
      />

      {/* Navigation de semaine */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <Button variant="secondary" size="icon" onClick={() => go(-1)} aria-label="Semaine précédente">
            <ChevronLeft />
          </Button>
          <Button variant="secondary" size="icon" onClick={() => go(1)} aria-label="Semaine suivante">
            <ChevronRight />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => go(0)}>
            Aujourd’hui
          </Button>
        </div>
        <p className="font-display text-sm font-semibold sm:text-base">
          Semaine du {formatShort(days[0])} au {formatShort(days[4])}
        </p>
      </div>

      {/* Grille (ordinateur / tablette) */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={monday}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.28 }}
        >
          <Card className="hidden overflow-hidden p-3 md:block">
            <div className="grid grid-cols-[64px_repeat(5,1fr)] gap-2">
              <div />
              {days.map((d) => {
                const isToday = d === today;
                return (
                  <div
                    key={d}
                    className={cn(
                      "rounded-xl px-3 py-2.5 text-center",
                      isToday ? "bg-brand-500/20 text-mist-100 ring-1 ring-brand-400/40" : "text-mist-300",
                    )}
                  >
                    <p className="text-xs font-bold tracking-wider uppercase">{formatWeekday(d)}</p>
                    <p className="font-display text-lg font-bold">{fromISO(d).getDate()}</p>
                  </div>
                );
              })}

              {[0, 1, "lunch", 2, 3].map((row) => {
                if (row === "lunch") {
                  return (
                    <div key="lunch" className="col-span-6 grid grid-cols-[64px_1fr] items-center gap-2">
                      <p className="text-right text-xs text-mist-500">{formatHour(LUNCH.start)}</p>
                      <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border py-2 text-xs font-semibold text-mist-500">
                        <Coffee className="size-3.5" /> Pause déjeuner · 12h30 – 13h30
                      </div>
                    </div>
                  );
                }
                const slot = row as number;
                return (
                  <Row key={slot} slot={slot} days={days} data={data} now={now} today={today} />
                );
              })}
            </div>
          </Card>

          {/* Liste par jour (mobile) */}
          <div className="md:hidden">
            <div className="mb-4 grid grid-cols-5 gap-1.5">
              {days.map((d, i) => (
                <button
                  key={d}
                  onClick={() => setMobileDay(i)}
                  className={cn(
                    "cursor-pointer rounded-xl border py-2 text-center transition-colors",
                    mobileDay === i ? "border-brand-400/50 bg-brand-500/20 text-mist-100" : "border-border bg-fg/[0.02] text-mist-500",
                    d === today && mobileDay !== i && "border-brand-400/30",
                  )}
                >
                  <p className="text-[0.65rem] font-bold uppercase">{formatWeekday(d)}</p>
                  <p className="font-display text-base font-bold">{fromISO(d).getDate()}</p>
                </button>
              ))}
            </div>
            <MobileDay date={days[mobileDay]} data={data} now={now} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Légende */}
      <Card className="mt-6 p-5">
        <p className="mb-4 text-xs font-bold tracking-wider text-mist-500 uppercase">Volume horaire hebdomadaire</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECT_IDS.map((id) => (
            <div key={id} className="flex items-center gap-3">
              <span className="size-3 rounded-full" style={{ background: SUBJECTS[id].color }} />
              <span className="flex-1 text-sm font-semibold">{SUBJECTS[id].name}</span>
              <span className="text-sm text-mist-500">{formatHoursFr(hours[id] ?? 0)}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Row({ slot, days, data, now, today }: { slot: number; days: string[]; data: AppData; now: Date; today: string }) {
  return (
    <>
      <div className="flex flex-col items-end justify-between py-1 pr-1 text-xs text-mist-500">
        <span>{formatHour(SLOTS[slot].start)}</span>
        <span>{formatHour(SLOTS[slot].end)}</span>
      </div>
      {days.map((d) => {
        const holiday = holidayOn(d, data.settings.holidays);
        const sess = sessionsOn(d, data.settings).find((x) => x.slot === slot);
        if (holiday) {
          return (
            <div key={d} className="flex min-h-[104px] flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-amber-400/25 bg-amber-500/[0.05] p-2 text-center">
              {slot === 0 && (
                <>
                  <Palmtree className="size-5 text-amber-300" />
                  <p className="text-[0.7rem] font-semibold text-amber-200">{holiday.label}</p>
                </>
              )}
            </div>
          );
        }
        if (!sess) {
          const dow = fromISO(d).getDay();
          return (
            <div key={d} className="flex min-h-[104px] items-center justify-center rounded-xl border border-dashed border-border text-xs text-mist-500">
              {dow === 5 && slot >= 2 ? (
                <span className="flex items-center gap-1.5">
                  <Sun className="size-3.5" /> Libre
                </span>
              ) : levelAt(d, data.settings) === null ? (
                "—"
              ) : null}
            </div>
          );
        }
        return <Cell key={d} s={sess} data={data} now={now} isToday={d === today} />;
      })}
    </>
  );
}

function Cell({ s, data, now, isToday }: { s: Session; data: AppData; now: Date; isToday: boolean }) {
  const meta = SUBJECTS[s.subject];
  const ref = s.chapterId ? getChapter(s.chapterId) : undefined;
  const { status, record } = liveStatus(s, data, now);
  return (
    <Link
      href={sessionHref(s)}
      className={cn(
        "group relative flex min-h-[104px] flex-col gap-1 overflow-hidden rounded-xl border p-2.5 transition-all hover:-translate-y-0.5 hover:shadow-xl",
        status === "en-cours" && "ring-2 ring-fg/60",
        !isToday && status !== "a-venir" && "opacity-80",
      )}
      style={{ background: `linear-gradient(160deg, ${meta.color}30, ${meta.color}10)`, borderColor: `${meta.color}40` }}
    >
      <span className="absolute inset-y-0 left-0 w-1" style={{ background: meta.color }} />
      <p className="flex items-center gap-1.5 text-[0.8rem] font-bold" style={{ color: meta.color }}>
        <SubjectIcon subject={s.subject} className="size-3.5" />
        {meta.short}
      </p>
      <p className="line-clamp-2 text-[0.72rem] leading-snug font-semibold text-mist-100">{ref ? ref.chapter.title : "Programme à venir"}</p>
      <div className="mt-auto flex items-center justify-between gap-1">
        <span className="flex items-center gap-1 text-[0.65rem] font-semibold text-mist-300">
          {s.test && <span className="rounded bg-amber-400 px-1 text-[0.6rem] font-bold text-amber-950">CONTRÔLE</span>}
          {KIND_LABEL[s.kind]}
        </span>
        {status !== "a-venir" && status !== "non-suivi" && <StatusPill status={status} justified={record?.justified} compact className="px-1.5 text-[0.6rem]" />}
      </div>
    </Link>
  );
}

function MobileDay({ date, data, now }: { date: string; data: AppData; now: Date }) {
  const holiday = holidayOn(date, data.settings.holidays);
  const list = sessionsOn(date, data.settings);
  if (holiday)
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-amber-400/25 py-12 text-center">
        <Palmtree className="size-8 text-amber-300" />
        <p className="font-semibold text-amber-200">{holiday.label}</p>
      </div>
    );
  if (!list.length) return <p className="py-12 text-center text-sm text-mist-500">Pas de cours ce jour-là.</p>;
  return (
    <div className="flex flex-col gap-2.5">
      {list.map((s, i) => (
        <div key={s.key}>
          {i === 2 && (
            <div className="mb-2.5 flex items-center gap-3 text-xs font-semibold text-mist-500">
              <span className="h-px flex-1 bg-border" /> <Coffee className="size-3.5" /> 12h30 – 13h30 <span className="h-px flex-1 bg-border" />
            </div>
          )}
          <div className="grid grid-cols-[52px_1fr] gap-2">
            <div className="pt-2 text-right text-xs text-mist-500">
              <p className="font-bold text-mist-300">{formatHour(s.start)}</p>
              <p>{formatHour(s.end)}</p>
            </div>
            <Cell s={s} data={data} now={now} isToday />
          </div>
        </div>
      ))}
      {fromISO(date).getDay() === 5 && (
        <p className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-dashed border-border py-4 text-sm text-mist-500">
          <Sun className="size-4" /> Après-midi libre
        </p>
      )}
    </div>
  );
}

function formatHoursFr(h: number) {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return `${hh}h${mm ? String(mm).padStart(2, "0") : ""}`;
}
