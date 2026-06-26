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

  const visibleOnDesktop =
    items.length <= 3
      ? items
      : [items[index], items[(index + 1) % items.length], items[(index + 2) % items.length]]

  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <h2 className="text-center font-garamond text-3xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          Before & After Results
        </h2>

        <div className="relative mt-10 sm:mt-14">
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous results"
                className="absolute top-1/2 -left-1 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-cream-dark bg-white text-charcoal transition-colors hover:border-ink hover:text-ink sm:-left-8 sm:size-auto sm:border-0 sm:bg-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 sm:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next results"
                className="absolute top-1/2 -right-1 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-cream-dark bg-white text-charcoal transition-colors hover:border-ink hover:text-ink sm:-right-8 sm:size-auto sm:border-0 sm:bg-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 sm:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <div className="px-8 sm:px-0">
            <div className="lg:hidden">
              <BeforeAfterPair {...items[index]} />
            </div>

            <div className="hidden gap-8 lg:grid lg:grid-cols-3 lg:gap-6">
              {visibleOnDesktop.map((item) => (
                <BeforeAfterPair key={item.title} {...item} />
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <div className="mt-6 flex justify-center gap-2 lg:hidden">
              {items.map((item, itemIndex) => (
                <span
                  key={item.title}
                  className={`size-1.5 rounded-full transition-colors ${
                    itemIndex === index ? 'bg-ink' : 'bg-cream-dark'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="#all-treatments"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink px-8 py-3.5 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:w-auto sm:px-10 sm:py-3 sm:text-base"
          >
            View More Results
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
