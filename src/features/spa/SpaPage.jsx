import Container from '@/components/common/Container'
import ServicesCatalogSection from '@/components/services/ServicesCatalogSection'
import TestimonialSlider from '@/components/ui/TestimonialSlider'
import SpaHeroSection from '@/features/spa/sections/SpaHeroSection'
import SpaExperiencesSection from '@/features/spa/sections/SpaExperiencesSection'
import SpaWhyChooseSection from '@/features/spa/sections/SpaWhyChooseSection'
import SpaPackagesSection from '@/features/spa/sections/SpaPackagesSection'
import SpaServicesColumnsSection from '@/features/spa/sections/SpaServicesColumnsSection'
import SpaGallerySection from '@/features/spa/sections/SpaGallerySection'
import SpaFinalCtaSection from '@/features/spa/sections/SpaFinalCtaSection'
import { spaPageData, spaServiceCatalog } from '@/data/spaServices'

export default function SpaPage() {
  const {
    hero,
    experiencesSection,
    experiences,
    whyChoose,
    packagesSection,
    packages,
    servicesSection,
    serviceColumns,
    gallery,
    testimonials,
    finalCta,
  } = spaPageData

  return (
    <>
      <SpaHeroSection hero={hero} />
      <SpaExperiencesSection section={experiencesSection} experiences={experiences} />
      <SpaWhyChooseSection data={whyChoose} />
      <SpaPackagesSection section={packagesSection} packages={packages} />
      <SpaServicesColumnsSection section={servicesSection} columns={serviceColumns} />
      <ServicesCatalogSection catalog={spaServiceCatalog} />
      <SpaGallerySection images={gallery} />

      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="text-center font-garamond text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
          <div className="mt-14">
            <TestimonialSlider items={testimonials} />
          </div>
        </Container>
      </section>

      <SpaFinalCtaSection data={finalCta} />
    </>
  )
}
