import { concept } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";

export function Concept() {
  return (
    <section id="presentation" aria-labelledby="presentation-title" className="section-lux">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            id="presentation-title"
            eyebrow={concept.eyebrow}
            title={concept.title}
            lead={concept.lead}
          />
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-3">
          {concept.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 0.08} className="flex">
              <Card pad={false} className="flex w-full flex-col p-8 transition-[border-color,transform] duration-300 ease-lux hover:-translate-y-1 hover:border-[rgba(224,192,127,0.3)] sm:p-9">
                <p className="eyebrow text-gold-300">{card.kicker}</p>
                <h3 className="mt-3 text-[1.75rem]">{card.title}</h3>
                <p className="mt-4 leading-[1.7] text-silver-300">{card.text}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-6">
          <Card pad={false} className="flex items-start gap-5 px-7 py-7 sm:items-center sm:px-10">
            <span
              aria-hidden
              className="mt-2.5 size-2.5 shrink-0 rounded-full bg-gold-400 shadow-[0_0_14px_4px_rgba(201,162,91,0.5)] sm:mt-0"
            />
            <p className="font-serif text-[1.3rem] italic leading-snug text-silver-100">{concept.cadence}</p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
