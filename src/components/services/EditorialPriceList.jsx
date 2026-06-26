export default function EditorialPriceList({ items, variant = 'simple' }) {
  return (
    <ul className="divide-y divide-cream-dark border-y border-cream-dark font-garamond">
      {items.map((item) => (
        <li
          key={item.name ?? item.title}
          className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-6"
        >
          <div className="max-w-xl">
            <p className="text-lg font-semibold tracking-wide text-ink sm:text-xl">
              {item.name ?? item.title}
            </p>
            {variant === 'detailed' && item.description && (
              <p className="mt-2 text-base leading-relaxed text-charcoal">{item.description}</p>
            )}
          </div>
          {item.price && (
            <p className="shrink-0 text-base font-medium text-charcoal sm:text-lg">{item.price}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
