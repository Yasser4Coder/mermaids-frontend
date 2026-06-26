import categoryBeautyCenter from '@/assets/CategoryBeautyCenter.png'
import gallery1 from '@/assets/gallery1.png'
import gallery2 from '@/assets/gallery2.png'
import gallery3 from '@/assets/gallery3.png'
import promotionsImg1 from '@/assets/promotionsImg1.png'
import whyUs from '@/assets/whyUs.png'

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?w=500&q=80`

export const magasinPageData = {
  announcement: 'Livraison gratuite pour les commandes de plus de 5000 DA',
  hero: {
    image: categoryBeautyCenter,
    title: 'Notre Magasin',
    breadcrumb: 'Magasin',
  },
  sortOptions: [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A–Z' },
  ],
  filterGroups: {
    categories: [
      { id: 'all', label: 'All Products' },
      { id: 'skincare', label: 'Skincare' },
      { id: 'makeup', label: 'Makeup' },
      { id: 'hair', label: 'Hair Care' },
      { id: 'nails', label: 'Nails' },
      { id: 'body', label: 'Body Care' },
      { id: 'tools', label: 'Tools & Accessories' },
    ],
    collections: [
      { id: 'best-sellers', label: 'Best Sellers' },
      { id: 'new-in', label: 'New In' },
      { id: 'essentials', label: 'Essentials' },
      { id: 'mermaid', label: 'Mermaid Collection' },
      { id: 'clinic-care', label: 'Clinic Care' },
    ],
    materials: [
      { id: 'natural', label: 'Natural' },
      { id: 'professional', label: 'Professional Grade' },
      { id: 'kerastase', label: 'Kérastase' },
      { id: 'imported', label: 'Imported' },
      { id: 'organic', label: 'Organic' },
    ],
    colors: [
      { id: 'nude', label: 'Nude', hex: '#E8C4B8' },
      { id: 'rose', label: 'Rose', hex: '#D4838F' },
      { id: 'gold', label: 'Gold', hex: '#C9A227' },
      { id: 'pearl', label: 'Pearl', hex: '#F5F0EB' },
    ],
  },
  priceRange: { min: 0, max: 15000 },
  infoBlocks: [
    {
      title: 'Our Materials',
      description: 'Premium ingredients for long-lasting beauty and wellness.',
      link: { label: 'Learn More', href: '/about' },
      image: gallery1,
    },
    {
      title: 'Join Our Community',
      description: 'Follow us for exclusive drops, tips, and special offers.',
      link: { label: '@mermaids', href: 'https://instagram.com' },
      image: gallery2,
    },
    {
      title: 'Need Help?',
      description: "We're here for you. Contact us anytime.",
      link: { label: 'Contact Us', href: '/contact' },
      image: gallery3,
    },
  ],
  newsletter: {
    title: 'Join the List',
    subtitle: 'Be the first to know about new arrivals and special offers.',
  },
}

export const shopProducts = [
  {
    id: 1,
    title: 'Rose Glow Serum',
    price: 4500,
    priceLabel: '4500 DA',
    image: img('1522335789203-aabd1fc54bc9'),
    category: 'skincare',
    collections: ['best-sellers', 'essentials'],
    material: 'natural',
    colors: ['rose', 'pearl'],
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Velvet Lip Tint',
    price: 2800,
    priceLabel: '2800 DA',
    image: img('1596462502279-455bf7ebd340'),
    category: 'makeup',
    collections: ['new-in', 'mermaid'],
    material: 'imported',
    colors: ['rose', 'nude'],
  },
  {
    id: 3,
    title: 'Pearl Face Mask',
    price: 3500,
    priceLabel: '3500 DA',
    image: img('1570172619644-dfd071f2d2a0'),
    category: 'skincare',
    collections: ['best-sellers', 'clinic-care'],
    material: 'organic',
    colors: ['pearl'],
    badge: 'Best Seller',
  },
  {
    id: 4,
    title: 'Silk Hair Oil',
    price: 5200,
    priceLabel: '5200 DA',
    image: img('1527796830451-8080c9e4e1ba'),
    category: 'hair',
    collections: ['best-sellers', 'essentials'],
    material: 'kerastase',
    colors: ['gold', 'pearl'],
  },
  {
    id: 5,
    title: 'Crystal Nail Set',
    price: 2000,
    priceLabel: '2000 DA',
    image: gallery2,
    category: 'nails',
    collections: ['new-in'],
    material: 'professional',
    colors: ['nude', 'rose', 'gold'],
  },
  {
    id: 6,
    title: 'Luminous Primer',
    price: 3800,
    priceLabel: '3800 DA',
    image: img('1512496015851-a90fb38db796'),
    category: 'makeup',
    collections: ['essentials', 'mermaid'],
    material: 'imported',
    colors: ['pearl', 'nude'],
  },
  {
    id: 7,
    title: 'Botanical Toner',
    price: 3200,
    priceLabel: '3200 DA',
    image: img('1556228720-195a672e8a03'),
    category: 'skincare',
    collections: ['essentials', 'clinic-care'],
    material: 'organic',
    colors: ['pearl'],
  },
  {
    id: 8,
    title: 'Gold Eye Cream',
    price: 6500,
    priceLabel: '6500 DA',
    image: img('1620916568500-2caa8296a5e9'),
    category: 'skincare',
    collections: ['best-sellers', 'clinic-care'],
    material: 'professional',
    colors: ['gold', 'pearl'],
    badge: 'Best Seller',
  },
  {
    id: 9,
    title: 'Hydrating Mist',
    price: 2400,
    priceLabel: '2400 DA',
    image: img('1608248548088-60f7ce542a2a'),
    category: 'skincare',
    collections: ['new-in', 'essentials'],
    material: 'natural',
    colors: ['pearl'],
  },
  {
    id: 10,
    title: 'Luxury Brush Set',
    price: 8900,
    priceLabel: '8900 DA',
    image: img('1519699042108-7be30ef060bd'),
    category: 'tools',
    collections: ['best-sellers', 'mermaid'],
    material: 'professional',
    colors: ['gold', 'rose', 'nude'],
  },
  {
    id: 11,
    title: 'Nashi Repair Mask',
    price: 9800,
    priceLabel: '9800 DA',
    image: img('1522337360788-8a13f7a37a49'),
    category: 'hair',
    collections: ['clinic-care'],
    material: 'kerastase',
    colors: ['pearl', 'gold'],
  },
  {
    id: 12,
    title: 'Mermaid Body Oil',
    price: 4200,
    priceLabel: '4200 DA',
    image: img('1544161515-4ab6ce6db874'),
    category: 'body',
    collections: ['mermaid', 'new-in'],
    material: 'natural',
    colors: ['gold', 'rose'],
    badge: 'New In',
  },
  {
    id: 13,
    title: 'Gel Polish Trio',
    price: 3600,
    priceLabel: '3600 DA',
    image: gallery2,
    category: 'nails',
    collections: ['essentials'],
    material: 'professional',
    colors: ['nude', 'rose', 'gold'],
  },
  {
    id: 14,
    title: 'SPF Day Cream',
    price: 4800,
    priceLabel: '4800 DA',
    image: img('1570194065592-3ffb43a3f9a0'),
    category: 'skincare',
    collections: ['clinic-care', 'essentials'],
    material: 'professional',
    colors: ['pearl'],
  },
  {
    id: 15,
    title: 'Bridal Glow Kit',
    price: 12500,
    priceLabel: '12500 DA',
    image: promotionsImg1,
    category: 'makeup',
    collections: ['best-sellers', 'mermaid'],
    material: 'imported',
    colors: ['rose', 'gold', 'pearl'],
    badge: 'Best Seller',
  },
  {
    id: 16,
    title: 'Scalp Treatment Oil',
    price: 5500,
    priceLabel: '5500 DA',
    image: img('1527796830451-8080c9e4e1ba'),
    category: 'hair',
    collections: ['clinic-care'],
    material: 'kerastase',
    colors: ['gold'],
  },
  {
    id: 17,
    title: 'Paraffin Hand Care',
    price: 2900,
    priceLabel: '2900 DA',
    image: whyUs,
    category: 'body',
    collections: ['essentials'],
    material: 'natural',
    colors: ['pearl', 'nude'],
  },
  {
    id: 18,
    title: 'Professional Curl Wand',
    price: 7200,
    priceLabel: '7200 DA',
    image: gallery3,
    category: 'tools',
    collections: ['new-in'],
    material: 'professional',
    colors: ['gold', 'rose'],
  },
]

const categoryLabels = {
  skincare: 'Skincare',
  makeup: 'Makeup',
  hair: 'Hair Care',
  nails: 'Nails',
  body: 'Body Care',
  tools: 'Tools & Accessories',
}

const materialLabels = {
  natural: 'Natural',
  professional: 'Professional Grade',
  kerastase: 'Kérastase',
  imported: 'Imported',
  organic: 'Organic',
}

const defaultHighlights = [
  'Premium quality ingredients',
  'Curated by Mermaids experts',
  'Suitable for daily beauty rituals',
]

const productDetails = {
  1: {
    description:
      'A lightweight serum that restores radiance with rose extract and pearl peptides. Leaves skin luminous, hydrated, and visibly renewed.',
    highlights: ['Rose extract & pearl peptides', 'Boosts natural glow', 'Lightweight daily formula'],
    howToUse: 'Apply 2–3 drops to cleansed skin morning and evening. Gently press into face and neck.',
    ingredients: 'Rose extract, hyaluronic acid, pearl peptides, vitamin E, botanical oils.',
    volume: '30 ml',
  },
  15: {
    description:
      'A complete bridal beauty kit with everything needed for a flawless wedding-day glow — curated for special occasions.',
    highlights: ['Full bridal essentials', 'Long-lasting finish', 'Premium imported formulas'],
    howToUse: 'Follow the included guide for step-by-step application on your special day.',
    ingredients: 'Professional-grade pigments, hydrating bases, setting mist, and luminizing primer.',
    volume: 'Kit',
  },
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function enrichProduct(product) {
  const extras = productDetails[product.id] ?? {}
  return {
    ...product,
    slug: slugify(product.title),
    categoryLabel: categoryLabels[product.category] ?? product.category,
    materialLabel: materialLabels[product.material] ?? product.material,
    description:
      extras.description ??
      `Discover ${product.title} — a refined ${categoryLabels[product.category]?.toLowerCase() ?? 'beauty'} essential, selected by the Mermaids team for exceptional results.`,
    highlights: extras.highlights ?? defaultHighlights,
    howToUse:
      extras.howToUse ??
      'Apply as directed to clean skin or hair. Use consistently for best results. For external use only.',
    ingredients:
      extras.ingredients ??
      'Premium formulation with carefully selected active ingredients and clean beauty standards.',
    volume: extras.volume ?? 'Standard size',
  }
}

export function getProductById(id) {
  const product = shopProducts.find((item) => item.id === Number(id))
  return product ? enrichProduct(product) : null
}

export function getRelatedProducts(product, limit = 4) {
  return shopProducts
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, limit)
    .map(enrichProduct)
}
