import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { PROMO_SLIDES } from "../../data/promoSlides";

export function PromoSpotlight() {
  return (
    <section
      className="hero-ads promo-spotlight"
      id="promos"
      aria-roledescription="carousel"
      aria-label="Featured salon promotions"
    >
      <h2 className="sr-only">Featured promotions</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="hero-ads__swiper swiper promo-ads-swiper"
        wrapperClass="swiper-wrapper"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: ".hero-ads__nav--prev",
          nextEl: ".hero-ads__nav--next",
        }}
        pagination={{ el: ".hero-ads__pagination", clickable: true }}
      >
        {PROMO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="hero-ads__slide">
            <img
              className="hero-ads__bg hero-ads__bg--desktop"
              src={slide.image}
              alt=""
              width={1920}
              height={1080}
              loading={slide.eager ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={slide.eager ? "high" : undefined}
              style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
            />
            <img
              className="hero-ads__bg hero-ads__bg--mobile"
              src={slide.imageMobile ?? slide.image}
              alt=""
              width={1080}
              height={1920}
              loading={slide.eager ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={slide.eager ? "high" : undefined}
              style={{
                objectPosition: slide.imageMobilePosition ?? slide.imagePosition ?? "center center",
              }}
            />
            <div className="hero-ads__veil" aria-hidden="true" />
            <div className="hero-ads__grain" aria-hidden="true" />

            <div className="hero-ads__layout">
              <div className="hero-ads__headline-block">
                <h3 className="hero-ads__headline">
                  {slide.headline} <em>{slide.headlineEmphasis}</em>
                </h3>
                <Link className="hero-ads__cta-pill" to={slide.cta.to}>
                  {slide.cta.label}
                </Link>
              </div>

              <p className="hero-ads__rail">{slide.rail}</p>

              <p className="hero-ads__footer-copy">{slide.footerCopy}</p>

              <p className="hero-ads__brand" aria-hidden="true">
                Mermaids
              </p>
            </div>
          </SwiperSlide>
        ))}

        <button type="button" className="hero-ads__nav hero-ads__nav--prev" aria-label="Previous promotion">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <button type="button" className="hero-ads__nav hero-ads__nav--next" aria-label="Next promotion">
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
        <div className="swiper-pagination hero-ads__pagination" />
      </Swiper>
    </section>
  );
}
