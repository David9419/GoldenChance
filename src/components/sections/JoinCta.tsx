import { links } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/** Panneau centré d'appel à rejoindre la communauté WhatsApp. */
export function JoinCta({
  eyebrow,
  title,
  text,
  button,
  secondary,
  className,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  button: string;
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={className ?? "section-lux"}>
      <div className="container-lux">
        <Reveal>
          <Card pad={false} className="relative mx-auto flex max-w-[860px] flex-col items-center overflow-hidden px-7 py-14 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-[rgba(201,162,91,0.12)] blur-3xl"
            />
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h3 className="text-[clamp(1.9rem,3.6vw,2.7rem)]">{title}</h3>
            <p className="lead-lux mt-5">{text}</p>
            <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild variant="gold">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={22} />
                  {button}
                </a>
              </Button>
              {secondary && (
                <Button asChild variant="ghost">
                  <a href={secondary.href} target="_blank" rel="noopener noreferrer">
                    {secondary.label}
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
