import { Link } from 'react-router-dom'
import { aboutWhyChoose } from '@/data/about'

export default function WhyChooseUsSection() {
  const { title, paragraphs, image, imageAlt } = aboutWhyChoose

  return (
    <section className="grid lg:grid-cols-[40%_1fr]">
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

        <div className="mt-10">
          <Link
            to="/about#why-choose-us"
            className="inline-flex cursor-pointer border border-white px-10 py-3 font-garamond text-sm text-white transition-colors hover:bg-white hover:text-black sm:text-base"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
