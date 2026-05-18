import { Link } from "react-router-dom";

const SPA_STRIPS = [
  {
    index: "01",
    reverse: false,
    packages: false,
    image: "/images/Massage_spa.png",
    alt: "Therapeutic massage and hot stone treatment",
    label: "Massage",
    title: "Anti stress · Réflexologie",
    text: "Anti stress 5,000 DA / 45 min · Foot reflexology 3,500 DA / 30 min — and more massage sessions on the full menu.",
    linkText: "View massage menu",
    to: "/services#massages",
  },
  {
    index: "02",
    reverse: true,
    packages: false,
    image: "/images/Relaxation_treatments_spa.png",
    alt: "Sanctuary relaxation treatments and spa lounge",
    label: "HAMAM · PISCINE · JACUZY",
    title: "Hammam simple from 1,000 DA",
    text: "Hammam VIP 5,000 DA · Hammam Royal 12,000 DA · Bridal hammam 15,000 DA — plus more relaxation and water rituals.",
    linkText: "Explore hammam & water",
    to: "/services#hammam",
  },
  {
    index: "03",
    reverse: false,
    packages: false,
    image: "/images/Skin_glow_service.png",
    alt: "Facial treatment and glowing skin care",
    label: "Facial care",
    title: "AISAN HEAD SPA · GAADA",
    text: "Head spa 4,500 DA · Gaada Hannah 7,000 DA — skincare within our luxury spa atmosphere.",
    linkText: "See facial menu",
    to: "/services#soin-visage",
  },
  {
    index: "04",
    reverse: true,
    packages: true,
    image: "/images/Spa_packages.png",
    alt: "Spa packages and wellness journey",
    label: "Spa packages",
    title: "A Thousand and One Nights",
    text: "Packages that combine hammam, massage and care — choose the level of luxury that suits you before you confirm.",
    linkText: "Build a package",
    to: "/services#hammam",
  },
];

function SpaStrip({ strip }) {
  const stripClass = [
    "spa-wellness__strip",
    strip.reverse && "spa-wellness__strip--reverse",
    strip.packages && "spa-wellness__strip--packages",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={stripClass}>
      <div className="spa-wellness__figure">
        <img
          src={strip.image}
          alt={strip.alt}
          width={900}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="spa-wellness__copy">
        <span className="spa-wellness__index" aria-hidden="true">
          {strip.index}
        </span>
        <p className="spa-wellness__label">{strip.label}</p>
        <h3 className="spa-wellness__strip-title">{strip.title}</h3>
        <p className="spa-wellness__strip-text">{strip.text}</p>
        <Link to={strip.to} className="spa-wellness__link">
          {strip.linkText} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function SpaWellness() {
  return (
    <section className="spa-wellness" id="spa-wellness" aria-labelledby="spa-wellness-heading">
      <div className="spa-wellness__ambient" aria-hidden="true">
        <div className="spa-wellness__mist" />
      </div>

      <div className="wrap spa-wellness__intro">
        <p className="eyebrow eyebrow--pill spa-wellness__eyebrow">Spa</p>
        <h2 id="spa-wellness-heading" className="spa-wellness__masthead">
          Moments of calm… luxury that pampers your senses
        </h2>
        <p className="spa-wellness__subtitle">Unwind in the atmosphere of a Moroccan hammam and luxury spa</p>
        <p className="spa-wellness__lede">
          Massage sessions | Skincare | Relaxation rituals — your destination for renewal and deep rest
        </p>
      </div>

      <div className="spa-wellness__stream">
        {SPA_STRIPS.map((strip) => (
          <SpaStrip key={strip.index} strip={strip} />
        ))}
      </div>

      <div className="wrap spa-wellness__closing">
        <p className="spa-wellness__closing-note">Start your journey with us today</p>
        <Link to="/book" className="btn btn--solid btn--lg">
          Book now
        </Link>
      </div>
    </section>
  );
}
