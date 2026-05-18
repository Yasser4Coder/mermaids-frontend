import { useRef } from "react";
import { useHeroScrollTrigger } from "../../hooks/useHeroScrollTrigger";
import { BrandWelcome } from "./BrandWelcome";
import { PromoSpotlight } from "./PromoSpotlight";

export function HeroRevealStack() {
  const stackRef = useRef(null);
  const pinRef = useRef(null);
  const cardRef = useRef(null);
  const sheetRef = useRef(null);

  useHeroScrollTrigger(stackRef, pinRef, cardRef, sheetRef);

  return (
    <section ref={stackRef} className="hero-reveal-stack" aria-label="Featured promotions and welcome">
      <div ref={pinRef} className="hero-reveal-stack__pin">
        <div className="hero-reveal-stack__backdrop" aria-hidden="true">
          <img src="/images/bg1.png" alt="" className="hero-reveal-stack__backdrop-img" />
        </div>

        <div ref={cardRef} className="hero-reveal-stack__card">
          <PromoSpotlight />
        </div>

        <BrandWelcome ref={sheetRef} sheet />
      </div>
    </section>
  );
}
