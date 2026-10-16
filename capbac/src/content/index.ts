import type { Chapter, Level, SubjectId } from "./types";

import { chapters as s_maths } from "./programmes/seconde/maths";
import { chapters as s_francais } from "./programmes/seconde/francais";
import { chapters as s_physique } from "./programmes/seconde/physique";
import { chapters as s_svt } from "./programmes/seconde/svt";
import { chapters as s_hg } from "./programmes/seconde/histoire-geo";
import { chapters as s_anglais } from "./programmes/seconde/anglais";
import { chapters as p_maths } from "./programmes/premiere/maths";
import { chapters as p_francais } from "./programmes/premiere/francais";
import { chapters as p_physique } from "./programmes/premiere/physique";
import { chapters as p_svt } from "./programmes/premiere/svt";
import { chapters as p_hg } from "./programmes/premiere/histoire-geo";
import { chapters as p_anglais } from "./programmes/premiere/anglais";

/** Programmes par niveau et par matière. La Terminale sera ajoutée pour la rentrée 2027. */
export const PROGRAMS: Record<Level, Record<SubjectId, Chapter[]>> = {
  seconde: {
    maths: s_maths,
    francais: s_francais,
    physique: s_physique,
    svt: s_svt,
    "histoire-geo": s_hg,
    anglais: s_anglais,
  },
  premiere: {
    maths: p_maths,
    francais: p_francais,
    physique: p_physique,
    svt: p_svt,
    "histoire-geo": p_hg,
    anglais: p_anglais,
  },
  terminale: {
    maths: [],
    francais: [],
    physique: [],
    svt: [],
    "histoire-geo": [],
    anglais: [],
  },
};

export type ChapterRef = {
  chapter: Chapter;
  level: Level;
  subject: SubjectId;
  /** Position dans le programme (0-based). */
  index: number;
};

const CHAPTER_INDEX = new Map<string, ChapterRef>();
for (const [level, bySubject] of Object.entries(PROGRAMS) as [Level, Record<SubjectId, Chapter[]>][]) {
  for (const [subject, chapters] of Object.entries(bySubject) as [SubjectId, Chapter[]][]) {
    chapters.forEach((chapter, index) => CHAPTER_INDEX.set(chapter.id, { chapter, level, subject, index }));
  }
}

export function getChapter(id: string): ChapterRef | undefined {
  return CHAPTER_INDEX.get(id);
}

export function allChapterIds(): string[] {
  return [...CHAPTER_INDEX.keys()];
}
