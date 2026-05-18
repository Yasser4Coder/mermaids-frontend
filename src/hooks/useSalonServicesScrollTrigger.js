import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { isShortViewport, SALON_PINNED_MQ, shouldPinSalonReveal } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Salon showcase reveal — pinned scrub on large viewports; scroll-through scrub on short/narrow.
 * @param {import('react').RefObject<HTMLElement | null>} stackRef
 * @param {import('react').RefObject<HTMLElement | null>} pinRef
 */
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

    if (reduced) {
      stack.classList.remove("services-reveal-stack--scrub");
      gsap.set(pin, { clearProps: "all" });
      gsap.set(allTargets, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
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

        stack.classList.toggle("services-reveal-stack--scrub", !pinned);

        const headY = short ? 22 : 36;
        const cardY = short ? 36 : 72;
        const cardScale = short ? 0.94 : 0.9;

        gsap.set(headBits, { opacity: 0, y: headY });
        gsap.set(cards, { opacity: 0, y: cardY, scale: cardScale });
        if (footer) gsap.set(footer, { opacity: 0, y: short ? 16 : 24 });

        /* Scrub: animate while section top moves from bottom edge into view (not while scrolling past it) */
        const scrubEnd = short ? "top 28%" : "top 22%";

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${window.innerHeight * 1.05}`,
              pin,
              scrub: 1.1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          : {
              trigger: stack,
              start: "top bottom",
              end: scrubEnd,
              scrub: 1,
              invalidateOnRefresh: true,
              /* Keep fully revealed once user has scrolled into the section */
              onLeave: (self) => {
                if (self.progress >= 0.99) {
                  gsap.set(allTargets, { opacity: 1, y: 0, scale: 1 });
                }
              },
              onLeaveBack: (self) => {
                if (self.progress <= 0.01) {
                  gsap.set(headBits, { opacity: 0, y: headY });
                  gsap.set(cards, { opacity: 0, y: cardY, scale: cardScale });
                  if (footer) gsap.set(footer, { opacity: 0, y: short ? 16 : 24 });
                }
              },
            };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger,
        });

        if (pinned) {
          tl.to(headBits, { opacity: 1, y: 0, duration: 0.28, stagger: 0.06, ease: LUXURY_EASE }, 0.06);
          tl.to(
            cards,
            { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.09, ease: LUXURY_EASE },
            0.28
          );
          if (footer) {
            tl.to(footer, { opacity: 1, y: 0, duration: 0.22, ease: LUXURY_EASE }, 0.72);
          }
        } else {
          tl.to(headBits, { opacity: 1, y: 0, duration: 0.22, stagger: 0.05, ease: LUXURY_EASE }, 0.08);
          tl.to(
            cards,
            { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: LUXURY_EASE },
            0.38
          );
          if (footer) {
            tl.to(footer, { opacity: 1, y: 0, duration: 0.18, ease: LUXURY_EASE }, 0.82);
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
