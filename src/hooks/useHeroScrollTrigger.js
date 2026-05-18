import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { isShortViewport, SALON_PINNED_MQ, shouldUseScrollScrubReveal } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Hero promo → welcome: pinned scrub on large viewports; natural scroll on mobile / short.
 */
export function useHeroScrollTrigger(stackRef, pinRef, cardRef, sheetRef) {
  useLayoutEffect(() => {
    const stack = stackRef.current;
    const pin = pinRef.current;
    const card = cardRef.current;
    const sheet = sheetRef.current;

    if (!stack || !pin || !card || !sheet) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const welcomeInner = sheet.querySelector(".brand-welcome__inner");
    const welcomeLines = sheet.querySelectorAll(".brand-welcome__line");
    const welcomeSparkles = sheet.querySelector(".brand-welcome__sparkles");
    const welcomeBits = [welcomeInner, ...welcomeLines, welcomeSparkles].filter(Boolean);

    const resetWelcome = () => {
      gsap.set(sheet, { yPercent: 0, clearProps: "transform" });
      gsap.set(welcomeBits, { opacity: 1, y: 0, filter: "none", clearProps: "all" });
    };

    if (reduced) {
      resetWelcome();
      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      };
    }

    let ctx;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const useScrub = shouldUseScrollScrubReveal();
        const short = isShortViewport();

        stack.classList.toggle("hero-reveal-stack--scrub", useScrub);

        const heroBg = card.querySelector(".hero-ads__bg");
        const heroVeil = card.querySelector(".hero-ads__veil");
        const heroLayout = card.querySelector(".hero-ads__layout");
        const heroBrand = card.querySelector(".hero-ads__brand");
        const heroCue = card.querySelector(".hero-ads__scroll-cue");
        const heroNav = card.querySelectorAll(".hero-ads__nav, .hero-ads__pagination");
        const backdropImg = stack.querySelector(".hero-reveal-stack__backdrop-img");

        const syncBodyState = (progress) => {
          const body = document.body;
          if (useScrub) {
            body.classList.toggle("is-hero-collapsed", progress >= 0.92);
            body.classList.toggle("is-hero-collapsing", progress > 0.08 && progress < 0.92);
            body.classList.toggle("nav-shell--revealed", progress > 0.35);
            return;
          }
          body.classList.toggle("is-hero-collapsing", progress > 0.02 && progress < 0.98);
          body.classList.toggle("is-hero-collapsed", progress >= 0.98);
          body.classList.toggle("nav-shell--revealed", progress > 0.05);
        };

        gsap.set(welcomeInner, { opacity: 0, y: short ? 24 : 40 });
        gsap.set(welcomeLines, { opacity: 0, y: short ? 18 : 28, filter: "blur(6px)" });
        if (welcomeSparkles) gsap.set(welcomeSparkles, { opacity: 0 });

        if (useScrub) {
          gsap.set(sheet, { clearProps: "transform", yPercent: 0 });
          gsap.set(card, { clearProps: "transform", opacity: 1, scale: 1 });

          const scrollTrigger = {
            trigger: stack,
            start: "top bottom",
            end: short ? "top 30%" : "top 24%",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => syncBodyState(self.progress),
            onLeave: (self) => {
              if (self.progress >= 0.99) resetWelcome();
            },
          };

          const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

          if (backdropImg) {
            tl.to(backdropImg, { scale: 1.06, opacity: 0.75, duration: 0.4, ease: LUXURY_EASE }, 0);
          }

          if (heroLayout) {
            tl.to(heroLayout, { y: short ? -28 : -40, opacity: 0, duration: 0.32, ease: LUXURY_EASE }, 0.08);
          }

          if (heroBrand) {
            tl.to(heroBrand, { opacity: 0, y: -20, duration: 0.28, ease: LUXURY_EASE }, 0.1);
          }

          if (heroCue) {
            tl.to(heroCue, { opacity: 0, duration: 0.15 }, 0.05);
          }

          if (heroNav.length) {
            tl.to(heroNav, { opacity: 0, duration: 0.18 }, 0.06);
          }

          tl.to(
            card,
            {
              opacity: 0,
              scale: 0.96,
              y: short ? -32 : -48,
              duration: 0.38,
              ease: "power1.in",
            },
            0.22
          );

          tl.to(welcomeInner, { opacity: 1, y: 0, duration: 0.28, ease: LUXURY_EASE }, 0.38);
          tl.to(
            welcomeLines,
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.3, stagger: 0.06, ease: LUXURY_EASE },
            0.44
          );
          if (welcomeSparkles) {
            tl.to(welcomeSparkles, { opacity: 1, duration: 0.22, ease: LUXURY_EASE }, 0.62);
          }

          syncBodyState(0);
          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        const scrollDistance = () => window.innerHeight * (short ? 0.92 : 1.22);
        const cardLift = () => -window.innerHeight * (short ? 0.038 : 0.055);
        const cardExitY = () => -window.innerHeight * (short ? 0.07 : 0.11);
        const cardScale = short ? 0.93 : 0.9;
        const cardRadius = short ? 24 : 32;

        gsap.set(sheet, { yPercent: 100 });
        gsap.set(card, { clearProps: "opacity,scale,y" });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stack,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            pin,
            scrub: short ? 0.95 : 1.15,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => syncBodyState(self.progress),
          },
        });

        tl.to(
          card,
          {
            scale: cardScale,
            y: cardLift,
            borderRadius: cardRadius,
            boxShadow: "0 28px 80px rgba(18, 10, 14, 0.38)",
            duration: 0.38,
            ease: LUXURY_EASE,
          },
          0
        );

        if (backdropImg) {
          tl.to(backdropImg, { scale: short ? 1.1 : 1.18, yPercent: -6, duration: 0.42, ease: LUXURY_EASE }, 0);
        }

        if (heroBg) {
          tl.to(heroBg, { scale: 1.1, yPercent: -5, duration: 0.38, ease: LUXURY_EASE }, 0);
        }

        if (heroVeil) {
          tl.to(heroVeil, { opacity: 0.32, duration: 0.35 }, 0);
        }

        if (heroLayout) {
          tl.to(heroLayout, { yPercent: short ? -8 : -11, opacity: 0.22, duration: 0.36, ease: LUXURY_EASE }, 0.02);
        }

        if (heroBrand) {
          tl.to(heroBrand, { yPercent: -20, opacity: 0, scale: 0.94, duration: 0.34, ease: LUXURY_EASE }, 0.04);
        }

        if (heroCue) {
          tl.to(heroCue, { opacity: 0, y: 16, duration: 0.15 }, 0);
        }

        if (heroNav.length) {
          tl.to(heroNav, { opacity: 0, duration: 0.2 }, 0.05);
        }

        tl.to(sheet, { yPercent: 0, duration: 0.52, ease: LUXURY_EASE }, 0.2);

        tl.to(
          card,
          { y: cardExitY, opacity: 0, duration: 0.4, ease: "power1.in" },
          0.32
        );

        tl.to(welcomeInner, { opacity: 1, y: 0, duration: 0.22, ease: LUXURY_EASE }, 0.5);
        tl.to(
          welcomeLines,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.32, stagger: 0.07, ease: LUXURY_EASE },
          0.54
        );
        if (welcomeSparkles) {
          tl.to(welcomeSparkles, { opacity: 1, duration: 0.28, ease: LUXURY_EASE }, 0.78);
        }

        syncBodyState(0);
        requestAnimationFrame(() => ScrollTrigger.refresh());
        setTimeout(() => ScrollTrigger.refresh(), 350);
      }, stack);
    };

    build();
    const layoutMq = window.matchMedia(SALON_PINNED_MQ);
    const onLayoutChange = () => {
      build();
      refresh();
    };
    layoutMq.addEventListener("change", onLayoutChange);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      layoutMq.removeEventListener("change", onLayoutChange);
      document.body.classList.remove("is-hero-collapsing", "is-hero-collapsed");
      stack.classList.remove("hero-reveal-stack--scrub");
      ctx?.revert();
    };
  }, [stackRef, pinRef, cardRef, sheetRef]);
}
