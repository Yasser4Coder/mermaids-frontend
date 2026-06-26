import Container from '@/components/common/Container'
import exploringImg1 from '@/assets/ExploringImg1.png'
import exploringImg2 from '@/assets/ExploringImg2.png'
import exploringEffect from '@/assets/ExploringEffect.png'

export default function AboutStorySection() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="font-garamond lg:pr-8">
            <p className="text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              At Mermaids, we believe beauty is an art form — a delicate balance
              of elegance, wellness, and self-expression. Our sanctuary offers
              curated experiences that celebrate your unique radiance, blending
              time-honored rituals with modern innovation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              Step into a world where every detail is crafted to elevate your
              senses and transform the ordinary into the extraordinary.
            </p>
            <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              What began as a vision to reimagine self-care has grown into a
              destination where artistry meets intention. Every treatment, every
              product, and every moment within our walls is designed to honor
              the individuality of each guest who walks through our doors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              We draw inspiration from timeless beauty traditions while embracing
              the latest advances in skincare, wellness, and aesthetic care.
              Whether you seek a restorative spa ritual, a refined beauty
              treatment, or expert clinical guidance, Mermaids is your sanctuary
              for transformation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              Here, beauty is never one-size-fits-all. It is personal, evolving,
              and deeply connected to how you feel — inside and out.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem]">
            <div className="relative aspect-[4/5] w-full">
              <img
                src={exploringImg2}
                alt="Makeup artistry at Mermaids"
                className="absolute top-0 right-0 z-30 aspect-[3/4] w-[62%] object-cover shadow-lg"
                loading="lazy"
              />

              <div
                className="absolute top-[20%] right-[30%] z-10 h-[56%] w-[44%] border-2 border-black"
                aria-hidden="true"
              />

              <img
                src={exploringEffect}
                alt=""
                className="absolute top-[20%] right-[30%] z-20 h-[56%] w-[44%] object-cover"
                loading="lazy"
              />

              <img
                src={exploringImg1}
                alt="Beauty portrait at Mermaids"
                className="absolute top-[44%] left-[6%] z-40 aspect-[3/4] w-[48%] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
