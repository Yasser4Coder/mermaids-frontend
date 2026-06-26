import { Link } from 'react-router-dom'
import { useState } from 'react'

function HeartIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  )
}

export default function ShopProductCard({ product, colorMap }) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <article className="group font-garamond">
      <Link to={`/magasin/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-cream-dark">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-ink px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-cream sm:text-xs">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <h3 className="mt-3 text-sm font-medium uppercase tracking-wider text-ink sm:text-base">
          {product.title}
        </h3>
        <p className="mt-1 text-base text-[#979797] sm:text-lg">{product.priceLabel}</p>
      </Link>

      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex gap-1.5">
          {product.colors.map((colorId) => (
            <span
              key={colorId}
              className="size-3.5 rounded-full border border-cream-dark sm:size-4"
              style={{ backgroundColor: colorMap[colorId] }}
              title={colorId}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setWishlisted((v) => !v)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`flex size-9 shrink-0 cursor-pointer items-center justify-center border border-cream-dark bg-white transition-colors hover:bg-cream ${
            wishlisted ? 'text-ink' : 'text-charcoal'
          }`}
        >
          <HeartIcon filled={wishlisted} />
        </button>
      </div>
    </article>
  )
}
