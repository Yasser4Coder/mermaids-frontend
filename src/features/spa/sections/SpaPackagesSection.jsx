import Container from '@/components/common/Container'

function PackageIcon() {
  return (
    <div className="flex size-10 shrink-0 items-center justify-center border border-cream-dark bg-cream-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-ink"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.25 2.25 0 1 0 9.75 7.5H12m0-2.625V7.5m0-2.625A2.25 2.25 0 1 1 14.25 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    </div>
  )
}

export default function SpaPackagesSection({ section, packages }) {
  return (
    <section id="packages" className="scroll-mt-24 border-y border-cream-dark bg-cream-box py-20 lg:py-28">
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="font-garamond">
            <h2 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {section.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              {section.subtitle}
            </p>

            <ul className="mt-10 divide-y divide-cream-dark border-y border-cream-dark">
              {packages.map((pkg) => (
                <li
                  key={pkg.title}
                  className="flex items-start gap-4 py-5 sm:gap-5 sm:py-6"
                >
                  <PackageIcon />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-ink sm:text-xl">{pkg.title}</h3>
                    <p className="mt-1 text-sm text-charcoal sm:text-base">
                      {pkg.includes.join(' · ')}
                    </p>
                  </div>
                  <p className="shrink-0 text-base font-semibold text-ink sm:text-lg">{pkg.price}</p>
                </li>
              ))}
            </ul>

            <a
              href={section.cta.href}
              className="mt-10 inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
            >
              {section.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="overflow-hidden">
            <img
              src={section.image}
              alt="Spa treatment room"
              className="aspect-square w-full object-cover lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
