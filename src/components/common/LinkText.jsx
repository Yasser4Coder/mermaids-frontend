import { Link } from 'react-router-dom'

export default function LinkText({ children, href = '#', className = '', dark = false, size = 'sm' }) {
  const sizes = {
    sm: 'text-xs',
    md: 'text-sm sm:text-base',
    lg: 'text-sm sm:text-base lg:text-lg',
  }

  const linkClassName = `group inline-flex items-center gap-2 font-medium uppercase tracking-[0.15em] transition-opacity hover:opacity-70 ${sizes[size]} ${dark ? 'text-white' : 'text-ink'} ${className}`

  const content = (
    <>
      <span className="border-b border-current pb-0.5">{children}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </>
  )

  const isInternal = href.startsWith('/') && !href.startsWith('//')

  if (isInternal) {
    return (
      <Link to={href} className={linkClassName}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={linkClassName}>
      {content}
    </a>
  )
}
