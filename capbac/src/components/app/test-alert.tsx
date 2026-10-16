"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { AlarmClock, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getChapter } from "@/content";
import { SUBJECTS } from "@/content/subjects";
import { testStatus, testTitle } from "@/lib/agenda";
import { allSessions, autoHomework, homeworkGiven } from "@/lib/calendar";
import { at, formatHour, toISO } from "@/lib/dates";
import type { AppData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

const NOTIFIED = "capbac:notified";

function notifyOnce(key: string, title: string, body: string) {
  try {
    const done: string[] = JSON.parse(window.localStorage.getItem(NOTIFIED) ?? "[]");
    if (done.includes(key)) return;
    window.localStorage.setItem(NOTIFIED, JSON.stringify([...done, key].slice(-200)));
    if ("Notification" in window && Notification.permission === "granted") new Notification(title, { body, icon: "/icon.svg" });
  } catch {
    /* notifications indisponibles */
  }
}

/** Bandeau « contrôle dans moins d'une heure » + notifications de l'ordinateur. */
export function TestAlert({ data }: { data: AppData }) {
  const now = useNow(15_000);
  const today = toISO(now);
  const next = allSessions(data).find((s) => {
    if (!s.test || s.date !== today) return false;
    const mins = (at(s.date, s.start).getTime() - now.getTime()) / 60_000;
    return mins <= 60 && at(s.date, s.end) > now && testStatus(s, data, now) === "a-faire";
  });

  useEffect(() => {
    if (next) {
      notifyOnce(`ct-${next.key}`, `Contrôle de ${SUBJECTS[next.subject].name} à ${formatHour(next.start)}`, `Dans moins d’une heure : ${testTitle(next)}`);
    }
    for (const h of autoHomework(data)) {
      if (h.givenDate === today && homeworkGiven(h, now, data.profile?.createdAt)) {
        notifyOnce(h.id, `Nouveau devoir de ${SUBJECTS[h.subject].name}`, `${getChapter(h.chapterId)?.chapter.title ?? ""} — à faire pour le ${h.dueDate.split("-").reverse().slice(0, 2).join("/")}`);
      }
    }
  }, [next, data, now, today]);

  const mins = next ? Math.ceil((at(next.date, next.start).getTime() - now.getTime()) / 60_000) : 0;
  return (
    <AnimatePresence>
      {next && (
        <motion.div key={next.key} initial={{ opacity: 0, y: -16, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
          <div className="flex flex-col gap-3 rounded-2xl border border-amber-400/50 bg-[linear-gradient(90deg,rgba(251,191,36,0.22),rgba(251,191,36,0.05))] p-4 sm:flex-row sm:items-center">
            <motion.span
              animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-amber-950"
            >
              <AlarmClock className="size-5" />
            </motion.span>
            <p className="flex-1 text-sm">
              <span className="font-bold">
                {mins > 0 ? `Contrôle de ${SUBJECTS[next.subject].name} dans ${mins} min` : `Contrôle de ${SUBJECTS[next.subject].name} : c’est maintenant !`}
              </span>
              <span className="block text-mist-300">
                {formatHour(next.start)} – {formatHour(next.end)} · {testTitle(next)}
              </span>
            </p>
            <Link href={`/seance/${next.date}/${next.slot}`} className="self-start rounded-xl bg-amber-400 px-4 py-2 text-sm font-bold text-amber-950 sm:self-center">
              {mins > 0 ? "Réviser / préparer" : "Ouvrir le contrôle"}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Demande l'autorisation d'envoyer des notifications sur l'ordinateur. */
export function canAskNotifications() {
  return typeof window !== "undefined" && "Notification" in window && Notification.permission === "default";
}

export function NotificationPrompt() {
  const [ask, setAsk] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setAsk(canAskNotifications()), 0);
    return () => window.clearTimeout(id);
  }, []);
  if (!ask) return null;
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
        <BellRing className="size-5" />
      </span>
      <p className="flex-1 text-sm text-mist-300">Active les alertes pour être prévenu 1 h avant chaque contrôle et quand un devoir est donné.</p>
      <Button size="sm" onClick={() => Notification.requestPermission().then(() => setAsk(false))}>
        Activer les alertes
      </Button>
    </motion.div>
  );
}
