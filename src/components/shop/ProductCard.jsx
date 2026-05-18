import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatPriceAmount, formatReviewsCount } from "../../lib/formatPrice";
import { Reveal } from "../ui/Reveal";

function ProductStars({ rating, reviews }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < full) {
      stars.push(<i key={i} className="fa-solid fa-star" aria-hidden="true" />);
    } else if (i === full && half) {
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke" aria-hidden="true" />);
    } else {
      stars.push(<i key={i} className="fa-solid fa-star" aria-hidden="true" />);
    }
  }
  return (
    <div className="product-card__stars" aria-label={`${rating} out of 5 stars, ${reviews} reviews`}>
      {stars}
      <span className="product-card__reviews">{formatReviewsCount(reviews)}</span>
    </div>
  );
}

export function ProductCard({ product, ritual, marketplace }) {
  const { addItem } = useCart();
  const cardClass = [
    "product-card",
    ritual ? "product-card--ritual" : "",
    marketplace ? "marketplace-card" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Reveal as="article" className={cardClass}>
      <div className="product-card__media">
        {product.badge && (
          <div className={ritual ? "product-card__badges" : undefined}>
            <span className={`product-card__badge product-card__badge--${product.badgeType}`}>{product.badge}</span>
          </div>
        )}
        <Link to={`/shop/${product.slug}`} className="product-card__img-link" aria-label={`View ${product.name}`}>
          <img src={product.image} alt="" loading="lazy" decoding="async" />
        </Link>
        {marketplace && !ritual && (
          <button type="button" className="product-card__wish" aria-label={`Save ${product.name}`} aria-pressed="false">
            <span aria-hidden="true">❤</span>
          </button>
        )}
      </div>
      <div className="product-card__body">
        {!ritual && <p className="product-card__cat">{product.categoryLabel}</p>}
        <h3 className="product-card__title">
          <Link to={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        {ritual ? (
          <ProductStars rating={product.rating} reviews={product.reviews} />
        ) : (
          <p className="product-card__desc">{product.description}</p>
        )}
        {ritual ? (
          <div className="product-card__ritual-buy">
            <span className="product-card__price product-card__price--ritual">
              {formatPriceAmount(product.price)} <span className="product-card__currency">DZD</span>
            </span>
            <button
              type="button"
              className="product-card__ritual-cta btn-cart"
              onClick={() => addItem(product.name, product.price)}
            >
              Choose ritual
            </button>
          </div>
        ) : (
          <div className="product-card__buy">
            <span className="product-card__price">
              {formatPriceAmount(product.price)} <span className="product-card__currency">DZD</span>
            </span>
            <button
              type="button"
              className="product-card__cart btn-cart"
              onClick={() => addItem(product.name, product.price)}
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
    </Reveal>
  );
}
