export const MIN_PRICE = 1000;
export const MAX_PRICE = 15000;

export const CATEGORIES = [
  { id: "hair", label: "Hair" },
  { id: "skin", label: "Skin" },
  { id: "nails", label: "Nails" },
];

export const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to high" },
  { id: "price-desc", label: "Price: High to low" },
  { id: "name", label: "Name A–Z" },
  { id: "rating", label: "Top rated" },
];

export const PRICE_PRESETS = [
  { id: "under-5k", label: "Under 5 000 DZD", min: MIN_PRICE, max: 5000 },
  { id: "5-10k", label: "5 000 – 10 000 DZD", min: 5000, max: 10000 },
  { id: "over-10k", label: "Over 10 000 DZD", min: 10000, max: MAX_PRICE },
];

export const BENEFITS = [
  {
    id: "hydration",
    label: "Hydration",
    test: (p) => /hydrat|dew|ceramide|lip|barrier|niacinamide/i.test(`${p.name} ${p.description} ${p.search}`),
  },
  {
    id: "repair",
    label: "Repair",
    test: (p) => /repair|recovery|bond|mask|lipid|overnight/i.test(`${p.name} ${p.description} ${p.search}`),
  },
  {
    id: "protection",
    label: "Protection",
    test: (p) => /spf|sun|mineral|shield|barrier/i.test(`${p.name} ${p.description} ${p.search}`),
  },
  {
    id: "shine",
    label: "Shine & finish",
    test: (p) => /gloss|shine|glass|top coat|conditioner/i.test(`${p.name} ${p.description} ${p.search}`),
  },
];

export const COLLECTIONS = [
  { id: "new", label: "New arrivals", badgeType: "new" },
  { id: "hit", label: "Staff picks", badgeType: "hit" },
  { id: "bestseller", label: "Bestsellers", badgeType: "bestseller" },
  { id: "limited", label: "Limited edition", badgeType: "limited" },
  { id: "trending", label: "Trending", badgeType: "trending" },
];

export const RATINGS = [
  { id: "5", label: "5 stars", min: 5 },
  { id: "4.5", label: "4.5+ stars", min: 4.5 },
];

export const DEFAULT_FILTERS = {
  categories: [],
  benefits: [],
  collections: [],
  ratingMin: null,
  priceMin: MIN_PRICE,
  priceMax: MAX_PRICE,
  pricePreset: null,
  query: "",
  sort: "featured",
};

export function countByCategory(products, id) {
  return products.filter((p) => p.category === id).length;
}

export function countByBenefit(products, benefit) {
  return products.filter(benefit.test).length;
}

export function countByCollection(products, badgeType) {
  return products.filter((p) => p.badgeType === badgeType).length;
}

export function countByRating(products, min) {
  return products.filter((p) => p.rating >= min).length;
}

export function filterProducts(products, filters) {
  let list = [...products];

  if (filters.categories.length) {
    list = list.filter((p) => filters.categories.includes(p.category));
  }

  if (filters.benefits.length) {
    list = list.filter((p) =>
      filters.benefits.some((id) => {
        const benefit = BENEFITS.find((b) => b.id === id);
        return benefit?.test(p);
      })
    );
  }

  if (filters.collections.length) {
    list = list.filter((p) => filters.collections.includes(p.badgeType));
  }

  if (filters.ratingMin != null) {
    list = list.filter((p) => p.rating >= filters.ratingMin);
  }

  list = list.filter((p) => p.price >= filters.priceMin && p.price <= filters.priceMax);

  if (filters.query.trim()) {
    const q = filters.query.toLowerCase();
    list = list.filter(
      (p) =>
        p.search.includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    );
  }

  return sortProducts(list, filters.sort);
}

export function sortProducts(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    default:
      return sorted.sort((a, b) => a.order - b.order);
  }
}

export function countActiveFilters(filters) {
  let n = 0;
  if (filters.categories.length) n += filters.categories.length;
  if (filters.benefits.length) n += filters.benefits.length;
  if (filters.collections.length) n += filters.collections.length;
  if (filters.ratingMin != null) n += 1;
  if (filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE) n += 1;
  if (filters.query.trim()) n += 1;
  return n;
}

export function getActiveFilterChips(filters, setFilters) {
  const chips = [];

  filters.categories.forEach((id) => {
    const cat = CATEGORIES.find((c) => c.id === id);
    chips.push({
      key: `cat-${id}`,
      label: cat?.label ?? id,
      clear: () => setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== id) })),
    });
  });

  filters.benefits.forEach((id) => {
    const benefit = BENEFITS.find((b) => b.id === id);
    chips.push({
      key: `ben-${id}`,
      label: benefit?.label ?? id,
      clear: () => setFilters((f) => ({ ...f, benefits: f.benefits.filter((b) => b !== id) })),
    });
  });

  filters.collections.forEach((badgeType) => {
    const col = COLLECTIONS.find((c) => c.badgeType === badgeType);
    chips.push({
      key: `col-${badgeType}`,
      label: col?.label ?? badgeType,
      clear: () => setFilters((f) => ({ ...f, collections: f.collections.filter((c) => c !== badgeType) })),
    });
  });

  if (filters.ratingMin != null) {
    const rating = RATINGS.find((r) => r.min === filters.ratingMin);
    chips.push({
      key: "rating",
      label: rating?.label ?? `${filters.ratingMin}+ stars`,
      clear: () => setFilters((f) => ({ ...f, ratingMin: null })),
    });
  }

  if (filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE) {
    chips.push({
      key: "price",
      label: `${filters.priceMin.toLocaleString("fr-DZ")} – ${filters.priceMax.toLocaleString("fr-DZ")} DZD`,
      clear: () =>
        setFilters((f) => ({
          ...f,
          priceMin: MIN_PRICE,
          priceMax: MAX_PRICE,
          pricePreset: null,
        })),
    });
  }

  if (filters.query.trim()) {
    chips.push({
      key: "query",
      label: `“${filters.query.trim()}”`,
      clear: () => setFilters((f) => ({ ...f, query: "" })),
    });
  }

  return chips;
}
