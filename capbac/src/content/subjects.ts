import type { Level, SubjectId } from "./types";

export type SubjectMeta = {
  id: SubjectId;
  name: string;
  short: string;
  /** Couleur principale (hex). */
  color: string;
  /** Dégradé utilisé sur les cartes. */
  gradient: string;
  /** Nom de l'icône lucide (voir components/app/subject-icon.tsx). */
  icon: "sigma" | "feather" | "atom" | "leaf" | "landmark" | "languages";
  /** Intitulé officiel selon le niveau. */
  official: Record<Level, string>;
};

export const SUBJECTS: Record<SubjectId, SubjectMeta> = {
  maths: {
    id: "maths",
    name: "Mathématiques",
    short: "Maths",
    color: "#4f8cff",
    gradient: "linear-gradient(135deg,#60a5fa,#4f46e5)",
    icon: "sigma",
    official: {
      seconde: "Mathématiques",
      premiere: "Spécialité Mathématiques",
      terminale: "Spécialité Mathématiques",
    },
  },
  francais: {
    id: "francais",
    name: "Français",
    short: "Français",
    color: "#f472b6",
    gradient: "linear-gradient(135deg,#f9a8d4,#db2777)",
    icon: "feather",
    official: {
      seconde: "Français",
      premiere: "Français — Bac de français",
      terminale: "Philosophie",
    },
  },
  physique: {
    id: "physique",
    name: "Physique-Chimie",
    short: "Physique",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg,#c4b5fd,#7c3aed)",
    icon: "atom",
    official: {
      seconde: "Physique-Chimie",
      premiere: "Spécialité Physique-Chimie",
      terminale: "Spécialité Physique-Chimie",
    },
  },
  svt: {
    id: "svt",
    name: "SVT",
    short: "SVT",
    color: "#34d399",
    gradient: "linear-gradient(135deg,#6ee7b7,#059669)",
    icon: "leaf",
    official: {
      seconde: "Sciences de la vie et de la Terre",
      premiere: "Spécialité SVT",
      terminale: "Spécialité SVT",
    },
  },
  "histoire-geo": {
    id: "histoire-geo",
    name: "Histoire-Géographie",
    short: "Histoire-Géo",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg,#fde68a,#d97706)",
    icon: "landmark",
    official: {
      seconde: "Histoire-Géographie",
      premiere: "Histoire-Géographie",
      terminale: "Histoire-Géographie",
    },
  },
  anglais: {
    id: "anglais",
    name: "Anglais",
    short: "Anglais",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg,#67e8f9,#0891b2)",
    icon: "languages",
    official: {
      seconde: "Anglais (LVA)",
      premiere: "Anglais (LVA)",
      terminale: "Anglais (LVA)",
    },
  },
};

export const SUBJECT_IDS = Object.keys(SUBJECTS) as SubjectId[];

export const LEVELS: Record<Level, { name: string; short: string; tagline: string }> = {
  seconde: { name: "Seconde", short: "2nde", tagline: "Remise à niveau" },
  premiere: { name: "Première", short: "1re", tagline: "Année du bac de français" },
  terminale: { name: "Terminale", short: "Tle", tagline: "Année du bac" },
};
