/**
 * Phrases motivantes : une différente chaque jour (dans l'ordre, en boucle).
 * Les citations attribuées sont des citations connues ; les autres sont sans auteur.
 */
export const QUOTES: { text: string; author?: string }[] = [
  { text: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.", author: "Attribué à Winston Churchill" },
  { text: "Chaque cours que tu suis aujourd’hui est une marche de plus vers ton bac." },
  { text: "Rien ne sert de courir ; il faut partir à point.", author: "Jean de La Fontaine" },
  { text: "La régularité bat le talent quand le talent n’est pas régulier." },
  { text: "Petit à petit, l’oiseau fait son nid.", author: "Proverbe" },
  { text: "Une erreur, c’est une leçon : lis bien la correction, elle est faite pour toi." },
  { text: "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles.", author: "Attribué à Oscar Wilde" },
  { text: "Aujourd’hui, fais juste un peu mieux qu’hier. C’est tout." },
  { text: "Le génie est fait d’un pour cent d’inspiration et de quatre-vingt-dix-neuf pour cent de transpiration.", author: "Attribué à Thomas Edison" },
  { text: "Tu n’as pas besoin d’être parfait, tu as besoin d’être présent." },
  { text: "C’est en forgeant qu’on devient forgeron.", author: "Proverbe" },
  { text: "Le plus dur, c’est de commencer. Ouvre ton premier cours, la suite viendra." },
  { text: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", author: "Attribué à Mark Twain" },
  { text: "Une note ne dit pas qui tu es : elle dit seulement ce qu’il te reste à apprendre." },
  { text: "L’éducation est l’arme la plus puissante pour changer le monde.", author: "Nelson Mandela" },
  { text: "Chaque exercice réussi, c’est une preuve que tu en es capable." },
  { text: "Qui veut voyager loin ménage sa monture.", author: "Jean Racine" },
  { text: "Concentre-toi sur le cours d’aujourd’hui, pas sur toute la montagne." },
  { text: "Le savoir est la seule richesse qu’on ne peut pas te prendre." },
  { text: "La persévérance est la noblesse de l’obstination." },
  { text: "Apprendre, c’est découvrir ce que tu sais déjà et le dépasser." },
  { text: "Le bac de français se prépare un texte après l’autre. Tu es sur la bonne route." },
  { text: "Tout ce qui est grand commence petit." },
  { text: "La motivation te fait commencer, l’habitude te fait continuer." },
  { text: "Il n’y a pas de raccourci vers un endroit qui vaut la peine.", author: "Proverbe" },
  { text: "Être là à chaque cours, c’est déjà la moitié de la réussite." },
  { text: "Le doute est le commencement de la sagesse.", author: "Attribué à Aristote" },
  { text: "Ton futur toi te remerciera pour le travail d’aujourd’hui." },
  { text: "On ne rate jamais vraiment tant qu’on continue d’essayer." },
  { text: "Lis, relis, comprends : la mémoire suivra." },
  { text: "La patience est amère, mais son fruit est doux.", author: "Attribué à Jean-Jacques Rousseau" },
  { text: "Chaque jour de présence compte. Chaque effort aussi." },
  { text: "Les grandes réussites sont faites de petites victoires répétées." },
  { text: "Celui qui déplace une montagne commence par déplacer de petites pierres.", author: "Proverbe chinois" },
  { text: "Tu es plus capable que tu ne le penses." },
  { text: "Le travail éloigne de nous trois grands maux : l’ennui, le vice et le besoin.", author: "Voltaire, Candide" },
  { text: "Pas à pas, chapitre après chapitre : c’est comme ça qu’on arrive au bac." },
  { text: "La confiance en soi se construit en tenant ses promesses envers soi-même." },
  { text: "Rien n’est plus fort qu’une habitude.", author: "Ovide" },
  { text: "Aujourd’hui est une nouvelle page : écris-la bien." },
];

/** Phrase du jour (stable pour une même date). */
export function quoteOfDay(date: Date) {
  const start = new Date(2026, 0, 1).getTime();
  const day = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - start) / 86_400_000);
  return QUOTES[((day % QUOTES.length) + QUOTES.length) % QUOTES.length];
}
