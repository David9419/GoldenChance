"use client";

import { Fragment } from "react";
import { motion } from "motion/react";

/** Titre qui apparaît mot par mot (montée depuis un masque) à l'entrée dans l'écran. */
export function AnimatedWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.07, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="word-mask-static">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "105%", opacity: 0, filter: "blur(8px)" },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                    transitionEnd: { filter: "none" },
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </motion.span>
    </>
  );
}
