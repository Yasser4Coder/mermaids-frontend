# -*- coding: utf-8 -*-
"""Write legacy BEM home components (no motion HTML tags)."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src"
D = "d" + "iv"

FILES = {}

FILES["components/home/ClinicSuite.jsx"] = r'''import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";

const PATHWAYS = [
  { icon: "water_drop", name: "Skincare treatments", desc: "Medical-grade peels, barrier repair tracks, and prescription-guided facials.", to: "/services#soin-visage", fa: false, last: false },
  { icon: "flare", name: "Laser", desc: "Hair reduction, pigment, and texture — patch-tested zones and clear downtime notes.", to: "/book", fa: false, last: false },
  { icon: "syringe", name: "Botox & fillers", desc: "Consult-only booking for injectables — balance, symmetry, and natural movement preserved.", to: "/book", fa: true, last: false },
  { icon: "stethoscope", name: "Dermatology", desc: "Referrals and co-managed plans for acne, rosacea, pigmentation, and mole checks.", to: "/book", fa: false, last: false },
  { icon: "verified_user", name: "Medical beauty services", desc: "Microneedling RF, threads where offered — bundled aftercare and review slots.", to: "/book", fa: false, last: true },
];

export function ClinicSuite() {
  return (
    <section className="clinic-suite" id="clinic" aria-labelledby="clinic-heading">
      <__D__ className="clinic-suite__gridfx" aria-hidden="true" />

      <Reveal className="wrap clinic-suite__intro">
        <p className="eyebrow eyebrow--pill clinic-suite__eyebrow">Clinic</p>
        <h2 id="clinic-heading" className="clinic-suite__masthead">Beauty clinic &amp; aesthetics</h2>
        <p className="clinic-suite__lede">
          Where salon artistry meets clinical rigour — assessed, documented, and adapted to your skin goals with transparent next steps.
        </p>
      </Reveal>

      <Reveal className="wrap clinic-suite__layout">
        <__D__ className="clinic-suite__visual">
          <__D__ className="clinic-suite__frame">
            <img
              src="/images/clinic_img.png"
              alt="Beauty clinic consultation — skin assessment and treatment planning"
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </__D__>
          <p className="clinic-suite__caption">
            <span className="clinic-suite__caption-dot" aria-hidden="true" />
            Consultation first · patch tests when needed · follow-up included in protocols
          </p>
        </__D__>

        <__D__ className="clinic-suite__rail">
          <p className="clinic-suite__rail-label">Clinical pathways</p>
          <ul className="clinic-suite__matrix">
            {PATHWAYS.map((row) => (
              <li key={row.name}>
                <Link to={row.to} className={`clinic-suite__row${row.last ? " clinic-suite__row--last" : ""}`}>
                  <span className={`clinic-suite__glyph${row.fa ? " clinic-suite__glyph--fa" : ""}`} aria-hidden="true">
                    {row.fa ? (
                      <i className="fa-solid fa-syringe" />
                    ) : (
                      <span className="material-symbols-outlined clinic-suite__material">{row.icon}</span>
                    )}
                  </span>
                  <span className="clinic-suite__copy">
                    <span className="clinic-suite__name">{row.name}</span>
                    <span className="clinic-suite__desc">{row.desc}</span>
                  </span>
                  <span className="material-symbols-outlined clinic-suite__chev" aria-hidden="true">arrow_forward</span>
                </Link>
              </li>
            ))}
          </ul>

          <aside className="clinic-suite__trust" aria-label="Clinic standards">
            <span className="clinic-suite__trust-item">Photo baseline</span>
            <span className="clinic-suite__trust-sep" aria-hidden="true" />
            <span className="clinic-suite__trust-item">Consent &amp; cooling</span>
            <span className="clinic-suite__trust-sep" aria-hidden="true" />
            <span className="clinic-suite__trust-item">Pricing on consultation</span>
          </aside>
        </__D__>
      </Reveal>

      <Reveal className="wrap clinic-suite__closing">
        <Link to="/book" className="btn btn--outline btn--lg clinic-suite__cta">Book a clinical consultation</Link>
      </Reveal>
    </section>
  );
}
'''.replace("__D__", D)

for rel, content in FILES.items():
    path = ROOT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print("wrote", rel)
