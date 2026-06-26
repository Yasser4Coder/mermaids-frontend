import HeroSection from '@/features/home/sections/HeroSection'
import IntroSection from '@/features/home/sections/IntroSection'
import CategoriesSection from '@/features/home/sections/CategoriesSection'
import ServicesGridSection from '@/features/home/sections/ServicesGridSection'
import StoreGridSection from '@/features/home/sections/StoreGridSection'
import PromotionsSection from '@/features/home/sections/PromotionsSection'
import WhyChooseUsSection from '@/features/home/sections/WhyChooseUsSection'
import TestimonialsSection from '@/features/home/sections/TestimonialsSection'
import GallerySection from '@/features/home/sections/GallerySection'
import CtaSection from '@/features/home/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CategoriesSection />
      <ServicesGridSection />
      <StoreGridSection />
      <PromotionsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <GallerySection />
      <CtaSection />
    </>
  )
}
