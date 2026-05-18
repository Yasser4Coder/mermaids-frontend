import { useMemo, useState } from "react";
import { ProductCard } from "../components/shop/ProductCard";
import { PageHero } from "../components/ui/PageHero";
import { Wrap } from "../components/ui/Wrap";
import { PRODUCTS } from "../data/products";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";
import { cn } from "../lib/cn";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair" },
  { id: "skin", label: "Skin" },
  { id: "nails", label: "Nails" },
];

export function MarketplacePage() {
  usePageInner();
  useDocumentTitle("Shop");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const products = useMemo(() => {
    let list = [...PRODUCTS].sort((a, b) => a.order - b.order);
    if (filter !== "all") list = list.filter((p) => p.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.search.includes(q) || p.name.toLowerCase().includes(q));
    }
    return list;
  }, [filter, query]);

  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Mamirka Cosmétiques"
        lede="Salon-finish formulas for home — same products we use after your visit."
        cta={{ label: "View cart", to: "/checkout" }}
      />
      <Wrap className="pb-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  filter === f.id ? "bg-gold text-white" : "bg-pink-100 text-ink-soft hover:bg-gold-soft"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="relative w-full sm:max-w-xs">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search boutique…"
              className="w-full rounded-full border border-gold/20 bg-white px-5 py-2.5 text-sm outline-none focus:border-gold"
            />
          </label>
        </div>
        {products.length === 0 ? (
          <p className="text-center text-muted">No products match your filters.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} marketplace />
            ))}
          </div>
        )}
      </Wrap>
    </>
  );
}
