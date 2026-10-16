/** Petites fonctions de dates en heure locale, au format "AAAA-MM-JJ". */

export type ISODate = string;

export function toISO(d: Date): ISODate {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function fromISO(iso: ISODate): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(iso: ISODate, n: number): ISODate {
  const d = fromISO(iso);
  d.setDate(d.getDate() + n);
  return toISO(d);
}

/** Lundi de la semaine qui contient `iso`. */
export function mondayOf(iso: ISODate): ISODate {
  const d = fromISO(iso);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() - (day - 1));
  return toISO(d);
}

export function daysBetween(a: ISODate, b: ISODate): number {
  return Math.round((fromISO(b).getTime() - fromISO(a).getTime()) / 86_400_000);
}

export function at(iso: ISODate, hhmm: string): Date {
  const d = fromISO(iso);
  const [h, m] = hhmm.split(":").map(Number);
  d.setHours(h, m, 0, 0);
  return d;
}

const fmtLong = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" });
const fmtShort = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" });
const fmtFull = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });
const fmtWeekday = new Intl.DateTimeFormat("fr-FR", { weekday: "short" });

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const formatLong = (iso: ISODate) => cap(fmtLong.format(fromISO(iso)));
export const formatShort = (iso: ISODate) => fmtShort.format(fromISO(iso));
export const formatFull = (iso: ISODate) => fmtFull.format(fromISO(iso));
export const formatWeekday = (iso: ISODate) => cap(fmtWeekday.format(fromISO(iso)).replace(".", ""));

export function formatHour(hhmm: string) {
  const [h, m] = hhmm.split(":");
  return `${Number(h)}h${m === "00" ? "" : m}`;
}
