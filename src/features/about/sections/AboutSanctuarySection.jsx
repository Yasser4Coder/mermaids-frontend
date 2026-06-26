import { Link } from 'react-router-dom'
import sanctuaryImage from '@/assets/gallery1.png'

export default function AboutSanctuarySection() {
  return (
    <section className="grid lg:grid-cols-[40%_1fr]">
      <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[36rem]">
        <img
          src={sanctuaryImage}
          alt="Mermaids sanctuary"
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center bg-black/60 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <h2 className="font-garamond text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          A Sanctuary For You
        </h2>

        <p className="mt-8 max-w-xl font-garamond text-base leading-loose text-white sm:text-lg">
          From the moment you arrive, every sense is considered — soft lighting,
          calming aromas, and an atmosphere of quiet luxury that sets the stage
          for your journey.
        </p>

        <p className="mt-6 max-w-xl font-garamond text-base leading-loose text-white sm:text-lg">
          Our team of certified professionals brings passion and precision to
          every treatment. We use only premium, ethically sourced products and
          maintain the highest standards of care, so you can relax knowing you
          are in expert hands.
        </p>

        <p className="mt-6 max-w-xl font-garamond text-base leading-loose text-white sm:text-lg">
          Mermaids is more than a beauty destination — it is a place where you
          are seen, celebrated, and transformed.
        </p>

        <div className="mt-10">
          <Link
            to="/book"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white px-8 py-3 font-garamond text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black sm:text-base"
          >
            Book Your Session
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
