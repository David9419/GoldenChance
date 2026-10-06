import { exampleContest } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Slideshow } from "@/components/site/Slideshow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ExampleContest() {
  const c = exampleContest;
  return (
    <section
      id="concours-exemple"
      aria-labelledby="concours-exemple-title"
      className="section-lux"
    >
      <div className="container-lux">
        <SectionHeading
          index="01"
          id="concours-exemple-title"
          eyebrow={c.eyebrow}
          title={c.title}
          lead={c.lead}
        />
        <Reveal>
          <Card className="spotlight grid items-center gap-10 split:grid-cols-2 split:gap-14">
            <Reveal
              from="left"
              className="relative aspect-square overflow-hidden rounded-[24px] border border-[rgba(199,209,219,0.1)] bg-[radial-gradient(70%_60%_at_50%_45%,rgba(126,163,194,0.16),rgba(10,17,32,0.35)_70%)]"
            >
              <Slideshow
                images={c.slides}
                interval={3000}
                fade={900}
                fit="contain"
                controls
                sizes="(min-width: 960px) 480px, 86vw"
                label="Photos de l'iPad 11"
                className="absolute inset-0"
                imageClassName="p-[9%]"
              />
            </Reveal>
            <Reveal from="right" delay={0.1}>
              <Badge variant="muted">{c.status}</Badge>
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
            </Reveal>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
