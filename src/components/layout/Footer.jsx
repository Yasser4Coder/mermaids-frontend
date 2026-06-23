import { Link } from "react-router-dom";
import { SITE } from "../../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="brand-footer site-footer">
      <div className="wrap brand-footer__grid">
        <div>
          <h3 className="brand-footer__heading">Mermaids</h3>
          <p className="brand-footer__copy">
            Salon, aesthetics and spa in Chlef. Mamirka Cosmétiques — your partner for a complete beauty experience.
          </p>
          <ul className="brand-footer__social" aria-label="Social media">
            <li>
              <a href={`tel:+${SITE.phone}`} aria-label="Phone">
                <i className="fa-solid fa-phone" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="TikTok">
                <i className="fab fa-tiktok" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="brand-footer__heading">Explore</h3>
          <nav className="brand-footer__links" aria-label="Footer navigation">
            <Link to="/services">Services</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/book">Book online</Link>
            <Link to="/#how-it-works">How it works</Link>
            <Link to="/#promos">Offers</Link>
          </nav>
        </div>

        <div>
          <h3 className="brand-footer__heading">Stay in touch</h3>
          <p className="brand-footer__copy">Notes on new services, bundles and last-minute slots.</p>
          <form className="brand-footer__news-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="news-email">
              Email
            </label>
            <input id="news-email" name="email" type="email" autoComplete="email" placeholder="Your email" required />
            <button type="submit">Sign up</button>
          </form>
          <address className="brand-footer__copy" style={{ marginTop: "1.25rem", fontStyle: "normal" }}>
            {SITE.address[0]}
            <br />
            {SITE.address[1]}
            <br />
            <a href={`tel:+${SITE.phone}`} style={{ color: "rgba(255,255,255,0.78)" }}>
              {SITE.phoneDisplay}
            </a>
          </address>
        </div>
      </div>

      <div className="wrap brand-footer__base">
        <div className="brand-footer__base-inner">
          <p>© {year} Mermaids. All rights reserved.</p>
          <p>
            <Link to="/account">Account</Link> · <a href="#">Privacy</a>
          </p>
        </div>
      </div>

      <div className="brand-footer__mega" aria-hidden="true">
        <p className="brand-footer__mega-word">Mermaids</p>
      </div>
    </footer>
  );
}
