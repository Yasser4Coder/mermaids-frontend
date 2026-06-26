import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import TestimonialSlider from '@/components/ui/TestimonialSlider'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="What Our Clients Says"
          titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
        />
        <div className="mt-14">
          <TestimonialSlider items={testimonials} />
        </div>
      </Container>
    </section>
  )
}
