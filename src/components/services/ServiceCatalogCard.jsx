import { Link } from 'react-router-dom'
import { getBookingUrl } from '@/utils/booking'

function priceLabel(price) {
  if (/sur devis/i.test(price)) return 'Price'
  if (/à partir|from/i.test(price)) return 'Starting from'
  return 'Price'
}

export default function ServiceCatalogCard({ item, bookCategory, compact = false }) {
  return (
    <article
      className={`group flex flex-col border border-cream-dark bg-white font-garamond transition-colors hover:border-ink ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      {item.popular && (
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal">★ Most requested</p>
      )}
      <h4 className={`font-bold tracking-wide text-ink ${compact ? 'mt-1 text-base' : 'mt-2 text-lg sm:text-xl'}`}>
        {item.name}
      </h4>
      {item.description && (
        <p className={`mt-2 leading-relaxed text-charcoal ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}>
          {item.description}
        </p>
      )}
      <div className={`mt-auto border-t border-cream-dark ${compact ? 'mt-3 pt-3' : 'mt-5 pt-4'}`}>
        <p className="text-xs uppercase tracking-[0.15em] text-charcoal">{priceLabel(item.price)}</p>
        <p className={`font-bold text-ink ${compact ? 'mt-0.5 text-base' : 'mt-1 text-lg sm:text-xl'}`}>
          {item.price}
        </p>
      </div>

      {bookCategory && (
        <Link
          to={getBookingUrl(bookCategory, item.name)}
          className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink bg-ink text-cream transition-colors hover:bg-charcoal-dark ${
            compact
              ? 'mt-3 px-4 py-2 text-xs uppercase tracking-[0.15em]'
              : 'mt-4 px-4 py-2.5 text-sm uppercase tracking-[0.15em]'
          }`}
        >
          Book This
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  )
}
