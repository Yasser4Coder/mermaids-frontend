import { shopProducts } from '@/data/magasin'

export const products = shopProducts.slice(0, 10).map((p) => ({
  id: p.id,
  title: p.title,
  price: p.priceLabel,
  image: p.image,
}))
