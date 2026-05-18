import { useEffect, useRef, useState } from "react";

export function useScrollRevealOnce(options = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          io.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.32,
        rootMargin: options.rootMargin ?? "0px 0px -5% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isRevealed];
}
