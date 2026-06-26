import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

function FeatureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4 text-ink"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

function FeaturesBar({ features }) {
  return (
    <div className="border-y border-cream-dark bg-cream-box">
      <Container size="lg">
        <ul className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 lg:gap-4 lg:py-7">
          {features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center justify-center gap-3 font-garamond sm:justify-start lg:justify-center"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cream-dark bg-white">
                <FeatureIcon />
              </span>
              <span className="text-sm text-ink sm:text-base">{feature.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default function BeautyHeroSection({ hero }) {
  return (
    <>
      <section className="relative min-h-[28rem] overflow-hidden sm:min-h-[32rem] lg:min-h-[38rem]">
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />

        <Container
          size="lg"
          className="relative flex min-h-[28rem] items-center py-14 sm:min-h-[32rem] sm:py-16 lg:min-h-[38rem] lg:py-20"
        >
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-2xl font-garamond">
              <nav aria-label="Breadcrumb" className="text-sm uppercase tracking-[0.15em] text-white/70">
                <Link to="/" className="transition-opacity hover:text-white">
                  Home
                </Link>
                <span className="mx-2">›</span>
                <span className="text-white">Beauty Center</span>
              </nav>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-3 text-xl italic text-white/90 sm:text-2xl">{hero.subtitle}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                {hero.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={hero.primaryCta.href}
                  className="inline-flex cursor-pointer items-center gap-2 border border-white bg-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-white sm:text-base"
                >
                  {hero.primaryCta.label}
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex cursor-pointer items-center gap-2 border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:text-base"
                >
                  {hero.secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex">
              <div className="flex size-36 flex-col items-center justify-center rounded-full border-2 border-white/30 bg-cream/95 px-5 text-center font-garamond shadow-lg backdrop-blur-sm xl:size-40">
                <span className="text-sm font-bold leading-snug text-ink xl:text-base">{hero.badge}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeaturesBar features={hero.features} />
    </>
  )
}
