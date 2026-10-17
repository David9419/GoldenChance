"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, CheckCheck, MessageCircle, Send } from "lucide-react";
import { PageHeader } from "@/components/app/common";
import { ContactAvatar } from "@/components/app/contact-avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { useRole } from "@/lib/auth";
import { CONTACTS, conversation, displayName, ROLE_TITLE } from "@/lib/messages";
import { actions, useData, type Role } from "@/lib/store";
import { cn } from "@/lib/utils";

function timeLabel(iso: string) {
  const d = new Date(iso);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  return sameDay
    ? d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " · " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

export default function MessagesPage() {
  const data = useData();
  const me = useRole();
  const [other, setOther] = useState<Role | null>(null);
  const [text, setText] = useState("");
  const bottom = useRef<HTMLDivElement>(null);

  const contacts = me ? CONTACTS[me] : [];
  const active = other ?? null;
  const conv = data && me && active ? conversation(me, active, data) : null;

  // Marquer comme lu à l'ouverture et à chaque nouveau message reçu.
  useEffect(() => {
    if (conv && me && conv.unread > 0) actions.readThread(conv.thread, me);
  }, [conv, me]);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [conv?.list.length, active]);

  if (!data || !me) return null;

  function send() {
    const t = text.trim();
    if (!t || !active || !me) return;
    actions.sendMessage(me, active, t);
    setText("");
  }

  return (
    <div>
      <PageHeader eyebrow="Messagerie" title="Messages" description={me === "eleve" ? "Écris à ton professeur ou à la direction. Les réponses arrivent ici, avec une notification." : me === "prof" ? "Échangez avec l’élève et la direction. Les réponses arrivent ici, avec une notification." : "Échangez avec l’élève et le professeur. Les réponses arrivent ici, avec une notification."} />

      <Card className="grid h-[calc(100dvh-16rem)] min-h-[460px] overflow-hidden md:grid-cols-[300px_1fr]">
        {/* Liste des conversations */}
        <div className={cn("flex flex-col border-r border-border", active && "hidden md:flex")}>
          <p className="px-5 pt-5 pb-3 text-xs font-bold tracking-[0.16em] text-mist-500 uppercase">Conversations</p>
          {contacts.map((c, i) => {
            const cv = conversation(me, c, data);
            return (
              <motion.button
                key={c}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOther(c)}
                className={cn(
                  "flex cursor-pointer items-center gap-3 border-l-2 px-5 py-3.5 text-left transition-colors hover:bg-fg/[0.04]",
                  active === c ? "border-brand-400 bg-fg/[0.05]" : "border-transparent",
                )}
              >
                <ContactAvatar role={c} data={data} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate font-semibold">{displayName(c, data)}</span>
                    {cv.last && <span className="shrink-0 text-[0.68rem] text-mist-500">{timeLabel(cv.last.at)}</span>}
                  </span>
                  <span className="flex items-center justify-between gap-2">
                    <span className={cn("truncate text-sm", cv.unread ? "font-semibold text-mist-100" : "text-mist-500")}>
                      {cv.last ? `${cv.last.from === me ? "Toi : " : ""}${cv.last.text}` : ROLE_TITLE[c]}
                    </span>
                    {cv.unread > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.65rem] font-bold text-white">{cv.unread}</span>
                    )}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Conversation */}
        {active && conv ? (
          <div className="flex min-h-0 flex-col">
            <div className="flex items-center gap-3 border-b border-border px-4 py-3 sm:px-5">
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Retour" onClick={() => setOther(null)}>
                <ArrowLeft />
              </Button>
              <ContactAvatar role={active} data={data} className="size-10" />
              <div>
                <p className="font-semibold">{displayName(active, data)}</p>
                <p className="text-xs text-mist-500">{ROLE_TITLE[active]}</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
              {conv.list.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-mist-500">
                  <MessageCircle className="size-10 text-brand-300" />
                  <p className="text-sm">Aucun message pour l’instant. Écris le premier !</p>
                </div>
              )}
              <div className="flex flex-col gap-2.5">
                <AnimatePresence initial={false}>
                  {conv.list.map((m) => {
                    const mine = m.from === me;
                    return (
                      <motion.div
                        key={m.id}
                        layout
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={cn("flex max-w-[80%] flex-col gap-1", mine ? "self-end items-end" : "self-start items-start")}
                      >
                        <div
                          className={cn(
                            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                            mine ? "rounded-br-md bg-[linear-gradient(135deg,#818cf8,#6366f1_50%,#7c3aed)] text-white" : "rounded-bl-md border border-border bg-fg/[0.05]",
                          )}
                        >
                          {m.text}
                        </div>
                        <span className="flex items-center gap-1 text-[0.65rem] text-mist-500">
                          {timeLabel(m.at)}
                          {mine && (m.readAt ? <CheckCheck className="size-3 text-sky-400" /> : <Check className="size-3" />)}
                          {mine && (m.readAt ? "Lu" : "Envoyé")}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                <div ref={bottom} />
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-end gap-2 border-t border-border p-3 sm:p-4"
            >
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder={`Écrire à ${displayName(active, data)}…`}
                className="max-h-40 min-h-11 resize-none py-2.5"
                rows={1}
              />
              <Button type="submit" size="icon" disabled={!text.trim()} aria-label="Envoyer">
                <Send />
              </Button>
            </form>
          </div>
        ) : (
          <div className="hidden flex-col items-center justify-center gap-3 p-8 text-center md:flex">
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#818cf8,#c026d3)] text-white shadow-xl"
            >
              <MessageCircle className="size-7" />
            </motion.span>
            <p className="font-display text-xl font-bold">Choisis une conversation</p>
            <p className="max-w-sm text-sm text-mist-500">Les messages sont enregistrés et le destinataire est prévenu par une notification.</p>
          </div>
        )}
      </Card>
    </div>
  );
}
