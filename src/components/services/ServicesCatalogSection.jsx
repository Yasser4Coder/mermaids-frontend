import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import ServiceCatalogCard from '@/components/services/ServiceCatalogCard'
import WireframePlaceholder from '@/components/services/WireframePlaceholder'
import { getBookingUrl } from '@/utils/booking'

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-charcoal" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  )
}

function filterCategories(categories, search, filter) {
  const query = search.trim().toLowerCase()

  return categories
    .filter((category) => filter === 'all' || filter === 'popular' || filter === category.id)
    .map((category) => {
      const groups = category.groups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            const matchesSearch =
              !query ||
              item.name.toLowerCase().includes(query) ||
              group.name.toLowerCase().includes(query)
            const matchesPopular = filter !== 'popular' || item.popular
            return matchesSearch && matchesPopular
          }),
        }))
        .filter((group) => group.items.length > 0)

      if (groups.length === 0) return null
      return { ...category, groups }
    })
    .filter(Boolean)
}

function getPopularItems(category) {
  return category.groups.flatMap((group) => group.items.filter((item) => item.popular))
}

function MobileGroupAccordion({ group, bookCategory, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden border border-cream-dark bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left font-garamond"
        aria-expanded={open}
      >
        <span className="text-base font-bold tracking-wide text-ink">{group.name}</span>
        <span
          className={`flex size-8 shrink-0 items-center justify-center border border-cream-dark text-lg text-charcoal transition-transform ${
            open ? 'rotate-180 bg-cream-box' : 'bg-white'
          }`}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-cream-dark px-3 pb-4 pt-3">
          {group.items.map((item) => (
            <ServiceCatalogCard key={item.name} item={item} bookCategory={bookCategory} compact />
          ))}
        </div>
      )}
    </div>
  )
}

function CategoryBlock({ category, bookCategory }) {
  const popularItems = getPopularItems(category)

  return (
    <section id={`catalog-${category.id}`} className="scroll-mt-32 md:scroll-mt-52 lg:scroll-mt-56">
      <WireframePlaceholder
        label={category.label}
        className="mb-6 aspect-[16/7] w-full md:aspect-[21/9] lg:hidden"
      />

      <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-10">
        <WireframePlaceholder label={category.label} className="hidden aspect-square lg:flex" />

        <div>
          <div className="font-garamond">
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal">Category</p>
            <h3 className="mt-2 text-2xl font-bold tracking-wide text-ink sm:text-3xl lg:text-4xl">
              {category.title}
            </h3>
            {bookCategory && (
              <Link
                to={getBookingUrl(bookCategory)}
                className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink bg-ink px-5 py-3 text-xs uppercase tracking-[0.15em] text-cream transition-colors hover:bg-charcoal-dark sm:w-auto sm:bg-transparent sm:py-2 sm:text-ink sm:hover:bg-ink sm:hover:text-cream"
              >
                Book in {category.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {popularItems.length > 0 && (
            <div className="mt-8">
              <p className="font-garamond text-sm uppercase tracking-[0.2em] text-charcoal">
                ★ Most requested
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {popularItems.map((item) => (
                  <ServiceCatalogCard
                    key={`${category.id}-${item.name}`}
                    item={item}
                    bookCategory={bookCategory}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 space-y-3 lg:space-y-8">
            {category.groups.map((group, index) => (
              <div key={group.name}>
                <h4 className="hidden border-b border-cream-dark pb-3 font-garamond text-xl font-bold tracking-wide text-ink lg:block">
                  {group.name}
                </h4>

                <div className="lg:hidden">
                  <MobileGroupAccordion
                    group={group}
                    bookCategory={bookCategory}
                    defaultOpen={index === 0}
                  />
                </div>

                <div className="mt-5 hidden gap-4 sm:grid-cols-2 lg:grid xl:grid-cols-3">
                  {group.items.map((item) => (
                    <ServiceCatalogCard key={item.name} item={item} bookCategory={bookCategory} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesCatalogSection({ catalog }) {
  const {
    sectionId = 'all-services',
    bookCategory,
    header,
    categories,
    cta = {
      title: 'Ready to book your appointment?',
      description: 'Our team is here to help you look and feel your best.',
      label: 'Book Now',
      href: '/book',
    },
  } = catalog

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '')

  const filteredCategories = useMemo(
    () => filterCategories(categories, search, filter),
    [categories, search, filter],
  )

  const filterOptions = useMemo(
    () => [
      { id: 'all', label: 'All' },
      { id: 'popular', label: 'Popular' },
      ...categories.map((category) => ({ id: category.id, label: category.label })),
    ],
    [categories],
  )

  useEffect(() => {
    if (filter !== 'all') return undefined

    const sections = categories
      .map((category) => document.getElementById(`catalog-${category.id}`))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveCategory(visible.target.id.replace('catalog-', ''))
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [categories, filter, filteredCategories.length])

  function scrollToCategory(categoryId) {
    setFilter('all')
    setSearch('')
    const element = document.getElementById(`catalog-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveCategory(categoryId)
    }
  }

  function handleFilterSelect(optionId) {
    if (optionId === 'all' || optionId === 'popular') {
      setFilter(optionId)
      return
    }

    const isCategory = categories.some((category) => category.id === optionId)
    if (isCategory) {
      scrollToCategory(optionId)
      return
    }

    setFilter(optionId)
  }

  return (
    <section id={sectionId} className="scroll-mt-24 border-t border-cream-dark bg-cream">
      <div className="relative overflow-hidden border-b border-cream-dark bg-cream-box py-12 sm:py-16 lg:py-24">
        <WireframePlaceholder
          label={header.wireframeLabel ?? 'Services'}
          className="absolute inset-0 opacity-40"
        />
        <div className="absolute inset-0 bg-cream-box/80" />
        <Container size="lg" className="relative">
          <div className="mx-auto max-w-3xl text-center font-garamond">
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal sm:text-sm">
              {header.eyebrow ?? 'Full Services Menu'}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-wide text-ink sm:mt-4 sm:text-5xl lg:text-6xl">
              {header.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal sm:mt-5 sm:text-base lg:text-lg">
              {header.subtitle}
            </p>
            <p className="mt-3 text-xs tracking-[0.12em] text-charcoal sm:mt-4 sm:text-sm sm:tracking-[0.15em]">
              {header.tags.join('  •  ')}
            </p>
          </div>
        </Container>
      </div>

      <div className="sticky top-14 z-40 border-b border-cream-dark bg-white/95 backdrop-blur-sm sm:top-16">
        <Container size="lg" className="space-y-3 py-3 sm:space-y-4 sm:py-4">
          <div className="relative">
            <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 sm:left-4">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search service..."
              aria-label="Search services"
              className="w-full border border-cream-dark bg-cream py-2.5 pr-4 pl-10 font-garamond text-base text-ink outline-none placeholder:text-charcoal/60 focus:border-ink sm:py-3 sm:pl-11"
            />
          </div>

          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="scrollbar-hide flex min-w-max snap-x snap-mandatory gap-2 pb-0.5">
              {filterOptions.map((option) => {
                const isAllOrPopular = option.id === 'all' || option.id === 'popular'
                const isActive = isAllOrPopular
                  ? filter === option.id
                  : filter === option.id || (filter === 'all' && activeCategory === option.id)

                return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleFilterSelect(option.id)}
                  className={`shrink-0 snap-start cursor-pointer border px-3.5 py-2 font-garamond text-xs uppercase tracking-[0.12em] transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? 'border-ink bg-ink text-cream'
                      : 'border-cream-dark bg-white text-ink hover:border-ink'
                  }`}
                >
                  {option.label}
                </button>
                )
              })}
            </div>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <div className="scrollbar-hide flex min-w-max snap-x snap-mandatory gap-2 pb-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(category.id)}
                  className={`shrink-0 snap-start cursor-pointer border px-5 py-2.5 font-garamond text-sm uppercase tracking-[0.12em] transition-colors ${
                    activeCategory === category.id && filter === 'all'
                      ? 'border-ink bg-ink text-cream'
                      : 'border-cream-dark bg-cream-box text-ink hover:border-ink'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container size="lg" className="py-10 sm:py-12 lg:py-16">
        {filteredCategories.length === 0 ? (
          <p className="py-12 text-center font-garamond text-base text-charcoal sm:py-16 sm:text-lg">
            No services match your search. Try another keyword or filter.
          </p>
        ) : (
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-56 space-y-2 font-garamond">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-charcoal">Categories</p>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => scrollToCategory(category.id)}
                    className={`block w-full cursor-pointer border-l-2 py-2 pl-4 text-left text-base transition-colors ${
                      activeCategory === category.id
                        ? 'border-ink font-bold text-ink'
                        : 'border-transparent text-charcoal hover:border-charcoal/30 hover:text-ink'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </aside>

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {filteredCategories.map((category) => (
                <CategoryBlock key={category.id} category={category} bookCategory={bookCategory} />
              ))}
            </div>
          </div>
        )}
      </Container>

      <div className="border-t border-cream-dark bg-cream-box py-12 sm:py-14 lg:py-16">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center font-garamond">
            <h3 className="text-2xl font-bold tracking-wide text-ink sm:text-3xl lg:text-4xl">{cta.title}</h3>
            <p className="mt-3 text-sm text-charcoal sm:mt-4 sm:text-base lg:text-lg">{cta.description}</p>
            <Link
              to={cta.href}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-ink bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal-dark sm:mt-8 sm:w-auto sm:px-10"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  )
}
