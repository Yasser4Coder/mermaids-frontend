import { Link } from "react-router-dom";

const CATEGORIES = [
  { label: "Hair", image: "/images/Hair_colour_service.png", to: "/services#salon" },
  { label: "Skin", image: "/images/Skin_glow_service.png", to: "/services#soin-visage" },
  { label: "Spa", image: "/images/Hammam_spa_service.png", to: "/services#hammam" },
];

export function CategoryGallery() {
  return (
    <section className="brand-section brand-section--cream brand-categories" aria-label="Service categories">
      <div className="wrap brand-categories__wrap">
        <div className="brand-gallery">
          {CATEGORIES.map((cat) => (
            <Link key={cat.label} to={cat.to} className="brand-gallery__item">
              <img src={cat.image} alt="" loading="lazy" decoding="async" />
              <span className="brand-gallery__label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
