/** Phone / narrow layout */
export const NARROW_VIEWPORT_MQ = "(max-width: 768px)";

/** Short laptop / small window height */
export const SHORT_VIEWPORT_MQ = "(max-height: 860px)";

/** Wide + tall enough for pinned salon reveal (otherwise scrub-in on scroll) */
export const SALON_PINNED_MQ = "(min-width: 769px) and (min-height: 861px)";

export function isNarrowViewport() {
  return window.matchMedia(NARROW_VIEWPORT_MQ).matches;
}

export function isShortViewport() {
  return window.matchMedia(SHORT_VIEWPORT_MQ).matches;
}

export function shouldPinSalonReveal() {
  return window.matchMedia(SALON_PINNED_MQ).matches;
}

/** Scroll-through scrub instead of viewport pin (phones, short windows) */
export function shouldUseScrollScrubReveal() {
  return !shouldPinSalonReveal();
}
