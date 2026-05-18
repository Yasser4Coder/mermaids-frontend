import { useRef } from "react";
import { useSectionRevealScrollTrigger } from "../../hooks/useSectionRevealScrollTrigger";

const STATS = [
  { ix: "01", num: "12", suffix: "k+", label: "Bookings completed with clear timing and prep reminders", count: true },
  { ix: "02", num: "4.9", suffix: "★", label: "Average rating across hair, skin, and nail experiences", text: true, starSuffix: true },
  { ix: "03", num: "Under 48h", suffix: "", label: "Typical reply when you message us between appointments", text: true },
  { ix: "04", num: "86", suffix: "%", label: "Clients who rebook within eight weeks", count: true },
];

export function TrustShowcase() {
  const sectionRef = useRef(null);

  useSectionRevealScrollTrigger(sectionRef, {
    targets: ".trust-showcase .section-reveal-item",
    stagger: 0.1,
    end: "top 38%",
  });

  return (
    <section ref={sectionRef} className="section trust-showcase home-section-reveal" id="trust">
      <div className="trust-showcase__ambient" aria-hidden="true">
        <span className="trust-showcase__orb trust-showcase__orb--a" />
        <span className="trust-showcase__orb trust-showcase__orb--b" />
        <span className="trust-showcase__orb trust-showcase__orb--c" />
        <div className="trust-showcase__gridfx" />
      </div>

      <div className="wrap trust-showcase__inner">
        <header className="trust-showcase__head">
          <div className="section-kicker section-reveal-item">
            <span className="section-kicker__pulse" aria-hidden="true" />
            <p className="eyebrow eyebrow--pill">About us</p>
          </div>
          <h2 className="heading-serif trust-showcase__title section-reveal-item">
            We redefine <span className="trust-showcase__shine">elegance</span> and create beauty
          </h2>
          <p className="trust-showcase__tagline section-reveal-item">✨ Where your glow is crafted in every detail ✨</p>
        </header>
        <div className="stats trust-showcase__stats">
          {STATS.map((stat) => (
            <article key={stat.ix} className="stat-card stat-card--show section-reveal-item">
              <span className="stat-card__ix" aria-hidden="true">
                {stat.ix}
              </span>
              <span
                className={`stat-card__num${stat.text ? " stat-card__num--text" : ""}`}
                {...(stat.count ? { "data-count-target": stat.num } : {})}
              >
                {stat.count ? "0" : stat.num}
              </span>
              <span className={`stat-card__suffix${stat.starSuffix ? " stat-card__suffix--star" : ""}`}>{stat.suffix}</span>
              <p className="stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
