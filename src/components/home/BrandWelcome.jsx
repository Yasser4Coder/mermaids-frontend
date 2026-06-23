import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../../data/products";
import { formatPriceAmount } from "../../lib/formatPrice";
import { SectionIntro } from "../ui/SectionIntro";

const SHOWCASE = PRODUCTS.slice(0, 6);

export function BrandWelcome() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(1 / SHOWCASE.length);

  const updateProgress = useCallback((swiper) => {
    setProgress((swiper.realIndex + 1) / SHOWCASE.length);
  }, []);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="welcome-showcase" id="welcome" aria-labelledby="welcome-showcase-heading">
      <div className="wrap welcome-showcase__wrap">
        <SectionIntro
          badge="Mermaids beauty welcomes you"
          title="Mermaids beauty"
          titleId="welcome-showcase-heading"
          lede="From hair to glowing skin and spa luxury, we are your destination for beauty and radiance. Discover Mamirka favourites — salon-finish formulas for your home ritual."
        />

        <div className="welcome-showcase__slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            speed={650}
            loop
            breakpoints={{
              640: { slidesPerView: 1.15, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 22 },
              1100: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateProgress(swiper);
            }}
            onSlideChange={updateProgress}
            className="welcome-showcase__swiper"
          >
            {SHOWCASE.map((product) => (
              <SwiperSlide key={product.id}>
                <article className="welcome-showcase__card">
                  <Link
                    to={`/shop/${product.slug}`}
                    className="welcome-showcase__media"
                    aria-label={`View ${product.name}`}
                  >
                    <img src={product.image} alt="" loading="lazy" decoding="async" />
                  </Link>

                  <div className="welcome-showcase__body">
                    <p className="welcome-showcase__label">{product.categoryLabel}</p>
                    <h3 className="welcome-showcase__name">
                      <Link to={`/shop/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <p className="welcome-showcase__text">{product.description}</p>

                    <div className="welcome-showcase__foot">
                      <p className="welcome-showcase__price">
                        {formatPriceAmount(product.price)} <abbr title="Algerian dinar">DZD</abbr>
                      </p>
                      <Link to={`/shop/${product.slug}`} className="welcome-showcase__cta">
                        <span className="welcome-showcase__cta-label">Explore our world</span>
                        <span className="welcome-showcase__cta-arrow" aria-hidden="true">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="welcome-showcase__controls">
            <div
              className="welcome-showcase__progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              aria-label="Welcome showcase progress"
            >
              <span
                className="welcome-showcase__progress-fill"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>

            <div className="welcome-showcase__nav">
              <button
                type="button"
                className="welcome-showcase__arrow welcome-showcase__arrow--prev"
                aria-label="Previous product"
                onClick={goPrev}
              >
                <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="welcome-showcase__arrow welcome-showcase__arrow--next"
                aria-label="Next product"
                onClick={goNext}
              >
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
