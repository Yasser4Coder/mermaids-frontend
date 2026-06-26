import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '@/components/common/Container'
import WireframePlaceholder from '@/components/services/WireframePlaceholder'
import { bookingPageData } from '@/data/booking'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  category: '',
  service: '',
  date: '',
  time: '',
  notes: '',
}

function FormField({ label, children, required = false }) {
  return (
    <label className="block font-garamond">
      <span className="text-sm uppercase tracking-[0.12em] text-charcoal">
        {label}
        {required && <span className="text-ink"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

const inputClassName =
  'w-full border border-cream-dark bg-white px-4 py-3 font-garamond text-base text-ink outline-none transition-colors placeholder:text-charcoal/50 focus:border-ink'

export default function BookPage() {
  const [searchParams] = useSearchParams()
  const { hero, serviceCategories, servicesByCategory, timeSlots, highlights, contact } =
    bookingPageData

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const categoryFromUrl = searchParams.get('category') ?? ''
  const serviceFromUrl = searchParams.get('service') ?? ''

  useEffect(() => {
    const validCategory = serviceCategories.find((item) => item.id === categoryFromUrl)
    if (!validCategory) return

    setForm((prev) => ({
      ...prev,
      category: validCategory.id,
      service: serviceFromUrl || prev.service,
    }))
  }, [categoryFromUrl, serviceFromUrl, serviceCategories])

  const serviceOptions = useMemo(() => {
    if (!form.category) return []
    const options = servicesByCategory[form.category] ?? []
    if (form.service && !options.includes(form.service)) {
      return [form.service, ...options]
    }
    return options
  }, [form.category, form.service, servicesByCategory])

  function updateField(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'category') next.service = ''
      return next
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <Container size="lg" className="py-20 font-garamond sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-charcoal">Request received</p>
          <h1 className="mt-4 text-4xl font-bold tracking-wide text-ink sm:text-5xl">
            Thank You, {form.fullName.split(' ')[0] || 'Guest'}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
            Your booking request for{' '}
            <span className="font-medium text-ink">{form.service}</span> on{' '}
            <span className="font-medium text-ink">{form.date}</span> at{' '}
            <span className="font-medium text-ink">{form.time}</span> has been submitted. Our team
            will confirm your appointment within 24 hours.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex cursor-pointer items-center justify-center border border-ink bg-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
            >
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setForm(initialForm)
              }}
              className="inline-flex cursor-pointer items-center justify-center border border-cream-dark px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              Book Another
            </button>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <>
      <section className="border-b border-cream-dark bg-cream-box py-14 sm:py-16 lg:py-20">
        <Container size="lg">
          <div className="max-w-2xl font-garamond">
            <nav aria-label="Breadcrumb" className="text-sm uppercase tracking-[0.15em] text-charcoal">
              <Link to="/" className="transition-colors hover:text-ink">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Book</span>
            </nav>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-charcoal">{hero.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal sm:text-lg">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <Container size="lg" className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16 xl:grid-cols-[360px_1fr]">
          <aside className="font-garamond">
            <WireframePlaceholder label="Mermaids Salon" className="aspect-[4/5] w-full" />

            <div className="mt-8 border border-cream-dark bg-white p-6">
              <h2 className="text-xl font-bold tracking-wide text-ink">Why book with us</h2>
              <ul className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal sm:text-base">
                    <span className="text-ink" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-3 text-sm text-charcoal">
              <p>
                <span className="uppercase tracking-[0.12em]">Phone</span>
                <br />
                <a href={contact.phoneHref} className="text-ink transition-opacity hover:opacity-70">
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="uppercase tracking-[0.12em]">Email</span>
                <br />
                <a href={contact.emailHref} className="text-ink transition-opacity hover:opacity-70">
                  {contact.email}
                </a>
              </p>
              <p>
                <span className="uppercase tracking-[0.12em]">Location</span>
                <br />
                <span className="text-ink">{contact.location}</span>
              </p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="font-garamond">
            <div className="border border-cream-dark bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">
                Appointment Details
              </h2>
              <p className="mt-2 text-base text-charcoal">
                Fill in your details and we will confirm your booking shortly.
              </p>

              <div className="mt-8 space-y-6">
                {form.service && (
                  <div className="border border-ink bg-cream-box px-4 py-3 sm:px-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-charcoal">Selected service</p>
                    <p className="mt-1 text-lg font-bold text-ink">{form.service}</p>
                  </div>
                )}

                <p className="text-sm uppercase tracking-[0.15em] text-charcoal">Choose a service</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => updateField('category', category.id)}
                      className={`cursor-pointer border p-4 text-left transition-colors ${
                        form.category === category.id
                          ? 'border-ink bg-cream-box'
                          : 'border-cream-dark bg-white hover:border-ink'
                      }`}
                    >
                      <span className="block text-base font-bold text-ink">{category.label}</span>
                      <span className="mt-1 block text-sm leading-snug text-charcoal">
                        {category.description}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Service" required>
                    <select
                      required
                      value={form.service}
                      onChange={(event) => updateField('service', event.target.value)}
                      disabled={!form.category}
                      className={`${inputClassName} disabled:cursor-not-allowed disabled:bg-cream-box`}
                    >
                      <option value="">
                        {form.category ? 'Select a service' : 'Select a category first'}
                      </option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Preferred date" required>
                    <input
                      type="date"
                      required
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(event) => updateField('date', event.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                <FormField label="Preferred time" required>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => updateField('time', slot)}
                        className={`cursor-pointer border px-4 py-2 text-sm transition-colors ${
                          form.time === slot
                            ? 'border-ink bg-ink text-cream'
                            : 'border-cream-dark text-ink hover:border-ink'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </FormField>
              </div>
            </div>

            <div className="mt-6 border border-cream-dark bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Your Details</h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <FormField label="Full name" required>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                    placeholder="Your full name"
                    className={inputClassName}
                  />
                </FormField>

                <FormField label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    placeholder="+213 ..."
                    className={inputClassName}
                  />
                </FormField>

                <FormField label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="you@email.com"
                    className={`${inputClassName} sm:col-span-2`}
                  />
                </FormField>
              </div>

              <div className="mt-6">
                <FormField label="Special requests">
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(event) => updateField('notes', event.target.value)}
                    placeholder="Allergies, preferences, or occasion details..."
                    className={`${inputClassName} resize-y`}
                  />
                </FormField>
              </div>

              <button
                type="submit"
                className="mt-8 w-full cursor-pointer border border-ink bg-ink px-8 py-4 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark sm:w-auto"
              >
                Confirm Booking Request
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}
