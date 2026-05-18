import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { isShortViewport } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Scroll-scrub reveal for standalone home sections (trust, booking, CTA).
 * @param {import('react').RefObject<HTMLElement | null>} sectionRef
 * @param {{
 *   targets?: string;
 *   slideTargets?: string;
 *   fadeTargets?: string;
 *   stagger?: number;
 *   y?: number;
 *   start?: string;
 *   end?: string;
 *   scrub?: number;
 * }} [config]
 */
export function useSectionRevealScrollTrigger(sectionRef, config = {}) {
  const {
    targets,
    slideTargets = targets ?? ".section-reveal-item",
    fadeTargets,
    stagger = 0.09,
    y: yOverride,
    start = "top bottom",
    end: endOverride,
    scrub: scrubAmount = 1,
  } = config;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const slideEls = slideTargets ? section.querySelectorAll(slideTargets) : [];
    const fadeEls = fadeTargets ? section.querySelectorAll(fadeTargets) : [];
    const allEls = [...slideEls, ...fadeEls];

    if (!allEls.length) return;

    if (reduced) {
      gsap.set(allEls, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      };
    }

    let ctx;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const short = isShortViewport();
        const y = yOverride ?? (short ? 18 : 28);
        const scrubEnd = endOverride ?? (short ? "top 36%" : "top 44%");

        gsap.set(slideEls, { opacity: 0, y });
        gsap.set(fadeEls, { opacity: 0 });

        const scrollTrigger = {
          trigger: section,
          start,
          end: scrubEnd,
          scrub: scrubAmount,
          invalidateOnRefresh: true,
          onLeave: (self) => {
            if (self.progress >= 0.99) {
              gsap.set(slideEls, { opacity: 1, y: 0 });
              gsap.set(fadeEls, { opacity: 1 });
            }
          },
          onLeaveBack: (self) => {
            if (self.progress <= 0.01) {
              gsap.set(slideEls, { opacity: 0, y });
              gsap.set(fadeEls, { opacity: 0 });
            }
          },
        };

        const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

        if (slideEls.length) {
          tl.to(slideEls, { opacity: 1, y: 0, duration: 0.5, stagger, ease: LUXURY_EASE }, 0.1);
        }
        if (fadeEls.length) {
          tl.to(fadeEls, { opacity: 1, duration: 0.45, ease: LUXURY_EASE }, slideEls.length ? 0.42 : 0.12);
        }

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, section);
    };

    build();
    const onResize = () => {
      build();
      refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("resize", onResize);
      ctx?.revert();
    };
  }, [sectionRef, slideTargets, fadeTargets, stagger, yOverride, start, endOverride, scrubAmount]);
}
