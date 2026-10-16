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

/**
 * Schéma ou graphique affiché dans le cours (dessiné en SVG par l'application).
 * - function : courbes de fonctions ; `expr` est une expression JavaScript en x
 *   (ex. "x*x - 2*x + 1", "Math.exp(x)", "1/x", "Math.sqrt(x)").
 * - bars : diagramme en barres (statistiques, données chiffrées).
 * - timeline : frise chronologique.
 * - flow : schéma en étapes reliées par des flèches (processus, méthode).
 * - table : tableau (conjugaison, propriétés, comparaison…).
 * - figures : chiffres clés mis en valeur.
 */
export type Figure =
  | {
      type: "function";
      title: string;
      caption?: string;
      xMin: number;
      xMax: number;
      yMin?: number;
      yMax?: number;
      curves: { expr: string; label: string }[];
      points?: { x: number; y: number; label?: string }[];
    }
  | { type: "bars"; title: string; caption?: string; unit?: string; data: { label: string; value: number }[] }
  | { type: "timeline"; title: string; caption?: string; events: { date: string; label: string }[] }
  | { type: "flow"; title: string; caption?: string; steps: { label: string; detail?: string }[] }
  | { type: "table"; title: string; caption?: string; headers: string[]; rows: string[][] }
  | { type: "figures"; title: string; caption?: string; items: { value: string; label: string }[] };

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
  /** Schéma / graphique illustrant la partie. */
  figure?: Figure;
  /** Exercice d'application de cette partie (3 questions), débloqué après la leçon. */
  practice?: Question[];
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
  /** Devoir à la maison : 4 questions. */
  homework?: Question[];
};
