export default function PackageCard({ title, description, price }) {
  return (
    <article className="flex flex-col border border-cream-dark bg-cream-box px-6 py-8 font-garamond sm:px-8">
      <h3 className="text-2xl font-bold tracking-wide text-ink">{title}</h3>
      {description && (
        <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal">{description}</p>
      )}
      {price && (
        <p className="mt-6 text-sm uppercase tracking-[0.15em] text-charcoal">{price}</p>
      )}
    </article>
  )
}
