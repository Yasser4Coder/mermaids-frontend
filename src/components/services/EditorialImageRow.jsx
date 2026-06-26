export default function EditorialImageRow({
  title,
  description,
  image,
  imagePosition = 'left',
  meta,
}) {
  const isImageRight = imagePosition === 'right'

  return (
    <div
      className={`grid items-stretch gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16 ${
        isImageRight ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center py-1 font-garamond md:min-h-full">
        <h3 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h3>
        {meta && (
          <p className="mt-3 text-sm uppercase tracking-[0.15em] text-charcoal">{meta}</p>
        )}
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal sm:text-lg lg:mt-8">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
