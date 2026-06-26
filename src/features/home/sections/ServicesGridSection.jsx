import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

export default function ServicesGridSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="Discover our curated collection of beauty and wellness treatments, crafted to perfection."
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          subtitleClassName="font-garamond text-base sm:text-lg"
        />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#categories">Discover More</Button>
        </div>
      </Container>
    </section>
  )
}
