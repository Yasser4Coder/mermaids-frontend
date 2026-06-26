import Container from '@/components/common/Container'

function GiftIcon() {
  return (
    <div className="mb-8 flex size-14 items-center justify-center border border-cream-dark bg-cream-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 text-ink"
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

export default function BeautyPackagesSection({ section, packages }) {
  return (
    <section className="border-y border-cream-dark bg-cream-box py-20 lg:py-28">
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10 xl:gap-14">
          <div className="font-garamond">
            <GiftIcon />
            <h2 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {section.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
              {section.subtitle}
            </p>
            <a
              href={section.cta.href}
              className="mt-10 inline-flex cursor-pointer items-center gap-2 border border-ink px-10 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream sm:text-base"
            >
              {section.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="divide-y divide-cream-dark border-y border-cream-dark font-garamond">
            {packages.map((pkg) => (
              <li
                key={pkg.title}
                className="flex items-center justify-between gap-4 py-5 sm:py-6"
              >
                <span className="text-lg font-semibold text-ink sm:text-xl">{pkg.title}</span>
                <span className="shrink-0 text-base font-medium text-charcoal sm:text-lg">
                  {pkg.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden lg:justify-self-end">
            <img
              src={section.image}
              alt="Beauty packages"
              className="aspect-[4/5] w-full max-w-sm object-cover lg:max-w-none"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
