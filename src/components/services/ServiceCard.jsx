import { Link } from "react-router-dom";
import { formatDuration } from "../../data/services";
import { formatPriceAmount } from "../../lib/formatPrice";

function badgeLabel(service) {
  if (!service.badge) return null;
  const map = {
    hit: "Popular",
    new: "New",
    trending: "Trending",
  };
  return map[service.badgeType] ?? service.badge;
}

export function ServiceCard({ service }) {
  const label = badgeLabel(service);
  const bookUrl = `/book?service=${encodeURIComponent(service.slug)}`;

  return (
    <article className="service-card">
      <div className="service-card__media">
        {label ? <span className="service-card__badge">{label}</span> : null}
        <img src={service.image} alt="" loading="lazy" decoding="async" />
        <span className="service-card__category">{service.categoryLabel}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.name}</h3>
        {service.subsection ? <p className="service-card__meta">{service.subsection}</p> : null}
        <div className="service-card__details">
          <p className="service-card__price">
            {service.priceDisplay.includes("à partir") ? "From " : ""}
            {formatPriceAmount(service.price)} <abbr title="Algerian dinar">DZD</abbr>
          </p>
          <p className="service-card__duration">
            <i className="fa-regular fa-clock" aria-hidden="true" />
            {formatDuration(service.durationMin)}
          </p>
        </div>
        <Link to={bookUrl} className="welcome-showcase__cta service-card__book">
          <span className="welcome-showcase__cta-label">Book now</span>
          <span className="welcome-showcase__cta-arrow" aria-hidden="true">
            <i className="fa-solid fa-arrow-right" />
          </span>
        </Link>
      </div>
    </article>
  );
}
