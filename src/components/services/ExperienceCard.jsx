export default function ExperienceCard({ image, title, serviceCount }) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="px-5 py-5 font-garamond sm:px-6 sm:py-6">
        <h3 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">{title}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.15em] text-charcoal sm:text-base">
          {serviceCount} {serviceCount === 1 ? 'Service' : 'Services'}
        </p>
      </div>
    </article>
  )
}
