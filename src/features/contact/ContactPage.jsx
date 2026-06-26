import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { contactPageData } from '@/data/contact'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
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

function ContactIcon({ type }) {
  const className = 'size-5 shrink-0 text-ink'

  if (type === 'email') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

const inputClassName =
  'w-full border border-cream-dark bg-white px-4 py-3 font-garamond text-base text-ink outline-none transition-colors placeholder:text-charcoal/50 focus:border-ink'

export default function ContactPage() {
  const { hero, contact, hours, subjects, social, quickLinks } = contactPageData
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
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
          <p className="text-sm uppercase tracking-[0.25em] text-charcoal">Message sent</p>
          <h1 className="mt-4 text-4xl font-bold tracking-wide text-ink sm:text-5xl">Thank You</h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
            We have received your message and will get back to you within 24 hours. For urgent
            requests, call us at{' '}
            <a href={contact.phoneHref} className="text-ink underline-offset-2 hover:underline">
              {contact.phone}
            </a>
            .
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
              Send Another
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
              <span className="text-ink">Contact</span>
            </nav>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-charcoal">{hero.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-wide text-ink sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal sm:text-lg">{hero.subtitle}</p>
          </div>
        </Container>
      </section>

      <Container size="lg" className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:grid-cols-[1fr_420px]">
          <form onSubmit={handleSubmit} className="font-garamond">
            <div className="border border-cream-dark bg-white p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Send a Message</h2>
              <p className="mt-2 text-base text-charcoal">
                Fill out the form below and our team will respond as soon as possible.
              </p>

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

                <FormField label="Subject" required>
                  <select
                    required
                    value={form.subject}
                    onChange={(event) => updateField('subject', event.target.value)}
                    className={`${inputClassName} sm:col-span-2`}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <div className="mt-6">
                <FormField label="Message" required>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    placeholder="How can we help you?"
                    className={`${inputClassName} resize-y`}
                  />
                </FormField>
              </div>

              <button
                type="submit"
                className="mt-8 w-full cursor-pointer border border-ink bg-ink px-8 py-4 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>

          <aside className="space-y-6 font-garamond">
            <div className="border border-cream-dark bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">Contact Details</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <div className="flex items-center gap-2">
                    <ContactIcon type="email" />
                    <span className="text-xs uppercase tracking-[0.15em] text-charcoal">Email</span>
                  </div>
                  <a href={contact.emailHref} className="mt-1 block text-base text-ink hover:opacity-70">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <ContactIcon type="phone" />
                    <span className="text-xs uppercase tracking-[0.15em] text-charcoal">Phone</span>
                  </div>
                  <a href={contact.phoneHref} className="mt-1 block text-base text-ink hover:opacity-70">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <ContactIcon type="location" />
                    <span className="text-xs uppercase tracking-[0.15em] text-charcoal">Location</span>
                  </div>
                  <p className="mt-1 text-base text-ink">{contact.address}</p>
                </li>
              </ul>
            </div>

            <div className="border border-cream-dark bg-cream-box p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">Opening Hours</h2>
              <ul className="mt-4 space-y-3">
                {hours.map((item) => (
                  <li key={item.days} className="flex justify-between gap-4 text-sm sm:text-base">
                    <span className="text-charcoal">{item.days}</span>
                    <span className="font-medium text-ink">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-cream-dark bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">Follow Us</h2>
              <ul className="mt-4 space-y-3">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between text-sm text-ink transition-opacity hover:opacity-70 sm:text-base"
                    >
                      <span>{item.label}</span>
                      <span className="text-charcoal">{item.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-cream-dark bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-wide text-ink sm:text-2xl">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-charcoal transition-colors hover:text-ink sm:text-base"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-cream-dark bg-cream-box py-14 lg:py-16">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-12">
            <div className="overflow-hidden border border-cream-dark bg-white">
              <iframe
                title="Mermaids location — Chlef, Algeria"
                src={contact.mapEmbedUrl}
                className="aspect-[16/9] w-full border-0 lg:aspect-[2/1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="font-garamond">
              <h2 className="text-3xl font-bold tracking-wide text-ink sm:text-4xl">Visit Mermaids</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal sm:text-lg">
                {contact.address} — your sanctuary for beauty, wellness, and clinical care under one
                roof.
              </p>
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-70"
              >
                Open in Google Maps
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Chat on WhatsApp
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
