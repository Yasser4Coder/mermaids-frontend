import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

function PackageCard({ title, includes, price }) {
  return (
    <article className="flex flex-col border border-cream-dark bg-white px-6 py-8 font-garamond sm:px-8">
      <h3 className="text-2xl font-bold tracking-wide text-ink">{title}</h3>
      <ul className="mt-6 flex-1 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-base text-charcoal">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-charcoal" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xl font-bold text-ink">{price}</p>
    </article>
  )
}

function ConsultationCard({ data }) {
  return (
    <article className="flex flex-col justify-center border border-cream-dark bg-cream-box px-6 py-8 font-garamond sm:px-8">
      <h3 className="text-2xl font-bold leading-snug tracking-wide text-ink">{data.title}</h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal">{data.description}</p>
      <Link
        to={data.cta.href}
        className="mt-8 inline-flex w-fit cursor-pointer items-center gap-2 border border-ink px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        {data.cta.label}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default function ClinicPackagesSection({ packages, consultationCta }) {
  return (
    <section className="border-y border-cream-dark bg-cream py-20 lg:py-28">
      <Container size="lg">
        <h2 className="text-center font-garamond text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
          Clinic Packages
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
          <ConsultationCard data={consultationCta} />
        </div>
      </Container>
    </section>
  )
}
