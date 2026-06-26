import Container from '@/components/common/Container'

export default function SectionNavLinks({ tabs, onSelect }) {
  return (
    <nav
      className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-garamond"
      aria-label="Service categories"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onSelect(tab.id)}
          className="group cursor-pointer text-sm uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-ink sm:text-base"
        >
          <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-current">
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
