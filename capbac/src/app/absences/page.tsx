"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CalendarCheck2, CheckCircle2, Clock, Flame, Pencil, ShieldCheck, XCircle } from "lucide-react";
import { CountUp, EmptyState, PageHeader, Ring, StatusPill } from "@/components/app/common";
import { ParentToggle } from "@/components/app/parent-gate";
import { SubjectBadge } from "@/components/app/subject-icon";
import { toast } from "@/components/app/toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SUBJECTS } from "@/content/subjects";
import type { Session } from "@/lib/calendar";
import { formatHour, formatLong } from "@/lib/dates";
import { useParentMode } from "@/lib/parent-mode";
import { attendanceStats, durationHours } from "@/lib/stats";
import { actions, useData, type AttendanceStatus } from "@/lib/store";
import { useNow } from "@/lib/use-now";
import { cn } from "@/lib/utils";

type Filter = "tout" | "absent" | "retard" | "present";

export default function AttendancePage() {
  const data = useData();
  const now = useNow();
  const parent = useParentMode();
  const [filter, setFilter] = useState<Filter>("tout");
  const [editing, setEditing] = useState<{ session: Session; status: AttendanceStatus; justified?: boolean; reason?: string } | null>(null);
  if (!data) return null;
  const st = attendanceStats(data, now);
  const list = st.past.filter((p) => filter === "tout" || p.status === filter);

  const cards = [
    { label: "Présences", value: st.present, icon: CheckCircle2, tone: "text-emerald-300", bg: "bg-emerald-500/15" },
    { label: "Retards", value: st.retard, icon: Clock, tone: "text-amber-300", bg: "bg-amber-500/15" },
    { label: "Absences", value: st.absent, icon: XCircle, tone: "text-rose-300", bg: "bg-rose-500/15", sub: `${st.unjustified} non justifiée${st.unjustified > 1 ? "s" : ""}` },
    { label: "Série en cours", value: st.streak, icon: Flame, tone: "text-orange-300", bg: "bg-orange-500/15", sub: "jours sans absence" },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Vie scolaire"
        title="Absences & retards"
        description="À chaque cours, clique sur « Je suis présent » (ou ouvre ta séance) : ouverture 15 min avant, retard après 10 min. Un cours non pointé compte comme une absence."
        actions={<ParentToggle />}
      />

      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <Card className="flex flex-col items-center gap-3 p-6 text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">Taux d’assiduité</p>
          <Ring value={st.rate} size={160} stroke={14} color="#34d399">
            <span className="font-display text-4xl font-bold text-emerald-300">{st.rate === null ? "—" : <CountUp value={st.rate} suffix="%" />}</span>
          </Ring>
          <p className="text-sm text-mist-300">
            {st.total} cours suivis · {st.missedHours.toFixed(1).replace(".", ",").replace(/,0$/, "")} h manquées
          </p>
        </Card>
        <div className="grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
              <Card className="h-full p-5">
                <span className={cn("flex size-10 items-center justify-center rounded-xl", c.bg, c.tone)}>
                  <c.icon className="size-5" />
                </span>
                <p className="mt-4 font-display text-3xl font-bold">
                  <CountUp value={c.value} />
                </p>
                <p className="text-sm font-semibold text-mist-300">{c.label}</p>
                {c.sub && <p className="text-xs text-mist-500">{c.sub}</p>}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader className="flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Historique</CardTitle>
          <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
            <TabsList>
              <TabsTrigger value="tout">Tout</TabsTrigger>
              <TabsTrigger value="absent">Absences</TabsTrigger>
              <TabsTrigger value="retard">Retards</TabsTrigger>
              <TabsTrigger value="present">Présences</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {parent && (
            <p className="mb-4 flex items-center gap-2 rounded-xl border border-amber-400/25 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-200">
              <ShieldCheck className="size-4" /> Mode parent : clique sur un cours pour modifier sa présence ou justifier une absence.
            </p>
          )}
          {list.length ? (
            <div className="flex flex-col gap-2">
              {list.slice(0, 120).map((p, i) => (
                <motion.button
                  key={p.session.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: Math.min(i * 0.02, 0.3) }}
                  disabled={!parent}
                  onClick={() => setEditing({ session: p.session, status: p.status, justified: p.justified, reason: p.reason })}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border border-border bg-fg/[0.02] p-3 text-left",
                    parent && "cursor-pointer transition-colors hover:bg-fg/[0.06]",
                  )}
                >
                  <SubjectBadge subject={p.session.subject} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{SUBJECTS[p.session.subject].name}</p>
                    <p className="text-xs text-mist-500">
                      {formatLong(p.session.date)} · {formatHour(p.session.start)} – {formatHour(p.session.end)}
                      {p.reason && <span className="text-mist-300"> · {p.reason}</span>}
                    </p>
                  </div>
                  <StatusPill status={p.status} justified={p.justified} />
                  {parent && <Pencil className="size-3.5 text-mist-500" />}
                </motion.button>
              ))}
            </div>
          ) : (
            <EmptyState icon={CalendarCheck2} title="Rien à afficher" text="L’historique se remplit au fil des cours de ton emploi du temps." />
          )}
        </CardContent>
      </Card>

      <EditDialog editing={editing} onClose={() => setEditing(null)} />
    </div>
  );
}

function EditDialog({
  editing,
  onClose,
}: {
  editing: { session: Session; status: AttendanceStatus; justified?: boolean; reason?: string } | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<AttendanceStatus>("absent");
  const [justified, setJustified] = useState(false);
  const [reason, setReason] = useState("");
  const [lastKey, setLastKey] = useState<string | null>(null);

  if (editing && editing.session.key !== lastKey) {
    setLastKey(editing.session.key);
    setStatus(editing.status);
    setJustified(!!editing.justified);
    setReason(editing.reason ?? "");
  }

  return (
    <Dialog
      open={!!editing}
      onOpenChange={(o) => {
        if (!o) {
          onClose();
          setLastKey(null);
        }
      }}
    >
      <DialogContent>
        {editing && (
          <>
            <DialogHeader>
              <DialogTitle>{SUBJECTS[editing.session.subject].name}</DialogTitle>
              <DialogDescription>
                {formatLong(editing.session.date)} · {formatHour(editing.session.start)} – {formatHour(editing.session.end)} ({durationHours(editing.session)} h)
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-2">
              {(["present", "retard", "absent"] as AttendanceStatus[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={cn(
                    "cursor-pointer rounded-xl border py-3 text-sm font-semibold transition-colors",
                    status === s
                      ? s === "present"
                        ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-200"
                        : s === "retard"
                          ? "border-amber-400/50 bg-amber-500/20 text-amber-200"
                          : "border-rose-400/50 bg-rose-500/20 text-rose-200"
                      : "border-border text-mist-500",
                  )}
                >
                  {s === "present" ? "Présent" : s === "retard" ? "Retard" : "Absent"}
                </button>
              ))}
            </div>
            {status !== "present" && (
              <>
                <label className="flex items-center justify-between rounded-xl border border-border p-3">
                  <span className="text-sm font-semibold">Justifié{status === "absent" ? "e" : ""}</span>
                  <Switch checked={justified} onCheckedChange={setJustified} />
                </label>
                <div className="grid gap-2">
                  <Label htmlFor="reason">Motif</Label>
                  <Textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Rendez-vous médical, malade…" />
                </div>
              </>
            )}
            <DialogFooter>
              <Button
                variant="ghost"
                onClick={() => {
                  actions.setAttendance(editing.session.key, null);
                  toast("Pointage réinitialisé");
                  onClose();
                  setLastKey(null);
                }}
              >
                Réinitialiser
              </Button>
              <Button
                onClick={() => {
                  actions.setAttendance(editing.session.key, {
                    status,
                    at: new Date().toISOString(),
                    by: "parent",
                    justified: status === "present" ? undefined : justified,
                    reason: status === "present" ? undefined : reason.trim() || undefined,
                  });
                  toast("Vie scolaire mise à jour", "success");
                  onClose();
                  setLastKey(null);
                }}
              >
                Enregistrer
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
