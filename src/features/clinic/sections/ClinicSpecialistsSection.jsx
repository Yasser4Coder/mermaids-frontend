import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function ClinicSpecialistsSection({ section, specialists }) {
  return (
    <section id="specialists" className="scroll-mt-24 py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="bg-cream-box px-5 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="font-garamond">
              <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal sm:mt-6 sm:text-base lg:text-xl">
                {section.description}
              </p>
              <Link
                to={section.cta.href}
                className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink px-8 py-3.5 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:mt-10 sm:w-auto sm:px-10 sm:py-3 sm:text-base"
              >
                {section.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
              {specialists.map((spec) => (
                <article
                  key={spec.name}
                  className="min-w-[42vw] shrink-0 snap-center text-center font-garamond sm:min-w-0 sm:snap-align-none"
                >
                  <div className="mx-auto aspect-[3/4] overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-ink sm:mt-4 sm:text-base">{spec.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-charcoal sm:text-sm">
                    {spec.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
