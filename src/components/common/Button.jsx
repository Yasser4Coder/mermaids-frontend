import { Link } from 'react-router-dom'

const variants = {
  primary:
    'border border-ink bg-transparent text-ink hover:bg-ink hover:text-cream',
  dark: 'border border-white bg-transparent text-white hover:bg-white hover:text-charcoal-dark',
  filled: 'border border-ink bg-ink text-cream hover:bg-charcoal-dark',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const classes = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </>
  )

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//')

    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
