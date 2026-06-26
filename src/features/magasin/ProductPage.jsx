import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '@/components/common/Container'
import WireframePlaceholder from '@/components/services/WireframePlaceholder'
import ShopProductCard from '@/components/shop/ShopProductCard'
import { getProductById, getRelatedProducts, magasinPageData } from '@/data/magasin'

const colorMap = Object.fromEntries(
  magasinPageData.filterGroups.colors.map((color) => [color.id, color.hex]),
)

const galleryLabels = ['Main Photo', 'Detail 1', 'Detail 2', 'Detail 3']

function HeartIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? 'currentColor' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
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

function ProductTabs({ product }) {
  const tabs = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'how-to-use', label: 'How to Use', content: product.howToUse },
    { id: 'ingredients', label: 'Ingredients', content: product.ingredients },
  ]
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="font-garamond">
      <div className="flex flex-wrap gap-2 border-b border-cream-dark">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer border-b-2 px-4 py-3 text-sm uppercase tracking-[0.15em] transition-colors ${
              activeTab === tab.id
                ? 'border-ink text-ink'
                : 'border-transparent text-charcoal hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </p>
    </div>
  )
}

export default function ProductPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)

  const [activeImage, setActiveImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] ?? '')
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  if (!product) {
    return (
      <Container size="lg" className="py-24 text-center font-garamond">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">Product not found</h1>
        <p className="mt-4 text-charcoal">This item may no longer be available.</p>
        <Link
          to="/magasin"
          className="mt-8 inline-flex cursor-pointer border border-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          Back to Magasin
        </Link>
      </Container>
    )
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <>
      <Container size="lg" className="py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="font-garamond text-sm uppercase tracking-[0.15em] text-charcoal">
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/magasin" className="transition-colors hover:text-ink">
            Magasin
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.title}</span>
        </nav>
      </Container>

      <Container size="lg" className="pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="font-garamond">
            <WireframePlaceholder
              label={galleryLabels[activeImage]}
              className="aspect-square w-full"
            />
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryLabels.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`cursor-pointer border-2 transition-colors ${
                    activeImage === index ? 'border-ink' : 'border-transparent'
                  }`}
                  aria-label={`View ${label}`}
                >
                  <WireframePlaceholder label={label} className="aspect-square w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="font-garamond">
            {product.badge && (
              <span className="inline-block bg-ink px-3 py-1 text-xs uppercase tracking-[0.15em] text-cream">
                {product.badge}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold tracking-wide text-ink sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            <p className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{product.priceLabel}</p>

            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-charcoal sm:text-base">
                  <span className="text-ink" aria-hidden="true">
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-cream-dark py-6 text-sm sm:text-base">
              <div>
                <dt className="uppercase tracking-[0.12em] text-charcoal">Category</dt>
                <dd className="mt-1 font-medium text-ink">{product.categoryLabel}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.12em] text-charcoal">Material</dt>
                <dd className="mt-1 font-medium text-ink">{product.materialLabel}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.12em] text-charcoal">Volume</dt>
                <dd className="mt-1 font-medium text-ink">{product.volume}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.12em] text-charcoal">Delivery</dt>
                <dd className="mt-1 font-medium text-ink">Free over 5000 DA</dd>
              </div>
            </dl>

            {product.colors.length > 0 && (
              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.15em] text-charcoal">Color</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.colors.map((colorId) => (
                    <button
                      key={colorId}
                      type="button"
                      onClick={() => setSelectedColor(colorId)}
                      aria-label={colorId}
                      className={`size-8 cursor-pointer rounded-full border-2 transition-transform sm:size-9 ${
                        selectedColor === colorId ? 'border-ink scale-110' : 'border-cream-dark'
                      }`}
                      style={{ backgroundColor: colorMap[colorId] }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.15em] text-charcoal">Quantity</p>
              <div className="mt-3 inline-flex border border-cream-dark">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="flex size-11 cursor-pointer items-center justify-center text-xl text-ink transition-colors hover:bg-cream-box"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="flex min-w-12 items-center justify-center border-x border-cream-dark text-base font-medium text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="flex size-11 cursor-pointer items-center justify-center text-xl text-ink transition-colors hover:bg-cream-box"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('/cart')}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 border border-ink bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => setWishlisted((value) => !value)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`flex cursor-pointer items-center justify-center gap-2 border border-cream-dark px-6 py-3.5 text-sm uppercase tracking-[0.15em] transition-colors hover:border-ink sm:px-8 ${
                  wishlisted ? 'text-ink' : 'text-charcoal'
                }`}
              >
                <HeartIcon filled={wishlisted} />
                Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-dark pt-12 lg:mt-20 lg:pt-16">
          <ProductTabs product={product} />
        </div>
      </Container>

      {relatedProducts.length > 0 && (
        <section className="border-t border-cream-dark bg-cream-box py-16 lg:py-20">
          <Container size="lg">
            <h2 className="font-garamond text-3xl font-bold tracking-wide text-ink sm:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
              {relatedProducts.map((item) => (
                <ShopProductCard key={item.id} product={item} colorMap={colorMap} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
