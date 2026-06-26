import { useState } from 'react'

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-cream-dark py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between font-garamond text-base font-semibold text-ink"
      >
        {title}
        <span className="text-xl leading-none text-charcoal" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  )
}

function CheckboxItem({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 font-garamond text-sm text-charcoal sm:text-base">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-4 accent-ink"
      />
      {label}
    </label>
  )
}

export default function ShopFilters({
  filterGroups,
  priceRange,
  filters,
  onFilterChange,
  onClearAll,
  colorMap,
}) {
  const toggleList = (key, id) => {
    const current = filters[key]
    const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    onFilterChange(key, next)
  }

  const toggleCategory = (id) => {
    if (id === 'all') {
      onFilterChange('categories', [])
      return
    }
    const withoutAll = filters.categories.filter((c) => c !== 'all')
    const next = withoutAll.includes(id)
      ? withoutAll.filter((c) => c !== id)
      : [...withoutAll, id]
    onFilterChange('categories', next)
  }

  return (
    <aside className="font-garamond">
      <div className="flex items-center justify-between border-b border-cream-dark pb-4">
        <h2 className="text-lg font-bold text-ink">Filter</h2>
        <button
          type="button"
          onClick={onClearAll}
          className="cursor-pointer text-sm uppercase tracking-[0.12em] text-charcoal transition-opacity hover:text-ink"
        >
          Clear all
        </button>
      </div>

      <FilterSection title="Category">
        <ul className="space-y-3">
          {filterGroups.categories.map((cat) => (
            <li key={cat.id}>
              <CheckboxItem
                label={cat.label}
                checked={
                  cat.id === 'all'
                    ? filters.categories.length === 0
                    : filters.categories.includes(cat.id)
                }
                onChange={() => toggleCategory(cat.id)}
              />
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Collection">
        <ul className="space-y-3">
          {filterGroups.collections.map((item) => (
            <li key={item.id}>
              <CheckboxItem
                label={item.label}
                checked={filters.collections.includes(item.id)}
                onChange={() => toggleList('collections', item.id)}
              />
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Material">
        <ul className="space-y-3">
          {filterGroups.materials.map((item) => (
            <li key={item.id}>
              <CheckboxItem
                label={item.label}
                checked={filters.materials.includes(item.id)}
                onChange={() => toggleList('materials', item.id)}
              />
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Price">
        <div className="space-y-3">
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={100}
            value={filters.priceMax}
            onChange={(e) => onFilterChange('priceMax', Number(e.target.value))}
            className="w-full accent-ink"
          />
          <p className="text-sm text-charcoal">
            Up to <span className="font-medium text-ink">{filters.priceMax} DA</span>
          </p>
        </div>
      </FilterSection>

      <FilterSection title="Color">
        <div className="flex flex-wrap gap-3">
          {filterGroups.colors.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => toggleList('colors', color.id)}
              aria-label={color.label}
              aria-pressed={filters.colors.includes(color.id)}
              className={`size-8 cursor-pointer rounded-full border-2 transition-transform hover:scale-110 sm:size-9 ${
                filters.colors.includes(color.id) ? 'border-ink' : 'border-cream-dark'
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </FilterSection>

      <button
        type="button"
        className="mt-6 w-full cursor-pointer border border-ink bg-cream-box py-3 font-garamond text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        Apply Filters
      </button>
    </aside>
  )
}
