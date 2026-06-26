export default function WireframePlaceholder({ label = 'Image', className = '' }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-charcoal/20 bg-cream-box ${className}`}
      aria-hidden="true"
    >
      <span className="font-garamond text-xs uppercase tracking-[0.2em] text-charcoal/40">{label}</span>
    </div>
  )
}
