import Container from '@/components/common/Container'

export default function SpaGallerySection({ images }) {
  return (
    <section className="border-y border-cream-dark bg-cream-box py-20 lg:py-28">
      <Container size="lg">
        <h2 className="text-center font-garamond text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          Gallery
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#all-services"
            className="inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
          >
            View Full Gallery
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
