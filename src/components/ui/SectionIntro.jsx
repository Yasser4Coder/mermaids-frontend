export function SectionIntro({ badge, title, lede, titleId, align = "center" }) {
  return (
    <header className={`section-intro${align === "start" ? " section-intro--start" : ""}`}>
      <span className="section-intro__badge">{badge}</span>
      <h2 id={titleId} className="section-intro__title">
        {title}
      </h2>
      {lede ? <p className="section-intro__lede">{lede}</p> : null}
    </header>
  );
}
