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

export function useSalonServicesScrollTrigger(stackRef, pinRef) {
  useLayoutEffect(() => {
    const stack = stackRef.current;
    const pin = pinRef.current;
    if (!stack || !pin) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const headBits = pin.querySelectorAll(
      ".mermaid-collection__eyebrow, .mermaid-collection__title, .mermaid-collection__tagline, .mermaid-collection__lede, .mermaid-collection__rule"
    );
    const cards = pin.querySelectorAll(".salon-showcase-card");
    const footer = pin.querySelector(".mermaid-collection__footer");
    const allTargets = [...headBits, ...cards, footer].filter(Boolean);

    const revealAll = () => {
      gsap.set(allTargets, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
    };

    if (reduced) {
      stack.classList.remove("services-reveal-stack--scrub");
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

        stack.classList.toggle("services-reveal-stack--scrub", !pinned);

        const headY = narrow ? 10 : short ? 22 : 36;
        const cardY = narrow ? 14 : short ? 36 : 72;
        const cardScale = narrow ? 1 : short ? 0.94 : 0.9;

        gsap.set(headBits, { opacity: 0, y: headY });
        gsap.set(cards, { opacity: 0, y: cardY, scale: cardScale });
        if (footer) gsap.set(footer, { opacity: 0, y: narrow ? 8 : short ? 16 : 24 });

        if (narrow) {
          if (!skipRevealIfInView(stack, revealAll)) {
            mobileScrollTimeline(stack, {
              revealAll,
              steps: [
                { elements: headBits, to: { opacity: 1, y: 0 }, duration: 0.44, stagger: 0.04, at: 0 },
                { elements: cards, to: { opacity: 1, y: 0, scale: 1 }, duration: 0.5, stagger: 0.06, at: 0.08 },
                ...(footer
                  ? [{ elements: [footer], to: { opacity: 1, y: 0 }, duration: 0.4, at: 0.22 }]
                  : []),
              ],
            });
          }
          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${getRevealScrollLength(narrow ? 0.75 : 0.95)}`,
              pin,
              scrub: narrow ? 0.85 : 1.05,
              anticipatePin: narrow ? 0 : 1,
              invalidateOnRefresh: true,
              onLeave: () => revealAll(),
            }
          : {
              trigger: stack,
              start: narrow ? "top 92%" : "top bottom",
              end: () => `+=${getRevealScrollLength(0.7)}`,
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
                  gsap.set(cards, { opacity: 0, y: cardY, scale: cardScale });
                  if (footer) gsap.set(footer, { opacity: 0, y: narrow ? 12 : short ? 16 : 24 });
                }
              },
            };

        const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

        if (pinned) {
          tl.to(headBits, { opacity: 1, y: 0, duration: 0.28, stagger: 0.06, ease: LUXURY_EASE }, 0.06);
          tl.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.09, ease: LUXURY_EASE }, 0.28);
          if (footer) {
            tl.to(footer, { opacity: 1, y: 0, duration: 0.22, ease: LUXURY_EASE }, 0.72);
          }
        } else {
          tl.to(headBits, { opacity: 1, y: 0, duration: 0.22, stagger: 0.05, ease: LUXURY_EASE }, 0.06);
          tl.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: LUXURY_EASE }, 0.32);
          if (footer) {
            tl.to(footer, { opacity: 1, y: 0, duration: 0.18, ease: LUXURY_EASE }, 0.78);
          }
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
      stack.classList.remove("services-reveal-stack--scrub");
      layoutMq.removeEventListener("change", onLayoutChange);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx?.revert();
    };
  }, [stackRef, pinRef]);
}
