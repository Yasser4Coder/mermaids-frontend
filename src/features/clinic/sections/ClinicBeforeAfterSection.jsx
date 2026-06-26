import { useCarousel } from '@/hooks/useCarousel'
import Container from '@/components/common/Container'

function BeforeAfterPair({ title, before, after }) {
  return (
    <div className="font-garamond">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.15em] text-charcoal">Before</p>
          <div className="overflow-hidden">
            <img src={before} alt={`${title} before`} className="aspect-square w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.15em] text-charcoal">After</p>
          <div className="overflow-hidden">
            <img src={after} alt={`${title} after`} className="aspect-square w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-base font-semibold text-ink sm:text-lg">{title}</p>
    </div>
  )
}

export default function ClinicBeforeAfterSection({ items }) {
  const { index, goToNext, goToPrev } = useCarousel(items.length)

  const visible =
    items.length <= 3
      ? items
      : [items[index], items[(index + 1) % items.length], items[(index + 2) % items.length]]

  return (
    <section className="py-20 lg:py-28">
      <Container size="lg">
        <h2 className="text-center font-garamond text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          Before & After Results
        </h2>

        <div className="relative mt-14">
          {items.length > 3 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous results"
                className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 cursor-pointer p-2 text-charcoal transition-colors hover:text-ink sm:-left-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next results"
                className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 cursor-pointer p-2 text-charcoal transition-colors hover:text-ink sm:-right-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visible.map((item) => (
              <BeforeAfterPair key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#all-treatments"
            className="inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
          >
            View More Results
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
