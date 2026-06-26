import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function BookingCtaSection({
  title = 'Ready To Begin Your Journey?',
  subtitle = 'Book your appointment today and experience the Mermaids difference.',
  ctaLabel = 'Book Appointment',
  ctaHref = '/book',
  image,
}) {
  if (image) {
    return (
      <section className="relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container size="lg" className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-xl font-garamond">
            <h2 className="text-4xl leading-tight font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">{subtitle}</p>
            )}
            <Link
              to={ctaHref}
              className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:text-base"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="border-t border-cream-dark py-16 lg:py-20">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">{subtitle}</p>
          )}
          <Link
            to={ctaHref}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
