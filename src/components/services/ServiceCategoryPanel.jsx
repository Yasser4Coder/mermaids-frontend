import { Link } from "react-router-dom";
import { CATEGORY_META, decodeServiceText, getServiceBookUrl } from "../../data/services";

export function ServiceCategoryPanel({ category }) {
  const meta = CATEGORY_META[category.id];
  const title = decodeServiceText(category.title);
  const description = decodeServiceText(category.description);

  return (
    <section className="svc-panel" aria-labelledby={`svc-panel-${category.id}`}>
      <header className="svc-panel__banner">
        <img src={meta?.image} alt="" loading="lazy" decoding="async" />
        <div className="svc-panel__banner-copy">
          <span className="svc-panel__tag">{meta?.label}</span>
          <h2 id={`svc-panel-${category.id}`} className="svc-panel__title">
            {title}
          </h2>
          {description ? <p className="svc-panel__desc">{description}</p> : null}
        </div>
      </header>

      <div className="svc-panel__menu glass-panel">
        {category.subsections?.map((section, i) => (
          <div key={`${section.title ?? "main"}-${i}`} className="svc-panel__group">
            {section.title ? <h3 className="service-subsection__title">{section.title}</h3> : null}
            <ul className="service-price-list">
              {section.items.map((item) => (
                <li key={item.name} className="svc-line">
                  <div className="svc-line__copy">
                    <span className="svc-line__name">{item.name}</span>
                    <span className="svc-line__price">{item.price}</span>
                  </div>
                  <Link to={getServiceBookUrl(category.id, item.name)} className="svc-line__book">
                    Réserver
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="svc-panel__foot">
        <Link to={`/book?category=${category.id}`} className="welcome-showcase__cta">
          <span className="welcome-showcase__cta-label">Réserver — {meta?.label}</span>
          <span className="welcome-showcase__cta-arrow" aria-hidden="true">
            <i className="fa-solid fa-arrow-right" />
          </span>
        </Link>
      </footer>
    </section>
  );
}
