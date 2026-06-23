import { useState } from "react";
import {
  BENEFITS,
  CATEGORIES,
  COLLECTIONS,
  MAX_PRICE,
  MIN_PRICE,
  PRICE_PRESETS,
  RATINGS,
  countByBenefit,
  countByCategory,
  countByCollection,
  countByRating,
} from "../../data/shopFilters";

function FilterSection({ id, title, summary, open, onToggle, children }) {
  return (
    <div className={`shop-filters__section${open ? " is-open" : ""}`}>
      <button type="button" className="shop-filters__section-toggle" onClick={() => onToggle(id)} aria-expanded={open}>
        <span className="shop-filters__section-head">
          <span className="shop-filters__section-title">{title}</span>
          {!open && summary ? <span className="shop-filters__section-summary">{summary}</span> : null}
        </span>
        <i className={`fa-solid ${open ? "fa-minus" : "fa-plus"}`} aria-hidden="true" />
      </button>
      {open ? <div className="shop-filters__section-body">{children}</div> : null}
    </div>
  );
}

function CheckboxList({ items, selected, onToggle }) {
  return (
    <ul className="shop-filters__list">
      {items.map((item) => (
        <li key={item.id}>
          <label className={`shop-filters__check${selected.includes(item.id) ? " is-active" : ""}`}>
            <input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} />
            <span className="shop-filters__check-box" aria-hidden="true" />
            <span className="shop-filters__check-label">{item.label}</span>
            {item.count != null ? <span className="shop-filters__count">{item.count}</span> : null}
          </label>
        </li>
      ))}
    </ul>
  );
}

export function ShopFiltersPanel({
  filters,
  setFilters,
  products,
  activeCount,
  resultCount,
  onClear,
  onClose,
  showMobileFooter = false,
}) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: false,
    benefit: false,
    collection: false,
    rating: false,
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleInArray = (key, id) => {
    setFilters((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(id) ? arr.filter((v) => v !== id) : [...arr, id],
      };
    });
  };

  const setPricePreset = (preset) => {
    if (filters.pricePreset === preset.id) {
      setFilters((f) => ({ ...f, priceMin: MIN_PRICE, priceMax: MAX_PRICE, pricePreset: null }));
      return;
    }
    setFilters((f) => ({
      ...f,
      priceMin: preset.min,
      priceMax: preset.max,
      pricePreset: preset.id,
    }));
  };

  const categorySummary =
    filters.categories.length === 0
      ? "All"
      : filters.categories
          .map((id) => CATEGORIES.find((c) => c.id === id)?.label)
          .filter(Boolean)
          .join(", ");

  const priceSummary =
    filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE
      ? `${filters.priceMin.toLocaleString("fr-DZ")} – ${filters.priceMax.toLocaleString("fr-DZ")} DZD`
      : "Any price";

  return (
    <>
      <div className="shop-filters__head">
        <div className="shop-filters__head-copy">
          <h2 className="shop-filters__title">Filters</h2>
          {activeCount > 0 ? <span className="shop-filters__active-pill">{activeCount} active</span> : null}
        </div>
        <button type="button" className="shop-filters__clear" onClick={onClear} disabled={activeCount === 0}>
          Clear all
        </button>
        <button type="button" className="shop-filters__close" aria-label="Close filters" onClick={onClose}>
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </div>

      <div className="shop-filters__search-wrap">
        <i className="fa-solid fa-magnifying-glass shop-filters__search-icon" aria-hidden="true" />
        <input
          type="search"
          className="shop-filters__search"
          value={filters.query}
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
          placeholder="Search by name or benefit…"
          aria-label="Search products"
        />
        {filters.query ? (
          <button
            type="button"
            className="shop-filters__search-clear"
            aria-label="Clear search"
            onClick={() => setFilters((f) => ({ ...f, query: "" }))}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <FilterSection
        id="category"
        title="Category"
        summary={categorySummary}
        open={openSections.category}
        onToggle={toggleSection}
      >
        <CheckboxList
          items={CATEGORIES.map((cat) => ({
            id: cat.id,
            label: cat.label,
            count: countByCategory(products, cat.id),
          }))}
          selected={filters.categories}
          onToggle={(id) => toggleInArray("categories", id)}
        />
      </FilterSection>

      <FilterSection id="price" title="Price" summary={priceSummary} open={openSections.price} onToggle={toggleSection}>
        <div className="shop-filters__chips">
          {PRICE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`shop-filters__chip${filters.pricePreset === preset.id ? " is-active" : ""}`}
              onClick={() => setPricePreset(preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="shop-filters__price">
          <div className="shop-filters__price-inputs">
            <label className="shop-filters__price-field">
              <span>Min</span>
              <input
                type="number"
                min={MIN_PRICE}
                max={filters.priceMax}
                step={500}
                value={filters.priceMin}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    priceMin: Math.min(Number(e.target.value) || MIN_PRICE, f.priceMax),
                    pricePreset: null,
                  }))
                }
              />
            </label>
            <label className="shop-filters__price-field">
              <span>Max</span>
              <input
                type="number"
                min={filters.priceMin}
                max={MAX_PRICE}
                step={500}
                value={filters.priceMax}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    priceMax: Math.max(Number(e.target.value) || MAX_PRICE, f.priceMin),
                    pricePreset: null,
                  }))
                }
              />
            </label>
          </div>
          <input
            type="range"
            className="shop-filters__range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={500}
            value={filters.priceMax}
            onChange={(e) =>
              setFilters((f) => ({
                ...f,
                priceMax: Number(e.target.value),
                pricePreset: null,
              }))
            }
            aria-label="Maximum price"
          />
          <p className="shop-filters__price-hint">
            Showing products between {filters.priceMin.toLocaleString("fr-DZ")} and{" "}
            {filters.priceMax.toLocaleString("fr-DZ")} DZD
          </p>
        </div>
      </FilterSection>

      <FilterSection
        id="benefit"
        title="Benefit"
        summary={filters.benefits.length ? `${filters.benefits.length} selected` : "All benefits"}
        open={openSections.benefit}
        onToggle={toggleSection}
      >
        <CheckboxList
          items={BENEFITS.map((benefit) => ({
            id: benefit.id,
            label: benefit.label,
            count: countByBenefit(products, benefit),
          })).filter((item) => item.count > 0)}
          selected={filters.benefits}
          onToggle={(id) => toggleInArray("benefits", id)}
        />
      </FilterSection>

      <FilterSection
        id="collection"
        title="Collection"
        summary={filters.collections.length ? `${filters.collections.length} selected` : "All collections"}
        open={openSections.collection}
        onToggle={toggleSection}
      >
        <CheckboxList
          items={COLLECTIONS.map((col) => ({
            id: col.badgeType,
            label: col.label,
            count: countByCollection(products, col.badgeType),
          })).filter((item) => item.count > 0)}
          selected={filters.collections}
          onToggle={(id) => toggleInArray("collections", id)}
        />
      </FilterSection>

      <FilterSection
        id="rating"
        title="Rating"
        summary={filters.ratingMin != null ? `${filters.ratingMin}+ stars` : "Any rating"}
        open={openSections.rating}
        onToggle={toggleSection}
      >
        <ul className="shop-filters__list shop-filters__list--radio">
          <li>
            <label className={`shop-filters__radio${filters.ratingMin == null ? " is-active" : ""}`}>
              <input
                type="radio"
                name="shop-rating"
                checked={filters.ratingMin == null}
                onChange={() => setFilters((f) => ({ ...f, ratingMin: null }))}
              />
              <span>Any rating</span>
            </label>
          </li>
          {RATINGS.map((rating) => (
            <li key={rating.id}>
              <label className={`shop-filters__radio${filters.ratingMin === rating.min ? " is-active" : ""}`}>
                <input
                  type="radio"
                  name="shop-rating"
                  checked={filters.ratingMin === rating.min}
                  onChange={() => setFilters((f) => ({ ...f, ratingMin: rating.min }))}
                />
                <span>{rating.label}</span>
                <span className="shop-filters__count">{countByRating(products, rating.min)}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      {showMobileFooter ? (
        <footer className="shop-filters__mobile-foot">
          <button type="button" className="shop-filters__apply" onClick={onClose}>
            Show {resultCount} {resultCount === 1 ? "product" : "products"}
          </button>
        </footer>
      ) : null}
    </>
  );
}
