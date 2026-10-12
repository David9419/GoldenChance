"use client";

import * as React from "react";

const noop = () => () => {};

/** Badge du concours : « Début jeudi … » avant la date, « Concours en cours » ensuite. */
export function ContestStatus({
  startDate,
  startLabel,
  liveLabel,
}: {
  startDate: string;
  startLabel: string;
  liveLabel: string;
}) {
  const live = React.useSyncExternalStore(
    noop,
    () => new Date() >= new Date(`${startDate}T00:00:00`),
    () => false,
  );
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(224,192,127,0.38)] bg-[rgba(201,162,91,0.12)] px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-gold-300">
      <span aria-hidden className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-300 opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-gold-400" />
      </span>
      {live ? liveLabel : startLabel}
    </span>
  );
}
