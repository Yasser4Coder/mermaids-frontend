export default function SplitPanelSection({ image, title, children, imagePosition = 'left' }) {
  const isImageRight = imagePosition === 'right'

  return (
    <section
      className={`grid lg:grid-cols-[40%_1fr] ${isImageRight ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[32rem]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center bg-black/60 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <h2 className="font-garamond text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-8 font-garamond text-base leading-loose text-white sm:text-lg">
          {children}
        </div>
      </div>
    </section>
  )
}
