import { Link } from 'react-router-dom'

export default function ProductCard({ id, image, title, price, className = '' }) {
  const content = (
    <>
      <div className="overflow-hidden bg-cream-dark">
        <img
          src={image}
          alt={title}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-3 text-start font-garamond text-sm font-medium uppercase tracking-wider text-ink sm:text-base">
        {title}
      </h3>
      <p className="mt-1 text-start font-garamond text-base text-[#979797] sm:text-lg">{price}</p>
    </>
  )

  if (id) {
    return (
      <Link to={`/magasin/product/${id}`} className={`group block text-center ${className}`}>
        {content}
      </Link>
    )
  }

  return <article className={`group text-center ${className}`}>{content}</article>
}
