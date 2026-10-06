import { concept, links } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Concept() {
  return (
    <section
      id="presentation"
      aria-labelledby="presentation-title"
      className="section-lux"
    >
      <div className="container-lux">
        <SectionHeading
          index="02"
          id="presentation-title"
          eyebrow={concept.eyebrow}
          title={concept.title}
          lead={concept.lead}
        />

        <div className="grid gap-6 split:grid-cols-[1fr_1fr_1.25fr]">
          {concept.facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              from="left"
              delay={i * 0.12}
              className="flex"
            >
              <Card
                pad={false}
                className="spotlight flex w-full flex-col p-8 transition-[border-color,transform] duration-500 ease-lux hover:-translate-y-1 hover:border-[rgba(224,192,127,0.3)] sm:p-10"
              >
                <p className="bg-[linear-gradient(160deg,#f3dca6,#c9a25b_60%,#8f6f35)] bg-clip-text font-serif text-[clamp(4.5rem,9vw,6.5rem)] font-medium leading-none text-transparent">
                  {fact.value}
                </p>
                <p className="mt-4 font-serif text-[1.55rem] leading-tight text-silver-100">
                  {fact.label}
                </p>
                <span
                  aria-hidden
                  className="my-5 block h-px w-12 bg-gradient-to-r from-gold-400 to-transparent"
                />
                <p className="leading-[1.7] text-silver-300">{fact.text}</p>
              </Card>
            </Reveal>
          ))}

          <Reveal from="right" delay={0.25} className="flex">
            <Card
              pad={false}
              className="spotlight relative flex w-full flex-col justify-between overflow-hidden border-[rgba(224,192,127,0.32)] bg-[linear-gradient(160deg,rgba(201,162,91,0.16),rgba(17,28,48,0.5)_55%)] p-8 shadow-[0_30px_80px_rgba(201,162,91,0.08)] sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[rgba(224,192,127,0.18)] blur-3xl"
              />
              <div>
                <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
                  <span aria-hidden className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-300 opacity-60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-gold-400" />
                  </span>
                  {concept.next.kicker}
                </p>
                <h3 className="mt-5 text-[clamp(2rem,3.4vw,2.6rem)]">
                  <span className="gold-shimmer italic">
                    {concept.next.title}
                  </span>
                </h3>
                <p className="mt-5 leading-[1.7] text-silver-300">
                  {concept.next.text}
                </p>
              </div>
              <Button asChild variant="gold" className="mt-8 self-start">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={22} />
                  {concept.next.button}
                </a>
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
