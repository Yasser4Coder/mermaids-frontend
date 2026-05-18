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

export function useSpaRevealScrollTrigger(stackRef, pinRef) {
  useLayoutEffect(() => {
    const stack = stackRef.current;
    const pin = pinRef.current;
    if (!stack || !pin) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const bridgeSheen = pin.querySelector(".spa-reveal-bridge__sheen");
    const bridgeLine = pin.querySelector(".spa-reveal-bridge__line");
    const bridgeLabel = pin.querySelector(".spa-reveal-bridge__label");
    const bridgeBits = [bridgeSheen, bridgeLine, bridgeLabel].filter(Boolean);

    const introBits = pin.querySelectorAll(
      ".spa-wellness__eyebrow, .spa-wellness__masthead, .spa-wellness__subtitle, .spa-wellness__lede"
    );
    const strips = pin.querySelectorAll(".spa-wellness__strip");
    const closing = pin.querySelector(".spa-wellness__closing");
    const allTargets = [...bridgeBits, ...introBits, ...strips, closing].filter(Boolean);

    const revealAll = () => {
      gsap.set(allTargets, { opacity: 1, y: 0, x: 0, scale: 1, scaleX: 1, clearProps: "all" });
    };

    if (reduced) {
      stack.classList.remove("spa-reveal-stack--scrub");
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

        stack.classList.toggle("spa-reveal-stack--scrub", !pinned);

        const bridgeY = narrow ? 8 : short ? 14 : 22;
        const introY = narrow ? 10 : short ? 20 : 32;
        const stripY = narrow ? 14 : short ? 40 : 56;

        gsap.set(bridgeSheen, { opacity: 0, scale: narrow ? 1 : 0.92 });
        gsap.set(bridgeLine, { opacity: 0, scaleX: narrow ? 1 : 0 });
        gsap.set(bridgeLabel, { opacity: 0, y: bridgeY });
        gsap.set(introBits, { opacity: 0, y: introY });
        gsap.set(strips, { opacity: 0, y: stripY });
        if (closing) gsap.set(closing, { opacity: 0, y: narrow ? 8 : short ? 16 : 24 });

        if (narrow) {
          const bridgeSteps = [];
          if (bridgeSheen) {
            bridgeSteps.push({
              elements: [bridgeSheen],
              to: { opacity: 1, scale: 1 },
              duration: 0.36,
              at: 0,
            });
          }
          if (bridgeLine) {
            bridgeSteps.push({
              elements: [bridgeLine],
              to: { opacity: 1, scaleX: 1 },
              duration: 0.38,
              at: 0.04,
            });
          }
          if (bridgeLabel) {
            bridgeSteps.push({
              elements: [bridgeLabel],
              to: { opacity: 1, y: 0 },
              duration: 0.38,
              at: 0.07,
            });
          }

          if (!skipRevealIfInView(stack, revealAll)) {
            mobileScrollTimeline(stack, {
              revealAll,
              steps: [
                ...bridgeSteps,
                { elements: introBits, to: { opacity: 1, y: 0 }, duration: 0.44, stagger: 0.04, at: 0.1 },
                { elements: strips, to: { opacity: 1, y: 0 }, duration: 0.5, stagger: 0.07, at: 0.18 },
                ...(closing
                  ? [{ elements: [closing], to: { opacity: 1, y: 0 }, duration: 0.4, at: 0.32 }]
                  : []),
              ],
            });
          }
          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

        gsap.set(bridgeSheen, { opacity: 0, scale: 0.92 });
        gsap.set(bridgeLine, { opacity: 0, scaleX: 0 });

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${getRevealScrollLength(narrow ? 0.85 : 1.05)}`,
              pin,
              scrub: narrow ? 0.85 : 1.1,
              anticipatePin: narrow ? 0 : 1,
              invalidateOnRefresh: true,
              onLeave: () => revealAll(),
            }
          : {
              trigger: stack,
              start: narrow ? "top 92%" : "top bottom",
              end: () => `+=${getRevealScrollLength(0.75)}`,
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
                  gsap.set(bridgeSheen, { opacity: 0, scale: 0.92 });
                  gsap.set(bridgeLine, { opacity: 0, scaleX: 0 });
                  gsap.set(bridgeLabel, { opacity: 0, y: bridgeY });
                  gsap.set(introBits, { opacity: 0, y: introY });
                  gsap.set(strips, { opacity: 0, y: stripY });
                  if (closing) gsap.set(closing, { opacity: 0, y: narrow ? 12 : short ? 16 : 24 });
                }
              },
            };

        const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger });

        const bridgeIn = pinned ? 0.03 : 0.05;
        const introIn = pinned ? 0.1 : 0.12;
        const stripsIn = pinned ? 0.22 : 0.26;
        const closingIn = pinned ? 0.88 : 0.8;

        tl.to(bridgeSheen, { opacity: 1, scale: 1, duration: 0.14, ease: LUXURY_EASE }, bridgeIn);
        tl.to(bridgeLine, { opacity: 1, scaleX: 1, duration: 0.16, ease: LUXURY_EASE }, bridgeIn + 0.04);
        tl.to(bridgeLabel, { opacity: 1, y: 0, duration: 0.16, ease: LUXURY_EASE }, bridgeIn + 0.07);
        tl.to(introBits, { opacity: 1, y: 0, duration: 0.22, stagger: 0.05, ease: LUXURY_EASE }, introIn);
        tl.to(strips, { opacity: 1, y: 0, duration: 0.32, stagger: 0.1, ease: LUXURY_EASE }, stripsIn);
        if (closing) {
          tl.to(closing, { opacity: 1, y: 0, duration: 0.2, ease: LUXURY_EASE }, closingIn);
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
      stack.classList.remove("spa-reveal-stack--scrub");
      layoutMq.removeEventListener("change", onLayoutChange);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx?.revert();
    };
  }, [stackRef, pinRef]);
}
