import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Wrap } from "../components/ui/Wrap";
import { useCart } from "../context/CartContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";
import { SHIPPING_DZD, formatDZD } from "../lib/formatDZD";

export function CheckoutPage() {
  usePageInner("page-checkout");
  useDocumentTitle("Checkout");
  const { cart, updateQty, removeItem, subtotal, clearCart, itemCount } = useCart();
  const total = subtotal + (cart.items.length ? SHIPPING_DZD : 0);

  return (
    <>
      <PageHero compact eyebrow="Checkout" title="Your cart" lede={itemCount ? `${itemCount} item(s) ready for pickup or delivery.` : "Your cart is empty."} />
      <Wrap className="pb-16">
        {cart.items.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <p className="text-muted">Add products from the boutique to continue.</p>
            <Button to="/shop" className="mt-6">
              Shop Mamirka
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <ul className="space-y-4">
              {cart.items.map((item) => (
                <li key={item.name} className="glass-panel flex flex-wrap items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-sm text-muted">{formatDZD(item.price)} each</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="sr-only" htmlFor={`qty-${item.name}`}>
                      Quantity
                    </label>
                    <input
                      id={`qty-${item.name}`}
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => updateQty(item.name, Number(e.target.value))}
                      className="w-16 rounded-lg border border-gold/20 px-2 py-1 text-center"
                    />
                    <button type="button" className="text-sm text-pink-deep hover:underline" onClick={() => removeItem(item.name)}>
                      Remove
                    </button>
                  </div>
                  <p className="font-semibold text-ink">{formatDZD(item.price * item.qty)}</p>
                </li>
              ))}
            </ul>
            <aside className="glass-panel h-fit p-6">
              <h2 className="font-serif text-lg text-ink">Order summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd>{formatDZD(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Shipping</dt>
                  <dd>{formatDZD(SHIPPING_DZD)}</dd>
                </div>
                <div className="flex justify-between border-t border-gold/15 pt-3 text-base font-semibold text-ink">
                  <dt>Total</dt>
                  <dd>{formatDZD(total)}</dd>
                </div>
              </dl>
              <Button type="button" className="mt-6 w-full justify-center" onClick={() => alert("Demo checkout — order saved locally.")}>
                Place order
              </Button>
              <button type="button" className="mt-3 w-full text-center text-sm text-muted hover:text-ink" onClick={clearCart}>
                Clear cart
              </button>
              <p className="mt-4 text-xs text-muted">
                <Link to="/shop" className="text-gold hover:underline">
                  Continue shopping
                </Link>
              </p>
            </aside>
          </div>
        )}
      </Wrap>
    </>
  );
}
