import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

export default function SpaFinalCtaSection({ data }) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={data.image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container size="lg" className="relative py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center font-garamond">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>
          <Link
            to={data.cta.href}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:text-base"
          >
            {data.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
