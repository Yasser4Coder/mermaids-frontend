import { useEffect, useRef } from "react";

export function useRevealRef(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin ?? "0px 0px -8% 0px",
        threshold: options.threshold ?? 0.08,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options.rootMargin, options.threshold]);

  return ref;
}
