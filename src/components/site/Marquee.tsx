import { marqueeWords } from "@/content/site";

function Words({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeWords.map((word) => (
        <li
          key={word}
          className="flex items-center whitespace-nowrap pl-[26px] font-serif text-[1.15rem] italic text-silver-300"
        >
          {word}
          <span aria-hidden className="ml-[26px] text-[0.85rem] not-italic text-gold-400">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Bandeau défilant infini (liste dupliquée pour une boucle parfaite). */
export function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-[rgba(199,209,219,0.1)] bg-[rgba(10,17,32,0.55)] py-[13px] backdrop-blur-[10px]"
      aria-label="Exemples de lots"
    >
      <div className="marquee-track flex w-max">
        <Words />
        <Words hidden />
      </div>
    </div>
  );
}
