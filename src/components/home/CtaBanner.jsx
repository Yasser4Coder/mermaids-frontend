import { Link } from "react-router-dom";

export function CtaBanner() {
  return (
    <section className="editorial-cta" aria-labelledby="products-cta-heading">
      <div className="editorial-cta__bg" aria-hidden="true">
        <img src="/images/service-img-1.jpg" alt="" loading="lazy" decoding="async" />
      </div>

      <div className="editorial-cta__inner">
        <div className="editorial-cta__card">
          <span className="editorial-cta__badge">Our Products</span>
          <h2 id="products-cta-heading" className="editorial-cta__title">
            Ready to Start Your Home Ritual?
          </h2>
          <Link to="/shop" className="editorial-cta__btn">
            <span className="editorial-cta__btn-label">View all products</span>
            <span className="editorial-cta__btn-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
