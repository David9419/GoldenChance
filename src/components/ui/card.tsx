import * as React from "react";

import { cn } from "@/lib/utils";

/** Panneau « verre dépoli » GoldenChance (base shadcn Card). */
function Card({ className, pad = true, ...props }: React.ComponentProps<"div"> & { pad?: boolean }) {
  return <div data-slot="card" className={cn("glass", pad && "glass-pad", className)} {...props} />;
}

export { Card };
