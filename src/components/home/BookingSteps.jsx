import { useRef } from "react";
import { useSectionRevealScrollTrigger } from "../../hooks/useSectionRevealScrollTrigger";

const STEPS = [
  { num: "01", title: "Pick your service", text: "Browse hair, skin, or nails — durations and prices are listed upfront." },
  { num: "02", title: "Choose stylist & time", text: "Optional favourite artist, then real openings — no endless email threads." },
  { num: "03", title: "Confirm & relax", text: "Instant confirmation with prep tips and easy reschedule links." },
];

export function BookingSteps() {
  const sectionRef = useRef(null);

  useSectionRevealScrollTrigger(sectionRef, {
    targets: ".booking-steps-mini .section-reveal-item",
    stagger: 0.12,
    end: "top 36%",
  });

  return (
    <section
      ref={sectionRef}
      className="section booking-steps-mini booking-steps-mini--photo home-section-reveal"
      id="how-it-works"
    >
      <div className="booking-steps-mini__bg" aria-hidden="true">
        <img src="/images/bg1.png" alt="" width={1600} height={900} loading="lazy" decoding="async" />
        <div className="booking-steps-mini__veil" />
        <div className="booking-steps-mini__shine" />
        <div className="booking-steps-mini__grain" />
      </div>
      <div className="wrap booking-steps-mini__wrap">
        <header className="section-head">
          <div className="section-kicker section-reveal-item">
            <span className="section-kicker__pulse" aria-hidden="true" />
            <p className="eyebrow eyebrow--pill">Simple booking</p>
          </div>
          <h2 className="heading-serif section-reveal-item">Three steps. No guesswork.</h2>
        </header>
        <ol className="timeline timeline--three">
          {STEPS.map((step) => (
            <li key={step.num} className="timeline__step section-reveal-item">
              <span className="timeline__num">{step.num}</span>
              <div className="timeline__body">
                <h3 className="timeline__title">{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
