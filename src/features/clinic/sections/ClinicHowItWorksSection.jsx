import Container from '@/components/common/Container'

export default function ClinicHowItWorksSection({ data }) {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-cream-dark bg-cream-box py-20 lg:py-28">
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="font-garamond">
            <h2 className="text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {data.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
              {data.description}
            </p>

            <ol className="mt-12 space-y-8">
              {data.steps.map((step) => (
                <li key={step.number} className="flex gap-5 sm:gap-6">
                  <span className="flex size-10 shrink-0 items-center justify-center border border-ink font-garamond text-sm font-semibold text-ink sm:size-12 sm:text-base">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-charcoal">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="overflow-hidden">
            <img
              src={data.image}
              alt="Clinic treatment room"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-auto lg:min-h-[36rem]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
