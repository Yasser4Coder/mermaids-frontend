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

function SpaFeaturesBar({ features }) {
  return (
    <div className="border-y border-cream-dark bg-cream-box">
      <Container size="lg">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 py-5 sm:gap-x-6 sm:gap-y-4 sm:py-6 lg:grid-cols-5 lg:gap-4 lg:py-7">
          {features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center gap-2.5 font-garamond sm:gap-3 lg:justify-center"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cream-dark bg-white">
                <FeatureIcon />
              </span>
              <span className="text-xs leading-snug text-ink sm:text-sm lg:text-base">{feature.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default function SpaHeroSection({ hero }) {
  return (
    <>
      <section className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[36rem]">
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />

        <Container
          size="lg"
          className="relative flex min-h-[22rem] items-end py-10 sm:min-h-[28rem] sm:items-center sm:py-16 lg:min-h-[36rem] lg:py-20"
        >
          <div className="max-w-2xl font-garamond">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.15em] text-white/70 sm:text-sm">
              <Link to="/" className="transition-opacity hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">SPA</span>
            </nav>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-wide text-white sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base lg:text-xl">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to={hero.primaryCta.href}
                className="inline-flex cursor-pointer items-center justify-center gap-2 border border-white bg-white px-8 py-3.5 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-white sm:justify-start sm:py-3 sm:text-base"
              >
                {hero.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex cursor-pointer items-center justify-center gap-2 border border-white px-8 py-3.5 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:justify-start sm:py-3 sm:text-base"
              >
                {hero.secondaryCta.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <SpaFeaturesBar features={hero.features} />
    </>
  )
}
