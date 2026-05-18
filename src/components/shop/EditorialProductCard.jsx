import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatPriceAmount } from "../../lib/formatPrice";

function reviewLabel(count) {
  if (count >= 1000) {
    const k = count / 1000;
    const text = Number.isInteger(k) ? String(k) : k.toFixed(1);
    return `${text}k Reviews`;
  }
  return `${count} Reviews`;
}

function ProductStars({ rating, reviews }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  return (
    <div className="editorial-product-card__rating" aria-label={`${rating} out of 5 stars, ${reviews} reviews`}>
      <span className="editorial-product-card__stars" aria-hidden="true">
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
          />
        ))}
      </span>
      <span className="editorial-product-card__reviews">{reviewLabel(reviews)}</span>
    </div>
  );
}

export function EditorialProductCard({ product, layout = "mid" }) {
  const { addItem } = useCart();
  const sizeParts = product.categoryLabel?.split("·").map((s) => s.trim()) ?? [];
  const category = sizeParts[0] ?? "";
  const sizeLabel = sizeParts[1] ?? "";

  return (
    <article className={`editorial-product-card editorial-product-card--${layout}`}>
      <div className="editorial-product-card__panel">
        {product.badge && (
          <span className={`editorial-product-card__badge editorial-product-card__badge--${product.badgeType}`}>
            {product.badge}
          </span>
        )}
        <ProductStars rating={product.rating} reviews={product.reviews} />

        <Link
          to={`/shop/${product.slug}`}
          className="editorial-product-card__visual"
          aria-label={`View ${product.name}`}
        >
          <img src={product.image} alt="" loading="lazy" decoding="async" />
        </Link>

        {sizeLabel ? (
          <div className="editorial-product-card__sizes" aria-hidden="true">
            <span className="editorial-product-card__size editorial-product-card__size--active">{sizeLabel}</span>
            {category && category !== sizeLabel && (
              <span className="editorial-product-card__size">{category}</span>
            )}
          </div>
        ) : null}

        <button
          type="button"
          className="editorial-product-card__quick-add"
          aria-label={`Add ${product.name} to bag`}
          onClick={(e) => {
            e.preventDefault();
            addItem(product.name, product.price);
          }}
        >
          <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
        </button>
      </div>

      <div className="editorial-product-card__foot">
        <h3 className="editorial-product-card__title">
          <Link to={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="editorial-product-card__subtitle">{product.description}</p>
        <p className="editorial-product-card__price">
          {formatPriceAmount(product.price)} <abbr title="Algerian dinar">DZD</abbr>
        </p>
      </div>
    </article>
  );
}
