import type { CSSProperties } from "react";

import { hero, heroSlides, links } from "@/content/site";
import { Logo } from "@/components/site/Logo";
import { SmartLink } from "@/components/site/PageTransition";
import { Slideshow } from "@/components/site/Slideshow";
import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";

/** Délai d'entrée (s'ajoute à la durée de l'intro, voir globals.css). */
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

/** Mots du titre, chacun révélé depuis un masque. */
function Words({
  text,
  start,
  className,
}: {
  text: string;
  start: number;
  className?: string;
}) {
  return text.split(" ").map((word, i, all) => (
    <span key={i}>
      <span className="word-mask">
        <span className={className} style={d(start + i * 0.08)}>
          {word}
        </span>
      </span>
      {i < all.length - 1 && " "}
    </span>
  ));
}

export function Hero() {
  const afterWords = hero.titleAfter.split(" ").length;
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center pb-24 pt-[132px] split:pb-20"
    >
      <div className="container-lux grid items-center gap-14 split:grid-cols-[1.1fr_0.9fr] split:gap-16">
        <div className="flex flex-col items-center text-center split:items-start split:text-left">
          <div className="enter-up -ml-2 mb-4 split:-ml-5" style={d(0)}>
            <Logo
              size={180}
              priority
              className="drop-shadow-[0_0_46px_rgba(201,162,91,0.22)]"
            />
          </div>

          <h1 id="hero-title" className="title-h1">
            <Words text={hero.titleBefore} start={0.1} />{" "}
            <span className="word-mask">
              <span style={d(0.18)}>
                <em className="gold-shimmer pr-[0.08em] font-normal italic">
                  {hero.titleAccent}
                </em>
              </span>
            </span>
            <br />
            <Words text={hero.titleAfter} start={0.26} />
          </h1>

          <p
            className="enter-left lead-lux mt-6"
            style={d(0.3 + afterWords * 0.08)}
          >
            {hero.text}
          </p>

          <div
            className="enter-left mt-9 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center"
            style={d(0.45 + afterWords * 0.08)}
          >
            <Button asChild variant="gold">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={22} />
                {hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <SmartLink href={hero.secondaryHref}>
                {hero.secondaryCta}
              </SmartLink>
            </Button>
          </div>
        </div>

        <div
          className="enter-right mx-auto w-full max-w-[460px] split:max-w-none"
          style={d(0.2)}
        >
          <div className="glass relative aspect-[4/5] p-3 shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
            {/* Liseré doré lumineux autour de la carte. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[28px] bg-[linear-gradient(140deg,rgba(224,192,127,0.55),transparent_35%,transparent_65%,rgba(126,163,194,0.35))] [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] p-px"
            />
            <Slideshow
              images={heroSlides}
              interval={2600}
              fade={1000}
              priority
              sizes="(min-width: 960px) 460px, (min-width: 520px) 460px, 92vw"
              label="Exemples de lots GoldenChance"
              className="size-full rounded-[22px]"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-center gap-4 rounded-[18px] border border-[rgba(199,209,219,0.16)] bg-[rgba(5,8,16,0.62)] px-5 py-4 backdrop-blur-[14px]">
              <span aria-hidden className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-300 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold-400" />
              </span>
              <div>
                <p className="font-serif text-[1.25rem] italic text-gold-300">
                  {hero.badgeTitle}
                </p>
                <p className="mt-0.5 text-[0.88rem] text-silver-300">
                  {hero.badgeText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement. */}
      <div
        aria-hidden
        className="enter-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 split:[@media(min-height:880px)]:flex"
        style={d(1.2)}
      >
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
          Découvrir
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-[rgba(199,209,219,0.12)]">
          <span className="scroll-cue-line absolute inset-0 bg-gradient-to-b from-gold-300 to-transparent" />
        </span>
      </div>
    </section>
  );
}
