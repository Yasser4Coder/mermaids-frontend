import Container from '@/components/common/Container'
import CategoryRow from '@/components/ui/CategoryRow'
import { categories } from '@/data/categories'

export default function CategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-24 py-16 lg:py-24">
      <Container className="space-y-20 lg:space-y-28">
        {categories.map((category) => (
          <CategoryRow
            key={category.id}
            title={category.title}
            description={category.description}
            image={category.image}
            href={category.href}
          />
        ))}
      </Container>
    </section>
  )
}
