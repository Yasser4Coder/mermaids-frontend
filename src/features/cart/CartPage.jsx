import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import WireframePlaceholder from '@/components/services/WireframePlaceholder'
import { formatPrice, useCart } from '@/context/CartContext'
import { useAccount } from '@/context/AccountContext'
import EmptyCartSection from '@/features/cart/sections/EmptyCartSection'
import { cartPageData } from '@/data/cart'
import { magasinPageData } from '@/data/magasin'

const colorMap = Object.fromEntries(
  magasinPageData.filterGroups.colors.map((color) => [color.id, color.hex]),
)

function CartLineItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <article className="grid gap-4 border-b border-cream-dark py-6 font-garamond sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-6">
      <Link to={`/magasin/product/${item.productId}`} className="block overflow-hidden bg-cream-dark">
        {item.image ? (
          <img src={item.image} alt={item.title} className="aspect-square w-full object-cover" />
        ) : (
          <WireframePlaceholder label="Product" className="aspect-square w-full" />
        )}
      </Link>

      <div>
        <Link
          to={`/magasin/product/${item.productId}`}
          className="text-lg font-bold tracking-wide text-ink transition-opacity hover:opacity-70 sm:text-xl"
        >
          {item.title}
        </Link>
        {item.color && (
          <div className="mt-2 flex items-center gap-2 text-sm text-charcoal">
            <span
              className="size-4 rounded-full border border-cream-dark"
              style={{ backgroundColor: colorMap[item.color] }}
            />
            <span className="capitalize">{item.color}</span>
          </div>
        )}
        <p className="mt-2 text-base text-charcoal sm:hidden">{formatPrice(item.price)}</p>
        <button
          type="button"
          onClick={() => onRemove(item.cartKey)}
          className="mt-3 cursor-pointer text-sm uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-ink"
        >
          Remove
        </button>
      </div>

      <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center">
        <div className="inline-flex border border-cream-dark">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.cartKey, item.quantity - 1)}
            className="flex size-10 cursor-pointer items-center justify-center text-lg text-ink transition-colors hover:bg-cream-box"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="flex min-w-10 items-center justify-center border-x border-cream-dark text-base font-medium text-ink">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)}
            className="flex size-10 cursor-pointer items-center justify-center text-lg text-ink transition-colors hover:bg-cream-box"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <p className="hidden text-lg font-bold text-ink sm:block">
          {formatPrice(item.price * item.quantity)}
        </p>
        <p className="text-lg font-bold text-ink sm:hidden">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </article>
  )
}

export default function CartPage() {
  const { hero, freeShippingThreshold, shippingFee } = cartPageData
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart()
  const { isAuthenticated, addOrder } = useAccount()
  const [ordered, setOrdered] = useState(false)

  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : shippingFee
  const total = subtotal + shipping
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  function handleCheckout() {
    if (isAuthenticated) {
      addOrder({ items, subtotal, shipping, total })
    }
    setOrdered(true)
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (ordered) {
    return (
      <Container size="lg" className="py-20 font-garamond sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-charcoal">Order received</p>
          <h1 className="mt-4 text-4xl font-bold tracking-wide text-ink sm:text-5xl">Thank You</h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
            Your order request has been placed. Our team will contact you shortly to confirm
            delivery and payment details.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/magasin"
              className="inline-flex cursor-pointer items-center justify-center border border-ink bg-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
            >
              Continue Shopping
            </Link>
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center justify-center border border-cream-dark px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <>
      <section className="border-b border-cream-dark bg-cream-box py-14 sm:py-16 lg:py-20">
        <Container size="lg">
          <div className="max-w-2xl font-garamond">
            <nav aria-label="Breadcrumb" className="text-sm uppercase tracking-[0.15em] text-charcoal">
              <Link to="/" className="transition-colors hover:text-ink">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Cart</span>
            </nav>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-charcoal">{hero.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal sm:text-lg">{hero.subtitle}</p>
          </div>
        </Container>
      </section>

      <Container size="lg" className="py-14 lg:py-20">
        {items.length === 0 ? (
          <EmptyCartSection />
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 xl:grid-cols-[1fr_400px]">
            <div>
              <div className="flex items-center justify-between border-b border-cream-dark pb-4 font-garamond">
                <p className="text-sm uppercase tracking-[0.15em] text-charcoal">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
                <Link
                  to="/magasin"
                  className="text-sm uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-70"
                >
                  Continue shopping →
                </Link>
              </div>

              {items.map((item) => (
                <CartLineItem
                  key={item.cartKey}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            <aside className="h-fit border border-cream-dark bg-white p-6 font-garamond sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold tracking-wide text-ink">Order Summary</h2>

              {amountToFreeShipping > 0 && (
                <p className="mt-4 border border-cream-dark bg-cream-box px-4 py-3 text-sm text-charcoal">
                  Add <span className="font-medium text-ink">{formatPrice(amountToFreeShipping)}</span>{' '}
                  more for free shipping
                </p>
              )}

              <dl className="mt-6 space-y-3 text-base">
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal">Subtotal</dt>
                  <dd className="font-medium text-ink">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal">Shipping</dt>
                  <dd className="font-medium text-ink">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-cream-dark pt-3 text-lg">
                  <dt className="font-bold text-ink">Total</dt>
                  <dd className="font-bold text-ink">{formatPrice(total)}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-8 w-full cursor-pointer border border-ink bg-ink px-8 py-4 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-charcoal">
                Free shipping on orders over {formatPrice(freeShippingThreshold)}
              </p>
            </aside>
          </div>
        )}
      </Container>
    </>
  )
}
