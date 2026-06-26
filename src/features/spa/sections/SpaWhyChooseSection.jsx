function WhyChooseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 shrink-0 text-white/80"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

export default function SpaWhyChooseSection({ data }) {
  return (
    <section className="grid lg:grid-cols-[40%_1fr]">
      <div className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[36rem]">
        <img
          src={data.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center bg-black/60 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <h2 className="font-garamond text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {data.title}
        </h2>
        <p className="mt-6 max-w-xl font-garamond text-base leading-loose text-white/85 sm:text-lg">
          {data.description}
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3 font-garamond">
              <WhyChooseIcon />
              <span className="text-sm leading-relaxed text-white sm:text-base">{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
