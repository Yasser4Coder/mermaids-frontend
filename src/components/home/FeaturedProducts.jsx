import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { EditorialProductCard } from "../shop/EditorialProductCard";

const FEATURED = [
  { slug: "recovery-shampoo", layout: "lead" },
  { slug: "dew-serum", layout: "mid" },
  { slug: "gloss-conditioner", layout: "end" },
];

export const FeaturedProducts = forwardRef(function FeaturedProducts({ sheet = false }, ref) {
  const items = FEATURED.map(({ slug, layout }) => {
    const product = PRODUCTS.find((p) => p.slug === slug);
    return product ? { product, layout } : null;
  }).filter(Boolean);

  const [lead, mid, end] = items;

  return (
    <section
      ref={ref}
      className={`featured-products${sheet ? " featured-products--sheet" : ""}`}
      id="featured-products"
      aria-labelledby="featured-products-heading"
    >
      <div className="featured-products__inner">
        <header className="featured-products__head">
          <p className="featured-products__eyebrow">Popular products</p>
          <div className="featured-products__head-row">
            <h2 id="featured-products-heading" className="featured-products__title">
              <span className="featured-products__title-line">Mamirka favourites,</span>
              <em className="featured-products__title-accent">freshly restocked</em>
            </h2>
            <Link to="/shop" className="featured-products__view-all">
              <span>View all</span>
              <span className="featured-products__view-icon" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
          <p className="featured-products__lede">
            Salon-finish formulas from our boutique — the same care we use after your visit, selected for home rituals.
          </p>
        </header>

        <div className="featured-products__mosaic">
          {lead && (
            <div className="featured-products__col featured-products__col--lead">
              <EditorialProductCard product={lead.product} layout={lead.layout} />
            </div>
          )}

          {mid && (
            <div className="featured-products__col featured-products__col--mid">
              <EditorialProductCard product={mid.product} layout={mid.layout} />
            </div>
          )}

          <div className="featured-products__col featured-products__col--end">
            <p className="featured-products__aside">
              Discover what we are loving lately — high-performing, cleanly formulated, and chosen with care at
              Mermaids Beauty Center.
            </p>
            {end && <EditorialProductCard product={end.product} layout={end.layout} />}
          </div>
        </div>

        <footer className="featured-products__footer">
          <Link to="/shop" className="featured-products__shop-link">
            Discover all products
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </footer>
      </div>
    </section>
  );
});
