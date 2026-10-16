"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, BarChart3, Clock4, GitCommitHorizontal, LineChart, Sparkles, Table2 } from "lucide-react";
import type { Figure } from "@/content/types";
import { RichText } from "./rich-text";

const PALETTE = ["#818cf8", "#f472b6", "#34d399", "#fbbf24", "#22d3ee", "#a78bfa"];
const ICON = { function: LineChart, bars: BarChart3, timeline: Clock4, flow: GitCommitHorizontal, table: Table2, figures: Sparkles };

/** Schéma / graphique d'un cours, dessiné en SVG et animé. */
export function FigureView({ figure, color }: { figure: Figure; color: string }) {
  const Icon = ICON[figure.type];
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-6 overflow-hidden rounded-2xl border border-border bg-fg/[0.025]"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-sm font-bold" style={{ color }}>
        <Icon className="size-4" />
        <span className="text-mist-100">{figure.title}</span>
      </div>
      <div className="p-4 sm:p-5">
        {figure.type === "function" && <FunctionPlot f={figure} />}
        {figure.type === "bars" && <Bars f={figure} color={color} />}
        {figure.type === "timeline" && <Timeline f={figure} color={color} />}
        {figure.type === "flow" && <Flow f={figure} color={color} />}
        {figure.type === "table" && <Table f={figure} color={color} />}
        {figure.type === "figures" && <KeyFigures f={figure} color={color} />}
      </div>
      {figure.caption && (
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-mist-500">
          <RichText text={figure.caption} />
        </figcaption>
      )}
    </motion.figure>
  );
}

/* ------------------------------- Courbes ------------------------------- */

function niceStep(range: number) {
  const raw = range / 8;
  const p = 10 ** Math.floor(Math.log10(raw));
  const n = raw / p;
  return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * p;
}

function FunctionPlot({ f }: { f: Extract<Figure, { type: "function" }> }) {
  const W = 560;
  const H = 320;
  const pad = 34;
  const curves = useMemo(
    () =>
      f.curves.map((c) => {
        let fn: (x: number) => number;
        try {
          fn = new Function("x", `return (${c.expr});`) as (x: number) => number;
        } catch {
          fn = () => NaN;
        }
        const pts: { x: number; y: number }[] = [];
        for (let i = 0; i <= 240; i++) {
          const x = f.xMin + ((f.xMax - f.xMin) * i) / 240;
          let y = NaN;
          try {
            y = fn(x);
          } catch {
            /* point non défini */
          }
          pts.push({ x, y });
        }
        return { ...c, pts };
      }),
    [f],
  );
  const finite = curves.flatMap((c) => c.pts.map((p) => p.y)).filter((y) => Number.isFinite(y));
  let yMin = f.yMin ?? Math.min(...finite, ...(f.points ?? []).map((p) => p.y));
  let yMax = f.yMax ?? Math.max(...finite, ...(f.points ?? []).map((p) => p.y));
  if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) [yMin, yMax] = [-5, 5];
  if (yMin === yMax) [yMin, yMax] = [yMin - 1, yMax + 1];
  const yPad = (yMax - yMin) * 0.08;
  if (f.yMin === undefined) yMin -= yPad;
  if (f.yMax === undefined) yMax += yPad;

  const sx = (x: number) => pad + ((x - f.xMin) / (f.xMax - f.xMin)) * (W - pad * 2);
  const sy = (y: number) => H - pad - ((y - yMin) / (yMax - yMin)) * (H - pad * 2);
  const xStep = niceStep(f.xMax - f.xMin);
  const yStep = niceStep(yMax - yMin);
  const xs: number[] = [];
  for (let x = Math.ceil(f.xMin / xStep) * xStep; x <= f.xMax + 1e-9; x += xStep) xs.push(+x.toFixed(6));
  const ys: number[] = [];
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + 1e-9; y += yStep) ys.push(+y.toFixed(6));
  const fmt = (v: number) => String(+v.toFixed(4)).replace(".", ",");

  const pathOf = (pts: { x: number; y: number }[]) => {
    let d = "";
    let pen = false;
    for (const p of pts) {
      if (!Number.isFinite(p.y) || p.y < yMin - (yMax - yMin) || p.y > yMax + (yMax - yMin)) {
        pen = false;
        continue;
      }
      const y = Math.max(-H, Math.min(2 * H, sy(p.y)));
      d += `${pen ? "L" : "M"}${sx(p.x).toFixed(1)},${y.toFixed(1)}`;
      pen = true;
    }
    return d;
  };

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={f.title}>
        <defs>
          <clipPath id={`clip-${f.title.length}-${f.curves.length}`}>
            <rect x={pad} y={pad} width={W - pad * 2} height={H - pad * 2} />
          </clipPath>
        </defs>
        {xs.map((x) => (
          <line key={`gx${x}`} x1={sx(x)} x2={sx(x)} y1={pad} y2={H - pad} stroke="currentColor" className="text-fg/10" />
        ))}
        {ys.map((y) => (
          <line key={`gy${y}`} x1={pad} x2={W - pad} y1={sy(y)} y2={sy(y)} stroke="currentColor" className="text-fg/10" />
        ))}
        {yMin <= 0 && yMax >= 0 && <line x1={pad} x2={W - pad} y1={sy(0)} y2={sy(0)} stroke="currentColor" className="text-mist-500" strokeWidth={1.4} />}
        {f.xMin <= 0 && f.xMax >= 0 && <line x1={sx(0)} x2={sx(0)} y1={pad} y2={H - pad} stroke="currentColor" className="text-mist-500" strokeWidth={1.4} />}
        {xs.map((x) => (
          <text key={`tx${x}`} x={sx(x)} y={H - pad + 16} textAnchor="middle" className="fill-mist-500 text-[11px]">
            {fmt(x)}
          </text>
        ))}
        {ys.map((y) => (
          <text key={`ty${y}`} x={pad - 6} y={sy(y) + 4} textAnchor="end" className="fill-mist-500 text-[11px]">
            {fmt(y)}
          </text>
        ))}
        <g clipPath={`url(#clip-${f.title.length}-${f.curves.length})`}>
          {curves.map((c, i) => (
            <motion.path
              key={c.expr}
              d={pathOf(c.pts)}
              fill="none"
              stroke={PALETTE[i % PALETTE.length]}
              strokeWidth={2.6}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.3, ease: "easeInOut" }}
            />
          ))}
        </g>
        {(f.points ?? []).map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 + i * 0.1 }}>
            <circle cx={sx(p.x)} cy={sy(p.y)} r={4.5} className="fill-amber-300" />
            {p.label && (
              <text x={sx(p.x) + 8} y={sy(p.y) - 8} className="fill-mist-100 text-[12px] font-semibold">
                {p.label}
              </text>
            )}
          </motion.g>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {f.curves.map((c, i) => (
          <span key={c.expr} className="flex items-center gap-1.5 text-xs text-mist-300">
            <span className="h-1 w-4 rounded-full" style={{ background: PALETTE[i % PALETTE.length] }} />
            <RichText text={c.label} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Barres ------------------------------- */

function Bars({ f, color }: { f: Extract<Figure, { type: "bars" }>; color: string }) {
  const max = Math.max(...f.data.map((d) => Math.abs(d.value)), 1);
  return (
    <div className="grid gap-2.5">
      {f.data.map((d, i) => (
        <div key={d.label} className="grid grid-cols-[minmax(80px,32%)_1fr_auto] items-center gap-3 text-sm">
          <span className="truncate text-mist-300" title={d.label}>
            {d.label}
          </span>
          <div className="h-3 overflow-hidden rounded-full bg-fg/[0.06]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}, ${PALETTE[(i + 1) % PALETTE.length]})` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(Math.abs(d.value) / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </div>
          <span className="font-semibold tabular-nums">
            {d.value.toLocaleString("fr-FR")}
            {f.unit ? ` ${f.unit}` : ""}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------- Frise ------------------------------- */

function Timeline({ f, color }: { f: Extract<Figure, { type: "timeline" }>; color: string }) {
  return (
    <ol className="relative ml-2 border-l-2 pl-6" style={{ borderColor: `${color}55` }}>
      {f.events.map((e, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="relative pb-4 last:pb-0"
        >
          <span className="absolute top-1 -left-[31px] size-3.5 rounded-full border-2 border-ink-900" style={{ background: color }} />
          <p className="font-display text-sm font-bold" style={{ color }}>
            {e.date}
          </p>
          <p className="text-sm text-mist-300">
            <RichText text={e.label} />
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

/* ------------------------------- Étapes ------------------------------- */

function Flow({ f, color }: { f: Extract<Figure, { type: "flow" }>; color: string }) {
  return (
    <div className="flex flex-col items-stretch gap-2 md:flex-row md:flex-wrap md:items-center">
      {f.steps.map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-2 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="w-full rounded-xl border p-3 text-center md:w-auto md:max-w-[220px]"
            style={{ borderColor: `${color}55`, background: `${color}14` }}
          >
            <p className="text-sm font-bold">
              <span className="mr-1.5 inline-flex size-5 items-center justify-center rounded-full text-[0.65rem] text-white" style={{ background: color }}>
                {i + 1}
              </span>
              <RichText text={s.label} />
            </p>
            {s.detail && (
              <p className="mt-1 text-xs text-mist-300">
                <RichText text={s.detail} />
              </p>
            )}
          </motion.div>
          {i < f.steps.length - 1 && (
            <>
              <ArrowDown className="size-4 shrink-0 text-mist-500 md:hidden" />
              <ArrowRight className="hidden size-4 shrink-0 text-mist-500 md:block" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------- Tableau ------------------------------- */

function Table({ f, color }: { f: Extract<Figure, { type: "table" }>; color: string }) {
  return (
    <div className="-mx-1 overflow-x-auto">
      <table className="w-full min-w-[420px] border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            {f.headers.map((h, i) => (
              <th
                key={i}
                className="border-b px-3 py-2 text-left text-xs font-bold tracking-wide uppercase first:rounded-tl-lg last:rounded-tr-lg"
                style={{ background: `${color}1f`, borderColor: `${color}55`, color }}
              >
                <RichText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {f.rows.map((r, i) => (
            <motion.tr key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="even:bg-fg/[0.025]">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "border-b border-border px-3 py-2 font-semibold text-mist-100" : "border-b border-border px-3 py-2 text-mist-300"}>
                  <RichText text={c} />
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ----------------------------- Chiffres clés ----------------------------- */

function KeyFigures({ f, color }: { f: Extract<Figure, { type: "figures" }>; color: string }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {f.items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-xl border border-border bg-fg/[0.03] p-4"
        >
          <p className="font-display text-2xl font-bold" style={{ color }}>
            {it.value}
          </p>
          <p className="mt-1 text-xs text-mist-300">
            <RichText text={it.label} />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
