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
    <section id="treatments" className="scroll-mt-24 py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal sm:text-sm">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal sm:mt-4 sm:text-base lg:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="scrollbar-hide -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-6">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="min-w-[78vw] shrink-0 snap-center sm:min-w-0 sm:snap-align-none">
              <ClinicTreatmentCard {...treatment} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <a
            href="#all-treatments"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink px-8 py-3.5 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:w-auto sm:px-10 sm:py-3 sm:text-base"
          >
            View All Treatments
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
