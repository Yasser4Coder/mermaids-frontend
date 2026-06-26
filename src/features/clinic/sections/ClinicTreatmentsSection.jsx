import LinkText from '@/components/common/LinkText'
import Container from '@/components/common/Container'

export default function ClinicTreatmentCard({ title, description, image, priceFrom }) {
  return (
    <article className="group font-garamond">
      <div className="overflow-hidden bg-cream-dark">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal sm:text-base">
          {description}
        </p>
        <div className="mt-4">
          <LinkText href="/book" size="sm">
            From {priceFrom}
          </LinkText>
        </div>
      </div>
    </article>
  )
}

export function ClinicTreatmentsSection({ section, treatments }) {
  return (
    <section id="treatments" className="scroll-mt-24 py-20 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal">{section.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {treatments.map((treatment) => (
            <ClinicTreatmentCard key={treatment.id} {...treatment} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#all-treatments"
            className="inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
          >
            View All Treatments
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
