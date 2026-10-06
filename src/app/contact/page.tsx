import type { Metadata } from "next";
import { Phone } from "lucide-react";

import { contactPage, links } from "@/content/site";
import { JoinCta } from "@/components/sections/JoinCta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { InstagramMark, WhatsAppMark } from "@/components/site/Social";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.lead,
  alternates: { canonical: "/contact" },
};

const channels = [
  ...links.phones.map((phone) => ({
    label: "Téléphone",
    value: phone.label,
    href: phone.href,
    external: false,
    icon: (
      <span className="inline-flex size-[52px] shrink-0 items-center justify-center rounded-full border border-[rgba(224,192,127,0.35)] bg-[rgba(201,162,91,0.1)] text-gold-300">
        <Phone aria-hidden className="size-[22px]" strokeWidth={1.6} />
      </span>
    ),
  })),
  {
    label: "Instagram",
    value: links.instagramHandle,
    href: links.instagram,
    external: true,
    icon: <InstagramMark size={52} />,
  },
  {
    label: "Communauté",
    value: "Groupe WhatsApp",
    href: links.whatsapp,
    external: true,
    icon: <WhatsAppMark size={52} />,
  },
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="pb-[70px] pt-[170px]">
        <div className="container-lux">
          <SectionHeading
            id="contact-title"
            eyebrow={contactPage.eyebrow}
            title={contactPage.title}
            lead={contactPage.lead}
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal
                as="li"
                key={c.href}
                from={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.08}
                className="flex"
              >
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="glass spotlight group flex w-full items-center gap-5 px-7 py-7 transition-[border-color,transform] duration-300 ease-lux hover:-translate-y-1 hover:border-[rgba(224,192,127,0.35)] sm:px-9"
                >
                  {c.icon}
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {c.label}
                    </span>
                    <span className="mt-1 truncate font-serif text-[1.35rem] font-medium text-silver-100 transition-colors duration-200 group-hover:text-gold-300">
                      {c.value}
                    </span>
                  </span>
                  {c.external && (
                    <span className="sr-only"> (nouvel onglet)</span>
                  )}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <JoinCta
        title={contactPage.final.title}
        text={contactPage.final.text}
        button={contactPage.final.button}
        className="pb-[110px] pt-10"
      />
    </>
  );
}
