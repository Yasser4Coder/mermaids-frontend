import { useRef } from "react";
import { useSectionRevealScrollTrigger } from "../../hooks/useSectionRevealScrollTrigger";
import { ExperienceCompass } from "./ExperienceCompass";
import { FeaturedProducts } from "./FeaturedProducts";

const EXPLORE_TARGETS =
  ".experience-compass__eyebrow, .experience-compass__title, .experience-compass__card";

const PRODUCT_TARGETS =
  ".featured-products__eyebrow, .featured-products__title-line, .featured-products__title-accent, .featured-products__view-all, .featured-products__lede, .featured-products__aside, .editorial-product-card, .featured-products__footer";

export function ProductsRevealStack() {
  const stackRef = useRef(null);
  const productsRef = useRef(null);

  useSectionRevealScrollTrigger(stackRef, {
    targets: EXPLORE_TARGETS,
    stagger: 0.05,
    start: "top 88%",
  });

  useSectionRevealScrollTrigger(productsRef, {
    targets: PRODUCT_TARGETS,
    stagger: 0.06,
    start: "top 88%",
  });

  return (
    <div ref={stackRef} className="products-reveal-stack" aria-label="Explore worlds and boutique products">
      <ExperienceCompass />
      <FeaturedProducts ref={productsRef} sheet />
    </div>
  );
}
