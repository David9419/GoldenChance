/**
 * Schéma du contenu pédagogique de CapBac.
 * Tous les programmes (Seconde, Première…) suivent ce format.
 */

export type Level = "seconde" | "premiere" | "terminale";

export type SubjectId =
  | "maths"
  | "francais"
  | "physique"
  | "svt"
  | "histoire-geo"
  | "anglais";

/** Question à choix multiple (une seule bonne réponse). */
export type Question = {
  /** Identifiant unique et stable, ex. "2nde-maths-01-ex-3". */
  id: string;
  /** Énoncé. Le markup **gras** est autorisé. */
  prompt: string;
  /** 2 à 4 propositions. */
  choices: string[];
  /** Index (0-based) de la bonne réponse dans `choices`. */
  answer: number;
  /** Correction détaillée affichée après validation. */
  explanation: string;
};

export type CourseSection = {
  title: string;
  /** Paragraphes du cours. Le markup **gras** est autorisé. */
  body: string[];
  /** Points clés / définitions / propriétés à retenir. */
  keyPoints?: string[];
  /** Formules ou règles encadrées (texte unicode : x², √, ≤, π, →…). */
  formulas?: string[];
  /** Exemple corrigé ou exemple d'application. */
  example?: { title: string; steps: string[] };
};

export type Chapter = {
  /** Identifiant unique, ex. "2nde-maths-01". */
  id: string;
  title: string;
  /** Une phrase qui résume le chapitre. */
  summary: string;
  /** 3 à 5 objectifs « Je sais… ». */
  objectives: string[];
  /** 3 sections de cours. */
  sections: CourseSection[];
  /** Exercice noté : 6 questions. */
  exercise: Question[];
  /** Contrôle noté : 8 questions, plus exigeantes. */
  test: Question[];
};
