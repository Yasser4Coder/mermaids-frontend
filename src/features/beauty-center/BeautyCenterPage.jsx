import Container from '@/components/common/Container'
import TestimonialSlider from '@/components/ui/TestimonialSlider'
import BeautyHeroSection from '@/features/beauty-center/sections/BeautyHeroSection'
import BeautyServicesSection from '@/features/beauty-center/sections/BeautyServicesSection'
import BeautyStatsSection from '@/features/beauty-center/sections/BeautyStatsSection'
import BeautyTransformationsSection from '@/features/beauty-center/sections/BeautyTransformationsSection'
import BeautyPackagesSection from '@/features/beauty-center/sections/BeautyPackagesSection'
import BeautyServicesCatalogSection from '@/features/beauty-center/sections/BeautyServicesCatalogSection'
import BeautyGallerySection from '@/features/beauty-center/sections/BeautyGallerySection'
import BeautyFinalCtaSection from '@/features/beauty-center/sections/BeautyFinalCtaSection'
import { beautyCenterPageData, beautyServiceCatalog } from '@/data/beautyCenterServices'

export default function BeautyCenterPage() {
  const {
    hero,
    servicesSection,
    sections,
    sectionOrder,
    stats,
    transformations,
    packagesSection,
    packages,
    gallery,
    testimonials,
    finalCta,
  } = beautyCenterPageData

  return (
    <>
      <BeautyHeroSection hero={hero} />
      <BeautyServicesSection
        section={servicesSection}
        sections={sections}
        sectionOrder={sectionOrder}
      />
      <BeautyStatsSection stats={stats} />
      <BeautyTransformationsSection items={transformations} />
      <BeautyPackagesSection section={packagesSection} packages={packages} />
      <BeautyServicesCatalogSection catalog={beautyServiceCatalog} />
      <BeautyGallerySection images={gallery} />

      <section className="border-t border-cream-dark py-12 sm:py-16 lg:py-28">
        <Container>
          <h2 className="text-center font-garamond text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
          <div className="mt-10 sm:mt-14">
            <TestimonialSlider items={testimonials} />
          </div>
        </Container>
      </section>

      <BeautyFinalCtaSection data={finalCta} />
    </>
  )
}
