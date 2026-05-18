import { Link } from "react-router-dom";

const PATHWAYS = [
  {
    icon: "water_drop",
    name: "Skincare treatments",
    desc: "Medical-grade peels, barrier repair tracks, and prescription-guided facials.",
    to: "/services#soin-visage",
    fa: false,
    badge: "Peels",
  },
  {
    icon: "flare",
    name: "Laser",
    desc: "Hair reduction, pigment, and texture — patch-tested zones and clear downtime notes.",
    to: "/book",
    fa: false,
    badge: "Laser",
  },
  {
    icon: "syringe",
    name: "Botox & fillers",
    desc: "Consult-only booking for injectables — balance, symmetry, and natural movement preserved.",
    to: "/book",
    fa: true,
    badge: "Consult",
  },
  {
    icon: "stethoscope",
    name: "Dermatology",
    desc: "Referrals and co-managed plans for acne, rosacea, pigmentation, and mole checks.",
    to: "/book",
    fa: false,
    badge: "Skin MD",
  },
  {
    icon: "verified_user",
    name: "Medical beauty services",
    desc: "Microneedling RF, threads where offered — bundled aftercare and review slots.",
    to: "/book",
    fa: false,
    badge: "Advanced",
    wide: true,
  },
];

function ClinicPathwayCard({ row, index }) {
  return (
    <Link
      to={row.to}
      className={`clinic-suite__card${row.wide ? " clinic-suite__card--wide" : ""}`}
    >
      <div className="clinic-suite__card-top">
        <span className="clinic-suite__card-badge">{row.badge}</span>
        <span className="clinic-suite__card-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="clinic-suite__card-visual" aria-hidden="true">
        <span className={`clinic-suite__card-glyph${row.fa ? " clinic-suite__card-glyph--fa" : ""}`}>
          {row.fa ? (
            <i className="fa-solid fa-syringe" />
          ) : (
            <span className="material-symbols-outlined">{row.icon}</span>
          )}
        </span>
      </div>
      <div className="clinic-suite__card-body">
        <h3 className="clinic-suite__card-name">{row.name}</h3>
        <p className="clinic-suite__card-desc">{row.desc}</p>
      </div>
      <span className="clinic-suite__card-link">
        View pathway <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function ClinicSuite() {
  return (
    <section className="clinic-suite clinic-suite--editorial" id="clinic" aria-labelledby="clinic-heading">
      <div className="clinic-suite__gridfx" aria-hidden="true" />

      <div className="wrap clinic-suite__shell">
        <div className="clinic-suite__panel">
          <header className="clinic-suite__head">
            <p className="eyebrow eyebrow--pill clinic-suite__eyebrow">Clinic</p>
            <h2 id="clinic-heading" className="clinic-suite__title">
              <span className="clinic-suite__title-line">Beauty clinic</span>
              <em className="clinic-suite__title-accent">&amp; aesthetics</em>
            </h2>
            <p className="clinic-suite__lede">
              Where salon artistry meets clinical rigour — assessed, documented, and adapted to your skin goals
              with transparent next steps.
            </p>
          </header>

          <div className="clinic-suite__cards-wrap">
            <p className="clinic-suite__cards-label">Clinical pathways</p>
            <div className="clinic-suite__cards">
              {PATHWAYS.map((row, index) => (
                <ClinicPathwayCard key={row.name} row={row} index={index} />
              ))}
            </div>
          </div>

          <aside className="clinic-suite__trust" aria-label="Clinic standards">
            <span className="clinic-suite__trust-item">Photo baseline</span>
            <span className="clinic-suite__trust-sep" aria-hidden="true" />
            <span className="clinic-suite__trust-item">Consent &amp; cooling</span>
            <span className="clinic-suite__trust-sep" aria-hidden="true" />
            <span className="clinic-suite__trust-item">Pricing on consultation</span>
          </aside>

          <div className="clinic-suite__closing">
            <Link to="/book" className="btn btn--outline btn--lg clinic-suite__cta">
              Book a clinical consultation
            </Link>
          </div>
        </div>

        <aside className="clinic-suite__hero" aria-label="Clinic atmosphere">
          <div className="clinic-suite__hero-media">
            <img
              className="clinic-suite__hero-img"
              src="/images/clinic_img.png"
              alt="Beauty clinic consultation — skin assessment and treatment planning"
              width={720}
              height={900}
              loading="lazy"
              decoding="async"
            />
            <div className="clinic-suite__hero-veil" aria-hidden="true" />
          </div>
          <div className="clinic-suite__hero-overlay">
            <p className="clinic-suite__hero-quote">
              Care that <em>feels like clarity</em>
            </p>
            <p className="clinic-suite__hero-note">
              <span className="clinic-suite__caption-dot" aria-hidden="true" />
              Consultation first · patch tests when needed · follow-up included in protocols
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
