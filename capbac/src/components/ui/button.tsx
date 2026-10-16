import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-200 ease-soft active:scale-[0.97] disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "btn-shine bg-[linear-gradient(135deg,#818cf8,#6366f1_45%,#7c3aed)] text-white shadow-[0_8px_24px_-6px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-8px_rgba(99,102,241,0.75)]",
        secondary:
          "border border-border bg-fg/[0.05] text-mist-100 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-fg/[0.09]",
        ghost: "text-mist-300 hover:bg-fg/[0.06] hover:text-mist-100",
        success:
          "bg-emerald-500 text-emerald-950 shadow-[0_8px_24px_-6px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 hover:bg-emerald-400",
        danger:
          "border border-rose-400/30 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 rounded-lg px-3.5 text-[0.82rem]",
        lg: "h-13 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
