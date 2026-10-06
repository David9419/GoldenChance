"use client";

import { MotionConfig } from "motion/react";

/** Respecte prefers-reduced-motion : pas de déplacement, fondus conservés. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
