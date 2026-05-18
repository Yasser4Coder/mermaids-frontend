import { Link } from "react-router-dom";

const CARDS = [
  { icon: "content_cut", label: "Salon", hint: "Salon · hair & nails", to: "/#services-preview" },
  { icon: "spa", label: "Spa", hint: "Hammam · spa · massage", to: "/#spa-wellness" },
  { icon: "health_and_beauty", label: "Brides", hint: "Because your big day deserves perfection", to: "/book" },
  { icon: "shopping_bag", label: "Boutique", hint: "Mamirka · beauty boutique", to: "/#featured-products" },
];

export function ExperienceCompass() {
  return (
    <section className="experience-compass" id="discover" aria-labelledby="experience-compass-heading">
      <div className="wrap experience-compass__inner">
        <p className="eyebrow eyebrow--pill experience-compass__eyebrow">Explore</p>
        <h2 id="experience-compass-heading" className="experience-compass__title">
          Because your care does not stop at one place
        </h2>
        <ul className="experience-compass__grid">
          {CARDS.map((card) => (
            <li key={card.label}>
              <Link to={card.to} className="experience-compass__card">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {card.icon}
                </span>
                <span className="experience-compass__label">{card.label}</span>
                <span className="experience-compass__hint">{card.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
