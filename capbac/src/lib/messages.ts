import { threadMembers, threadOf, type AppData, type Message, type Role, type ThreadId } from "./store";

export const CONTACTS: Record<Role, Role[]> = {
  eleve: ["prof", "directeur"],
  prof: ["eleve", "directeur"],
  directeur: ["eleve", "prof"],
};

export function displayName(role: Role, data: AppData) {
  if (role === "eleve") return `${data.profile?.firstName ?? "Élève"} ${data.profile?.lastName ?? ""}`.trim();
  return data.accounts[role].name;
}

export const ROLE_TITLE: Record<Role, string> = { eleve: "Élève", prof: "Professeur", directeur: "Direction" };

/** Messages reçus non lus par `me`. */
export function unreadFor(me: Role, data: AppData): Message[] {
  return data.messages.filter((m) => m.from !== me && !m.readAt && threadMembers(m.thread).includes(me));
}

export function threadMessages(thread: ThreadId, data: AppData) {
  return data.messages.filter((m) => m.thread === thread).sort((a, b) => a.at.localeCompare(b.at));
}

export function conversation(me: Role, other: Role, data: AppData) {
  const thread = threadOf(me, other);
  const list = threadMessages(thread, data);
  return { thread, list, last: list[list.length - 1], unread: list.filter((m) => m.from !== me && !m.readAt).length };
}
