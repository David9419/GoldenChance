import type { SubjectId } from "./types";

/**
 * Emploi du temps (semaine type), repris du PDF fourni, avec de petites pauses :
 *  - Lundi → Jeudi : 10h00–12h30 puis 13h30–16h30 (déjeuner 12h30–13h30)
 *    5 cours par jour et 3 petites pauses de 10 min pour prendre l'air.
 *  - Vendredi : 10h00–12h30 (2 cours, 1 petite pause), après-midi libre.
 *
 * Pour modifier la répartition des matières, change simplement `WEEK` ci-dessous.
 */

export type Slot = { start: string; end: string; period: "matin" | "apres-midi" };

export const SLOTS: Slot[] = [
  { start: "10:00", end: "11:10", period: "matin" },
  { start: "11:20", end: "12:30", period: "matin" },
  { start: "13:30", end: "14:25", period: "apres-midi" },
  { start: "14:35", end: "15:30", period: "apres-midi" },
  { start: "15:40", end: "16:30", period: "apres-midi" },
];

export type Break = { start: string; end: string; label: string; lunch?: boolean };

export const BREAKS: Break[] = [
  { start: "11:10", end: "11:20", label: "Petite pause" },
  { start: "12:30", end: "13:30", label: "Pause déjeuner", lunch: true },
  { start: "14:25", end: "14:35", label: "Petite pause" },
  { start: "15:30", end: "15:40", label: "Petite pause" },
];

/** Compatibilité : la pause déjeuner. */
export const LUNCH = BREAKS.find((b) => b.lunch)!;

/** Pause qui suit un créneau (s'il y a un cours après). */
export function breakAfter(slot: number): Break | undefined {
  return BREAKS.find((b) => b.start === SLOTS[slot]?.end);
}

/** Index du jour JS (1 = lundi … 5 = vendredi) → matière de chaque créneau (null = libre). */
export const WEEK: Record<number, (SubjectId | null)[]> = {
  1: ["maths", "francais", "physique", "anglais", "histoire-geo"],
  2: ["francais", "histoire-geo", "svt", "maths", "anglais"],
  3: ["maths", "physique", "histoire-geo", "francais", "svt"],
  4: ["francais", "physique", "maths", "anglais", "histoire-geo"],
  5: ["svt", "maths", null, null, null],
};

export const DAY_NAMES = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

/** Heures de cours par semaine pour chaque matière (calculé). */
export function weeklyHours(): Record<SubjectId, number> {
  const out = {} as Record<SubjectId, number>;
  for (const day of Object.values(WEEK)) {
    day.forEach((s, i) => {
      if (!s) return;
      const slot = SLOTS[i];
      const mins = toMinutes(slot.end) - toMinutes(slot.start);
      out[s] = (out[s] ?? 0) + mins / 60;
    });
  }
  return out;
}

export function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}
