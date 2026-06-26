export default function SectionNavTabs({ tabs, activeId, onSelect }) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 sm:gap-4" aria-label="Service categories">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onSelect(tab.id)}
          className={`cursor-pointer border px-5 py-2.5 font-garamond text-sm uppercase tracking-[0.12em] transition-colors sm:px-6 sm:text-base ${
            activeId === tab.id
              ? 'border-ink bg-ink text-cream'
              : 'border-cream-dark bg-white text-ink hover:border-ink'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
