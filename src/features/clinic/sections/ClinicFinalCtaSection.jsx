import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'

function ContactIcon({ type }) {
  const paths = {
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    ),
    email: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </>
    ),
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 shrink-0 text-white/70"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  )
}

export default function ClinicFinalCtaSection({ data }) {
  return (
    <section className="relative overflow-hidden bg-charcoal-dark">
      <img
        src={data.image}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal-dark/80" />

      <Container size="lg" className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="font-garamond">
            <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
              {data.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              {data.description}
            </p>
            <Link
              to={data.cta.href}
              className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink sm:text-base"
            >
              {data.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-10 xl:grid-cols-3">
            {data.contact.map((item) => (
              <div key={item.label} className="font-garamond">
                <div className="flex items-center gap-2">
                  <ContactIcon type={item.icon} />
                  <p className="text-sm uppercase tracking-[0.15em] text-white/60">{item.label}</p>
                </div>
                <a
                  href={item.href}
                  className="mt-2 block text-base text-white transition-opacity hover:opacity-80 sm:text-lg"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
