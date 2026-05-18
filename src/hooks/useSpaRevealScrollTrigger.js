import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { isShortViewport, SALON_PINNED_MQ, shouldPinSalonReveal } from "../lib/viewport";

const LUXURY_EASE = "power2.inOut";

/**
 * Salon → spa bridge, then editorial strip reveals (original layout).
 * Pinned scrub on large viewports; scroll-through scrub on short/narrow.
 */
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
    const spaTargets = [...introBits, ...strips, closing].filter(Boolean);
    const allTargets = [...bridgeBits, ...spaTargets];

    if (reduced) {
      stack.classList.remove("spa-reveal-stack--scrub");
      gsap.set(pin, { clearProps: "all" });
      gsap.set(allTargets, { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1, scaleX: 1 });
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

        stack.classList.toggle("spa-reveal-stack--scrub", !pinned);

        const bridgeY = short ? 14 : 22;
        const introY = short ? 20 : 32;
        const stripY = short ? 40 : 56;

        gsap.set(bridgeSheen, { opacity: 0, scale: 0.92 });
        gsap.set(bridgeLine, { opacity: 0, scaleX: 0 });
        gsap.set(bridgeLabel, { opacity: 0, y: bridgeY });
        gsap.set(introBits, { opacity: 0, y: introY });
        gsap.set(strips, { opacity: 0, y: stripY });
        if (closing) gsap.set(closing, { opacity: 0, y: short ? 16 : 24 });

        const scrollTrigger = pinned
          ? {
              trigger: stack,
              start: "top top",
              end: () => `+=${window.innerHeight * (short ? 1.25 : 1.5)}`,
              pin,
              scrub: 1.15,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          : {
              trigger: stack,
              start: "top bottom",
              end: () => `+=${window.innerHeight * (short ? 0.75 : 0.9)}`,
              scrub: 1,
              invalidateOnRefresh: true,
              onLeave: (self) => {
                if (self.progress >= 0.99) {
                  gsap.set(allTargets, { opacity: 1, y: 0, x: 0, scale: 1, scaleX: 1 });
                }
              },
              onLeaveBack: (self) => {
                if (self.progress <= 0.01) {
                  gsap.set(bridgeSheen, { opacity: 0, scale: 0.92 });
                  gsap.set(bridgeLine, { opacity: 0, scaleX: 0 });
                  gsap.set(bridgeLabel, { opacity: 0, y: bridgeY });
                  gsap.set(introBits, { opacity: 0, y: introY });
                  gsap.set(strips, { opacity: 0, y: stripY });
                  if (closing) gsap.set(closing, { opacity: 0, y: short ? 16 : 24 });
                }
              },
            };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger,
        });

        const bridgeIn = pinned ? 0.03 : 0.05;
        const introIn = pinned ? 0.1 : 0.14;
        const stripsIn = pinned ? 0.22 : 0.28;
        const closingIn = pinned ? 0.88 : 0.82;

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
