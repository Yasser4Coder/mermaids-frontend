import ServicesCatalogSection from '@/components/services/ServicesCatalogSection'
import ClinicHeroSection from '@/features/clinic/sections/ClinicHeroSection'
import { ClinicTreatmentsSection } from '@/features/clinic/sections/ClinicTreatmentsSection'
import ClinicHowItWorksSection from '@/features/clinic/sections/ClinicHowItWorksSection'
import ClinicBeforeAfterSection from '@/features/clinic/sections/ClinicBeforeAfterSection'
import ClinicSpecialistsSection from '@/features/clinic/sections/ClinicSpecialistsSection'
import ClinicPackagesSection from '@/features/clinic/sections/ClinicPackagesSection'
import ClinicFinalCtaSection from '@/features/clinic/sections/ClinicFinalCtaSection'
import { clinicPageData, clinicServiceCatalog } from '@/data/clinicServices'

export default function ClinicPage() {
  const {
    hero,
    treatmentsSection,
    treatmentCards,
    howItWorks,
    beforeAfter,
    specialistsSection,
    specialists,
    packages,
    consultationCta,
    finalCta,
  } = clinicPageData

  return (
    <>
      <ClinicHeroSection hero={hero} />
      <ClinicTreatmentsSection section={treatmentsSection} treatments={treatmentCards} />
      <ClinicHowItWorksSection data={howItWorks} />
      <ClinicBeforeAfterSection items={beforeAfter} />
      <ClinicSpecialistsSection section={specialistsSection} specialists={specialists} />
      <ClinicPackagesSection packages={packages} consultationCta={consultationCta} />
      <ServicesCatalogSection catalog={clinicServiceCatalog} />
      <ClinicFinalCtaSection data={finalCta} />
    </>
  )
}
