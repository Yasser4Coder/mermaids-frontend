import { useCarousel } from '@/hooks/useCarousel'
import quoteIcon from '@/assets/icons/quote.png'
import quoteBottomIcon from '@/assets/icons/quotebottom.png'

export default function TestimonialSlider({ items }) {
  const { index, goToNext, goToPrev } = useCarousel(items.length)

  const current = items[index]

  return (
    <div className="relative mx-auto max-w-2xl">
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous testimonial"
        className="absolute top-1/2 left-0 -translate-y-1/2 text-charcoal transition-colors hover:text-ink sm:-left-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="px-10 text-center">
        <div className="mx-auto size-24 overflow-hidden rounded-full sm:size-28">
          <img
            src={current.image}
            alt={current.name}
            className="size-full object-cover"
          />
        </div>

        <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-yellow-400 sm:size-5"
              aria-hidden="true"
            >
              <path d="M12 2.25l2.52 5.11 5.64.82-4.08 3.98.96 5.61L12 15.9l-5.04 2.87.96-5.61-4.08-3.98 5.64-.82L12 2.25z" />
            </svg>
          ))}
        </div>

        <blockquote className="relative mx-auto mt-8 max-w-xl px-10 py-4 font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
          <img
            src={quoteIcon}
            alt=""
            className="absolute top-0 left-0 size-8 sm:size-7"
            aria-hidden="true"
          />
          <p className="relative z-10">{current.quote}</p>
          <img
            src={quoteBottomIcon}
            alt=""
            className="absolute right-0 bottom-0 size-8 sm:size-7"
            aria-hidden="true"
          />
        </blockquote>
        <p className="mt-6 text-base font-medium tracking-wide text-ink sm:text-lg">
          {current.name}
        </p>
        <p className="mt-1 text-sm uppercase tracking-[0.15em] text-charcoal sm:text-base">
          {current.role}
        </p>
      </div>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next testimonial"
        className="absolute top-1/2 right-0 -translate-y-1/2 text-charcoal transition-colors hover:text-ink sm:-right-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}
