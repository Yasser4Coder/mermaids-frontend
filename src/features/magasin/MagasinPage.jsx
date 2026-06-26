import { useMemo, useState } from 'react'
import Container from '@/components/common/Container'
import ShopProductCard from '@/components/shop/ShopProductCard'
import ShopFilters from '@/components/shop/ShopFilters'
import ShopToolbar from '@/components/shop/ShopToolbar'
import ShopPagination from '@/components/shop/ShopPagination'
import MagasinHeroSection from '@/features/magasin/sections/MagasinHeroSection'
import MagasinInfoBlocks from '@/features/magasin/sections/MagasinInfoBlocks'
import MagasinNewsletter from '@/features/magasin/sections/MagasinNewsletter'
import { magasinPageData, shopProducts } from '@/data/magasin'

const PAGE_SIZE = 12

const initialFilters = {
  categories: [],
  collections: [],
  materials: [],
  colors: [],
  priceMax: magasinPageData.priceRange.max,
}

function sortProducts(items, sort) {
  const list = [...items]
  switch (sort) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'name':
      return list.sort((a, b) => a.title.localeCompare(b.title))
    default:
      return list.sort((a, b) => {
        const aFeatured = a.badge ? 0 : 1
        const bFeatured = b.badge ? 0 : 1
        return aFeatured - bFeatured || a.id - b.id
      })
  }
}

function filterProducts(items, filters) {
  return items.filter((product) => {
    if (filters.categories.length && !filters.categories.includes(product.category)) {
      return false
    }
    if (
      filters.collections.length &&
      !filters.collections.some((c) => product.collections.includes(c))
    ) {
      return false
    }
    if (filters.materials.length && !filters.materials.includes(product.material)) {
      return false
    }
    if (filters.colors.length && !filters.colors.some((c) => product.colors.includes(c))) {
      return false
    }
    if (product.price > filters.priceMax) {
      return false
    }
    return true
  })
}

export default function MagasinPage() {
  const { announcement, hero, sortOptions, filterGroups, priceRange, infoBlocks, newsletter } =
    magasinPageData

  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState('featured')
  const [page, setPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const colorMap = Object.fromEntries(filterGroups.colors.map((c) => [c.id, c.hex]))

  const filtered = useMemo(
    () => sortProducts(filterProducts(shopProducts, filters), sort),
    [filters, sort],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const showingFrom = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1
  const showingTo = Math.min(currentPage * PAGE_SIZE, filtered.length)

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setPage(1)
  }

  const handleClearAll = () => {
    setFilters(initialFilters)
    setPage(1)
  }

  return (
    <>
      <div className="bg-ink py-2.5 text-center font-garamond text-xs uppercase tracking-[0.15em] text-cream sm:text-sm">
        {announcement}
      </div>

      <MagasinHeroSection hero={hero} />

      <section className="py-10 lg:py-14">
        <Container size="lg">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="mb-6 cursor-pointer border border-ink px-6 py-2.5 font-garamond text-sm uppercase tracking-[0.15em] text-ink lg:hidden"
          >
            {mobileFiltersOpen ? 'Hide Filters' : 'Filter'}
          </button>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] xl:gap-12">
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="lg:sticky lg:top-24">
                <ShopFilters
                  filterGroups={filterGroups}
                  priceRange={priceRange}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>

            <div>
              <ShopToolbar
                showingFrom={showingFrom}
                showingTo={showingTo}
                total={filtered.length}
                sort={sort}
                sortOptions={sortOptions}
                onSortChange={(value) => {
                  setSort(value)
                  setPage(1)
                }}
              />

              {paginated.length > 0 ? (
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {paginated.map((product) => (
                    <ShopProductCard key={product.id} product={product} colorMap={colorMap} />
                  ))}
                </div>
              ) : (
                <p className="mt-12 text-center font-garamond text-lg text-charcoal">
                  No products match your filters. Try adjusting your selection.
                </p>
              )}

              <ShopPagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </Container>
      </section>

      <MagasinInfoBlocks blocks={infoBlocks} />
      <MagasinNewsletter data={newsletter} />
    </>
  )
}
