import { useState } from 'react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-cream-dark">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-garamond"
      >
        <span className="text-lg font-semibold text-ink sm:text-xl">{question}</span>
        <span className="shrink-0 text-2xl text-charcoal" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="pb-5 font-garamond text-base leading-relaxed text-charcoal sm:text-lg">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FaqSection({ title = 'FAQ', items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 lg:py-24">
      <Container size="lg">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title={title}
            titleClassName="font-garamond text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
          />
          <div className="mt-12 border-t border-cream-dark">
            {items.map((item, i) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
