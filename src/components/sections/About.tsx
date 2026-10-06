import Image from "next/image";

import { about, images } from "@/content/site";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { Reveal } from "@/components/site/Reveal";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section
      id="apropos"
      aria-labelledby="apropos-title"
      className="section-lux"
    >
      <div className="container-lux grid items-center gap-12 split:grid-cols-2 split:gap-16">
        <Reveal
          from="left"
          className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[28px] border border-[rgba(199,209,219,0.14)] shadow-[0_40px_90px_rgba(0,0,0,0.5)] split:max-w-none"
        >
          <Image
            src={images.watches.src}
            alt={images.watches.alt}
            fill
            sizes="(min-width: 960px) 540px, 92vw"
            className="object-cover transition-transform duration-[1.6s] ease-lux hover:scale-[1.05]"
          />
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <p className="mb-6 flex items-center gap-4">
            <span className="text-[0.75rem] font-semibold tracking-[0.25em] text-gold-400">
              04
            </span>
            <span
              aria-hidden
              className="h-px w-10 bg-gradient-to-r from-gold-400 to-transparent"
            />
          </p>
          <Badge variant="gold" className="normal-case tracking-[0.04em]">
            {about.pill}
          </Badge>
          <h2 id="apropos-title" className="title-h2 mt-6">
            <AnimatedWords text={about.title} />
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="lead-lux mt-6">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
