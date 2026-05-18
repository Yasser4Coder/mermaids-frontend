import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { mobileScrollTimeline, skipRevealIfInView } from "../lib/mobileReveal";
import {
  getRevealScrollLength,
  isNarrowViewport,
  isShortViewport,
  SALON_PINNED_MQ,
  shouldPinSalonReveal,
} from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

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
    const heroImg = pin.querySelector(".clinic-suite__hero-img");
    const footerBits = [trust, closing].filter(Boolean);
    const allTargets = [...headBits, ...cards, ...footerBits, heroMedia, heroOverlay].filter(Boolean);

    const revealAll = () => {
      gsap.set(allTargets, { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" });
      if (heroImg) gsap.set(heroImg, { scale: 1, clearProps: "transform" });
    };

    if (reduced) {
      stack.classList.remove("clinic-reveal-stack--scrub");
      revealAll();
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
        const narrow = isNarrowViewport();
        const short = isShortViewport();

        stack.classList.toggle("clinic-reveal-stack--scrub", !pinned);

        const headY = narrow ? 10 : short ? 18 : 28;
        const cardY = narrow ? 14 : short ? 32 : 48;
        const heroScale = narrow ? 1 : short ? 1.04 : 1.08;

        gsap.set(headBits, { opacity: 0, y: headY });
        gsap.set(cards, { opacity: 0, y: cardY });
        gsap.set(footerBits, { opacity: 0, y: narrow ? 8 : short ? 14 : 22 });
        if (heroMedia) gsap.set(heroMedia, { opacity: 0, scale: heroScale });
        if (heroOverlay) gsap.set(heroOverlay, { opacity: 0, y: narrow ? 10 : short ? 16 : 24 });
        if (heroImg) gsap.set(heroImg, { scale: heroScale });

        if (narrow) {
          const steps = [
            { elements: headBits, to: { opacity: 1, y: 0 }, duration: 0.44, stagger: 0.04, at: 0 },
          ];
          if (heroMedia) {
            steps.push({
              elements: [heroMedia],
              to: { opacity: 1, scale: 1 },
              duration: 0.46,
              at: 0.06,
            });
          }
          if (heroImg) {
            steps.push({
              elements: [heroImg],
              to: { scale: 1 },
              duration: 0.46,
              at: 0.06,
            });
          }
          steps.push(
            { elements: cards, to: { opacity: 1, y: 0 }, duration: 0.48, stagger: 0.06, at: 0.12 },
            { elements: footerBits, to: { opacity: 1, y: 0 }, duration: 0.4, stagger: 0.05, at: 0.24 }
          );
          if (heroOverlay) {
            steps.push({
              elements: [heroOverlay],
              to: { opacity: 1, y: 0 },
              duration: 0.4,
              at: 0.3,
            });
          }

          if (!skipRevealIfInView(stack, revealAll)) {
            mobileScrollTimeline(stack, { revealAll, steps });
          }
          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${getRevealScrollLength(narrow ? 0.7 : 0.9)}`,
              pin,
              scrub: narrow ? 0.85 : 1.05,
              anticipatePin: narrow ? 0 : 1,
              invalidateOnRefresh: true,
              onLeave: () => revealAll(),
            }
          : {
              trigger: stack,
              start: narrow ? "top 92%" : "top bottom",
              end: () => `+=${getRevealScrollLength(0.65)}`,
              scrub: 0.85,
              invalidateOnRefresh: true,
              onEnter: (self) => {
                if (self.progress > 0.2) revealAll();
              },
              onLeave: (self) => {
                if (self.progress >= 0.98) revealAll();
              },
              onLeaveBack: (self) => {
                if (self.progress <= 0.02) {
                  gsap.set(headBits, { opacity: 0, y: headY });
                  gsap.set(cards, { opacity: 0, y: cardY });
                  gsap.set(footerBits, { opacity: 0, y: narrow ? 10 : short ? 14 : 22 });
                  if (heroMedia) gsap.set(heroMedia, { opacity: 0, scale: heroScale });
                  if (heroOverlay) gsap.set(heroOverlay, { opacity: 0, y: narrow ? 12 : short ? 16 : 24 });
                  if (heroImg) gsap.set(heroImg, { scale: heroScale });
                }
              },
            };

        const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

        const headIn = pinned ? 0.06 : 0.08;
        const cardsIn = pinned ? 0.2 : 0.24;
        const heroIn = pinned ? 0.08 : 0.1;
        const footerIn = pinned ? 0.72 : 0.66;

        tl.to(headBits, { opacity: 1, y: 0, duration: 0.24, stagger: 0.05, ease: LUXURY_EASE }, headIn);

        if (heroMedia) {
          tl.to(heroMedia, { opacity: 1, scale: 1, duration: 0.42, ease: LUXURY_EASE }, heroIn);
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
