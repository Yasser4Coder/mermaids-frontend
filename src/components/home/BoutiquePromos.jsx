import { Link } from "react-router-dom";
import { SectionIntro } from "../ui/SectionIntro";

export function BoutiquePromos() {
  return (
    <section className="boutique-promos" aria-labelledby="boutique-promos-heading">
      <div className="boutique-promos__wrap">
        <SectionIntro
          badge="Big sale"
          title="Limited offers for your best ritual yet"
          titleId="boutique-promos-heading"
          align="start"
        />

        <div className="boutique-promos__grid">
          <article className="boutique-promos__card boutique-promos__card--dark">
            <div className="boutique-promos__card-body">
              <div className="boutique-promos__card-copy">
                <h3 className="boutique-promos__card-title">Salon ritual set</h3>
                <p className="boutique-promos__card-text">
                  Recovery shampoo, dew serum and gloss conditioner — a gentle everyday routine with salon-finish
                  results.
                </p>
              </div>
              <div className="boutique-promos__card-foot">
                <p className="boutique-promos__deal">-20% off</p>
                <Link to="/shop" className="welcome-showcase__cta boutique-promos__cta">
                  <span className="welcome-showcase__cta-label">Get the set</span>
                  <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="boutique-promos__card-media" aria-hidden="true">
              <img src="/images/service-img-3.jpg" alt="" loading="lazy" decoding="async" />
            </div>
          </article>

          <article className="boutique-promos__card boutique-promos__card--photo">
            <img
              className="boutique-promos__photo"
              src="/images/blog-2.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="boutique-promos__photo-overlay" aria-hidden="true" />
            <div className="boutique-promos__card-body">
              <div className="boutique-promos__card-copy">
                <h3 className="boutique-promos__card-title">Free delivery on orders</h3>
                <p className="boutique-promos__highlight">Over 8 000 DZD</p>
                <p className="boutique-promos__card-text boutique-promos__card-text--muted">
                  Stock up on your Mamirka favourites and enjoy delivery at no extra cost.
                </p>
              </div>
              <div className="boutique-promos__card-foot">
                <Link to="/shop" className="welcome-showcase__cta boutique-promos__cta">
                  <span className="welcome-showcase__cta-label">Shop and save</span>
                  <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
