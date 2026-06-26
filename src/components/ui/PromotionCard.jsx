import { Link } from 'react-router-dom'

export default function PromotionCard({ image, label, titleLines, href = '#' }) {
  return (
    <Link to={href} className="group block">
      <div className="relative pr-10 pb-10 sm:pr-14 sm:pb-14">
        <img
          src={image}
          alt={titleLines.join(' ')}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />

        <div className="absolute right-0 bottom-0 z-10 flex aspect-square w-[52%] min-w-[9rem] flex-col items-center justify-center bg-cream px-4 py-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:min-w-[11rem] sm:px-6 sm:py-8">
          <p className="font-garamond text-[10px] font-medium uppercase tracking-[0.25em] text-black/60 sm:text-xs">
            {label}
          </p>
          <h3 className="mt-3 font-garamond text-2xl leading-tight text-black/60 sm:mt-4 sm:text-3xl lg:text-4xl">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </Link>
  )
}
