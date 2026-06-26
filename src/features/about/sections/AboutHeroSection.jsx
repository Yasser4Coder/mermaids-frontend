import Container from '@/components/common/Container'
import heroBg from '@/assets/gallery3.png'

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container size="lg" className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl font-garamond">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80 sm:text-base">
            Our Story
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
            Exploring The Beauty Of Mermaids
          </h1>
        </div>
      </Container>
    </section>
  )
}
