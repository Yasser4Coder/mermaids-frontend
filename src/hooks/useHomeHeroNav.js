import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../lib/smoothScroll";
import { isNarrowViewport } from "../lib/viewport";

const REVEAL_OFFSET = 72;
const REVEAL_OFFSET_COMPACT = 48;

function getRevealOffset() {
  return isNarrowViewport() ? REVEAL_OFFSET_COMPACT : REVEAL_OFFSET;
}

export function useHomeHeroNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const body = document.body;

    if (!isHome) {
      body.classList.remove("is-home-hero", "nav-shell--revealed");
      return;
    }

    body.classList.add("is-home-hero");
    body.classList.remove("nav-shell--revealed");

    const update = (scrollY) => {
      const collapsing =
        body.classList.contains("is-hero-collapsing") || body.classList.contains("is-hero-collapsed");
      body.classList.toggle("nav-shell--revealed", scrollY > getRevealOffset() || collapsing);
    };

    const lenis = getLenis();
    if (lenis) {
      const onLenisScroll = ({ scroll }) => update(scroll);
      update(lenis.scroll);
      lenis.on("scroll", onLenisScroll);
      return () => {
        lenis.off("scroll", onLenisScroll);
        body.classList.remove("is-home-hero", "nav-shell--revealed");
      };
    }

    const onScroll = () => update(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      body.classList.remove("is-home-hero", "nav-shell--revealed");
    };
  }, [isHome]);
}
