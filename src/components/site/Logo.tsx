import Image from "next/image";

import { images } from "@/content/site";
import { cn } from "@/lib/utils";

/** Logo complet, jamais rogné (object-contain, PNG transparent). */
export function Logo({
  size,
  priority = false,
  decorative = false,
  className,
}: {
  size: number;
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={images.logo.src}
      alt={decorative ? "" : images.logo.alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
