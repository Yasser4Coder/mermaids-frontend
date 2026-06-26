import { useCarousel } from '@/hooks/useCarousel'

export default function BeforeAfterSlider({ items }) {
  const { index, goToNext, goToPrev } = useCarousel(items.length)

  const current = items[index]

  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="overflow-hidden">
          <p className="mb-2 font-garamond text-sm uppercase tracking-[0.15em] text-charcoal">
            Before
          </p>
          <img
            src={current.before}
            alt={`${current.title} before`}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <p className="mb-2 font-garamond text-sm uppercase tracking-[0.15em] text-charcoal">
            After
          </p>
          <img
            src={current.after}
            alt={`${current.title} after`}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <p className="mt-4 text-center font-garamond text-lg font-semibold text-ink">
        {current.title}
      </p>
      {items.length > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous transformation"
            className="cursor-pointer border border-ink px-4 py-2 font-garamond text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next transformation"
            className="cursor-pointer border border-ink px-4 py-2 font-garamond text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
