import { useRef } from "react";
import { useSectionRevealScrollTrigger } from "../../hooks/useSectionRevealScrollTrigger";
import { ExperienceCompass } from "./ExperienceCompass";
import { FeaturedProducts } from "./FeaturedProducts";

export function ProductsRevealStack() {
  const productsRef = useRef(null);

  useSectionRevealScrollTrigger(productsRef, {
    targets:
      ".featured-products__eyebrow, .featured-products__title-line, .featured-products__title-accent, .featured-products__view-all, .featured-products__lede, .featured-products__aside, .editorial-product-card, .featured-products__footer",
    stagger: 0.07,
    end: "top 40%",
  });

  return (
    <div className="products-reveal-stack" aria-label="Explore worlds and boutique products">
      <ExperienceCompass />
      <FeaturedProducts ref={productsRef} sheet />
    </div>
  );
}
