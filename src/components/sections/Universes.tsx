import Image from "next/image";

import { universes } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Universes() {
  return (
    <section
      id="univers"
      aria-labelledby="univers-title"
      className="section-lux"
    >
      <div className="container-lux">
        <SectionHeading
          index="03"
          id="univers-title"
          eyebrow={universes.eyebrow}
          title={universes.title}
          lead={universes.lead}
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {universes.cards.map((card, i) => (
            <Reveal
              as="li"
              key={card.title}
              delay={i * 0.14}
              from={i === 0 ? "left" : i === 2 ? "right" : "up"}
            >
              <article className="group relative aspect-[3/4] overflow-hidden rounded-[28px] border border-[rgba(199,209,219,0.14)] shadow-[0_30px_70px_rgba(0,0,0,0.45)] transition-[border-color,transform] duration-500 ease-lux hover:-translate-y-1.5 hover:border-[rgba(224,192,127,0.45)]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 820px) 380px, 92vw"
                  className="object-cover brightness-[0.82] saturate-[0.85] transition-transform duration-[1.6s] ease-lux group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,16,0.2)_0%,rgba(5,8,16,0.35)_35%,rgba(5,8,16,0.88)_62%,rgba(5,8,16,0.97)_100%)]"
                />
                <span
                  aria-hidden
                  className="absolute right-6 top-5 font-serif text-[3.4rem] italic leading-none text-[rgba(238,242,246,0.18)]"
                >
                  {["I", "II", "III"][i]}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="eyebrow text-gold-300">{card.kicker}</p>
                  <h3 className="mt-2 text-[1.85rem]">{card.title}</h3>
                  <span
                    aria-hidden
                    className="mt-4 block h-px w-10 bg-gradient-to-r from-gold-400 to-transparent transition-[width] duration-700 ease-lux group-hover:w-24"
                  />
                  <p className="mt-4 text-[0.95rem] leading-[1.65] text-silver-300">
                    {card.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
