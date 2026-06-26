import LinkText from '@/components/common/LinkText'
import Container from '@/components/common/Container'

function ColumnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 text-ink"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
      />
    </svg>
  )
}

export default function SpaServicesColumnsSection({ section, columns }) {
  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal sm:mt-4 sm:text-base lg:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="scrollbar-hide -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-6">
          {columns.map((column) => (
            <article
              key={column.id}
              className="min-w-[78vw] shrink-0 snap-center font-garamond sm:min-w-0 sm:snap-align-none"
            >
              <div className="flex items-center gap-2 border-b border-cream-dark pb-4">
                <ColumnIcon />
                <h3 className="text-base font-bold uppercase tracking-[0.08em] text-ink sm:text-lg">
                  {column.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {column.services.map((service) => (
                  <li key={service} className="text-sm text-charcoal sm:text-base">
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <LinkText href="#all-services" size="sm">
                  View All
                </LinkText>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
