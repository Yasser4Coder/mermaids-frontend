import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import {
  MOBILE_REVEAL_START,
  mobileScrollTimeline,
  skipRevealIfInView,
} from "../lib/mobileReveal";
import { getRevealScrollLength, isNarrowViewport, isShortViewport } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Scroll reveal for home sections. Mobile uses play-on-enter (no scrub) for smoother touch scroll.
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

    const revealAll = () => {
      gsap.set(slideEls, { opacity: 1, y: 0, clearProps: "transform,opacity" });
      gsap.set(fadeEls, { opacity: 1, clearProps: "opacity" });
    };

    if (reduced) {
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
        const narrow = isNarrowViewport();
        const short = isShortViewport();
        const y = yOverride ?? (narrow ? 10 : short ? 18 : 28);

        gsap.set(slideEls, { opacity: 0, y });
        gsap.set(fadeEls, { opacity: 0 });

        if (narrow) {
          const mobileStart = start === "top bottom" ? MOBILE_REVEAL_START : start;
          const steps = [];

          if (slideEls.length) {
            steps.push({
              elements: slideEls,
              to: { opacity: 1, y: 0 },
              duration: 0.48,
              stagger,
              at: 0,
            });
          }
          if (fadeEls.length) {
            steps.push({
              elements: fadeEls,
              to: { opacity: 1 },
              duration: 0.42,
              at: slideEls.length ? 0.1 : 0,
            });
          }

          if (!skipRevealIfInView(section, revealAll)) {
            mobileScrollTimeline(section, { revealAll, start: mobileStart, steps });
          }

          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        if (skipRevealIfInView(section, revealAll)) {
          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        const scrollEnd =
          typeof endOverride === "function"
            ? endOverride
            : endOverride ??
              (short ? () => `+=${getRevealScrollLength(0.55)}` : "top 44%");

        const scrollTrigger = {
          trigger: section,
          start,
          end: scrollEnd,
          scrub: scrubAmount,
          invalidateOnRefresh: true,
          onEnter: (self) => {
            if (self.progress > 0.12) revealAll();
          },
          onLeave: (self) => {
            if (self.progress >= 0.98) revealAll();
          },
          onLeaveBack: (self) => {
            if (self.progress <= 0.02) {
              gsap.set(slideEls, { opacity: 0, y });
              gsap.set(fadeEls, { opacity: 0 });
            }
          },
        };

        const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

        if (slideEls.length) {
          tl.to(slideEls, { opacity: 1, y: 0, duration: 0.5, stagger, ease: LUXURY_EASE }, 0.08);
        }
        if (fadeEls.length) {
          tl.to(fadeEls, { opacity: 1, duration: 0.45, ease: LUXURY_EASE }, slideEls.length ? 0.4 : 0.1);
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
