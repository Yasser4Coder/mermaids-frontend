import { useRef } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../../lib/constants";
import { useSectionRevealScrollTrigger } from "../../hooks/useSectionRevealScrollTrigger";

const CHIPS = [
  { icon: "fa-calendar-check", label: "Live availability" },
  { icon: "fa-bell", label: "SMS & email reminders" },
  { icon: "fa-location-dot", label: "Bbatimat Marah Ezzbouj, Chlef" },
];

export function CtaAppointments() {
  const sectionRef = useRef(null);

  useSectionRevealScrollTrigger(sectionRef, {
    slideTargets: ".cta-appointments .section-reveal-slide",
    fadeTargets: ".cta-appointments__ticket",
    stagger: 0.07,
    y: 20,
    scrub: 1.4,
    end: "top 48%",
  });

  return (
    <section ref={sectionRef} className="cta-band cta-appointments home-section-reveal" id="book">
      <div className="cta-band__bg" aria-hidden="true">
        <img src="/images/bottom-img.jpg" alt="" loading="lazy" decoding="async" />
        <div className="cta-band__veil cta-appointments__veil" />
        <div className="cta-appointments__grain" aria-hidden="true" />
      </div>

      <div className="wrap cta-appointments__wrap">
        <div className="cta-appointments__grid">
          <div className="cta-appointments__copy">
            <span className="cta-appointments__watermark section-reveal-slide" aria-hidden="true">
              Book
            </span>
            <p className="eyebrow eyebrow--appoint section-reveal-slide">Book now</p>
            <h2 className="heading-serif heading-serif--appoint section-reveal-slide">
              Start your journey with us today
            </h2>
            <p className="cta-appointments__lede section-reveal-slide">
              We look forward to an unforgettable luxury experience — book online or call us directly.
            </p>
            <ul className="cta-appointments__chips section-reveal-slide" aria-label="Booking highlights">
              {CHIPS.map((chip) => (
                <li key={chip.label}>
                  <i className={`fa-solid ${chip.icon}`} aria-hidden="true" /> {chip.label}
                </li>
              ))}
            </ul>
          </div>

          <aside className="cta-appointments__ticket" aria-label="Book online or call">
            <div className="cta-appointments__perforation" aria-hidden="true" />
            <div className="cta-appointments__ticket-inner">
              <p className="cta-appointments__ticket-kicker">Fastest path</p>
              <h3 className="cta-appointments__ticket-title">Book online</h3>
              <p className="cta-appointments__ticket-note">
                Choose service, optional stylist, and time — four quick steps. Change your mind? Reschedule from your
                confirmation.
              </p>
              <div className="cta-appointments__ticket-actions">
                <Link className="btn btn--light btn--lg cta-appointments__btn" to="/book">
                  <i className="fa-solid fa-calendar-plus" aria-hidden="true" />
                  Start booking
                </Link>
                <a className="btn btn--ghost-appoint btn--lg cta-appointments__btn" href={`tel:+${SITE.phone}`}>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  {SITE.phoneDisplay.replace(/ /g, "\u00a0")}
                </a>
              </div>
              <p className="cta-appointments__fineprint">
                Prefer WhatsApp or email? Use the icons on the right edge of the screen.
              </p>
            </div>
            <div className="cta-appointments__tear" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
