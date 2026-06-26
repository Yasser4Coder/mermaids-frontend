import { useEffect, useRef, useState } from 'react'

const languages = ['FR', 'AR', 'EN']

export default function LanguageSwitcher({ className = '' }) {
  const [active, setActive] = useState('FR')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function selectLanguage(lang) {
    setActive(lang)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex cursor-pointer items-center gap-1 text-sm tracking-header text-ink transition-opacity hover:opacity-70"
      >
        {active}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`size-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute top-full right-0 z-50 mt-2 min-w-[4rem] border border-cream-dark bg-white py-1 shadow-sm"
        >
          {languages.map((lang) => (
            <li key={lang} role="option" aria-selected={active === lang}>
              <button
                type="button"
                onClick={() => selectLanguage(lang)}
                className={`block w-full cursor-pointer px-4 py-2 text-left text-sm tracking-header transition-colors hover:bg-cream ${
                  active === lang ? 'text-ink' : 'text-charcoal'
                }`}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
