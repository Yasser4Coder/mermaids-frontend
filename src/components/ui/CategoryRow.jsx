import LinkText from '@/components/common/LinkText'

export default function CategoryRow({
  title,
  description,
  image,
  imagePosition = 'left',
  href = '#',
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

      <div className="flex flex-col justify-between py-1 font-garamond md:min-h-full">
        <h3 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h3>

        <p className="my-6 max-w-xl flex-1 text-sm leading-relaxed text-charcoal sm:text-base lg:my-8 lg:text-lg">
          {description}
        </p>

        <div>
          <LinkText href={href} size="md">
            View More
          </LinkText>
        </div>
      </div>
    </div>
  )
}
