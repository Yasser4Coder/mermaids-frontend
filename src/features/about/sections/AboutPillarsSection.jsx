import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'

const pillars = [
  {
    title: 'Elegance',
    description:
      'Refined treatments and serene spaces that invite you to slow down, breathe deeply, and experience beauty with grace and poise.',
  },
  {
    title: 'Wellness',
    description:
      'A holistic approach that nurtures body and mind — from restorative spa rituals to therapies designed to renew your natural vitality.',
  },
  {
    title: 'Self-Expression',
    description:
      'Every service is tailored to celebrate who you are. We believe true beauty shines when you feel confident in your own skin.',
  },
]

export default function AboutPillarsSection() {
  return (
    <section className="border-y border-cream-dark bg-cream-box py-20 lg:py-28">
      <Container size="lg">
        <SectionHeader
          title="The Art Of Beauty"
          subtitle="Three pillars guide everything we create at Mermaids — the same principles that shape our sanctuary and every experience within it."
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          subtitleClassName="font-garamond text-base sm:text-lg"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="font-garamond">
              <h3 className="text-3xl font-bold tracking-wide text-ink sm:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
