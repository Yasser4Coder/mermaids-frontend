import { PromoSpotlight } from "./PromoSpotlight";
import { BrandWelcome } from "./BrandWelcome";

export function HeroRevealStack() {
  return (
    <section className="hero-reveal-stack" aria-label="Featured promotions and welcome">
      <div className="hero-reveal-stack__pin">
        <div className="hero-reveal-stack__card">
          <PromoSpotlight />
        </div>
        <BrandWelcome />
      </div>
    </section>
  );
}
