import { AnimatedWords } from "@/components/site/AnimatedWords";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/** Numéro + sur-titre, titre animé mot par mot, paragraphe d'introduction. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  id,
  centered = false,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-14", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal from="left"
          className={cn(
            "mb-5 flex items-center gap-4",
            centered && "justify-center",
          )}
        >
          {index && (
            <>
              <span className="font-sans text-[0.75rem] font-semibold tracking-[0.25em] text-gold-400">
                {index}
              </span>
              <span
                aria-hidden
                className="h-px w-10 bg-gradient-to-r from-gold-400 to-transparent"
              />
            </>
          )}
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <h2 id={id} className="title-h2">
        <AnimatedWords text={title} />
      </h2>
      {lead && (
        <Reveal from="fade" delay={0.2}>
          <p className={cn("lead-lux mt-5", centered && "mx-auto")}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
