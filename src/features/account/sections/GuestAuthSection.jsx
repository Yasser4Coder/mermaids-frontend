import { useState } from 'react'
import { accountPageData } from '@/data/account'
import { useAccount } from '@/context/AccountContext'

const inputClassName =
  'w-full border border-cream-dark bg-white px-4 py-3 font-garamond text-base text-ink outline-none transition-colors placeholder:text-charcoal/50 focus:border-ink'

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

function AccountIllustration() {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-full max-h-52 max-w-44 text-ink"
      aria-hidden="true"
    >
      <circle cx="120" cy="88" r="36" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M56 228C56 184 84 156 120 156C156 156 184 184 184 228"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <rect x="168" y="48" width="48" height="64" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path d="M180 68H204M180 80H204M180 92H196" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path
        d="M24 248C56 232 88 228 120 236C152 244 184 240 216 224"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  )
}

export default function GuestAuthSection() {
  const { guest } = accountPageData
  const { login, register } = useAccount()
  const [mode, setMode] = useState('signin')
  const [error, setError] = useState('')
  const [signInForm, setSignInForm] = useState({ email: '', password: '' })
  const [signUpForm, setSignUpForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  function handleSignIn(event) {
    event.preventDefault()
    setError('')

    const result = login(signInForm.email, signInForm.password)
    if (!result.success) {
      setError(result.error)
    }
  }

  function handleSignUp(event) {
    event.preventDefault()
    setError('')

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = register({
      fullName: signUpForm.fullName,
      email: signUpForm.email,
      phone: signUpForm.phone,
      password: signUpForm.password,
    })

    if (!result.success) {
      setError(result.error)
    }
  }

  return (
    <div className="overflow-hidden border border-cream-dark bg-white font-garamond">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="relative flex flex-col justify-center bg-cream-box px-8 py-14 sm:px-12 sm:py-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="border border-cream-dark bg-white px-8 py-10 sm:px-10">
              <AccountIllustration />
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-charcoal">{guest.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-wide text-ink sm:text-3xl">{guest.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal">{guest.description}</p>

            <ul className="mt-8 space-y-3">
              {guest.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-charcoal sm:text-base">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-cream-dark bg-white text-xs text-ink"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="mt-8 border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal">
              {guest.demoHint}
            </p>
          </div>
        </div>

        <div className="border-t border-cream-dark px-8 py-10 sm:px-12 sm:py-14 lg:border-t-0 lg:border-l lg:px-14 lg:py-16">
          <div className="flex gap-1 border border-cream-dark p-1">
            {[
              { id: 'signin', label: 'Sign In' },
              { id: 'signup', label: 'Create Account' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setMode(tab.id)
                  setError('')
                }}
                className={`flex-1 cursor-pointer px-4 py-3 text-sm uppercase tracking-[0.12em] transition-colors ${
                  mode === tab.id ? 'bg-ink text-cream' : 'text-charcoal hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {error && (
            <p className="mt-6 border border-cream-dark bg-cream-box px-4 py-3 text-sm text-ink" role="alert">
              {error}
            </p>
          )}

          {mode === 'signin' ? (
            <form onSubmit={handleSignIn} className="mt-8 space-y-6">
              <FormField label="Email" required>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={signInForm.email}
                  onChange={(event) => setSignInForm({ ...signInForm, email: event.target.value })}
                  className={inputClassName}
                  placeholder="you@example.com"
                />
              </FormField>
              <FormField label="Password" required>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={signInForm.password}
                  onChange={(event) => setSignInForm({ ...signInForm, password: event.target.value })}
                  className={inputClassName}
                  placeholder="••••••••"
                />
              </FormField>
              <button
                type="submit"
                className="w-full cursor-pointer border border-ink bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
              >
                Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="mt-8 space-y-6">
              <FormField label="Full Name" required>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={signUpForm.fullName}
                  onChange={(event) => setSignUpForm({ ...signUpForm, fullName: event.target.value })}
                  className={inputClassName}
                  placeholder="Your full name"
                />
              </FormField>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField label="Email" required>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={signUpForm.email}
                    onChange={(event) => setSignUpForm({ ...signUpForm, email: event.target.value })}
                    className={inputClassName}
                    placeholder="you@example.com"
                  />
                </FormField>
                <FormField label="Phone" required>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={signUpForm.phone}
                    onChange={(event) => setSignUpForm({ ...signUpForm, phone: event.target.value })}
                    className={inputClassName}
                    placeholder="+213 ..."
                  />
                </FormField>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField label="Password" required>
                  <input
                    type="password"
                    required
                    autoComplete="new-password"
                    value={signUpForm.password}
                    onChange={(event) => setSignUpForm({ ...signUpForm, password: event.target.value })}
                    className={inputClassName}
                    placeholder="Min. 6 characters"
                  />
                </FormField>
                <FormField label="Confirm Password" required>
                  <input
                    type="password"
                    required
                    autoComplete="new-password"
                    value={signUpForm.confirmPassword}
                    onChange={(event) =>
                      setSignUpForm({ ...signUpForm, confirmPassword: event.target.value })
                    }
                    className={inputClassName}
                    placeholder="Repeat password"
                  />
                </FormField>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer border border-ink bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
              >
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
