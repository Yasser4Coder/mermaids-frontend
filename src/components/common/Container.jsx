const maxWidthClasses = {
  default: 'max-w-7xl',
  lg: 'max-w-screen-2xl',
  wide: 'max-w-[1920px]',
}

export default function Container({
  children,
  className = '',
  wide = false,
  size = 'default',
}) {
  const maxWidth = wide ? maxWidthClasses.wide : maxWidthClasses[size] ?? maxWidthClasses.default

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-14 ${maxWidth} ${className}`}
    >
      {children}
    </div>
  )
}
