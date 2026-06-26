import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function BeautyFinalCtaSection({ data }) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={data.image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" />

      <Container size="lg" className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
            {data.description}
          </p>
          <Link
            to={data.cta.href}
            className="mt-10 inline-flex cursor-pointer items-center gap-2 border border-white bg-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-white sm:text-base"
          >
            {data.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
