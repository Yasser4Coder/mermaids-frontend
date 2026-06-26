export default function ShopPagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visible =
    totalPages <= 7
      ? pages
      : page <= 4
        ? [...pages.slice(0, 5), '…', totalPages]
        : page >= totalPages - 3
          ? [1, '…', ...pages.slice(totalPages - 5)]
          : [1, '…', page - 1, page, page + 1, '…', totalPages]

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-2 font-garamond"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="cursor-pointer px-3 py-2 text-charcoal transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        ←
      </button>

      {visible.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-charcoal">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={page === p ? 'page' : undefined}
            className={`size-9 cursor-pointer text-sm transition-colors sm:size-10 sm:text-base ${
              page === p
                ? 'bg-ink text-cream'
                : 'text-charcoal hover:bg-cream-box hover:text-ink'
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="cursor-pointer px-3 py-2 text-charcoal transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        →
      </button>
    </nav>
  )
}
