import { Link } from "react-router-dom";
import { CATEGORY_META, decodeServiceText, getServiceBookUrl } from "../../data/services";

export function ServiceMenuBlock({ category }) {
  const meta = CATEGORY_META[category.id] ?? { label: category.title, image: "/images/Spa-treatments.png" };
  const title = decodeServiceText(category.title);
  const description = decodeServiceText(category.description);

  return (
    <article id={category.id} className="svc-block">
      <header className="svc-block__head">
        <div className="svc-block__head-copy">
          <span className="svc-block__label">{meta.label}</span>
          <h2 className="svc-block__title">{title}</h2>
          {description ? <p className="svc-block__desc">{description}</p> : null}
        </div>
        <div className="svc-block__media">
          <img src={meta.image} alt="" loading="lazy" decoding="async" />
        </div>
      </header>

      <div className="svc-block__sections">
        {category.subsections?.map((section, i) => (
          <div key={`${section.title ?? "main"}-${i}`} className="svc-block__section">
            {section.title ? <h3 className="svc-block__section-title">{section.title}</h3> : null}
            <ul className="svc-menu">
              {section.items.map((item) => (
                <li key={item.name} className="svc-menu__row">
                  <div className="svc-menu__main">
                    <span className="svc-menu__name">{item.name}</span>
                    <span className="svc-menu__dots" aria-hidden="true" />
                    <span className="svc-menu__price">{item.price}</span>
                  </div>
                  <Link to={getServiceBookUrl(category.id, item.name)} className="svc-menu__book">
                    <span>Réserver</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="svc-block__foot">
        <Link to={`/book?category=${category.id}`} className="welcome-showcase__cta svc-block__cta">
          <span className="welcome-showcase__cta-label">Réserver — {meta.label}</span>
          <span className="welcome-showcase__cta-arrow" aria-hidden="true">
            <i className="fa-solid fa-arrow-right" />
          </span>
        </Link>
      </footer>
    </article>
  );
}
