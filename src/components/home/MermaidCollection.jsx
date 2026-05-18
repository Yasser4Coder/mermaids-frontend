import { Link } from "react-router-dom";
import { SALON_MENU_CARDS } from "../../data/salonMenuCards";

function SalonShowcaseCard({ card }) {
  const serviceCount = card.items.length;

  return (
    <Link to={card.to} className="salon-showcase-card">
      <img
        className="salon-showcase-card__img"
        src={card.image}
        alt={card.alt}
        width={640}
        height={800}
        loading="lazy"
        decoding="async"
      />
      <div className="salon-showcase-card__veil" aria-hidden="true" />

      <div className="salon-showcase-card__content">
        <h3 className="salon-showcase-card__title">{card.heading}</h3>
        <p className="salon-showcase-card__count">
          {serviceCount} service{serviceCount !== 1 ? "s" : ""}
        </p>
        <p className="salon-showcase-card__hint">{card.hint}</p>

        <ul className="salon-showcase-card__prices" aria-label={`${card.heading} from`}>
          {card.items.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <span>
                {item.price} <abbr title="Algerian dinar">DZD</abbr>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <span className="salon-showcase-card__icon" aria-hidden="true">
        <i className={card.icon} />
      </span>
    </Link>
  );
}

export function MermaidCollection() {
  return (
    <section
      className="section mermaid-collection mermaid-collection--showcase mermaid-collection--tide"
      id="services-preview"
      aria-labelledby="mermaid-collection-heading"
    >
      <div className="mermaid-collection__ambient" aria-hidden="true">
        <div className="mermaid-collection__glow" />
        <div className="mermaid-collection__wave-stack">
          <div className="mermaid-collection__wave mermaid-collection__wave--deep" />
          <div className="mermaid-collection__wave mermaid-collection__wave--mid" />
          <div className="mermaid-collection__wave mermaid-collection__wave--foam" />
        </div>
        <div className="mermaid-collection__sparkles" />
      </div>

      <div className="wrap mermaid-collection__wrap">
        <header className="mermaid-collection__head">
          <p className="mermaid-collection__eyebrow">Salon</p>
          <h2 id="mermaid-collection-heading" className="mermaid-collection__title">
            MERMAIDS BEAUTY CENTER
          </h2>
          <p className="mermaid-collection__tagline">Your luxurious refuge for beauty and relaxation</p>
          <p className="mermaid-collection__lede">
            <span className="mermaid-collection__lede-main">
              Enjoy hair, nails, makeup and skincare at the highest standards of luxury.
            </span>
            <span className="mermaid-collection__lede-sub">
              Because your care does not stop at one place — choose a section below.
            </span>
          </p>
          <span className="mermaid-collection__rule" aria-hidden="true" />
        </header>

        <div className="mermaid-collection__showcase">
          {SALON_MENU_CARDS.map((card) => (
            <SalonShowcaseCard key={card.id} card={card} />
          ))}
        </div>

        <footer className="mermaid-collection__footer">
          <Link to="/services" className="mermaid-collection__view-all">
            View all
          </Link>
          <Link to="/book" className="hero-ads__cta-pill mermaid-collection__book-pill">
            Book now · Full price list
          </Link>
        </footer>
      </div>
    </section>
  );
}
