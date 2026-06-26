export default function ShopToolbar({ showingFrom, showingTo, total, sort, sortOptions, onSortChange }) {
  return (
    <div className="flex flex-col gap-4 border-b border-cream-dark pb-6 font-garamond sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-charcoal sm:text-base">
        Showing {showingFrom}–{showingTo} of {total} results
      </p>
      <label className="flex items-center gap-3 text-sm text-charcoal sm:text-base">
        Sort by:
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="cursor-pointer border border-cream-dark bg-white px-3 py-2 text-ink outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
