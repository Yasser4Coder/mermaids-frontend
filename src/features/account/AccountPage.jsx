import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { useAccount } from '@/context/AccountContext'
import { accountPageData } from '@/data/account'
import AccountDashboard from '@/features/account/sections/AccountDashboard'
import GuestAuthSection from '@/features/account/sections/GuestAuthSection'

export default function AccountPage() {
  const { hero } = accountPageData
  const { isAuthenticated } = useAccount()

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
              <span className="text-ink">Account</span>
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
        {isAuthenticated ? <AccountDashboard /> : <GuestAuthSection />}
      </Container>
    </>
  )
}
