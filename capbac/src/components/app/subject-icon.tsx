import { Atom, Feather, Landmark, Languages, Leaf, Sigma, type LucideProps } from "lucide-react";
import { SUBJECTS } from "@/content/subjects";
import type { SubjectId } from "@/content/types";
import { cn } from "@/lib/utils";

const ICONS = { sigma: Sigma, feather: Feather, atom: Atom, leaf: Leaf, landmark: Landmark, languages: Languages };

export function SubjectIcon({ subject, ...props }: { subject: SubjectId } & LucideProps) {
  const Icon = ICONS[SUBJECTS[subject].icon];
  return <Icon {...props} />;
}

/** Pastille carrée colorée avec l'icône de la matière. */
export function SubjectBadge({ subject, className, size = "md" }: { subject: SubjectId; className?: string; size?: "sm" | "md" | "lg" }) {
  const meta = SUBJECTS[subject];
  const dims = { sm: "size-8 rounded-lg [&_svg]:size-4", md: "size-11 rounded-xl [&_svg]:size-5", lg: "size-14 rounded-2xl [&_svg]:size-7" }[size];
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center text-white shadow-lg", dims, className)}
      style={{ background: meta.gradient, boxShadow: `0 10px 24px -10px ${meta.color}` }}
    >
      <SubjectIcon subject={subject} />
    </span>
  );
}
