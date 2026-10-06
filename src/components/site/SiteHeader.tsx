"use client";

import * as React from "react";

import { menuLinks, menuSlides, navbarLinks, site } from "@/content/site";
import { Logo } from "@/components/site/Logo";
import { SmartLink } from "@/components/site/PageTransition";
import { Slideshow } from "@/components/site/Slideshow";
import { SocialLinks } from "@/components/site/Social";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const MENU_ID = "menu-principal";

function BurgerIcon({ open }: { open: boolean }) {
  const line =
    "absolute left-1/2 top-1/2 -mt-[0.75px] h-[1.5px] w-[18px] -translate-x-1/2 rounded-full bg-silver-100 transition-[translate,rotate,opacity] duration-[250ms] ease-lux";
  return (
    <span aria-hidden className="relative block size-full">
      <span
        className={cn(
          line,
          open ? "translate-y-0 rotate-45" : "-translate-y-[6px]",
        )}
      />
      <span className={cn(line, open && "opacity-0")} />
      <span
        className={cn(
          line,
          open ? "translate-y-0 -rotate-45" : "translate-y-[6px]",
        )}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);
  const close = () => setOpen(false);

  // Navbar grande en haut de page, plus compacte dès que l'on descend.
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.scrollY > 40);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Navbar pilule flottante — au-dessus du menu pour garder le bouton croix visible. */}
      <header
        ref={navRef}
        data-compact={compact || open}
        className="group/nav pointer-events-auto fixed left-1/2 top-[22px] z-[200] w-[94vw] -translate-x-1/2 transition-[top,width] duration-700 ease-lux data-[compact=true]:top-[14px] data-[compact=true]:w-[min(560px,92vw)] nav:w-[min(1080px,94vw)] nav:data-[compact=true]:w-[min(760px,92vw)]"
      >
        <nav
          aria-label="Navigation principale"
          className="nav-enter flex h-[74px] items-center justify-between gap-4 rounded-full border border-[rgba(199,209,219,0.12)] bg-[rgba(14,22,38,0.32)] pl-4 pr-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-[14px] transition-[height,background-color,box-shadow,padding,border-color] duration-700 ease-lux group-data-[compact=true]/nav:h-[60px] group-data-[compact=true]/nav:border-[rgba(199,209,219,0.16)] group-data-[compact=true]/nav:bg-[rgba(14,22,38,0.7)] group-data-[compact=true]/nav:pl-3 group-data-[compact=true]/nav:pr-[9px] group-data-[compact=true]/nav:shadow-[0_10px_34px_rgba(0,0,0,0.45)]"
        >
          <SmartLink
            href="/"
            onClick={close}
            navigateDelay={open ? 380 : 0}
            className="flex items-center gap-2.5 rounded-full pr-2"
            aria-label="GoldenChance, accueil"
          >
            <span className="block size-[52px] transition-[width,height] duration-700 ease-lux group-data-[compact=true]/nav:size-10">
              <Logo size={52} priority decorative className="!size-full" />
            </span>
            <span className="font-serif text-[1.42rem] font-semibold tracking-[0.01em] text-silver-100 transition-[font-size] duration-700 ease-lux group-data-[compact=true]/nav:text-[1.18rem]">
              {site.name}
            </span>
          </SmartLink>

          <ul className="hidden items-center gap-9 transition-[gap] duration-700 ease-lux group-data-[compact=true]/nav:gap-7 nav:flex">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <SmartLink
                  href={link.href}
                  onClick={close}
                  navigateDelay={open ? 380 : 0}
                  className="group/link relative rounded py-1 text-[0.95rem] font-medium text-silver-300 transition-colors duration-200 hover:text-gold-300"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-300 to-gold-400 transition-transform duration-500 ease-lux group-hover/link:scale-x-100"
                  />
                </SmartLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="size-[48px] shrink-0 cursor-pointer rounded-full border border-[rgba(199,209,219,0.18)] bg-[rgba(199,209,219,0.06)] transition-[width,height,background-color,border-color] duration-700 ease-lux hover:border-gold-300/50 hover:bg-[rgba(199,209,219,0.12)] group-data-[compact=true]/nav:size-[42px]"
          >
            <BurgerIcon open={open} />
          </button>
        </nav>
      </header>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogContent
            id={MENU_ID}
            aria-describedby={undefined}
            onInteractOutside={(event) => {
              // Le bouton burger de la navbar gère lui-même l'ouverture / fermeture.
              if (navRef.current?.contains(event.target as Node))
                event.preventDefault();
            }}
            className="menu-overlay z-[150] overflow-y-auto bg-[linear-gradient(180deg,rgba(5,8,16,0.94),rgba(5,8,16,0.985))]"
          >
            <DialogTitle className="sr-only">Menu</DialogTitle>

            {/* Arrière-plan ambiant : diaporama plein écran, discret. */}
            <Slideshow
              images={menuSlides}
              interval={3000}
              fade={1400}
              sizes="100vw"
              decorative
              className="fixed inset-0 opacity-40"
              imageClassName="scale-105 blur-[2px] saturate-[0.7] grayscale-[0.2]"
            />
            <div
              aria-hidden
              className="fixed inset-0 bg-[radial-gradient(120%_100%_at_30%_40%,rgba(5,8,16,0.35),rgba(5,8,16,0.85))]"
            />

            <div
              className="relative flex min-h-full items-center justify-center px-7 pb-10 pt-[104px] nav:pb-14 nav:pt-[120px]"
              onClick={(event) => {
                if (event.target === event.currentTarget) close();
              }}
            >
              <div className="flex w-full max-w-[980px] flex-col-reverse items-center gap-7 nav:flex-row nav:items-center nav:justify-between nav:gap-16">
                <div className="flex flex-col items-center text-center nav:items-start nav:text-left">
                  <p className="mb-4 text-[0.72rem] nav:mb-7 font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {site.slogan}
                  </p>
                  <ul className="flex flex-col gap-1 nav:gap-2">
                    {menuLinks.map((link) => (
                      <li key={link.href}>
                        <SmartLink
                          href={link.href}
                          onClick={close}
                          navigateDelay={open ? 380 : 0}
                          className="inline-block rounded font-serif text-[clamp(2rem,6vw,3.2rem)] font-medium leading-[1.1] text-silver-100 transition-colors duration-200 hover:text-gold-300"
                        >
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                  <SocialLinks size={52} className="mt-6 nav:mt-9" />
                </div>

                {/* Carré photo : 4 photos en fondu enchaîné, en boucle, net. */}
                <Slideshow
                  images={menuSlides}
                  interval={2400}
                  fade={1000}
                  sizes="(min-width: 900px) 300px, 220px"
                  label="Aperçu des lots GoldenChance"
                  className="h-[280px] w-[220px] shrink-0 rounded-[24px] border border-[rgba(199,209,219,0.16)] shadow-[0_30px_80px_rgba(0,0,0,0.6)] nav:h-[380px] nav:w-[300px]"
                />
              </div>
            </div>
            {/* Bouton de fermeture pour lecteurs d'écran (Échap ferme aussi le menu). */}
            <DialogClose className="sr-only">Fermer le menu</DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}
