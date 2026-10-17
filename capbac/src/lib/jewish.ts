import { addDays, fromISO, type ISODate } from "./dates";
import type { Holiday } from "./store";

/**
 * Fêtes et jeûnes juifs (calendrier de diaspora), calculés automatiquement
 * à partir du calendrier hébraïque du navigateur : pas d'école ces jours-là.
 */

const fmt = new Intl.DateTimeFormat("en-u-ca-hebrew", { day: "numeric", month: "long", year: "numeric" });

function hebrew(iso: ISODate) {
  const parts = fmt.formatToParts(fromISO(iso));
  const day = Number(parts.find((p) => p.type === "day")?.value);
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  return { day, month };
}

type Rule = { month: string | string[]; days: number[]; label: string; fast?: boolean };

/** Adar « de Pourim » : Adar II les années embolismiques, sinon Adar. */
const PURIM_MONTHS = ["Adar", "Adar II"];

const RULES: Rule[] = [
  { month: "Tishri", days: [1, 2], label: "Roch Hachana" },
  { month: "Tishri", days: [3], label: "Jeûne de Guedalia", fast: true },
  { month: "Tishri", days: [10], label: "Yom Kippour" },
  { month: "Tishri", days: [15, 16, 17, 18, 19, 20, 21], label: "Souccot" },
  { month: "Tishri", days: [22], label: "Chemini Atseret" },
  { month: "Tishri", days: [23], label: "Simhat Torah" },
  { month: "Tevet", days: [10], label: "Jeûne du 10 Tevet", fast: true },
  { month: PURIM_MONTHS, days: [13], label: "Jeûne d’Esther", fast: true },
  { month: PURIM_MONTHS, days: [14], label: "Pourim" },
  { month: "Nisan", days: [15, 16, 17, 18, 19, 20, 21, 22], label: "Pessah" },
  { month: "Sivan", days: [6, 7], label: "Chavouot" },
  { month: "Tamuz", days: [17], label: "Jeûne du 17 Tamouz", fast: true },
  { month: "Av", days: [9], label: "Tisha Beav", fast: true },
];

const cache = new Map<string, Holiday[]>();

/** Jours de fête et de jeûne entre deux dates (incluses). */
export function jewishHolidays(from: ISODate, to: ISODate): Holiday[] {
  const key = `${from}|${to}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const out: Holiday[] = [];
  for (let d = from; d <= to; d = addDays(d, 1)) {
    const { day, month } = hebrew(d);
    const dow = fromISO(d).getDay();
    for (const r of RULES) {
      const months = Array.isArray(r.month) ? r.month : [r.month];
      if (!months.includes(month)) continue;
      let match = r.days.includes(day);
      if (r.fast) {
        // Un jeûne qui tombe un Chabbat est déplacé : au dimanche (lendemain),
        // sauf le jeûne d'Esther, avancé au jeudi.
        const isEsther = r.label.startsWith("Jeûne d’Esther");
        if (match && dow === 6) match = false;
        if (!isEsther && dow === 0 && r.days.includes(day - 1)) match = true;
        if (isEsther && dow === 4 && r.days.includes(day + 2)) match = true;
      }
      if (match) out.push({ id: `juif-${d}`, start: d, end: d, label: r.label });
    }
  }
  cache.set(key, out);
  return out;
}
