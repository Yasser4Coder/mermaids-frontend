/** Phone / narrow layout */
export const NARROW_VIEWPORT_MQ = "(max-width: 768px)";

/** Short laptop / small window height */
export const SHORT_VIEWPORT_MQ = "(max-height: 860px)";

/** Coarse pointer (touch) */
export const COARSE_POINTER_MQ = "(pointer: coarse)";

/** Wide + tall enough for pinned section reveals */
export const SALON_PINNED_MQ = "(min-width: 769px) and (min-height: 861px)";

export function isNarrowViewport() {
  return window.matchMedia(NARROW_VIEWPORT_MQ).matches;
}

export function isShortViewport() {
  return window.matchMedia(SHORT_VIEWPORT_MQ).matches;
}

export function isCoarsePointer() {
  return window.matchMedia(COARSE_POINTER_MQ).matches;
}

/** Prefer native scroll + lighter GSAP on phones / touch */
export function shouldUseNativeScroll() {
  return isNarrowViewport() || isCoarsePointer();
}

export function shouldPinSalonReveal() {
  return window.matchMedia(SALON_PINNED_MQ).matches;
}

/** @deprecated Use shouldPinSalonReveal — pins only on wide+tall desktops */
export function shouldUseScrollScrubReveal() {
  return !shouldPinSalonReveal();
}

/** Scroll distance for scrub timelines (viewport multiples) */
export function getRevealScrollLength(multiplier = 0.8) {
  const vh = window.innerHeight;
  if (isNarrowViewport()) return vh * multiplier * 0.62;
  if (isShortViewport()) return vh * multiplier * 0.88;
  return vh * multiplier;
}
