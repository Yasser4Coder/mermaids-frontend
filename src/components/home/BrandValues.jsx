import { SectionIntro } from "../ui/SectionIntro";

const VALUES = [
  {
    icon: "fa-solid fa-gem",
    title: "Luxury standards",
    text: "Every service follows refined protocols — from consultation to finish.",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Clean formulas",
    text: "Mamirka products mirror what we use in-salon — thoughtfully selected.",
  },
  {
    image: "/images/Skin_glow_service.png",
  },
  {
    icon: "fa-solid fa-calendar-check",
    title: "Easy booking",
    text: "Live availability online — pick your service, stylist and time in minutes.",
  },
  {
    icon: "fa-solid fa-spa",
    title: "Spa & clinic",
    text: "Hammam rituals, facials and aesthetic care under one roof.",
  },
  {
    image: "/images/Hair_colour_service.png",
  },
];

export function BrandValues() {
  return (
    <section className="brand-section" aria-labelledby="brand-values-heading">
      <div className="wrap">
        <SectionIntro badge="Why Mermaids" title="Why choose us" titleId="brand-values-heading" />

        <div className="brand-values">
          {VALUES.map((item, i) =>
            item.image ? (
              <div key={i} className="brand-value brand-value--image" aria-hidden="true">
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </div>
            ) : (
              <article key={item.title} className="brand-value">
                <span className="brand-value__icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h3 className="brand-value__title">{item.title}</h3>
                <p className="brand-value__text">{item.text}</p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
