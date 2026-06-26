import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function ClinicSpecialistsSection({ section, specialists }) {
  return (
    <section id="specialists" className="scroll-mt-24 py-20 lg:py-28">
      <Container size="lg">
        <div className="bg-cream-box px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="font-garamond">
              <h2 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
                {section.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
                {section.description}
              </p>
              <Link
                to={section.cta.href}
                className="mt-10 inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
              >
                {section.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {specialists.map((spec) => (
                <article key={spec.name} className="text-center font-garamond">
                  <div className="mx-auto aspect-[3/4] overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-ink sm:text-base">{spec.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-charcoal sm:text-sm">
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
