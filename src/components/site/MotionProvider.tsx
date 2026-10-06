"use client";

import { MotionConfig } from "motion/react";

/**
 * Animations toujours actives, même si l'appareil a « Réduire les animations »
 * (choix de David : les animations font partie de l'identité du site).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
