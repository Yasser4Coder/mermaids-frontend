import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { BrandLockup } from "../ui/BrandLockup";
import { LangSwitcher } from "../ui/LangSwitcher";

function navHref(link, pathname) {
  if (link.hashOnHome) {
    const hash = link.to.replace("/#", "#");
    return pathname === "/" ? hash : `/${hash}`;
  }
  return link.to;
}

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/shop", label: "Shop" },
  { to: "/#promos", label: "Offers", hash: true },
  { to: "/account", label: "Account" },
];

export function Header() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const onHomeHero = pathname === "/" && document.body.classList.contains("is-home-hero");
      const revealed = !onHomeHero || document.body.classList.contains("nav-shell--revealed");
      headerRef.current?.classList.toggle("is-scrolled", revealed && y > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen, pathname]);

  return (
    <header ref={headerRef} className="nav-shell">
      <div className="wrap nav-shell__inner glass-nav">
        <BrandLockup />

        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.hash ? (
                  <a href={navHref({ to: item.to, hashOnHome: true }, pathname)} onClick={() => setMenuOpen(false)}>
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
              className="btn btn--outline site-nav__mobile-auth nav-auth-guest"
              onClick={() => setMenuOpen(false)}
            >
              Log in / Register
            </Link>
          )}
        </nav>

        <div className="nav-shell__cta">
          <div className="nav-toolbar" role="toolbar" aria-label="Wishlist, cart, and language">
            <Link to="/account#favorites" className="nav-icon-btn" aria-label="Saved services">
              <span className="nav-icon-btn__emoji" aria-hidden="true">
                ❤
              </span>
            </Link>
            <Link to="/checkout" className="nav-icon-btn" aria-label="Shopping cart">
              <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
              <span className="nav-cart-count" aria-hidden="true">
                {itemCount}
              </span>
            </Link>
            <LangSwitcher />
          </div>
          {!isAuthenticated && (
            <Link to="/account#sign-in" className="btn btn--outline nav-shell__auth-link nav-auth-guest">
              Log in / Register
            </Link>
          )}
          <button
            type="button"
            className="nav-burger"
            id="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-burger__bar" />
            <span className="nav-burger__bar" />
          </button>
        </div>
      </div>
    </header>
  );
}
