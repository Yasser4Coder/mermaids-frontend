import { useState } from 'react'
import Container from '@/components/common/Container'

function ServicePriceColumn({ category }) {
  return (
    <div className="font-garamond">
      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink sm:text-base">
        {category.title}
      </h4>
      <ul className="mt-3 space-y-2">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-3">
            <span className="text-sm text-charcoal">{item.name}</span>
            <span className="shrink-0 text-sm font-medium text-ink">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileCategoryAccordion({ category, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden border border-cream-dark bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left font-garamond"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">{category.title}</span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center border border-cream-dark text-sm text-charcoal transition-transform ${
            open ? 'rotate-180 bg-cream-box' : ''
          }`}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>
      {open && (
        <ul className="space-y-2 border-t border-cream-dark px-4 pb-4 pt-3">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-start justify-between gap-3 text-sm">
              <span className="text-charcoal">{item.name}</span>
              <span className="shrink-0 font-medium text-ink">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function BeautyServiceRow({ section }) {
  return (
    <article id={section.id} className="scroll-mt-32 border-b border-cream-dark py-10 last:border-b-0 sm:scroll-mt-28 sm:py-12 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[220px_280px_1fr] lg:gap-10 xl:grid-cols-[240px_300px_1fr] xl:gap-12">
        <div className="overflow-hidden">
          <img
            src={section.image}
            alt={section.title}
            className="aspect-[4/3] w-full object-cover sm:aspect-square sm:max-w-[240px] lg:max-w-none"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col font-garamond">
          <h3 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl lg:text-4xl">{section.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal sm:mt-4 sm:text-base">{section.description}</p>
          <a
            href="#all-services"
            className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink px-6 py-3 font-garamond text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:mt-6 sm:w-fit sm:py-2.5 sm:text-sm"
          >
            View Services
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="space-y-2 md:hidden">
          {section.categories.map((category, index) => (
            <MobileCategoryAccordion key={category.title} category={category} defaultOpen={index === 0} />
          ))}
        </div>

        <div className="hidden gap-6 md:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
    <section id="services" className="scroll-mt-24 py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal sm:text-sm">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm italic leading-relaxed text-charcoal sm:mt-4 sm:text-base lg:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          {orderedSections.map((row) => (
            <BeautyServiceRow key={row.id} section={row} />
          ))}
        </div>
      </Container>
    </section>
  )
}
