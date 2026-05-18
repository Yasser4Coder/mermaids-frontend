/** @type {import('lenis').default | null} */
let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function setLenis(instance) {
  lenisInstance = instance;
}

export function destroyLenis() {
  lenisInstance?.destroy();
  lenisInstance = null;
}

/**
 * @param {number} target
 * @param {{ immediate?: boolean }} [options]
 */
export function scrollTo(target, options = {}) {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.scrollTo(target, {
      immediate: options.immediate ?? false,
      lock: false,
    });
    return;
  }
  window.scrollTo({ top: target, behavior: options.immediate ? "auto" : "smooth" });
}
