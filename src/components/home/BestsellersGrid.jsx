import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { formatPriceAmount } from "../../lib/formatPrice";
import { SectionIntro } from "../ui/SectionIntro";

export function BestsellersGrid() {
  const items = PRODUCTS.slice(0, 8);

  return (
    <section
      className="brand-section brand-section--cream brand-bestsellers"
      id="featured-products"
      aria-labelledby="bestsellers-heading"
    >
      <div className="wrap brand-bestsellers__wrap">
        <SectionIntro
          badge="Boutique"
          title="Shop our best sellers"
          titleId="bestsellers-heading"
          lede="Salon-finish formulas from Mamirka Cosmétiques — the same care we use after your visit."
        />

        <div className="brand-product-grid">
          {items.map((product) => (
            <article key={product.id} className="brand-product-card">
              <Link to={`/shop/${product.slug}`} className="brand-product-card__media">
                {product.badge && <span className="brand-product-card__badge">{product.badge}</span>}
                <img src={product.image} alt="" loading="lazy" decoding="async" />
              </Link>
              <h3 className="brand-product-card__title">
                <Link to={`/shop/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="brand-product-card__desc">{product.description}</p>
              <p className="brand-product-card__price">
                {formatPriceAmount(product.price)} <abbr title="Algerian dinar">DZD</abbr>
              </p>
              <Link to={`/shop/${product.slug}`} className="welcome-showcase__cta brand-product-card__shop">
                <span className="welcome-showcase__cta-label">Shop now</span>
                <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </article>
          ))}
        </div>

        <footer className="brand-section__foot">
          <Link to="/shop" className="brand-btn brand-btn--outline">
            View all products
          </Link>
        </footer>
      </div>
    </section>
  );
}
