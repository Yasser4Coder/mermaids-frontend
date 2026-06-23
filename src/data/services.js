import servicesMenu from "./servicesMenu.json";
import { SERVICE_CHIPS } from "./navLinks";

export const CATEGORY_META = {
  salon: { label: "Salon", image: "/images/Hair_colour_service.png", icon: "fa-scissors" },
  "soin-visage": { label: "Visage", image: "/images/Skin_glow_service.png", icon: "fa-wand-magic-sparkles" },
  onglerie: { label: "Onglerie", image: "/images/Nails_service.png", icon: "fa-hand-sparkles" },
  "cils-sourcils": { label: "Cils & sourcils", image: "/images/Eyebrow-shaping-and-tinting.png", icon: "fa-eye" },
  epilation: { label: "Épilation", image: "/images/Hair-removal.png", icon: "fa-feather" },
  maquillage: { label: "Maquillage", image: "/images/Makeup-artist.jpg", icon: "fa-palette" },
  "salon-enfants": { label: "Enfants", image: "/images/Haircut-and-styling.png", icon: "fa-child" },
  hammam: { label: "Hammam", image: "/images/Hammam_spa_service.png", icon: "fa-hot-tub-person" },
  aquatique: { label: "Aquatique", image: "/images/Relaxation_treatments_spa.png", icon: "fa-water" },
  sport: { label: "Sport", image: "/images/Massage_spa.png", icon: "fa-dumbbell" },
  massages: { label: "Massages", image: "/images/Massage_spa.png", icon: "fa-spa" },
};

const FEATURED_NAMES = /balayage|mermaid|hydrafacial|hammam royal|gel naturel|signature|coupe|brushing long|anti-age|massage/i;

export function parseServicePrice(priceStr) {
  const numbers = priceStr.replace(/[^\d]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (!numbers.length) return 0;
  return parseInt(numbers[0], 10);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getServiceSlug(categoryId, itemName) {
  return `${categoryId}-${slugify(itemName)}`;
}

export function getServiceBookUrl(categoryId, itemName) {
  return `/book?service=${encodeURIComponent(getServiceSlug(categoryId, itemName))}`;
}

export function decodeServiceText(text) {
  if (!text) return "";
  return text.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
}

function estimateDuration(categoryId, name, subsection) {
  const text = `${name} ${subsection ?? ""}`.toLowerCase();
  if (/balayage|mèches|lissage|brésilien|nashi|plastica|mariée|royal/i.test(text)) return 150;
  if (/coloration|soin rp|soin indien|extension|maquillage/i.test(text)) return 120;
  if (/facial|hydra|hammam|massage|aquatique|sport/i.test(text)) return 75;
  if (/manucure|gel|coupe|brushing|épilation/i.test(text)) return 60;
  if (/rinçage|brushing court|sourcil|cils/i.test(text)) return 45;
  if (categoryId === "hammam" || categoryId === "massages") return 90;
  if (categoryId === "onglerie") return 50;
  return 60;
}

function isFeatured(name, categoryId) {
  if (FEATURED_NAMES.test(name)) return true;
  return ["salon", "soin-visage", "hammam", "onglerie"].includes(categoryId) && /à partir/i.test(name);
}

function flattenServices() {
  const services = [];
  let order = 1;

  for (const category of servicesMenu) {
    const meta = CATEGORY_META[category.id] ?? { label: category.title.split("—")[0].trim(), image: "/images/Spa-treatments.png" };

    for (const subsection of category.subsections) {
      for (const item of subsection.items) {
        const baseSlug = slugify(item.name);
        const slug = `${category.id}-${baseSlug}`;
        const featured = isFeatured(item.name, category.id);

        services.push({
          id: slug,
          slug,
          name: item.name,
          categoryId: category.id,
          categoryLabel: meta.label,
          subsection: subsection.title,
          price: parseServicePrice(item.price),
          priceDisplay: item.price,
          durationMin: estimateDuration(category.id, item.name, subsection.title),
          image: meta.image,
          description: category.description,
          search: `${item.name} ${category.title} ${subsection.title ?? ""} ${meta.label}`.toLowerCase(),
          featured,
          badge: featured ? "Popular" : null,
          badgeType: featured ? "hit" : null,
          order,
        });
        order += 1;
      }
    }
  }

  return services;
}

export const SERVICES = flattenServices();

export const BOOKABLE_SERVICES = SERVICES;

export const SERVICE_CATEGORIES = SERVICE_CHIPS.map((chip) => ({
  id: chip.id,
  label: chip.label,
}));

export const HERO_SERVICE_CATEGORIES = SERVICE_CATEGORIES.filter((c) =>
  ["salon", "soin-visage", "onglerie", "hammam", "massages", "epilation"].includes(c.id)
);

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function formatDuration(minutes) {
  if (minutes >= 120) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m ? `${h}h ${m} min` : `${h}h`;
  }
  return `${minutes} min`;
}
