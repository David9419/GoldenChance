"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { BellRing } from "lucide-react";
import { SUBJECTS } from "@/content/subjects";
import { canCheckIn, liveStatus, sessionsOn } from "@/lib/calendar";
import { formatHour, toISO } from "@/lib/dates";
import type { AppData } from "@/lib/store";
import { useNow } from "@/lib/use-now";
import { CheckInButton, sessionHref } from "./session-card";

/** Bandeau global : rappelle de pointer sa présence quand un cours commence. */
export function CheckInBanner({ data }: { data: AppData }) {
  const now = useNow(20_000);
  const pathname = usePathname();
  const pending = pathname === "/" ? undefined : sessionsOn(toISO(now), data.settings).find((s) => {
    const st = liveStatus(s, data, now).status;
    return (st === "a-venir" || st === "en-cours") && canCheckIn(s, now);
  });
  return (
    <AnimatePresence>
      {pending && (
        <motion.div
          key={pending.key}
          initial={{ opacity: 0, y: -16, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -16, height: 0 }}
          className="mb-6 overflow-hidden"
        >
          <div
            className="flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center"
            style={{ borderColor: `${SUBJECTS[pending.subject].color}66`, background: `linear-gradient(90deg, ${SUBJECTS[pending.subject].color}26, transparent)` }}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <BellRing className="size-5 animate-[wiggle_1.2s_ease-in-out_infinite]" />
            </span>
            <p className="flex-1 text-sm">
              <span className="font-semibold">
                {SUBJECTS[pending.subject].name} · {formatHour(pending.start)} – {formatHour(pending.end)}
              </span>
              <span className="block text-mist-300">
                N’oublie pas de pointer ta présence. Sans pointage, le cours sera compté absent à {formatHour(pending.end)}.
              </span>
            </p>
            <div className="flex gap-2">
              <CheckInButton session={pending} data={data} now={now} />
              <Link href={sessionHref(pending)} className="self-center text-sm font-semibold text-brand-300 hover:underline">
                Ouvrir le cours
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
