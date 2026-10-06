"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { SiteImage } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SlideshowProps = {
  images: SiteImage[];
  /** Temps entre deux changements d'image (ms), fondu compris. */
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
  /** Zoom lent sur l'image affichée (photos d'ambiance). */
  zoom?: boolean;
  label?: string;
  className?: string;
  imageClassName?: string;
};

/**
 * Diaporama en fondu enchaîné infini.
 *
 * Photos (`cover`) : la nouvelle image apparaît PAR-DESSUS l'ancienne, qui reste
 * pleinement opaque dessous jusqu'à la fin du fondu — aucune transparence
 * intermédiaire, donc jamais d'effet « double image » avec le fond du site.
 * Packshots transparents (`contain`) : fondu croisé classique.
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
  zoom = fit === "cover",
  label,
  className,
  imageClassName,
}: SlideshowProps) {
  const [{ index, previous }, setState] = React.useState({ index: 0, previous: -1 });
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

  const go = React.useCallback(
    (step: number) =>
      setState(({ index: i }) => ({ index: (i + step + count) % count, previous: i })),
    [count],
  );

  React.useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(() => go(1), delay);
    return () => window.clearInterval(timer);
  }, [count, delay, cycle, go]);

  // Un clic sur une flèche change d'image et relance le minuteur.
  const step = (dir: number) => {
    go(dir);
    setCycle((c) => c + 1);
  };

  const layered = fit === "cover";

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ "--kb-duration": `${delay + fadeMs}ms` } as React.CSSProperties}
      {...(decorative
        ? { "aria-hidden": true }
        : {
            role: "region",
            "aria-roledescription": "carrousel",
            "aria-label": label,
          })}
    >
      {images.map((image, i) => {
        const active = i === index;
        const under = layered && i === previous;
        return (
          <Image
            key={image.src}
            src={image.src}
            alt={decorative ? "" : image.alt}
            fill
            sizes={sizes}
            quality={90}
            priority={priority && i === 0}
            aria-hidden={!active || undefined}
            className={cn(
              fit === "contain" ? "packshot" : "object-cover",
              active ? "z-20 opacity-100" : under ? "z-10 opacity-100" : "z-0 opacity-0",
              // Fondu uniquement sur l'image qui apparaît (et, en contain, celle qui part).
              (active || !layered) && "transition-opacity ease-in-out",
              zoom && (active || under) && "kenburns",
              imageClassName,
            )}
            style={{ transitionDuration: `${fadeMs}ms` }}
          />
        );
      })}

      {controls && count > 1 && (
        <>
          <Button
            type="button"
            variant="glassIcon"
            size="icon"
            aria-label="Photo précédente"
            onClick={() => step(-1)}
            className="absolute left-3.5 top-1/2 z-30 -translate-y-1/2"
          >
            <ChevronLeft className="size-5" strokeWidth={1.8} />
          </Button>
          <Button
            type="button"
            variant="glassIcon"
            size="icon"
            aria-label="Photo suivante"
            onClick={() => step(1)}
            className="absolute right-3.5 top-1/2 z-30 -translate-y-1/2"
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
