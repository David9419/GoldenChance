import type { SubjectId } from "./types";

/**
 * Emploi du temps (semaine type), repris du PDF fourni :
 *  - Lundi → Jeudi : 10h00–12h30 puis 13h30–16h30 (pause 12h30–13h30)
 *  - Vendredi : 10h00–12h30, après-midi libre
 *  - Total : 24h30 de cours par semaine
 *
 * Pour modifier la répartition des matières, change simplement `WEEK` ci-dessous.
 */

export type Slot = { start: string; end: string; period: "matin" | "apres-midi" };

export const SLOTS: Slot[] = [
  { start: "10:00", end: "11:15", period: "matin" },
  { start: "11:15", end: "12:30", period: "matin" },
  { start: "13:30", end: "15:00", period: "apres-midi" },
  { start: "15:00", end: "16:30", period: "apres-midi" },
];

export const LUNCH = { start: "12:30", end: "13:30" };

/** Index du jour JS (1 = lundi … 5 = vendredi) → matière de chaque créneau (null = libre). */
export const WEEK: Record<number, (SubjectId | null)[]> = {
  1: ["maths", "francais", "physique", "anglais"],
  2: ["francais", "histoire-geo", "svt", "maths"],
  3: ["maths", "physique", "histoire-geo", "anglais"],
  4: ["francais", "physique", "maths", "histoire-geo"],
  5: ["svt", "francais", null, null],
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
