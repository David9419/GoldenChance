"use client";

import * as React from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;

/** Apparition au scroll : fondu + légère montée (0,7 s), déclenchée à ~12 % visible. */
export function Reveal({ children, className, delay = 0, as = "div", ...rest }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </Comp>
  );
}
