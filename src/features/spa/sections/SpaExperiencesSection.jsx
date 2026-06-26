import LinkText from '@/components/common/LinkText'
import Container from '@/components/common/Container'

function SpaIconBadge() {
  return (
    <div
      className="absolute -bottom-5 left-5 z-10 flex size-11 items-center justify-center rounded-full border border-cream-dark bg-cream-box shadow-[0_4px_16px_rgba(0,0,0,0.1)] sm:size-12"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-ink"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
        />
      </svg>
    </div>
  )
}

function ExperienceCard({ title, description, image, href }) {
  return (
    <article className="group flex h-full flex-col border border-cream-dark bg-white font-garamond transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="relative shrink-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <SpaIconBadge />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-9 sm:px-6 sm:pb-7 sm:pt-10">
        <h3 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal sm:text-base">
          {description}
        </p>
        <div className="mt-5">
          <LinkText href={href} size="sm">
            Learn More
          </LinkText>
        </div>
      </div>
    </article>
  )
}

export default function SpaExperiencesSection({ section, experiences }) {
  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center font-garamond">
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal">{section.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base italic leading-relaxed text-charcoal sm:text-lg">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </Container>
    </section>
  )
}
