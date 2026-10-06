import { cn } from "@/lib/utils";

/** Sur-titre italique + titre h2 + paragraphe d'introduction. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  centered = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-14", centered && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 id={id} className="title-h2">
        {title}
      </h2>
      {lead && <p className={cn("lead-lux mt-5", centered && "mx-auto")}>{lead}</p>}
    </div>
  );
}
