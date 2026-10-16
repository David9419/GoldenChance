"use client";

import { useSyncExternalStore } from "react";
import type { SubjectId, Level } from "@/content/types";
import type { ISODate } from "./dates";

/* -------------------------------------------------------------------------- */
/*  Types des données enregistrées (dans le navigateur, localStorage)          */
/* -------------------------------------------------------------------------- */

export type Profile = {
  firstName: string;
  lastName: string;
  /** Photo de profil en data URL (redimensionnée à 320 px). */
  photo?: string;
  createdAt: string;
};

export type Holiday = { id: string; start: ISODate; end: ISODate; label: string };

export type Settings = {
  /** Premier jour de cours suivi (présences, programme). */
  startDate: ISODate;
  premiereStart: ISODate;
  premiereEnd: ISODate;
  bacFrancaisDate: ISODate;
  terminaleStart: ISODate;
  terminaleEnd: ISODate;
  holidays: Holiday[];
  /** Code parent (4 chiffres) pour justifier les absences, ajouter des notes… */
  parentPin: string;
  /** Durée du contrôle en minutes. */
  testMinutes: number;
};

export type Attempt = {
  id: string;
  chapterId: string;
  subject: SubjectId;
  level: Level;
  kind: "exercise" | "test";
  /** Note sur 20, arrondie au dixième. */
  score: number;
  correct: number;
  total: number;
  answers: number[];
  date: string;
  durationSec: number;
  /** Seule la 1re tentative compte dans la moyenne (les suivantes = entraînement). */
  official: boolean;
};

export type ManualGrade = {
  id: string;
  subject: SubjectId;
  level: Level;
  label: string;
  score: number;
  outOf: number;
  coef: number;
  date: ISODate;
  comment?: string;
};

export type AttendanceStatus = "present" | "retard" | "absent";

export type AttendanceRecord = {
  status: AttendanceStatus;
  at: string;
  by: "eleve" | "parent";
  justified?: boolean;
  reason?: string;
};

export type AppData = {
  version: 1;
  profile: Profile | null;
  settings: Settings;
  attempts: Attempt[];
  manualGrades: ManualGrade[];
  /** Clé = `${date}#${slot}` */
  attendance: Record<string, AttendanceRecord>;
  /** Séances de cours marquées comme « cours lu ». Clé = `${date}#${slot}` */
  lessonsDone: Record<string, string>;
};

export const DEFAULT_SETTINGS: Settings = {
  startDate: "2026-10-19",
  premiereStart: "2026-12-01",
  premiereEnd: "2027-07-02",
  bacFrancaisDate: "2027-06-14",
  terminaleStart: "2027-09-01",
  terminaleEnd: "2028-06-30",
  holidays: [
    { id: "h-armistice", start: "2026-11-11", end: "2026-11-11", label: "Armistice 1918" },
    { id: "h-noel", start: "2026-12-19", end: "2027-01-03", label: "Vacances de Noël" },
    { id: "h-paques", start: "2027-03-29", end: "2027-03-29", label: "Lundi de Pâques" },
    { id: "h-ascension", start: "2027-05-06", end: "2027-05-07", label: "Pont de l’Ascension" },
    { id: "h-pentecote", start: "2027-05-17", end: "2027-05-17", label: "Lundi de Pentecôte" },
  ],
  parentPin: "1234",
  testMinutes: 20,
};

const KEY = "capbac:v1";

function emptyData(): AppData {
  return {
    version: 1,
    profile: null,
    settings: DEFAULT_SETTINGS,
    attempts: [],
    manualGrades: [],
    attendance: {},
    lessonsDone: {},
  };
}

/* -------------------------------------------------------------------------- */
/*  Store minimal (useSyncExternalStore + localStorage)                        */
/* -------------------------------------------------------------------------- */

let state: AppData | null = null;
const listeners = new Set<() => void>();

function load(): AppData {
  if (state) return state;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as AppData;
      state = { ...emptyData(), ...parsed, settings: { ...DEFAULT_SETTINGS, ...parsed.settings } };
      return state;
    }
  } catch {
    /* stockage indisponible : on part de zéro */
  }
  state = emptyData();
  return state;
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* quota dépassé ou navigation privée */
  }
}

export function update(fn: (d: AppData) => AppData) {
  state = fn(load());
  persist();
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      state = null;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

/** Renvoie les données, ou `null` pendant le rendu serveur / l'hydratation. */
export function useData(): AppData | null {
  return useSyncExternalStore(
    subscribe,
    () => load(),
    () => null,
  );
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

/* -------------------------------------------------------------------------- */
/*  Actions                                                                    */
/* -------------------------------------------------------------------------- */

export const actions = {
  saveProfile(p: Omit<Profile, "createdAt"> & { createdAt?: string }) {
    update((d) => ({
      ...d,
      profile: { ...p, createdAt: p.createdAt ?? d.profile?.createdAt ?? new Date().toISOString() },
    }));
  },

  saveSettings(s: Partial<Settings>) {
    update((d) => ({ ...d, settings: { ...d.settings, ...s } }));
  },

  addAttempt(a: Omit<Attempt, "id" | "official" | "date">) {
    let saved: Attempt | null = null;
    update((d) => {
      const official = !d.attempts.some((x) => x.chapterId === a.chapterId && x.kind === a.kind);
      saved = { ...a, id: uid(), official, date: new Date().toISOString() };
      return { ...d, attempts: [...d.attempts, saved] };
    });
    return saved as unknown as Attempt;
  },

  deleteAttempt(id: string) {
    update((d) => {
      const target = d.attempts.find((a) => a.id === id);
      let attempts = d.attempts.filter((a) => a.id !== id);
      // Si on supprime la tentative officielle, la suivante devient officielle.
      if (target?.official) {
        const next = attempts.find((a) => a.chapterId === target.chapterId && a.kind === target.kind);
        if (next) attempts = attempts.map((a) => (a.id === next.id ? { ...a, official: true } : a));
      }
      return { ...d, attempts };
    });
  },

  addManualGrade(g: Omit<ManualGrade, "id">) {
    update((d) => ({ ...d, manualGrades: [...d.manualGrades, { ...g, id: uid() }] }));
  },

  deleteManualGrade(id: string) {
    update((d) => ({ ...d, manualGrades: d.manualGrades.filter((g) => g.id !== id) }));
  },

  setAttendance(key: string, rec: AttendanceRecord | null) {
    update((d) => {
      const attendance = { ...d.attendance };
      if (rec) attendance[key] = rec;
      else delete attendance[key];
      return { ...d, attendance };
    });
  },

  markLessonDone(key: string) {
    update((d) =>
      d.lessonsDone[key] ? d : { ...d, lessonsDone: { ...d.lessonsDone, [key]: new Date().toISOString() } },
    );
  },

  importData(json: string) {
    const parsed = JSON.parse(json) as AppData;
    if (parsed.version !== 1 || !parsed.settings) throw new Error("Fichier de sauvegarde invalide");
    update(() => ({ ...emptyData(), ...parsed, settings: { ...DEFAULT_SETTINGS, ...parsed.settings } }));
  },

  exportData(): string {
    return JSON.stringify(load(), null, 2);
  },

  reset() {
    update(() => emptyData());
  },
};
