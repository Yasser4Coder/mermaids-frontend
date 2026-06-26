import Container from '@/components/common/Container'

function StatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="mx-auto size-8 text-charcoal"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  )
}

export default function BeautyStatsSection({ stats }) {
  return (
    <section className="border-y border-cream-dark bg-cream-box py-10 sm:py-14 lg:py-16">
      <Container size="lg">
        <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center font-garamond">
              <StatIcon />
              <p className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-charcoal sm:text-base">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
