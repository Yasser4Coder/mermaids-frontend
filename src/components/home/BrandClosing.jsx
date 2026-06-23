import { useState } from "react";
import { Link } from "react-router-dom";
import { FAQ_ITEMS } from "../../data/faq";
import { SectionIntro } from "../ui/SectionIntro";

const STEPS = [
  { num: "01", title: "Pick your service", text: "Browse hair, skin, or nails — durations and prices listed upfront." },
  { num: "02", title: "Choose stylist & time", text: "Optional favourite artist, then real openings — no endless threads." },
  { num: "03", title: "Confirm & relax", text: "Instant confirmation with prep tips and easy reschedule links." },
];

export function BrandBookingSteps() {
  return (
    <section className="brand-booking" id="how-it-works" aria-labelledby="booking-heading">
      <div className="wrap">
        <SectionIntro badge="Simple booking" title="Three steps. No guesswork." titleId="booking-heading" />

        <ol className="brand-booking__steps">
          {STEPS.map((step) => (
            <li key={step.num} className="brand-booking__step">
              <span className="brand-booking__num">{step.num}</span>
              <h3 className="brand-booking__title">{step.title}</h3>
              <p className="brand-booking__text">{step.text}</p>
            </li>
          ))}
        </ol>
        <footer className="brand-section__foot">
          <Link to="/book" className="welcome-showcase__cta brand-booking__cta">
            <span className="welcome-showcase__cta-label">Start booking</span>
            <span className="welcome-showcase__cta-arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="brand-faq" aria-labelledby="faq-heading">
      <div className="brand-faq__wrap">
        <div className="brand-faq__layout">
          <header className="brand-faq__intro">
            <span className="brand-faq__badge">FAQ</span>
            <h2 id="faq-heading" className="brand-faq__title">
              Common questions
            </h2>
          </header>

          <div className="brand-faq__list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className={`brand-faq__item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="brand-faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="brand-faq__question-text">{item.q}</span>
                    <span className="brand-faq__icon" aria-hidden="true">
                      <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} />
                    </span>
                  </button>
                  <div className="brand-faq__answer">{item.a}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
