export default function SectionHeader({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  dark = false,
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2
        className={
          titleClassName
            ? `${titleClassName} ${dark ? 'text-white' : 'text-ink'}`
            : `font-serif text-3xl font-normal tracking-wide sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            subtitleClassName
              ? `mx-auto mt-3 max-w-xl leading-relaxed ${dark ? 'text-white/70' : 'text-charcoal'} ${subtitleClassName}`
              : `mx-auto mt-3 max-w-xl text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-charcoal'}`
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
