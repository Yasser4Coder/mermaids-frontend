export default function ServicePriceTable({ categories }) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {categories.map((category) => (
        <div key={category.title}>
          <h3 className="font-garamond text-2xl font-bold tracking-wide text-ink sm:text-3xl">
            {category.title}
          </h3>
          <div className="mt-6 space-y-8">
            {category.groups.map((group) => (
              <div key={group.name}>
                <h4 className="font-garamond text-lg font-semibold uppercase tracking-[0.1em] text-charcoal sm:text-xl">
                  {group.name}
                </h4>
                <ul className="mt-4 divide-y divide-cream-dark border-y border-cream-dark">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-1 py-3 font-garamond sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:py-4"
                    >
                      <span className="text-base text-ink sm:text-lg">{item.name}</span>
                      <span className="shrink-0 text-base font-medium text-charcoal sm:text-lg">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
