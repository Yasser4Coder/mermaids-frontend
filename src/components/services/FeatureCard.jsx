export default function FeatureCard({ title, description }) {
  return (
    <article className="border border-cream-dark bg-white px-6 py-8 font-garamond sm:px-8">
      <h3 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">{title}</h3>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-charcoal">{description}</p>
      )}
    </article>
  )
}
