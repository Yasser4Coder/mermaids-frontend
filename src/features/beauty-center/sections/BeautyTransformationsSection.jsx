import { useCarousel } from '@/hooks/useCarousel'
import Container from '@/components/common/Container'

export default function BeautyTransformationsSection({ items }) {
  const mobileVisible = 2
  const maxIndex = Math.max(0, items.length - mobileVisible)
  const { index, goToNext, goToPrev } = useCarousel(maxIndex + 1)

  return (
    <section className="py-20 lg:py-28">
      <Container size="lg">
        <div className="flex items-end justify-between gap-4 font-garamond">
          <h2 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            Hair Transformations
          </h2>
          <a
            href="#all-services"
            className="hidden shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-70 sm:inline-flex"
          >
            View More
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative mt-10 lg:hidden">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous transformations"
            className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 cursor-pointer p-2 text-charcoal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next transformations"
            className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 cursor-pointer p-2 text-charcoal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-3 px-6">
            {items.slice(index, index + mobileVisible).map((item) => (
              <div key={item.id} className="overflow-hidden">
                <img src={item.src} alt={item.alt} className="aspect-square w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden grid-cols-3 gap-4 sm:grid lg:mt-10 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
