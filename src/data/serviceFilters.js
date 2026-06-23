import { SERVICE_CATEGORIES } from "./services";

export const MIN_PRICE = 500;
export const MAX_PRICE = 30000;

export const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to high" },
  { id: "price-desc", label: "Price: High to low" },
  { id: "duration-asc", label: "Duration: Shortest" },
  { id: "name", label: "Name A–Z" },
];

export const PRICE_PRESETS = [
  { id: "under-3k", label: "Under 3 000 DZD", min: MIN_PRICE, max: 3000 },
  { id: "3-10k", label: "3 000 – 10 000 DZD", min: 3000, max: 10000 },
  { id: "over-10k", label: "Over 10 000 DZD", min: 10000, max: MAX_PRICE },
];

export const DURATION_PRESETS = [
  { id: "quick", label: "Under 60 min", max: 59 },
  { id: "standard", label: "60 – 90 min", min: 60, max: 90 },
  { id: "extended", label: "90+ min", min: 91, max: 999 },
];

export const DEFAULT_FILTERS = {
  categories: [],
  durationPreset: null,
  priceMin: MIN_PRICE,
  priceMax: MAX_PRICE,
  pricePreset: null,
  query: "",
  sort: "featured",
};

export function countByCategory(services, id) {
  return services.filter((s) => s.categoryId === id).length;
}

export function filterServices(services, filters) {
  let list = [...services];

  if (filters.categories.length) {
    list = list.filter((s) => filters.categories.includes(s.categoryId));
  }

  if (filters.durationPreset) {
    const preset = DURATION_PRESETS.find((p) => p.id === filters.durationPreset);
    if (preset) {
      list = list.filter((s) => {
        if (preset.max != null && preset.min == null) return s.durationMin <= preset.max;
        if (preset.min != null && preset.max != null) return s.durationMin >= preset.min && s.durationMin <= preset.max;
        if (preset.min != null) return s.durationMin >= preset.min;
        return true;
      });
    }
  }

  list = list.filter((s) => s.price >= filters.priceMin && s.price <= filters.priceMax);

  if (filters.query.trim()) {
    const q = filters.query.toLowerCase();
    list = list.filter(
      (s) =>
        s.search.includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.categoryLabel.toLowerCase().includes(q) ||
        (s.subsection && s.subsection.toLowerCase().includes(q))
    );
  }

  return sortServices(list, filters.sort);
}

export function sortServices(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
    case "duration-asc":
      return sorted.sort((a, b) => a.durationMin - b.durationMin || a.price - b.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return a.order - b.order;
      });
  }
}

export function countActiveFilters(filters) {
  let n = 0;
  if (filters.categories.length) n += filters.categories.length;
  if (filters.durationPreset) n += 1;
  if (filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE) n += 1;
  if (filters.query.trim()) n += 1;
  return n;
}

export function getActiveFilterChips(filters, setFilters) {
  const chips = [];

  filters.categories.forEach((id) => {
    const cat = SERVICE_CATEGORIES.find((c) => c.id === id);
    chips.push({
      key: `cat-${id}`,
      label: cat?.label ?? id,
      clear: () => setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== id) })),
    });
  });

  if (filters.durationPreset) {
    const preset = DURATION_PRESETS.find((p) => p.id === filters.durationPreset);
    chips.push({
      key: "duration",
      label: preset?.label ?? "Duration",
      clear: () => setFilters((f) => ({ ...f, durationPreset: null })),
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
