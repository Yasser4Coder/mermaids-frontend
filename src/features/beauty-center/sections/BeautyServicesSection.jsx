import Container from '@/components/common/Container'

function ServicePriceColumn({ category }) {
  return (
    <div className="font-garamond">
      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink sm:text-base">
        {category.title}
      </h4>
      <ul className="mt-3 space-y-2">
        {category.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-2">
            <span className="text-sm text-charcoal">{item.name}</span>
            <span className="shrink-0 text-sm font-medium text-ink">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BeautyServiceRow({ section }) {
  return (
    <article id={section.id} className="scroll-mt-28 border-b border-cream-dark py-12 last:border-b-0 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[220px_280px_1fr] lg:gap-10 xl:grid-cols-[240px_300px_1fr] xl:gap-12">
        <div className="overflow-hidden">
          <img
            src={section.image}
            alt={section.title}
            className="aspect-square w-full max-w-[240px] object-cover lg:max-w-none"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col font-garamond">
          <h3 className="text-3xl font-bold tracking-wide text-ink sm:text-4xl">{section.title}</h3>
          <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal">{section.description}</p>
          <a
            href="#all-services"
            className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 border border-ink px-6 py-2.5 font-garamond text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-sm"
          >
            View Services
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {section.categories.map((category) => (
            <ServicePriceColumn key={category.title} category={category} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default function BeautyServicesSection({ section, sections, sectionOrder }) {
  const orderedSections = sectionOrder.map((id) => sections[id])

  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal">{section.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base italic leading-relaxed text-charcoal sm:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-14">
          {orderedSections.map((row) => (
            <BeautyServiceRow key={row.id} section={row} />
          ))}
        </div>
      </Container>
    </section>
  )
}
