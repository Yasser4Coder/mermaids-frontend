import { Reveal } from "../ui/Reveal";

export function ServiceCategory({ category }) {
  return (
    <Reveal as="article" id={category.id} className="scroll-mt-28 border-b border-gold/10 py-12 last:border-0">
      <header className="mb-8">
        <h2 className="font-serif text-2xl text-ink md:text-3xl">{category.title}</h2>
        {category.description && <p className="mt-2 max-w-2xl text-muted">{category.description}</p>}
      </header>
      <div className="space-y-8">
        {category.subsections?.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">{section.title}</h3>
            <ul className="divide-y divide-gold/10 rounded-2xl border border-gold/15 bg-white/60">
              {section.items.map((item) => (
                <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-3 px-4 py-3 sm:px-5">
                  <span className="text-ink-soft">{item.name}</span>
                  <span className="shrink-0 font-medium text-ink">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
