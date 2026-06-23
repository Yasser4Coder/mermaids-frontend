import { Link } from "react-router-dom";

export function BrandEditorial() {
  return (
    <section className="editorial-cta" aria-labelledby="services-cta-heading">
      <div className="editorial-cta__bg" aria-hidden="true">
        <img src="/images/Skin_glow_service.png" alt="" loading="lazy" decoding="async" />
      </div>

      <div className="editorial-cta__inner">
        <div className="editorial-cta__card">
          <span className="editorial-cta__badge">Our Services</span>
          <h2 id="services-cta-heading" className="editorial-cta__title">
            Ready to Begin Your Mermaids Journey?
          </h2>
          <Link to="/services" className="editorial-cta__btn">
            <span className="editorial-cta__btn-label">View all services</span>
            <span className="editorial-cta__btn-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
