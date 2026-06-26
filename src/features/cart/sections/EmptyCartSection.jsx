import { Link } from 'react-router-dom'
import ShopProductCard from '@/components/shop/ShopProductCard'
import { cartPageData } from '@/data/cart'
import { getFeaturedProducts, magasinPageData } from '@/data/magasin'

const colorMap = Object.fromEntries(
  magasinPageData.filterGroups.colors.map((color) => [color.id, color.hex]),
)

function EmptyBagIllustration() {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-full max-h-56 max-w-48 text-ink"
      aria-hidden="true"
    >
      <rect x="48" y="88" width="144" height="152" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M72 88V72C72 56.536 84.536 44 100 44H140C155.464 44 168 56.536 168 72V88"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M96 88C96 76 104 68 120 68C136 68 144 76 144 88"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="120" cy="164" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
      <path
        d="M108 164H132M120 152V176"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M32 220C48 208 64 204 80 210C96 216 112 228 120 232C128 228 144 216 160 210C176 204 192 208 208 220"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M24 248C56 232 88 228 120 236C152 244 184 240 216 224"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  )
}

export default function EmptyCartSection() {
  const { empty } = cartPageData
  const featuredProducts = getFeaturedProducts(4)

  return (
    <div className="font-garamond">
      <div className="overflow-hidden border border-cream-dark bg-white">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative flex items-center justify-center bg-cream-box px-8 py-14 sm:px-12 sm:py-16 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />

            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -top-3 -left-3 size-16 border-t border-l border-ink/20" aria-hidden="true" />
              <div className="absolute -right-3 -bottom-3 size-16 border-r border-b border-ink/20" aria-hidden="true" />

              <div className="relative border border-cream-dark bg-white px-10 py-12 sm:px-12 sm:py-14">
                <EmptyBagIllustration />
                <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-charcoal">Empty bag</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-cream-dark px-8 py-12 sm:px-12 sm:py-16 lg:border-t-0 lg:border-l lg:px-14 lg:py-20">
            <p className="text-sm uppercase tracking-[0.25em] text-charcoal">{empty.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-wide text-ink sm:text-4xl lg:text-[2.75rem]">
              {empty.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal sm:text-lg">
              {empty.description}
            </p>

            <ul className="mt-8 space-y-3">
              {empty.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-charcoal sm:text-base">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-cream-dark bg-cream-box text-xs text-ink"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={empty.primaryCta.href}
                className="inline-flex cursor-pointer items-center justify-center gap-2 border border-ink bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
              >
                {empty.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to={empty.secondaryCta.href}
                className="inline-flex cursor-pointer items-center justify-center border border-cream-dark px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
              >
                {empty.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {featuredProducts.length > 0 && (
        <section className="mt-16 border-t border-cream-dark pt-14 lg:mt-20 lg:pt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-charcoal">Curated for you</p>
              <h3 className="mt-2 text-2xl font-bold tracking-wide text-ink sm:text-3xl">
                {empty.suggestionsTitle}
              </h3>
            </div>
            <Link
              to="/magasin"
              className="text-sm uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-70"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {featuredProducts.map((product) => (
              <ShopProductCard key={product.id} product={product} colorMap={colorMap} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
