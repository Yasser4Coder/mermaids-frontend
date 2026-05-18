import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useHomeHeroNav } from "../../hooks/useHomeHeroNav";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { getLenis, scrollTo } from "../../lib/smoothScroll";
import { ContactDrawerProvider } from "./ContactDrawer";
import { ContactRail } from "./ContactRail";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function AppLayout() {
  const { pathname, hash } = useLocation();
  useSmoothScroll();
  useHomeHeroNav();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(el, { offset: -96 });
          return;
        }
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    scrollTo(0, { immediate: true });
  }, [pathname, hash]);

  const isHome = pathname === "/";

  return (
    <ContactDrawerProvider>
      <Header />
      <main className={isHome ? "home-landing" : "page-main"}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ContactRail />
    </ContactDrawerProvider>
  );
}
