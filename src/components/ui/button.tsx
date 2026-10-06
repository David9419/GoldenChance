import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-sans font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-lux disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "btn-shine bg-[linear-gradient(135deg,#e0c07f,#c9a25b)] text-[#241a08] shadow-[0_10px_30px_rgba(201,162,91,0.25)] hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(201,162,91,0.42)]",
        ghost:
          "border border-[rgba(199,209,219,0.22)] bg-[rgba(199,209,219,0.06)] text-silver-100 hover:-translate-y-0.5 hover:border-[rgba(224,192,127,0.45)] hover:bg-[rgba(199,209,219,0.1)]",
        glassIcon:
          "border border-[rgba(199,209,219,0.18)] bg-[rgba(10,17,32,0.6)] text-silver-100 backdrop-blur-md hover:border-gold-300/60 hover:bg-[rgba(201,162,91,0.35)]",
      },
      size: {
        default: "h-[54px] px-7 text-[0.98rem]",
        sm: "h-11 px-5 text-sm",
        icon: "size-[42px]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
