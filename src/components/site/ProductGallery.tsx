"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export type Choice = { label: string; src: string; alt: string };

/**
 * Galerie « au choix » : grande photo + vignettes cliquables.
 * Défile toute seule ; un clic sur une vignette l'affiche et relance le minuteur.
 * La nouvelle photo apparaît par-dessus l'ancienne (pas d'effet « double image »).
 */
export function ProductGallery({
  choices,
  label = "Photos au choix",
  interval = 2800,
}: {
  choices: Choice[];
  label?: string;
  interval?: number;
}) {
  const [{ index, previous }, setState] = React.useState({
    index: 0,
    previous: -1,
  });
  const [cycle, setCycle] = React.useState(0);
  const count = choices.length;

  const show = React.useCallback(
    (next: number) =>
      setState(({ index: i }) =>
        next === i ? { index: i, previous: -1 } : { index: next, previous: i },
      ),
    [],
  );

  React.useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(
      () =>
        setState(({ index: i }) => ({ index: (i + 1) % count, previous: i })),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [count, interval, cycle]);

  return (
    <div className="flex flex-col gap-4">
      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[rgba(199,209,219,0.16)] bg-[#f7f7f7] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
      >
        {choices.map((choice, i) => {
          const active = i === index;
          const under = i === previous;
          return (
            <Image
              key={choice.src}
              src={choice.src}
              alt={choice.alt}
              fill
              quality={90}
              sizes="(min-width: 960px) 480px, 86vw"
              aria-hidden={!active || undefined}
              className={cn(
                "object-cover",
                active
                  ? "z-20 opacity-100 transition-opacity duration-700 ease-in-out"
                  : under
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0",
              )}
            />
          );
        })}
        <span className="absolute left-4 top-4 z-30 rounded-full bg-[rgba(5,8,16,0.82)] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-md">
          Au choix
        </span>
        <span
          aria-live="polite"
          className="absolute bottom-4 left-4 z-30 rounded-full bg-[rgba(5,8,16,0.82)] px-4 py-1.5 font-serif text-[1.05rem] italic text-silver-100 backdrop-blur-md"
        >
          {choices[index].label}
        </span>
      </div>

      <div
        className="grid grid-cols-5 gap-2.5"
        role="group"
        aria-label="Choisir un coloris"
      >
        {choices.map((choice, i) => (
          <button
            key={choice.src}
            type="button"
            onClick={() => {
              show(i);
              setCycle((c) => c + 1);
            }}
            aria-label={`Voir : ${choice.label}`}
            aria-pressed={i === index}
            className={cn(
              "relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[14px] border bg-[#f7f7f7] transition-[border-color,transform,opacity] duration-300 ease-lux hover:-translate-y-0.5",
              i === index
                ? "border-gold-300 opacity-100 shadow-[0_0_0_1px_rgba(224,192,127,0.6),0_8px_20px_rgba(201,162,91,0.25)]"
                : "border-[rgba(199,209,219,0.18)] opacity-60 hover:opacity-90",
            )}
          >
            <Image
              src={choice.src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/** Galerie à onglets : un onglet par catégorie de lot (ex. ensembles, chaussures). */
export function TabbedGallery({
  groups,
}: {
  groups: { title: string; choices: Choice[] }[];
}) {
  const [active, setActive] = React.useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div
        role="tablist"
        aria-label="Lots au choix"
        className="grid grid-cols-2 gap-1 rounded-full border border-[rgba(199,209,219,0.16)] bg-[rgba(5,8,16,0.5)] p-1"
      >
        {groups.map((group, i) => (
          <button
            key={group.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-2.5 text-[0.85rem] font-semibold transition-[background-color,color,box-shadow] duration-300 ease-lux",
              i === active
                ? "bg-[linear-gradient(135deg,#e0c07f,#c9a25b)] text-[#241a08] shadow-[0_6px_18px_rgba(201,162,91,0.3)]"
                : "text-silver-300 hover:text-gold-300",
            )}
          >
            {group.title}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <ProductGallery
          key={active}
          choices={groups[active].choices}
          label={groups[active].title}
        />
      </div>
    </div>
  );
}
