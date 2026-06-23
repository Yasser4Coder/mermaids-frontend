import { Link } from "react-router-dom";
import { formatDuration } from "../../data/services";
import { formatPriceAmount } from "../../lib/formatPrice";

export function ServiceFeaturedStrip({ items }) {
  if (!items.length) return null;

  return (
    <section className="svc-featured" aria-labelledby="svc-featured-heading">
      <div className="svc-featured__head">
        <div>
          <span className="svc-featured__badge">Sélection</span>
          <h2 id="svc-featured-heading" className="svc-featured__title">
            Nos coups de cœur
          </h2>
        </div>
        <Link to="/book" className="svc-featured__all">
          Tout réserver
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>

      <div className="svc-featured__track">
        {items.map((item) => (
          <article key={item.slug} className="svc-featured__card">
            <div className="svc-featured__media">
              <img src={item.image} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="svc-featured__body">
              <span className="svc-featured__cat">{item.categoryLabel}</span>
              <h3 className="svc-featured__name">{item.name}</h3>
              <p className="svc-featured__meta">
                {formatDuration(item.durationMin)} · from {formatPriceAmount(item.price)} DZD
              </p>
              <Link to={`/book?service=${encodeURIComponent(item.slug)}`} className="svc-featured__link">
                Réserver
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
