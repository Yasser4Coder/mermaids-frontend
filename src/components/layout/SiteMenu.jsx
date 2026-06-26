import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { menuFooterLinks, menuGroups } from '@/data/navigation'

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function MenuNavLink({ link, index, onClose, variant = 'default' }) {
  const isCard = variant === 'card' && link.image

  if (isCard) {
    return (
      <NavLink
        to={link.href}
        onClick={onClose}
        className={({ isActive }) =>
          `group flex items-center gap-4 border border-cream-dark bg-white p-3 transition-colors hover:border-ink ${
            isActive ? 'border-ink bg-cream-box' : ''
          }`
        }
      >
        <div className="size-16 shrink-0 overflow-hidden sm:size-[4.5rem]">
          <img
            src={link.image}
            alt=""
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0 font-garamond">
          <span className="block text-lg font-bold tracking-wide text-ink sm:text-xl">
            {link.label}
          </span>
          {link.description && (
            <span className="mt-1 block text-sm leading-snug text-charcoal">
              {link.description}
            </span>
          )}
        </div>
        <span
          aria-hidden="true"
          className="ml-auto shrink-0 text-charcoal/40 transition-transform group-hover:translate-x-1 group-hover:text-ink"
        >
          →
        </span>
      </NavLink>
    )
  }

  return (
    <NavLink
      to={link.href}
      end={link.href === '/'}
      onClick={onClose}
      className={({ isActive }) =>
        `group flex items-baseline gap-4 font-garamond transition-colors ${
          isActive ? 'text-ink' : 'text-charcoal hover:text-ink'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="text-xs tracking-[0.2em] text-charcoal/50 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-2xl tracking-wide sm:text-3xl ${isActive ? 'font-bold' : ''}`}>
            {link.label}
          </span>
          <span
            aria-hidden="true"
            className={`ml-auto text-sm transition-all ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
            }`}
          >
            →
          </span>
        </>
      )}
    </NavLink>
  )
}

export default function SiteMenu({ isOpen, onClose }) {
  const { pathname } = useLocation()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 cursor-pointer bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute top-0 left-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-dark px-6 py-5 sm:px-8">
          <Link
            to="/"
            onClick={onClose}
            className="font-logo text-2xl font-bold tracking-logo text-ink transition-opacity hover:opacity-70"
          >
            MERMAIDS
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 cursor-pointer items-center justify-center border border-cream-dark text-ink transition-colors hover:border-ink hover:bg-white"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 sm:px-8">
          {menuGroups.map((group) => (
            <div key={group.id} className="mb-10 last:mb-0">
              <p className="font-garamond text-xs uppercase tracking-[0.25em] text-charcoal">
                {group.title}
              </p>
              <div
                className={`mt-5 ${
                  group.id === 'main'
                    ? 'flex flex-col gap-5'
                    : 'flex flex-col gap-3'
                }`}
              >
                {group.links.map((link, index) => (
                  <MenuNavLink
                    key={link.href}
                    link={link}
                    index={index}
                    onClose={onClose}
                    variant={group.id === 'main' ? 'default' : 'card'}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-cream-dark bg-cream-box px-6 py-6 sm:px-8">
          <Link
            to="/book"
            onClick={onClose}
            className="flex w-full cursor-pointer items-center justify-center gap-2 border border-ink bg-ink px-6 py-3.5 font-garamond text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark"
          >
            Book Now
            <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {menuFooterLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="font-garamond text-sm uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher className="md:hidden" />
          </div>
        </div>
      </aside>
    </div>
  )
}
