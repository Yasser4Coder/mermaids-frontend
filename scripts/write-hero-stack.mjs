import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const d = "div";
const content = `import { useRef } from "react";
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
      <${d} ref={pinRef} className="hero-reveal-stack__pin">
        <${d} className="hero-reveal-stack__backdrop" aria-hidden="true">
          <img src="/images/bg1.png" alt="" className="hero-reveal-stack__backdrop-img" />
        </${d}>

        <BrandWelcome ref={sheetRef} sheet />

        <${d} ref={cardRef} className="hero-reveal-stack__card">
          <PromoSpotlight />
        </${d}>
      </${d}>
    </section>
  );
}
`;

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
fs.writeFileSync(path.join(root, "src/components/home/HeroRevealStack.jsx"), content);
