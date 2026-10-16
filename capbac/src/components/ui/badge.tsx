import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[0.72rem] font-semibold [&_svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-brand-400/30 bg-brand-500/15 text-brand-300",
        outline: "border-border text-mist-300",
        success: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
        warning: "border-amber-400/30 bg-amber-500/15 text-amber-300",
        danger: "border-rose-400/30 bg-rose-500/15 text-rose-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
