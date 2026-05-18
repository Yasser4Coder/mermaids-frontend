import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, lede, cta, compact, asideNote }) {
  return (
    <section className={compact ? "page-hero page-hero--compact" : "page-hero"}>
      <Reveal className="wrap page-hero__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        {asideNote && <p className="page-hero__aside-note">{asideNote}</p>}
        {cta && (
          <Button to={cta.to} size="lg">
            {cta.label}
          </Button>
        )}
      </Reveal>
    </section>
  );
}
