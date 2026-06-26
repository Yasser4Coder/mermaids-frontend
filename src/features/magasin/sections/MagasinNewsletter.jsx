import Container from '@/components/common/Container'

export default function MagasinNewsletter({ data }) {
  return (
    <section className="border-t border-cream-dark py-16 lg:py-20">
      <Container size="lg">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md font-garamond">
            <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-4xl">{data.title}</h2>
            <p className="mt-3 text-base text-charcoal sm:text-lg">{data.subtitle}</p>
          </div>

          <form
            className="flex w-full max-w-lg flex-col gap-3 sm:flex-row lg:max-w-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 border border-cream-dark bg-white px-4 py-3 font-garamond text-base text-ink outline-none placeholder:text-charcoal/60 focus:border-ink"
            />
            <button
              type="submit"
              className="cursor-pointer border border-ink bg-ink px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}
