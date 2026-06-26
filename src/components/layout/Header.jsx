import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import SiteMenu from '@/components/layout/SiteMenu'
import { useCart } from '@/context/CartContext'

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  )
}

function HeaderIconLink({ to, label, children, badge }) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="relative flex size-10 shrink-0 cursor-pointer items-center justify-center text-ink transition-opacity hover:opacity-70"
    >
      {children}
      {badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-ink text-[10px] leading-none font-medium text-cream">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const { itemCount } = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 h-14 shrink-0 border-b border-cream-dark bg-white font-logo sm:h-16">
        <Container wide className="h-full px-3 sm:px-6">
          <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <div className="flex justify-start">
              <button
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="flex size-10 cursor-pointer items-center justify-center gap-2.5 text-ink transition-opacity hover:opacity-70 sm:size-auto sm:px-0"
              >
                <MenuIcon open={menuOpen} />
                <span className="hidden text-sm leading-none tracking-header uppercase sm:inline">
                  Menu
                </span>
              </button>
            </div>

            <Link
              to="/"
              className="justify-self-center truncate text-center text-lg leading-none font-bold tracking-logo text-ink transition-opacity hover:opacity-80 sm:text-2xl lg:text-3xl"
            >
              MERMAIDS
            </Link>

            <div className="flex items-center justify-end gap-0.5 sm:gap-2">
              <Link
                to="/contact"
                className="mr-1 hidden cursor-pointer text-sm leading-none tracking-header text-ink transition-opacity hover:opacity-70 lg:inline"
              >
                Contactez-nous
              </Link>
              <LanguageSwitcher className="hidden md:block" />
              <HeaderIconLink to="/cart" label="Shopping bag" badge={itemCount}>
                <BagIcon />
              </HeaderIconLink>
              <HeaderIconLink to="/account" label="Account">
                <UserIcon />
              </HeaderIconLink>
            </div>
          </div>
        </Container>
      </header>

      <SiteMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  )
}
