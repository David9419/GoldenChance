"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { SiteImage } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SlideshowProps = {
  images: SiteImage[];
  /** Temps d'affichage de chaque image (ms). */
  interval: number;
  /** Durée du fondu enchaîné (ms). */
  fade: number;
  sizes: string;
  /** `contain` pour les packshots transparents, `cover` pour les photos. */
  fit?: "cover" | "contain";
  /** Affiche les flèches précédent / suivant. */
  controls?: boolean;
  /** Décoratif : masqué aux lecteurs d'écran. */
  decorative?: boolean;
  priority?: boolean;
  label?: string;
  className?: string;
  imageClassName?: string;
};

/**
 * Diaporama en fondu enchaîné infini : images empilées, une seule visible.
 * En prefers-reduced-motion, il continue de tourner, 2,2× plus lentement.
 */
export function Slideshow({
  images,
  interval,
  fade,
  sizes,
  fit = "cover",
  controls = false,
  decorative = false,
  priority = false,
  label,
  className,
  imageClassName,
}: SlideshowProps) {
  const [index, setIndex] = React.useState(0);
  const [cycle, setCycle] = React.useState(0);
  const [slow, setSlow] = React.useState(false);
  const count = images.length;

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSlow(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const delay = slow ? interval * 2.2 : interval;
  const fadeMs = slow ? fade * 2.2 : fade;

  React.useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), delay);
    return () => window.clearInterval(timer);
  }, [count, delay, cycle]);

  // Un clic sur une flèche change d'image et relance le minuteur.
  const go = (step: number) => {
    setIndex((i) => (i + step + count) % count);
    setCycle((c) => c + 1);
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "region", "aria-roledescription": "carrousel", "aria-label": label })}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={decorative ? "" : image.alt}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          aria-hidden={i !== index || undefined}
          className={cn(
            "transition-opacity ease-in-out",
            fit === "contain" ? "packshot" : "object-cover",
            i === index ? "opacity-100" : "opacity-0",
            imageClassName
          )}
          style={{ transitionDuration: `${fadeMs}ms` }}
        />
      ))}

      {controls && count > 1 && (
        <>
          <Button
            type="button"
            variant="glassIcon"
            size="icon"
            aria-label="Photo précédente"
            onClick={() => go(-1)}
            className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2"
          >
            <ChevronLeft className="size-5" strokeWidth={1.8} />
          </Button>
          <Button
            type="button"
            variant="glassIcon"
            size="icon"
            aria-label="Photo suivante"
            onClick={() => go(1)}
            className="absolute right-3.5 top-1/2 z-10 -translate-y-1/2"
          >
            <ChevronRight className="size-5" strokeWidth={1.8} />
          </Button>
          <p className="sr-only" aria-live="polite">
            {`Image ${index + 1} sur ${count} : ${images[index].alt}`}
          </p>
        </>
      )}
    </div>
  );
}
