import Container from '@/components/common/Container'

export default function BeautyTransformationsSection({ items }) {
  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="flex flex-col gap-4 font-garamond sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            Hair Transformations
          </h2>
          <a
            href="#all-services"
            className="inline-flex shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-70"
          >
            View More
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="scrollbar-hide -mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[72vw] shrink-0 snap-center overflow-hidden sm:min-w-0 sm:snap-align-none"
            >
              <img src={item.src} alt={item.alt} className="aspect-square w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
