import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-1.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em]",
  {
    variants: {
      variant: {
        gold: "border-[rgba(224,192,127,0.38)] bg-[rgba(201,162,91,0.12)] text-gold-300",
        muted:
          "border-[rgba(199,209,219,0.2)] bg-[rgba(199,209,219,0.08)] text-silver-300",
      },
    },
    defaultVariants: { variant: "gold" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
