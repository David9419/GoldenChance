import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-border bg-white/[0.04] px-3.5 text-sm text-mist-100 placeholder:text-mist-500 transition-colors outline-none focus:border-brand-400/60 focus:bg-white/[0.06] [color-scheme:dark]",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-xl border border-border bg-white/[0.04] px-3.5 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none focus:border-brand-400/60",
        className,
      )}
      {...props}
    />
  );
}

export { Input, Textarea };
