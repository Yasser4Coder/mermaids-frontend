import { Link } from "react-router-dom";
import { BrandLockup } from "../ui/BrandLockup";
import { SITE } from "../../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <BrandLockup footer />
          <p className="site-footer__tag">
            Mermaids beauty — salon, aesthetics and spa in Chlef. Mamirka Cosmétiques, your partner for a complete
            experience.
          </p>
          <ul className="social-row" aria-label="Social media">
            <li>
              <a href={`tel:+${SITE.phone}`} aria-label="Phone">
                <i className="fa-solid fa-phone" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Snapchat">
                <i className="fab fa-snapchat" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="TikTok">
                <i className="fab fa-tiktok" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="site-footer__news">
          <h3 className="footer-heading">Offers &amp; openings</h3>
          <p className="footer-copy">
            Occasional notes on new services, bundles, and last-minute slots — never spam.
          </p>
          <form className="news-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="news-email">
              Email
            </label>
            <input
              id="news-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              required
              className="news-form__input"
            />
            <button type="submit" className="news-form__btn">
              Join
            </button>
          </form>
        </div>

        <div className="site-footer__contact">
          <h3 className="footer-heading">Visit &amp; contact</h3>
          <address className="footer-address">
            {SITE.address[0]}
            <br />
            {SITE.address[1]}
          </address>
          <p className="footer-lines">
            <a href={`tel:+${SITE.phone}`}>{SITE.phoneDisplay}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className="footer-quicklinks">
            <Link to="/services">Services</Link> · <Link to="/book">Book</Link> · <Link to="/shop">Shop</Link> ·{" "}
            <Link to="/account">Account</Link>
          </p>
        </div>
      </div>
      <div className="site-footer__base">
        <div className="wrap site-footer__base-inner">
          <p>© {year} Mermaids. All rights reserved.</p>
          <p className="footer-meta">
            <Link to="/#how-it-works">How it works</Link> · <a href="#">Privacy</a> · <Link to="/#promos">Offers</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
