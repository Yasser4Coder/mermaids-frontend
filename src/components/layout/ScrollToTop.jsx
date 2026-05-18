import { useEffect, useState } from "react";
import { getLenis, scrollTo } from "../../lib/smoothScroll";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = (y) => setVisible(y > 400);

    const lenis = getLenis();
    if (lenis) {
      const onLenisScroll = ({ scroll }) => update(scroll);
      update(lenis.scroll);
      lenis.on("scroll", onLenisScroll);
      return () => lenis.off("scroll", onLenisScroll);
    }

    const onScroll = () => update(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? " is-visible" : ""}`}
      id="to-top"
      aria-label="Back to top"
      onClick={() => scrollTo(0)}
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
