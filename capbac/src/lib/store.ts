"use client";

import { useSyncExternalStore } from "react";
import type { SubjectId, Level } from "@/content/types";
import type { ISODate } from "./dates";

/* -------------------------------------------------------------------------- */
/*  Types des données enregistrées (dans le navigateur, localStorage)          */
/* -------------------------------------------------------------------------- */

export type Role = "eleve" | "prof" | "directeur";

export type Profile = {
  firstName: string;
  lastName: string;
  /** Photo de profil en data URL (redimensionnée à 320 px). */
  photo?: string;
  createdAt: string;
};

export type StaffAccount = { name: string; pin: string; photo?: string };

export type Holiday = { id: string; start: ISODate; end: ISODate; label: string };

export type Settings = {
  /** Premier jour de l'emploi du temps (semaine en cours). */
  startDate: ISODate;
  premiereStart: ISODate;
  premiereEnd: ISODate;
  bacFrancaisDate: ISODate;
  terminaleStart: ISODate;
  terminaleEnd: ISODate;
  holidays: Holiday[];
  /** (Ancien réglage, non utilisé : la durée d'un contrôle = son créneau.) */
  testMinutes: number;
  /** Premier jour possible pour un contrôle automatique (≥ 3 jours après l'ouverture du compte). */
  testsFrom?: ISODate;
  /** Délai avant la publication de la correction d'un contrôle (heures). */
  correctionDelayHours: number;
};

export type Attempt = {
  id: string;
  chapterId: string;
  subject: SubjectId;
  level: Level;
  kind: "exercise" | "test";
  /** Contexte de la note : "ex:<chapitre>", "ct:<chapitre>" ou "dv:<devoir>". */
  context: string;
  /** Note sur 20, arrondie au dixième. */
  score: number;
  correct: number;
  total: number;
  answers: number[];
  date: string;
  durationSec: number;
  /** Seule la 1re tentative compte dans la moyenne (les suivantes = entraînement). */
  official: boolean;
  /** Pour les contrôles : date de publication de la correction. */
  releaseAt?: string;
  assignmentId?: string;
  /** Nombre de sorties détectées (onglet quitté) avant de rendre la copie. */
  exits?: number;
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
  by?: Role;
};

/** Devoir ou contrôle ajouté par le professeur. */
export type Assignment = {
  id: string;
  kind: "devoir" | "controle";
  subject: SubjectId;
  level: Level;
  title: string;
  instructions: string;
  /** Jour du contrôle / date de rendu. */
  dueDate: ISODate;
  /** QCM d'un chapitre (si défini) sinon réponse rédigée. */
  chapterId?: string;
  coef: number;
  createdAt: string;
  /** Contrôle : créneau de l'emploi du temps remplacé (et le suivant si `long`). */
  slot?: number;
  long?: boolean;
};

export type Submission = {
  assignmentId: string;
  text?: string;
  attemptId?: string;
  submittedAt: string;
  grade?: number;
  outOf?: number;
  comment?: string;
  gradedAt?: string;
};

export type AttendanceStatus = "present" | "retard" | "absent";

export type AttendanceRecord = {
  status: AttendanceStatus;
  at: string;
  by: Role;
  justified?: boolean;
  reason?: string;
};

export type Activity = { id: string; at: string; type: "presence" | "exercice" | "controle" | "devoir" | "note" | "absence" | "systeme" | "alerte"; text: string };

export type AppData = {
  version: 2;
  profile: Profile | null;
  accounts: { prof: StaffAccount; directeur: StaffAccount };
  settings: Settings;
  attempts: Attempt[];
  manualGrades: ManualGrade[];
  assignments: Assignment[];
  submissions: Record<string, Submission>;
  /** Clé = `${date}#${slot}` */
  attendance: Record<string, AttendanceRecord>;
  /** Séances de cours marquées comme « cours lu ». Clé = `${date}#${slot}` */
  lessonsDone: Record<string, string>;
  activity: Activity[];
  /** Dernière consultation des notifications, par rôle. */
  seen: Partial<Record<Role, string>>;
  /** Rattrapages accordés par le prof : contexte → jour autorisé. */
  retakes: Record<string, ISODate>;
};

export const DEFAULT_SETTINGS: Settings = {
  startDate: "2026-10-12",
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
  testMinutes: 25,
  correctionDelayHours: 48,
};

export const DEFAULT_ACCOUNTS: AppData["accounts"] = {
  prof: { name: "Professeur", pin: "1111" },
  directeur: { name: "Direction", pin: "9999" },
};

const KEY = "capbac:v1";

function emptyData(): AppData {
  return {
    version: 2,
    profile: null,
    accounts: DEFAULT_ACCOUNTS,
    settings: DEFAULT_SETTINGS,
    attempts: [],
    manualGrades: [],
    assignments: [],
    submissions: {},
    attendance: {},
    lessonsDone: {},
    activity: [],
    seen: {},
    retakes: {},
  };
}

/** Met à niveau des données enregistrées par une version précédente. */
function migrate(raw: Partial<AppData> & Record<string, unknown>): AppData {
  const base = emptyData();
  const settings = { ...DEFAULT_SETTINGS, ...(raw.settings ?? {}) } as Settings & { parentPin?: string };
  delete settings.parentPin;
  if (!settings.testsFrom && raw.profile?.createdAt) {
    const d = new Date(raw.profile.createdAt);
    d.setDate(d.getDate() + 3);
    settings.testsFrom = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  const attempts = (raw.attempts ?? []).map((a) => ({
    ...a,
    context: a.context ?? `${a.kind === "test" ? "ct" : "ex"}:${a.chapterId}`,
  }));
  return {
    ...base,
    ...raw,
    version: 2,
    accounts: { ...DEFAULT_ACCOUNTS, ...(raw.accounts ?? {}) },
    settings,
    attempts,
    assignments: raw.assignments ?? [],
    submissions: raw.submissions ?? {},
    activity: raw.activity ?? [],
    seen: raw.seen ?? {},
    retakes: raw.retakes ?? {},
  } as AppData;
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
      state = migrate(JSON.parse(raw));
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
  // Synchronisation en direct entre onglets (élève / prof / direction).
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

function log(d: AppData, type: Activity["type"], text: string): Activity[] {
  return [{ id: uid(), at: new Date().toISOString(), type, text }, ...d.activity].slice(0, 300);
}

/* -------------------------------------------------------------------------- */
/*  Actions                                                                    */
/* -------------------------------------------------------------------------- */

export const actions = {
  saveProfile(p: Omit<Profile, "createdAt"> & { createdAt?: string }) {
    update((d) => {
      const createdAt = p.createdAt ?? d.profile?.createdAt ?? new Date().toISOString();
      // Premier contrôle possible : 3 jours après l'ouverture du compte.
      let testsFrom = d.settings.testsFrom;
      if (!testsFrom) {
        const t = new Date(createdAt);
        t.setDate(t.getDate() + 3);
        testsFrom = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
      }
      return { ...d, profile: { ...p, createdAt }, settings: { ...d.settings, testsFrom } };
    });
  },

  /** Sortie détectée pendant une évaluation (le travail recommence). */
  logExit(label: string) {
    update((d) => ({ ...d, activity: log(d, "alerte", `Sortie pendant ${label} : l’épreuve a recommencé`) }));
  },

  grantRetake(context: string, day: ISODate) {
    update((d) => ({ ...d, retakes: { ...d.retakes, [context]: day }, activity: log(d, "controle", "Rattrapage de contrôle autorisé") }));
  },

  saveAccount(role: "prof" | "directeur", acc: Partial<StaffAccount>) {
    update((d) => ({ ...d, accounts: { ...d.accounts, [role]: { ...d.accounts[role], ...acc } } }));
  },

  saveSettings(s: Partial<Settings>) {
    update((d) => ({ ...d, settings: { ...d.settings, ...s } }));
  },

  addAttempt(a: Omit<Attempt, "id" | "official" | "date" | "releaseAt">, label: string, delayed = a.kind === "test") {
    let saved: Attempt | null = null;
    update((d) => {
      const official = !d.attempts.some((x) => x.context === a.context);
      const releaseAt = delayed ? new Date(Date.now() + d.settings.correctionDelayHours * 3_600_000).toISOString() : undefined;
      saved = { ...a, id: uid(), official, date: new Date().toISOString(), releaseAt };
      const text = delayed
        ? `Contrôle rendu : ${label} (correction à venir)`
        : `${official ? "" : "Entraînement — "}${label} : ${String(a.score).replace(".", ",")}/20`;
      return { ...d, attempts: [...d.attempts, saved], activity: log(d, a.kind === "test" ? "controle" : "exercice", text) };
    });
    return saved as unknown as Attempt;
  },

  /** Publie tout de suite la correction d'un contrôle (prof / direction). */
  releaseAttempt(id: string) {
    update((d) => ({
      ...d,
      attempts: d.attempts.map((a) => (a.id === id ? { ...a, releaseAt: new Date().toISOString() } : a)),
      activity: log(d, "note", "Correction d’un contrôle publiée"),
    }));
  },

  deleteAttempt(id: string) {
    update((d) => {
      const target = d.attempts.find((a) => a.id === id);
      let attempts = d.attempts.filter((a) => a.id !== id);
      if (target?.official) {
        const next = attempts.find((a) => a.context === target.context);
        if (next) attempts = attempts.map((a) => (a.id === next.id ? { ...a, official: true } : a));
      }
      return { ...d, attempts };
    });
  },

  addManualGrade(g: Omit<ManualGrade, "id">) {
    update((d) => ({
      ...d,
      manualGrades: [...d.manualGrades, { ...g, id: uid() }],
      activity: log(d, "note", `Note ajoutée : ${g.label} — ${g.score}/${g.outOf}`),
    }));
  },

  deleteManualGrade(id: string) {
    update((d) => ({ ...d, manualGrades: d.manualGrades.filter((g) => g.id !== id) }));
  },

  addAssignment(a: Omit<Assignment, "id" | "createdAt">) {
    update((d) => ({
      ...d,
      assignments: [...d.assignments, { ...a, id: uid(), createdAt: new Date().toISOString() }],
      activity: log(d, "devoir", `${a.kind === "controle" ? "Contrôle" : "Devoir"} ajouté : ${a.title}`),
    }));
  },

  deleteAssignment(id: string) {
    update((d) => {
      const submissions = { ...d.submissions };
      delete submissions[id];
      return { ...d, assignments: d.assignments.filter((a) => a.id !== id), submissions };
    });
  },

  submitAssignment(s: Submission, title: string) {
    update((d) => ({
      ...d,
      submissions: { ...d.submissions, [s.assignmentId]: s },
      activity: log(d, "devoir", `Copie rendue : ${title}`),
    }));
  },

  gradeSubmission(assignmentId: string, grade: number, outOf: number, comment?: string) {
    update((d) => {
      const sub = d.submissions[assignmentId];
      if (!sub) return d;
      return {
        ...d,
        submissions: { ...d.submissions, [assignmentId]: { ...sub, grade, outOf, comment, gradedAt: new Date().toISOString() } },
        activity: log(d, "note", `Copie corrigée — ${grade}/${outOf}`),
      };
    });
  },

  setAttendance(key: string, rec: AttendanceRecord | null, label?: string) {
    update((d) => {
      const attendance = { ...d.attendance };
      if (rec) attendance[key] = rec;
      else delete attendance[key];
      const text = rec
        ? rec.by === "eleve"
          ? `${rec.status === "retard" ? "Arrivé en retard" : "Présent"}${label ? ` — ${label}` : ""}`
          : `Vie scolaire modifiée : ${rec.status === "present" ? "présent" : rec.status === "retard" ? "retard" : "absent"}${rec.justified ? " (justifié)" : ""}${label ? ` — ${label}` : ""}`
        : "Pointage réinitialisé";
      return { ...d, attendance, activity: log(d, rec?.status === "absent" ? "absence" : "presence", text) };
    });
  },

  markLessonDone(key: string) {
    update((d) =>
      d.lessonsDone[key] ? d : { ...d, lessonsDone: { ...d.lessonsDone, [key]: new Date().toISOString() } },
    );
  },

  markSeen(role: Role) {
    update((d) => ({ ...d, seen: { ...d.seen, [role]: new Date().toISOString() } }));
  },

  importData(json: string) {
    const parsed = JSON.parse(json);
    if (!parsed.settings) throw new Error("Fichier de sauvegarde invalide");
    update(() => migrate(parsed));
  },

  exportData(): string {
    return JSON.stringify(load(), null, 2);
  },

  reset() {
    update(() => emptyData());
  },
};
