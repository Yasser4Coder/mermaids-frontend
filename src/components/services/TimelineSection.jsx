import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'

export default function TimelineSection({ title, subtitle, steps }) {
  return (
    <section className="border-y border-cream-dark bg-cream-box py-16 lg:py-24">
      <Container size="lg">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          subtitleClassName="font-garamond text-base sm:text-lg"
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative font-garamond">
              <span className="text-5xl font-bold text-cream-dark sm:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-bold tracking-wide text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
