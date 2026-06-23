import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatPriceAmount } from "../../lib/formatPrice";

function badgeLabel(product) {
  if (!product.badge) return null;
  const map = {
    hit: "Staff pick",
    new: "New",
    subscribe: "Save",
    trending: "Trending",
    limited: "Limited",
    bestseller: "Bestseller",
  };
  return map[product.badgeType] ?? product.badge;
}

export function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const label = badgeLabel(product);

  return (
    <article className="shop-product-card">
      <Link to={`/shop/${product.slug}`} className="shop-product-card__media" aria-label={`View ${product.name}`}>
        {label ? <span className="shop-product-card__badge">{label}</span> : null}
        <img src={product.image} alt="" loading="lazy" decoding="async" />
      </Link>
      <div className="shop-product-card__body">
        <h3 className="shop-product-card__title">
          <Link to={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="shop-product-card__price">
          {formatPriceAmount(product.price)} <abbr title="Algerian dinar">DZD</abbr>
        </p>
        <button
          type="button"
          className="welcome-showcase__cta shop-product-card__bag"
          onClick={() => addItem(product.name, product.price)}
        >
          <span className="welcome-showcase__cta-label">Add to bag</span>
          <span className="welcome-showcase__cta-arrow" aria-hidden="true">
            <i className="fa-solid fa-plus" />
          </span>
        </button>
      </div>
    </article>
  );
}
