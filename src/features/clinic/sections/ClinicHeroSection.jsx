import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

const featureIcons = {
  technology: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  practitioners: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  rooms: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  plans: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  ),
  results: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11.04-7.36a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

function ClinicFeaturesBar({ features }) {
  return (
    <div className="border-y border-cream-dark bg-cream-box">
      <Container size="lg">
        <ul className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:py-12">
          {features.map((feature) => (
            <li key={feature.id} className="group font-garamond">
              <div className="flex size-11 items-center justify-center rounded-full border border-cream-dark bg-white text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                {featureIcons[feature.id]}
              </div>
              <h3 className="mt-4 text-base font-bold tracking-wide text-ink sm:text-lg">
                {feature.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default function ClinicHeroSection({ hero }) {
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
          <div className="max-w-2xl font-garamond">
            <nav aria-label="Breadcrumb" className="text-sm uppercase tracking-[0.15em] text-white/70">
              <Link to="/" className="transition-opacity hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">Clinic</span>
            </nav>

            <h1 className="mt-6 text-5xl font-bold tracking-wide text-white sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
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
                <PlayIcon />
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <ClinicFeaturesBar features={hero.features} />
    </>
  )
}
