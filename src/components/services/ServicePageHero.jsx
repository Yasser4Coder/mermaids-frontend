import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

function HeroCta({ cta, primary }) {
  const className = primary
    ? 'inline-flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-white sm:text-base'
    : 'inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:text-base'

  const content = (
    <>
      {cta.label}
      <span aria-hidden="true">→</span>
    </>
  )

  if (cta.href.startsWith('#')) {
    return (
      <a href={cta.href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={cta.href} className={className}>
      {content}
    </Link>
  )
}

export default function ServicePageHero({
  image,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container size="lg" className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl font-garamond">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 sm:text-base">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl leading-tight font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && <HeroCta cta={primaryCta} primary />}
              {secondaryCta && <HeroCta cta={secondaryCta} />}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
