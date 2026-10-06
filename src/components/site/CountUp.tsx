"use client";

import * as React from "react";
import { animate, useInView } from "motion/react";

/** Chiffre qui défile 1, 2, 3… jusqu'à sa valeur quand il entre dans l'écran. */
export function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      // Rythme régulier pour bien voir chaque chiffre : 1, 2, 3… jusqu'à la valeur.
      duration: Math.min(2.4, 0.5 + value * 0.1),
      ease: [0.25, 0.1, 0.4, 1],
      onUpdate: (v) => setDisplay(Math.max(1, Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden data-count>
        {inView ? display : 0}
      </span>
    </span>
  );
}
