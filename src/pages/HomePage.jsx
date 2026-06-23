import { BestsellersGrid } from "../components/home/BestsellersGrid";
import { BoutiquePromos } from "../components/home/BoutiquePromos";
import { BrandBookingSteps, FaqSection } from "../components/home/BrandClosing";
import { BrandEditorial } from "../components/home/BrandEditorial";
import { BrandValues } from "../components/home/BrandValues";
import { CategoryGallery } from "../components/home/CategoryGallery";
import { CtaBanner } from "../components/home/CtaBanner";
import { FeaturedServicesGrid } from "../components/home/FeaturedServicesGrid";
import { HeroRevealStack } from "../components/home/HeroRevealStack";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle(null);

  return (
    <>
      <HeroRevealStack />
      <FeaturedServicesGrid />
      <CategoryGallery />
      <BrandEditorial />
      <BestsellersGrid />
      <BoutiquePromos />
      <CtaBanner />
      <BrandValues />
      <BrandBookingSteps />
      <FaqSection />
    </>
  );
}
