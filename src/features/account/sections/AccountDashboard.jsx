import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/context/CartContext'
import { useAccount } from '@/context/AccountContext'
import { accountPageData } from '@/data/account'

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

function StatusBadge({ status, map }) {
  const config = map[status] ?? map.pending
  return (
    <span className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] sm:text-xs ${config.className}`}>
      {config.label}
    </span>
  )
}

function OverviewPanel({ user, orders, appointments }) {
  const { overview } = accountPageData
  const upcoming = appointments.filter((item) => item.status === 'confirmed' || item.status === 'pending')
  const firstName = user.fullName.split(' ')[0]

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal">Welcome back</p>
        <h2 className="mt-2 text-3xl font-bold tracking-wide text-ink sm:text-4xl">{firstName}</h2>
        <p className="mt-3 text-base text-charcoal">
          Member since{' '}
          {new Date(user.memberSince).toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Orders', value: orders.length },
          { label: 'Upcoming', value: upcoming.length },
          { label: 'Completed visits', value: appointments.filter((a) => a.status === 'completed').length },
        ].map((stat) => (
          <div key={stat.label} className="border border-cream-dark bg-cream-box px-5 py-6">
            <p className="text-3xl font-bold text-ink">{stat.value}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.12em] text-charcoal">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-wide text-ink">Quick links</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {overview.quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group border border-cream-dark bg-white p-5 transition-colors hover:border-ink"
            >
              <p className="text-base font-bold text-ink transition-opacity group-hover:opacity-70">
                {link.label}
              </p>
              <p className="mt-2 text-sm text-charcoal">{link.description}</p>
              <span className="mt-4 inline-block text-sm uppercase tracking-[0.12em] text-ink">Go →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProfilePanel({ user, onSave }) {
  const [form, setForm] = useState({
    fullName: user.fullName,
    phone: user.phone,
    address: user.address,
  })
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    onSave(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Profile</h2>
      <p className="mt-2 text-base text-charcoal">Update your personal details for bookings and orders.</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-6">
        <FormField label="Full Name" required>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(event) => setForm({ ...form, fullName: event.target.value })}
            className={inputClassName}
          />
        </FormField>
        <FormField label="Email">
          <input type="email" disabled value={user.email} className={`${inputClassName} opacity-60`} />
        </FormField>
        <FormField label="Phone" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className={inputClassName}
          />
        </FormField>
        <FormField label="Address">
          <input
            type="text"
            value={form.address}
            onChange={(event) => setForm({ ...form, address: event.target.value })}
            className={inputClassName}
            placeholder="City, Algeria"
          />
        </FormField>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="cursor-pointer border border-ink bg-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
          >
            Save Changes
          </button>
          {saved && (
            <p className="text-sm text-charcoal" role="status">
              Profile updated successfully.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

function OrdersPanel({ orders }) {
  const { orderStatuses } = accountPageData

  if (orders.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Orders</h2>
        <p className="mt-2 text-base text-charcoal">You have not placed any orders yet.</p>
        <Link
          to="/magasin"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-ink bg-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
        >
          Shop Magasin
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Orders</h2>
      <p className="mt-2 text-base text-charcoal">{orders.length} order{orders.length !== 1 ? 's' : ''}</p>

      <div className="mt-8 space-y-4">
        {orders.map((order) => (
          <article key={order.id} className="border border-cream-dark bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-charcoal">{order.id}</p>
                <p className="mt-1 text-base font-bold text-ink">
                  {new Date(order.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <StatusBadge status={order.status} map={orderStatuses} />
            </div>

            <ul className="mt-5 space-y-2 border-t border-cream-dark pt-5">
              {order.items.map((item) => (
                <li key={`${order.id}-${item.title}`} className="flex justify-between gap-4 text-sm sm:text-base">
                  <span className="text-charcoal">
                    {item.title}
                    {item.quantity > 1 && <span className="text-charcoal/70"> × {item.quantity}</span>}
                  </span>
                  <span className="shrink-0 font-medium text-ink">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between border-t border-cream-dark pt-4 text-base font-bold text-ink">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function AppointmentsPanel({ appointments }) {
  const { appointmentStatuses } = accountPageData

  if (appointments.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Appointments</h2>
        <p className="mt-2 text-base text-charcoal">No appointments scheduled yet.</p>
        <Link
          to="/book"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-ink bg-ink px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark"
        >
          Book a Session
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl">Appointments</h2>
      <p className="mt-2 text-base text-charcoal">{appointments.length} booking{appointments.length !== 1 ? 's' : ''}</p>

      <div className="mt-8 space-y-4">
        {appointments.map((appointment) => (
          <article key={appointment.id} className="border border-cream-dark bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-charcoal">{appointment.category}</p>
                <h3 className="mt-1 text-lg font-bold text-ink sm:text-xl">{appointment.service}</h3>
                <p className="mt-2 text-sm text-charcoal sm:text-base">
                  {new Date(appointment.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  at {appointment.time}
                </p>
              </div>
              <StatusBadge status={appointment.status} map={appointmentStatuses} />
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/book"
        className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-70"
      >
        Book another session →
      </Link>
    </div>
  )
}

export default function AccountDashboard() {
  const { nav } = accountPageData
  const { user, orders, appointments, logout, updateProfile } = useAccount()
  const [activeTab, setActiveTab] = useState('overview')

  const panels = {
    overview: (
      <OverviewPanel user={user} orders={orders} appointments={appointments} />
    ),
    profile: <ProfilePanel user={user} onSave={updateProfile} />,
    orders: <OrdersPanel orders={orders} />,
    appointments: <AppointmentsPanel appointments={appointments} />,
  }

  return (
    <div className="font-garamond lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 xl:gap-16">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="border border-cream-dark bg-white p-5 sm:p-6">
          <div className="flex items-center gap-4 border-b border-cream-dark pb-5">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-cream-dark bg-cream-box text-lg font-bold text-ink">
              {user.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate font-bold text-ink">{user.fullName}</p>
              <p className="truncate text-sm text-charcoal">{user.email}</p>
            </div>
          </div>

          <nav className="mt-4 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" aria-label="Account">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`shrink-0 cursor-pointer px-4 py-3 text-left text-sm uppercase tracking-[0.12em] transition-colors lg:w-full ${
                  activeTab === item.id
                    ? 'bg-ink text-cream'
                    : 'text-charcoal hover:bg-cream-box hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={logout}
            className="mt-4 w-full cursor-pointer border-t border-cream-dark pt-4 text-left text-sm uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-ink"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <div className="mt-8 min-w-0 lg:mt-0">{panels[activeTab]}</div>
    </div>
  )
}
