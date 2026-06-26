import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function MagasinHeroSection({ hero }) {
  return (
    <section className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[24rem]">
      <img
        src={hero.image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40" />

      <Container size="lg" className="relative flex min-h-[16rem] items-end py-12 sm:min-h-[20rem] sm:py-14 lg:min-h-[24rem] lg:py-16">
        <div className="font-garamond">
          <h1 className="text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <nav aria-label="Breadcrumb" className="mt-4 text-sm uppercase tracking-[0.15em] text-white/75">
            <Link to="/" className="transition-opacity hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{hero.breadcrumb}</span>
          </nav>
        </div>
      </Container>
    </section>
  )
}
