import { currentContest, links, participateHref } from "@/content/site";
import { ContestStatus } from "@/components/site/ContestStatus";
import { TabbedGallery } from "@/components/site/ProductGallery";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CurrentContest() {
  const c = currentContest;
  return (
    <section
      id="concours"
      aria-labelledby="concours-title"
      className="section-lux"
    >
      <div className="container-lux">
        <SectionHeading
          index="01"
          id="concours-title"
          eyebrow={c.eyebrow}
          title={c.title}
          lead={c.lead}
        />
        <Reveal>
          <Card className="spotlight grid items-center gap-10 split:grid-cols-2 split:gap-14">
            <Reveal from="left">
              <TabbedGallery
                groups={[
                  { title: "Ensembles Essentials", choices: c.choices },
                  { title: "Chaussures On", choices: c.shoeChoices },
                ]}
              />
              <p className="mt-4 flex gap-2.5 text-[0.9rem] leading-relaxed text-silver-300">
                <span aria-hidden className="text-gold-400">
                  ✦
                </span>
                <span>{c.galleryNote}</span>
              </p>
            </Reveal>
            <Reveal from="right" delay={0.1}>
              <ContestStatus
                startDate={c.startDate}
                startLabel={c.startLabel}
                liveLabel={c.liveLabel}
              />
              <h3 className="mt-5 text-[clamp(1.9rem,3.4vw,2.6rem)]">
                {c.name}
              </h3>
              <p className="mt-2 font-serif text-[1.2rem] italic text-ice-400">
                {c.prize}
              </p>
              <ul className="mt-7 flex flex-col gap-3.5 text-silver-300">
                {c.details.map((item, i) => (
                  <Reveal
                    as="li"
                    from="right"
                    delay={0.25 + i * 0.09}
                    key={item.label + (item.strong ?? "")}
                    className="gold-bullet leading-relaxed"
                  >
                    {item.label}
                    {item.strong && (
                      <strong className="font-semibold text-silver-100">
                        {item.strong}
                      </strong>
                    )}
                  </Reveal>
                ))}
              </ul>
              <div className="mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <Button asChild variant="gold">
                  <a
                    href={participateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={22} />
                    {c.button}
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rejoindre la communauté
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-[0.85rem] text-slate-500">
                Le bouton « {c.button} » ouvre WhatsApp avec votre message déjà
                écrit.
              </p>
            </Reveal>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
