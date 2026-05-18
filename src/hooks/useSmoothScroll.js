import Lenis from "lenis";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { destroyLenis, scrollTo, setLenis } from "../lib/smoothScroll";

export function useSmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.12,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.65,
    });

    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);
}
