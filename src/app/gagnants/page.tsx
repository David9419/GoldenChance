import type { Metadata } from "next";
import Image from "next/image";

import { links, winners, winnersPage } from "@/content/site";
import { JoinCta } from "@/components/sections/JoinCta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gagnants",
  description: winnersPage.lead,
  alternates: { canonical: "/gagnants" },
};

export default function WinnersPage() {
  // Du plus récent au plus ancien.
  const sorted = [...winners].sort((a, b) => b.edition - a.edition);

  return (
    <>
      <section
        aria-labelledby="gagnants-title"
        className="pb-[70px] pt-[170px]"
      >
        <div className="container-lux">
          <SectionHeading
            id="gagnants-title"
            eyebrow={winnersPage.eyebrow}
            title={winnersPage.title}
            lead={winnersPage.lead}
          />
          <ul className="flex flex-col gap-8">
            {sorted.map((w) => (
              <Reveal as="li" from="left" key={`${w.concours}-${w.edition}`}>
                <Card className="spotlight grid items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-[24px] border border-[rgba(199,209,219,0.14)] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                    <Image
                      src={w.photo.src}
                      alt={w.photo.alt}
                      fill
                      sizes="(min-width: 820px) 400px, 86vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Badge variant="gold">{`${w.concours} — Édition #${w.edition}`}</Badge>
                    <h3 className="mt-5 text-[clamp(2.1rem,4vw,3rem)]">
                      {w.nom}
                    </h3>
                    <p className="mt-2 font-serif text-[1.3rem] italic text-ice-400">
                      {w.lot}
                    </p>
                    <p className="lead-lux mt-6">{w.texte}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <JoinCta
        eyebrow={winnersPage.next.eyebrow}
        title={winnersPage.next.title}
        text={winnersPage.next.text}
        button={winnersPage.next.primary}
        secondary={{ label: winnersPage.next.secondary, href: links.instagram }}
        className="pb-[110px] pt-10"
      />
    </>
  );
}
