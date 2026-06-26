import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'

function GalleryImage({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="size-full object-cover" loading="lazy" />
    </div>
  )
}

export default function PageGallerySection({ title = 'Gallery', images }) {
  const [a, b, c, d, e, f] = images
  const grid = [a, b, c, d, e].filter(Boolean)
  const [left, topCenter, bottomLeft, bottomRight, right] = grid

  return (
    <section className="py-16 lg:py-24">
      <Container size="lg">
        <SectionHeader
          title={title}
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
        />

        {grid.length >= 5 ? (
          <>
            <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:hidden">
              <GalleryImage src={left.src} alt={left.alt} className="row-span-2 min-h-[14rem]" />
              <GalleryImage src={topCenter.src} alt={topCenter.alt} className="min-h-[8rem]" />
              <GalleryImage src={bottomLeft.src} alt={bottomLeft.alt} className="min-h-[8rem]" />
              <GalleryImage
                src={bottomRight.src}
                alt={bottomRight.alt}
                className="col-start-2 min-h-[8rem]"
              />
              <GalleryImage src={right.src} alt={right.alt} className="col-span-2 min-h-[12rem]" />
            </div>

            <div className="mt-12 hidden h-[26rem] gap-3 md:grid md:grid-cols-3 md:grid-rows-2 lg:h-[30rem] lg:gap-4 xl:h-[34rem]">
              <GalleryImage src={left.src} alt={left.alt} className="row-span-2 h-full" />
              <GalleryImage
                src={topCenter.src}
                alt={topCenter.alt}
                className="col-start-2 row-start-1 h-full"
              />
              <div className="col-start-2 row-start-2 grid h-full grid-cols-2 gap-3 lg:gap-4">
                <GalleryImage src={bottomLeft.src} alt={bottomLeft.alt} />
                <GalleryImage src={bottomRight.src} alt={bottomRight.alt} />
              </div>
              <GalleryImage
                src={right.src}
                alt={right.alt}
                className="col-start-3 row-span-2 row-start-1 h-full"
              />
            </div>
          </>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            {images.map((img) => (
              <GalleryImage
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="aspect-[4/5] sm:aspect-square"
              />
            ))}
          </div>
        )}

        {f && (
          <div className="mt-4 hidden overflow-hidden lg:block">
            <GalleryImage src={f.src} alt={f.alt} className="h-48 w-full" />
          </div>
        )}
      </Container>
    </section>
  )
}
