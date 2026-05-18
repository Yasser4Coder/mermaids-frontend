import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { isShortViewport, SALON_PINNED_MQ, shouldPinSalonReveal } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Editorial clinic split — scroll reveal (pinned on large viewports, scrub on short/narrow).
 * @param {import('react').RefObject<HTMLElement | null>} stackRef
 * @param {import('react').RefObject<HTMLElement | null>} pinRef
 */
export function useClinicRevealScrollTrigger(stackRef, pinRef) {
  useLayoutEffect(() => {
    const stack = stackRef.current;
    const pin = pinRef.current;
    if (!stack || !pin) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const headBits = pin.querySelectorAll(
      ".clinic-suite__eyebrow, .clinic-suite__title-line, .clinic-suite__title-accent, .clinic-suite__lede, .clinic-suite__cards-label"
    );
    const cards = pin.querySelectorAll(".clinic-suite__card");
    const trust = pin.querySelector(".clinic-suite__trust");
    const closing = pin.querySelector(".clinic-suite__closing");
    const heroMedia = pin.querySelector(".clinic-suite__hero-media");
    const heroOverlay = pin.querySelector(".clinic-suite__hero-overlay");
    const footerBits = [trust, closing].filter(Boolean);
    const allTargets = [...headBits, ...cards, ...footerBits, heroMedia, heroOverlay].filter(Boolean);

    if (reduced) {
      stack.classList.remove("clinic-reveal-stack--scrub");
      gsap.set(pin, { clearProps: "all" });
      gsap.set(allTargets, { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1 });
      gsap.set(pin.querySelector(".clinic-suite__hero-img"), { clearProps: "all", scale: 1 });
      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      };
    }

    let ctx;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const pinned = shouldPinSalonReveal();
        const short = isShortViewport();
        const heroImg = pin.querySelector(".clinic-suite__hero-img");

        stack.classList.toggle("clinic-reveal-stack--scrub", !pinned);

        const headY = short ? 18 : 28;
        const cardY = short ? 32 : 48;
        const heroScale = short ? 1.04 : 1.08;

        gsap.set(headBits, { opacity: 0, y: headY });
        gsap.set(cards, { opacity: 0, y: cardY });
        gsap.set(footerBits, { opacity: 0, y: short ? 14 : 22 });
        if (heroMedia) gsap.set(heroMedia, { opacity: 0, scale: heroScale });
        if (heroOverlay) gsap.set(heroOverlay, { opacity: 0, y: short ? 16 : 24 });
        if (heroImg) gsap.set(heroImg, { scale: heroScale });

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${window.innerHeight * (short ? 0.95 : 1.15)}`,
              pin,
              scrub: 1.1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          : {
              trigger: stack,
              start: "top bottom",
              end: () => `+=${window.innerHeight * (short ? 0.7 : 0.85)}`,
              scrub: 1,
              invalidateOnRefresh: true,
              onLeave: (self) => {
                if (self.progress >= 0.99) {
                  gsap.set(allTargets, { opacity: 1, y: 0, x: 0, scale: 1 });
                  if (heroImg) gsap.set(heroImg, { scale: 1 });
                }
              },
              onLeaveBack: (self) => {
                if (self.progress <= 0.01) {
                  gsap.set(headBits, { opacity: 0, y: headY });
                  gsap.set(cards, { opacity: 0, y: cardY });
                  gsap.set(footerBits, { opacity: 0, y: short ? 14 : 22 });
                  if (heroMedia) gsap.set(heroMedia, { opacity: 0, scale: heroScale });
                  if (heroOverlay) gsap.set(heroOverlay, { opacity: 0, y: short ? 16 : 24 });
                  if (heroImg) gsap.set(heroImg, { scale: heroScale });
                }
              },
            };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger,
        });

        const headIn = pinned ? 0.06 : 0.1;
        const cardsIn = pinned ? 0.2 : 0.26;
        const heroIn = pinned ? 0.08 : 0.12;
        const footerIn = pinned ? 0.72 : 0.68;

        tl.to(headBits, { opacity: 1, y: 0, duration: 0.24, stagger: 0.05, ease: LUXURY_EASE }, headIn);

        if (heroMedia) {
          tl.to(
            heroMedia,
            { opacity: 1, scale: 1, duration: 0.42, ease: LUXURY_EASE },
            heroIn
          );
        }
        if (heroImg) {
          tl.to(heroImg, { scale: 1, duration: 0.42, ease: LUXURY_EASE }, heroIn);
        }

        tl.to(cards, { opacity: 1, y: 0, duration: 0.3, stagger: 0.07, ease: LUXURY_EASE }, cardsIn);

        tl.to(footerBits, { opacity: 1, y: 0, duration: 0.22, stagger: 0.06, ease: LUXURY_EASE }, footerIn);

        if (heroOverlay) {
          tl.to(heroOverlay, { opacity: 1, y: 0, duration: 0.24, ease: LUXURY_EASE }, footerIn + 0.08);
        }

        requestAnimationFrame(() => ScrollTrigger.refresh());
        setTimeout(() => ScrollTrigger.refresh(), 400);
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
      stack.classList.remove("clinic-reveal-stack--scrub");
      layoutMq.removeEventListener("change", onLayoutChange);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx?.revert();
    };
  }, [stackRef, pinRef]);
}
