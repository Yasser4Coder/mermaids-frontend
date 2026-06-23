import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { SALON_MENU_CARDS } from "../../data/salonMenuCards";
import { SectionIntro } from "../ui/SectionIntro";

export function FeaturedServicesGrid() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(1 / SALON_MENU_CARDS.length);

  const updateProgress = useCallback((swiper) => {
    const total = SALON_MENU_CARDS.length;
    setProgress((swiper.realIndex + 1) / total);
  }, []);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section
      className="brand-section brand-section--cream services-carousel"
      id="services-preview"
      aria-labelledby="featured-services-heading"
    >
      <div className="wrap services-carousel__wrap">
        <SectionIntro
          badge="Services"
          title="Curated salon experiences"
          titleId="featured-services-heading"
          lede="Hair, skin, nails and spa — each treatment is delivered with the calm precision Mermaids is known for."
          align="start"
        />

        <div className="services-carousel__slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            speed={650}
            loop
            breakpoints={{
              640: { slidesPerView: 1.08, spaceBetween: 20 },
              960: { slidesPerView: 2, spaceBetween: 24 },
              1400: { slidesPerView: 2, spaceBetween: 28 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateProgress(swiper);
            }}
            onSlideChange={updateProgress}
            className="services-carousel__swiper"
          >
            {SALON_MENU_CARDS.map((card) => (
              <SwiperSlide key={card.id}>
                <article className="services-carousel__card">
                  <Link to={card.to} className="services-carousel__media" tabIndex={-1} aria-hidden="true">
                    <img src={card.image} alt={card.alt} loading="lazy" decoding="async" />
                  </Link>

                  <div className="services-carousel__panel">
                    <p className="services-carousel__quote">{card.hint}</p>

                    <div className="services-carousel__meta">
                      <div className="services-carousel__meta-col">
                        <span className="services-carousel__meta-label">Service</span>
                        <span className="services-carousel__meta-value">{card.heading}</span>
                      </div>
                      <div className="services-carousel__meta-col">
                        <span className="services-carousel__meta-label">Signature</span>
                        <span className="services-carousel__meta-value">{card.items[0].name}</span>
                      </div>
                      <div className="services-carousel__meta-col">
                        <span className="services-carousel__meta-label">From</span>
                        <span className="services-carousel__meta-value">
                          {card.items[0].price} <abbr title="Algerian dinar">DZD</abbr>
                        </span>
                      </div>
                    </div>

                    <Link to={card.to} className="services-carousel__card-link">
                      View services
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="services-carousel__controls">
            <div
              className="services-carousel__progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              aria-label="Services carousel progress"
            >
              <span
                className="services-carousel__progress-fill"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>

            <div className="services-carousel__nav">
              <button
                type="button"
                className="services-carousel__arrow services-carousel__arrow--prev"
                aria-label="Previous service"
                onClick={goPrev}
              >
                <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="services-carousel__arrow services-carousel__arrow--next"
                aria-label="Next service"
                onClick={goNext}
              >
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <footer className="services-carousel__foot">
          <Link to="/services" className="welcome-showcase__cta services-carousel__cta">
            <span className="welcome-showcase__cta-label">View all services</span>
            <span className="welcome-showcase__cta-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
