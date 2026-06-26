import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import PromotionCard from '@/components/ui/PromotionCard'
import { promotions } from '@/data/promotions'

export default function PromotionsSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <Container>
        <SectionHeader
          title="Current Promotions"
          subtitle="Indulge in what we offer."
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          subtitleClassName="font-garamond text-lg italic sm:text-xl lg:text-2xl"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16 lg:gap-12">
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              label={promotion.label}
              titleLines={promotion.titleLines}
              image={promotion.image}
              href={promotion.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
