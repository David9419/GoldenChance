"use client";

import { AnimatePresence, motion } from "motion/react";
import { Wind } from "lucide-react";
import { BREAKS } from "@/content/schedule";
import { sessionsOn } from "@/lib/calendar";
import { at, formatHour, toISO } from "@/lib/dates";
import type { AppData } from "@/lib/store";
import { useNow } from "@/lib/use-now";

/** Pendant une pause entre deux cours : invitation à se lever et prendre l'air. */
export function PauseBanner({ data }: { data: AppData }) {
  const now = useNow(15_000);
  const today = toISO(now);
  const sessions = sessionsOn(today, data);
  const pause = BREAKS.find(
    (b) =>
      at(today, b.start) <= now &&
      now < at(today, b.end) &&
      sessions.some((s) => s.end <= b.start) &&
      sessions.some((s) => s.start >= b.end),
  );
  const mins = pause ? Math.ceil((at(today, pause.end).getTime() - now.getTime()) / 60_000) : 0;
  return (
    <AnimatePresence>
      {pause && (
        <motion.div key={pause.start} initial={{ opacity: 0, y: -16, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/40 bg-[linear-gradient(90deg,rgba(52,211,153,0.2),rgba(52,211,153,0.04))] p-4">
            <motion.span
              animate={{ x: [0, 6, 0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950"
            >
              <Wind className="size-5" />
            </motion.span>
            <p className="text-sm">
              <span className="font-bold">{pause.lunch ? "Bon appétit !" : "C’est la pause : lève-toi, bois de l’eau, prends l’air !"}</span>
              <span className="block text-mist-300">
                Reprise des cours à {formatHour(pause.end)} (dans {mins} min).
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
