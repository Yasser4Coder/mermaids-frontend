import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { LangSwitcher } from "../ui/LangSwitcher";

function navHref(to, pathname) {
  const hash = to.replace("/#", "#");
  return pathname === "/" ? hash : `/${hash}`;
}

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/book", label: "Book" },
  { to: "/#featured-products", label: "Boutique", hash: true },
  { to: "/account", label: "Account" },
];

export function Header() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const onHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClass = [
    "brand-header",
    onHero ? "brand-header--hero" : "brand-header--solid",
    scrolled && "is-scrolled",
    menuOpen && "brand-header--menu-open",
  ]
    .filter(Boolean)
    .join(" ");

  const drawer = (
    <>
      <button
        type="button"
        className={`brand-header__overlay${menuOpen ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`brand-header__drawer${menuOpen ? " is-open" : ""}`}
        id="site-nav"
        aria-label="Primary"
        aria-hidden={!menuOpen}
      >
        <ul className="brand-header__nav-list">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.hash ? (
                <a href={navHref(item.to, pathname)} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {!isAuthenticated && (
          <Link
            to="/account#sign-in"
            className="brand-header__drawer-auth brand-btn brand-btn--gold"
            onClick={() => setMenuOpen(false)}
          >
            Log in / Register
          </Link>
        )}
      </nav>
    </>
  );

  return (
    <>
      <header className={headerClass}>
        <div className="brand-header__bar wrap">
          <div className="brand-header__side brand-header__side--left">
            <button
              type="button"
              className="brand-header__burger"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <Link to="/" className="brand-header__logo" aria-label="Mermaids — home">
            <span className="brand-header__wordmark">Mermaids</span>
          </Link>

          <div className="brand-header__side brand-header__side--right">
            <Link to="/checkout" className="brand-header__icon" aria-label="Shopping cart">
              <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
              {itemCount > 0 && <span className="brand-header__cart-count">{itemCount}</span>}
            </Link>
            <LangSwitcher />
          </div>
        </div>
      </header>
      {createPortal(drawer, document.body)}
    </>
  );
}
