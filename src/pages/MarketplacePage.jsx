import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ShopFiltersPanel } from "../components/shop/ShopFiltersPanel";
import { ShopProductCard } from "../components/shop/ShopProductCard";
import { PRODUCTS } from "../data/products";
import {
  CATEGORIES,
  DEFAULT_FILTERS,
  SORT_OPTIONS,
  countActiveFilters,
  filterProducts,
  getActiveFilterChips,
} from "../data/shopFilters";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";

const SHOP_FAQ = [
  {
    q: "Are these the same products used in salon?",
    a: "Yes — Mamirka formulas in our boutique mirror what we use to finish your visit at Mermaids.",
  },
  {
    q: "Do you offer delivery?",
    a: "Free delivery on orders over 8 000 DZD across Chlef wilaya. Pick up in salon anytime after your appointment.",
  },
  {
    q: "Can I add products when I book?",
    a: "Absolutely. Book online and note products in your visit, or shop here and collect at checkout.",
  },
];

const CONFIDENCE = [
  {
    icon: "fa-truck-fast",
    title: "Free delivery support",
    text: "Complimentary delivery on qualifying orders across Chlef.",
  },
  {
    icon: "fa-shield-halved",
    title: "Secure checkout",
    text: "Simple, safe payment when you order online or in salon.",
  },
  {
    icon: "fa-spa",
    title: "Salon-approved",
    text: "Every formula is chosen by our stylists and skin team.",
  },
  {
    icon: "fa-bag-shopping",
    title: "Pickup in salon",
    text: "Order ahead and collect after your next Mermaids visit.",
  },
];

export function MarketplacePage() {
  usePageInner("shop-page-active");
  useDocumentTitle("Shop");

  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const products = useMemo(() => filterProducts(PRODUCTS, filters), [filters]);
  const activeCount = useMemo(() => countActiveFilters(filters), [filters]);
  const activeChips = useMemo(() => getActiveFilterChips(filters, setFilters), [filters]);

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  const toggleCategory = (id) => {
    setFilters((f) => ({
      ...f,
      categories: f.categories.includes(id) ? f.categories.filter((c) => c !== id) : [...f.categories, id],
    }));
  };

  const heroProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="shop-page">
      <section className="shop-hero" aria-labelledby="shop-hero-heading">
        <div className="shop-hero__bg" aria-hidden="true">
          <img src="/images/ChatGPT Image Jun 23, 2026, 02_37_49 AM.png" alt="" loading="eager" decoding="async" />
          <div className="shop-hero__overlay" />
        </div>

        <div className="shop-hero__inner">
          <div className="shop-hero__layout">
            <div className="shop-hero__copy">
              <span className="shop-hero__badge">Boutique · Mamirka</span>
              <h1 id="shop-hero-heading" className="shop-hero__title">
                Salon-finish care,
                <em> curated for home</em>
              </h1>
              <p className="shop-hero__lede">
                The same Mamirka Cosmétiques rituals we use after your visit — hair, skin and nail essentials
                chosen by our Mermaids team.
              </p>

              <ul className="shop-hero__perks">
                <li>
                  <i className="fa-solid fa-spa" aria-hidden="true" />
                  Salon-approved formulas
                </li>
                <li>
                  <i className="fa-solid fa-truck-fast" aria-hidden="true" />
                  Free delivery over 8 000 DZD
                </li>
                <li>
                  <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
                  Pick up in salon
                </li>
              </ul>

              <div className="shop-hero__categories" role="group" aria-label="Browse by category">
                {CATEGORIES.map((cat) => {
                  const active = filters.categories.includes(cat.id);
                  const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`shop-hero__cat${active ? " is-active" : ""}`}
                      aria-pressed={active}
                      onClick={() => toggleCategory(cat.id)}
                    >
                      {cat.label}
                      <span className="shop-hero__cat-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="shop-hero__visual" aria-hidden="true">
              <div className="shop-hero__stat">
                <strong>{PRODUCTS.length}</strong>
                <span>products in boutique</span>
              </div>
              {heroProducts.map((product, i) => (
                <div key={product.id} className={`shop-hero__thumb shop-hero__thumb--${i + 1}`}>
                  <img src={product.image} alt="" loading="eager" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          <div className="shop-hero__toolbar">
            <p className="shop-hero__toolbar-label">
              <span>{products.length}</span> {products.length === 1 ? "product" : "products"}
              {activeCount > 0 ? <em> · {activeCount} filters active</em> : null}
            </p>
            <div className="shop-hero__toolbar-actions">
              <label className="shop-catalog__sort">
                <span className="sr-only">Sort products</span>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
                  aria-label="Sort products"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </label>
              <button type="button" className="shop-catalog__filters-btn" onClick={() => setFiltersOpen(true)}>
                Filters
                {activeCount > 0 ? <span className="shop-catalog__filters-count">{activeCount}</span> : null}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-catalog" aria-label="Product catalog">
        <div className="shop-catalog__wrap">
          <aside className={`shop-filters${filtersOpen ? " is-open" : ""}`} aria-label="Product filters">
            <ShopFiltersPanel
              filters={filters}
              setFilters={setFilters}
              products={PRODUCTS}
              activeCount={activeCount}
              resultCount={products.length}
              onClear={clearFilters}
              onClose={() => setFiltersOpen(false)}
              showMobileFooter
            />
          </aside>

          {filtersOpen ? (
            <button
              type="button"
              className="shop-filters__backdrop"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
            />
          ) : null}

          <div className="shop-catalog__main">
            {activeChips.length > 0 ? (
              <div className="shop-active-filters" aria-label="Active filters">
                {activeChips.map((chip) => (
                  <button key={chip.key} type="button" className="shop-active-filters__chip" onClick={chip.clear}>
                    {chip.label}
                    <i className="fa-solid fa-xmark" aria-hidden="true" />
                  </button>
                ))}
                <button type="button" className="shop-active-filters__clear" onClick={clearFilters}>
                  Clear all
                </button>
              </div>
            ) : null}

            {products.length === 0 ? (
              <div className="shop-catalog__empty">
                <p>No products match your filters.</p>
                <button type="button" className="shop-catalog__empty-btn" onClick={clearFilters}>
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="shop-catalog__grid">
                {products.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="shop-confidence" aria-labelledby="shop-confidence-heading">
        <div className="shop-confidence__wrap">
          <header className="shop-confidence__intro">
            <span className="shop-confidence__badge">Why shop with us</span>
            <h2 id="shop-confidence-heading" className="shop-confidence__title">
              Shop Mamirka with confidence
            </h2>
          </header>
          <ul className="shop-confidence__grid">
            {CONFIDENCE.map((item) => (
              <li key={item.title} className="shop-confidence__item">
                <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shop-community" aria-labelledby="shop-community-heading">
        <div className="shop-community__wrap">
          <div className="shop-community__photos">
            <img src="/images/blog-1.jpg" alt="" loading="lazy" decoding="async" />
            <img src="/images/blog-2.jpg" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="shop-community__card">
            <div className="shop-community__social" aria-hidden="true">
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook-f" />
            </div>
            <h2 id="shop-community-heading" className="shop-community__title">
              Let&apos;s talk beauty &amp; Mamirka
            </h2>
            <p className="shop-community__text">
              Questions about a product or your routine? Our team is happy to help you choose what fits.
            </p>
            <Link to="/book" className="editorial-cta__btn shop-community__btn">
              <span className="editorial-cta__btn-label">Message us</span>
              <span className="editorial-cta__btn-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="shop-faq" aria-labelledby="shop-faq-heading">
        <div className="shop-faq__wrap">
          <header className="shop-faq__intro">
            <span className="shop-faq__badge">FAQ</span>
            <h2 id="shop-faq-heading" className="shop-faq__title">
              Common questions
            </h2>
          </header>
          <div className="shop-faq__list">
            {SHOP_FAQ.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={item.q} className={`shop-faq__item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="shop-faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} aria-hidden="true" />
                  </button>
                  <div className="shop-faq__answer">{item.a}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
