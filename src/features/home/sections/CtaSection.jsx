import { Link } from 'react-router-dom'
import ctaBg from '@/assets/cta.png'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt="Book your session"
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex min-h-[420px] items-center px-6 py-20 sm:min-h-[500px] sm:px-12 lg:min-h-[560px] lg:px-20 xl:px-28">
        <div className="max-w-xl">
          <h2 className="font-garamond text-4xl leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Book FOR Your Session
            <span className="mt-1 block">Now</span>
          </h2>

          <Link
            to="/book"
            className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black sm:text-base"
          >
            Book Now
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
