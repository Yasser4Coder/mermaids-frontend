export default function ServiceCard({ image, title, className = '' }) {
  return (
    <article className={`group text-center ${className}`}>
      <div className="overflow-hidden bg-cream-dark">
        <img
          src={image}
          alt={title}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-3 font-serif text-sm tracking-wide text-ink">{title}</h3>
    </article>
  )
}
