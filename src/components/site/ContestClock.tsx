"use client";

import * as React from "react";

import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Phase = "upcoming" | "live" | "ended";

/* Horloge partagée : une seule minuterie pour tous les composants du concours. */
const listeners = new Set<() => void>();
let timer: number | undefined;
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === undefined)
    timer = window.setInterval(() => listeners.forEach((l) => l()), 1000);
  return () => {
    listeners.delete(listener);
    if (!listeners.size && timer !== undefined) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}
const nowInSeconds = () => Math.floor(Date.now() / 1000);

/** Seconde actuelle (null côté serveur, avant que le navigateur prenne le relais). */
function useNow() {
  return React.useSyncExternalStore(subscribe, nowInSeconds, () => null);
}

function phaseAt(now: number | null, startAt: string, endAt: string): Phase {
  if (now === null) return "upcoming";
  if (now < Date.parse(startAt) / 1000) return "upcoming";
  if (now < Date.parse(endAt) / 1000) return "live";
  return "ended";
}

type Dates = { startAt: string; endAt: string };

/** Badge : « Début jeudi … », puis « Concours en cours », puis « Concours terminé ». */
export function ContestStatus({
  startAt,
  endAt,
  startLabel,
  liveLabel,
  endedLabel,
}: Dates & { startLabel: string; liveLabel: string; endedLabel: string }) {
  const phase = phaseAt(useNow(), startAt, endAt);
  const label =
    phase === "live" ? liveLabel : phase === "ended" ? endedLabel : startLabel;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em]",
        phase === "ended"
          ? "border-[rgba(199,209,219,0.2)] bg-[rgba(199,209,219,0.08)] text-silver-300"
          : "border-[rgba(224,192,127,0.38)] bg-[rgba(201,162,91,0.12)] text-gold-300",
      )}
    >
      {phase !== "ended" && (
        <span aria-hidden className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-300 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-gold-400" />
        </span>
      )}
      {label}
    </span>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Compte à rebours de 15 jours : visible pendant le concours (jours, heures,
 * minutes, secondes). Avant : un message d'annonce. Après : participations closes.
 */
export function ContestCountdown({
  startAt,
  endAt,
  countdownLabel,
  upcomingNote,
  endedNote,
}: Dates & {
  countdownLabel: string;
  upcomingNote: string;
  endedNote: string;
}) {
  const now = useNow();
  const phase = phaseAt(now, startAt, endAt);

  if (phase !== "live" || now === null) {
    return (
      <p className="mt-6 flex gap-2.5 rounded-[18px] border border-[rgba(199,209,219,0.12)] bg-[rgba(5,8,16,0.35)] px-5 py-4 text-[0.92rem] leading-relaxed text-silver-300">
        <span aria-hidden className="text-gold-400">
          ✦
        </span>
        <span>{phase === "ended" ? endedNote : upcomingNote}</span>
      </p>
    );
  }

  const left = Math.max(0, Math.floor(Date.parse(endAt) / 1000) - now);
  const units = [
    { value: Math.floor(left / 86400), label: "Jours" },
    { value: Math.floor((left % 86400) / 3600), label: "Heures" },
    { value: Math.floor((left % 3600) / 60), label: "Min" },
    { value: left % 60, label: "Sec" },
  ];

  return (
    <div className="mt-6">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
        {countdownLabel}
      </p>
      <div
        className="mt-3 grid grid-cols-4 gap-2.5"
        role="timer"
        aria-label={`${units[0].value} jours, ${units[1].value} heures, ${units[2].value} minutes avant la fin du concours`}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center rounded-[16px] border border-[rgba(224,192,127,0.22)] bg-[linear-gradient(170deg,rgba(201,162,91,0.12),rgba(5,8,16,0.4))] px-2 py-3"
          >
            <span
              aria-hidden
              className="bg-[linear-gradient(170deg,#f6e2b3,#e0c07f_45%,#a8823f)] bg-clip-text font-serif text-[clamp(1.9rem,4vw,2.5rem)] font-medium leading-none text-transparent [font-variant-numeric:lining-nums_tabular-nums]"
            >
              {pad(unit.value)}
            </span>
            <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-silver-300">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Bouton « Participer » : désactivé automatiquement une fois le concours terminé. */
export function ParticipateButton({
  href,
  label,
  startAt,
  endAt,
}: Dates & { href: string; label: string }) {
  const phase = phaseAt(useNow(), startAt, endAt);
  if (phase === "ended") {
    return (
      <Button variant="ghost" disabled>
        Participations closes
      </Button>
    );
  }
  return (
    <Button asChild variant="gold">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={22} />
        {label}
      </a>
    </Button>
  );
}
