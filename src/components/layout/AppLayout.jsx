import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function AppLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  const isHome = pathname === "/";

  return (
    <>
      <Header />
      <main className={isHome ? "home-landing" : "page-main"}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
