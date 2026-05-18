import { gsap } from "./gsap";

export const MOBILE_REVEAL_START = "top 90%";
export const MOBILE_REVEAL_EASE = "power2.out";

/** Skip animation when section is already on screen (e.g. after resize). */
export function skipRevealIfInView(trigger, revealAll, topRatio = 0.92) {
  if (!trigger) return false;
  const rect = trigger.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * topRatio && rect.bottom > window.innerHeight * 0.06;
  if (inView) {
    revealAll?.();
    return true;
  }
  return false;
}

/**
 * One-shot scroll reveal for phones — no scrub, no pin, native scroll friendly.
 * @param {HTMLElement} trigger
 * @param {{ revealAll?: () => void, start?: string, steps: Array<{ at?: number, elements: Element[]|NodeList, to: object, duration?: number, stagger?: number }> }} config
 */
export function mobileScrollTimeline(trigger, { revealAll, start = MOBILE_REVEAL_START, steps }) {
  if (!trigger || !steps?.length) return null;
  if (skipRevealIfInView(trigger, revealAll)) return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      once: true,
      invalidateOnRefresh: true,
    },
  });

  steps.forEach((step, i) => {
    const { elements, to, duration = 0.46, stagger = 0.05 } = step;
    const list = elements?.length ? elements : [];
    if (!list.length) return;
    tl.to(
      list,
      { ...to, duration, stagger, ease: MOBILE_REVEAL_EASE },
      step.at ?? i * 0.1
    );
  });

  return tl;
}
