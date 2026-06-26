import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function StoreGridSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          title="Our Magasin"
          subtitle="Premium beauty products handpicked for your daily ritual of self-care."
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          subtitleClassName="font-garamond text-base sm:text-lg"
        />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/magasin">Discover More</Button>
        </div>
      </Container>
    </section>
  )
}
