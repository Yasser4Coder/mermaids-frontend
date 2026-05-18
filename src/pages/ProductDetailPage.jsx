import { Link, useParams } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { Wrap } from "../components/ui/Wrap";
import { useCart } from "../context/CartContext";
import { getProductBySlug, PRODUCTS } from "../data/products";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";
import { formatDZD } from "../lib/formatDZD";

function StarRating({ rating, reviews }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`${rating} out of 5 stars, ${reviews} reviews`}>
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={
            i < full
              ? "fa-solid fa-star"
              : i === full && half
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
          }
          aria-hidden="true"
        />
      ))}
      <span className="ms-2 text-sm text-muted">({reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews})</span>
    </div>
  );
}

export function ProductDetailPage() {
  usePageInner();
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  useDocumentTitle(product.name);

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <Wrap className="py-10 md:py-16">
      <Reveal className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-pink-100">
          <img src={product.image} alt="" className="aspect-square w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">{product.categoryLabel}</p>
          <h1 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{product.name}</h1>
          {product.badge && (
            <span className="mt-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-white">
              {product.badge}
            </span>
          )}
          <StarRating rating={product.rating} reviews={product.reviews} />
          <p className="mt-4 text-lg text-muted">{product.description}</p>
          <p className="mt-6 font-display text-2xl text-ink">{formatDZD(product.price)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button type="button" size="lg" onClick={() => addItem(product.name, product.price)}>
              Add to cart
            </Button>
            <Button to="/checkout" variant="outline" size="lg">
              Go to checkout
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            <Link to="/shop" className="text-gold hover:underline">
              ← Back to boutique
            </Link>
          </p>
        </div>
      </Reveal>
      {related.length > 0 && (
        <Reveal className="mt-16">
          <h2 className="font-serif text-xl text-ink">You may also like</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.id}>
                <Link to={`/shop/${p.slug}`} className="glass-panel block overflow-hidden transition hover:border-gold/30">
                  <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <span className="block p-3 font-medium text-ink">{p.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Wrap>
  );
}
