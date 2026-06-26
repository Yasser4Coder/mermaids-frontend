import Container from '@/components/common/Container'
import LinkText from '@/components/common/LinkText'
import exploringImg1 from '@/assets/ExploringImg1.png'
import exploringImg2 from '@/assets/ExploringImg2.png'
import exploringEffect from '@/assets/ExploringEffect.png'

export default function IntroSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem]">
            <div className="relative aspect-[4/5] w-full">
              {/* Photo 1 — bigger, top-left */}
              <img
                src={exploringImg1}
                alt="Beauty portrait"
                className="absolute top-0 left-0 z-30 aspect-[3/4] w-[62%] object-cover shadow-lg"
                loading="lazy"
              />

              {/* Center rectangle */}
              <div
                className="absolute top-[20%] left-[30%] z-10 h-[56%] w-[44%] border-2 border-black"
                aria-hidden="true"
              />

              {/* Effect inside rectangle */}
              <img
                src={exploringEffect}
                alt=""
                className="absolute top-[20%] left-[30%] z-20 h-[56%] w-[44%] object-cover"
                loading="lazy"
              />

              {/* Photo 2 — smaller, bottom-right, overlapping */}
              <img
                src={exploringImg2}
                alt="Makeup artistry"
                className="absolute top-[44%] right-[6%] z-40 aspect-[3/4] w-[48%] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="font-garamond lg:pl-8">
            <h2 className="text-4xl leading-snug font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              Exploring The Beauty Of Mermaids
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              At Mermaids, we believe beauty is an art form — a delicate balance
              of elegance, wellness, and self-expression. Our sanctuary offers
              curated experiences that celebrate your unique radiance, blending
              time-honored rituals with modern innovation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              Step into a world where every detail is crafted to elevate your
              senses and transform the ordinary into the extraordinary.
            </p>
            <div className="mt-8">
              <LinkText href="/about" size="lg">
                View More
              </LinkText>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
