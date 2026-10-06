"use client";

import * as React from "react";
import { motion, type TargetAndTransition } from "motion/react";

/** Point de départ de chaque effet d'apparition. */
const FROM: Record<string, TargetAndTransition> = {
  /** Monte depuis le bas, en sortant du flou. */
  up: { opacity: 0, y: 46, filter: "blur(12px)" },
  /** Glisse depuis la gauche, en sortant du flou. */
  left: { opacity: 0, x: -110, filter: "blur(12px)" },
  /** Glisse depuis la droite, en sortant du flou. */
  right: { opacity: 0, x: 110, filter: "blur(12px)" },
  /** Fondu + flou seulement. */
  fade: { opacity: 0, filter: "blur(16px)" },
  /** Pour les images : léger zoom arrière en sortant du flou. */
  zoom: { opacity: 0, scale: 1.12, filter: "blur(18px)" },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Effet : du bas (défaut), de la gauche, de la droite, fondu ou zoom (images). */
  from?: keyof typeof FROM;
  as?: "div" | "section" | "li" | "article";
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;

/**
 * Apparition au scroll : fondu + flou + glissement, à chaque arrivée du bloc
 * dans l'écran. Le flou est retiré complètement à la fin (`filter: none`),
 * sinon il casserait l'effet verre dépoli (backdrop-filter) des panneaux.
 */
export function Reveal({ children, className, delay = 0, from = "up", as = "div", ...rest }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={FROM[from]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transitionEnd: { filter: "none" },
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: from === "zoom" ? 1.4 : 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </Comp>
  );
}
