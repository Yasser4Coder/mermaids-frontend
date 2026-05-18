import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ServiceCategory } from "../components/services/ServiceCategory";
import { PageHero } from "../components/ui/PageHero";
import { Wrap } from "../components/ui/Wrap";
import servicesMenu from "../data/servicesMenu.json";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";
import { cn } from "../lib/cn";

export function ServicesPage() {
  usePageInner("page-services-menu");
  useDocumentTitle("Services");
  const location = useLocation();
  const [activeId, setActiveId] = useState(servicesMenu[0]?.id ?? "");

  const categories = useMemo(() => servicesMenu, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setActiveId(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash, categories]);

  return (
    <>
      <PageHero
        compact
        eyebrow="Services"
        title="Full salon & spa menu"
        lede="Transparent pricing in DZD — browse by category or jump straight to what you need."
        cta={{ label: "Book a visit", to: "/book" }}
      />
      <div className="sticky top-[88px] z-20 border-b border-gold/15 bg-pink-50/95 backdrop-blur-md">
        <Wrap className="flex gap-2 overflow-x-auto py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveId(cat.id);
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                activeId === cat.id ? "bg-gold text-white" : "bg-white text-ink-soft hover:bg-gold-soft hover:text-ink"
              )}
            >
              {cat.title.split("—")[0].trim()}
            </button>
          ))}
        </Wrap>
      </div>
      <Wrap className="py-8 md:py-12">
        {categories.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}
      </Wrap>
    </>
  );
}
