import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import LinkText from '@/components/common/LinkText'

export default function MagasinInfoBlocks({ blocks }) {
  return (
    <section className="border-t border-cream-dark bg-cream-box py-16 lg:py-20">
      <Container size="lg">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {blocks.map((block) => (
            <article key={block.title} className="font-garamond">
              <div className="overflow-hidden">
                <img
                  src={block.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-wide text-ink sm:text-2xl">
                {block.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-charcoal">{block.description}</p>
              <div className="mt-4">
                {block.link.href.startsWith('http') ? (
                  <a
                    href={block.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-70"
                  >
                    <span className="border-b border-current pb-0.5">{block.link.label}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <LinkText href={block.link.href} size="sm">
                    {block.link.label}
                  </LinkText>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
