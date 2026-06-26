import Container from '@/components/common/Container'
import { aboutWhyChoose } from '@/data/about'

export default function AboutWhyChooseSection() {
  const { title, paragraphs, image, imageAlt, features } = aboutWhyChoose

  return (
    <section id="why-choose-us" className="scroll-mt-24">
      <div className="grid lg:grid-cols-[40%_1fr]">
        <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[36rem]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center bg-black/60 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
          <h2 className="font-garamond text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-6 max-w-xl font-garamond text-base leading-loose text-white first:mt-8 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-cream-dark bg-cream-box py-16 lg:py-20">
        <Container size="lg">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {features.map((feature) => (
              <article key={feature.title} className="font-garamond">
                <h3 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal sm:text-lg">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
