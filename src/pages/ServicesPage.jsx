import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ServiceCategoryPanel } from "../components/services/ServiceCategoryPanel";
import { ServiceFeaturedStrip } from "../components/services/ServiceFeaturedStrip";
import servicesMenu from "../data/servicesMenu.json";
import { CATEGORY_META, SERVICES } from "../data/services";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";

export function ServicesPage() {
  usePageInner("services-page-active");
  useDocumentTitle("Services");
  const location = useLocation();
  const categories = useMemo(() => servicesMenu, []);
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "salon");

  const activeCategory = categories.find((c) => c.id === activeId) ?? categories[0];
  const featured = useMemo(() => SERVICES.filter((s) => s.featured).slice(0, 6), []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setActiveId(hash);
    }
  }, [location.hash, categories]);

  return (
    <div className="services-page">
      <section className="svc-book-hero" aria-labelledby="services-hero-title">
        <div className="svc-book-hero__bg" aria-hidden="true">
          <img src="/images/Spa-treatments.png" alt="" loading="eager" decoding="async" />
        </div>
        <div className="svc-book-hero__inner">
          <div className="svc-book-hero__card">
            <span className="svc-book-hero__badge">Carte des soins</span>
            <h1 id="services-hero-title" className="svc-book-hero__title">
              Tarifs &amp; prestations
            </h1>
            <p className="svc-book-hero__lede">
              Prix en DZD — choisissez votre univers, consultez la carte et réservez votre créneau en ligne ou sur
              place.
            </p>
            <p className="services-page__note">
              <i className="fa-solid fa-circle-info" aria-hidden="true" />
              Les durées et suppléments peuvent varier selon la chevelure, la zone ou le protocole — demandez conseil à
              l&apos;accueil.
            </p>
            <Link to="/book" className="welcome-showcase__cta svc-book-hero__cta">
              <span className="welcome-showcase__cta-label">Réserver maintenant</span>
              <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="svc-book-body">
        <ServiceFeaturedStrip items={featured} />

        <div className="svc-book-body__main">
          <nav className="category-chips category-chips--scroll svc-chips" aria-label="Univers de soins">
            {categories.map((cat) => {
              const meta = CATEGORY_META[cat.id];
              const label = meta?.label ?? cat.title;
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-chips__link svc-chips__btn${isActive ? " is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(cat.id)}
                >
                  <i className={`fa-solid ${meta?.icon ?? "fa-spa"}`} aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </nav>

          {activeCategory ? <ServiceCategoryPanel key={activeCategory.id} category={activeCategory} /> : null}
        </div>
      </div>

      <section className="svc-book-cta">
        <div className="svc-book-cta__inner">
          <h2 className="svc-book-cta__title">Une question sur une prestation ?</h2>
          <p className="svc-book-cta__text">
            Réservez un créneau ou rappelez-nous — nous adaptons le protocole à votre budget.
          </p>
          <div className="svc-book-cta__actions">
            <Link to="/book" className="welcome-showcase__cta">
              <span className="welcome-showcase__cta-label">Réserver en ligne</span>
              <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="svc-book-mobile">
        <Link to="/book" className="svc-book-mobile__btn">
          Réserver un créneau
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
