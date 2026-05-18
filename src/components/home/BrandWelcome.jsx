import { forwardRef } from "react";
import { getLenis } from "../../lib/smoothScroll";
import { Wrap } from "../ui/Wrap";

function scrollToNextSection() {
  const target = document.getElementById("services-preview");
  if (!target) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset: -(88 + 16) });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const BrandWelcome = forwardRef(function BrandWelcome({ sheet = false }, ref) {
  return (
    <section
      ref={ref}
      className={`brand-welcome${sheet ? " brand-welcome--sheet" : ""}`}
      aria-labelledby="brand-welcome-heading"
    >
      <div className="brand-welcome__sparkles" aria-hidden="true">
        <span className="brand-welcome__spark brand-welcome__spark--1" />
        <span className="brand-welcome__spark brand-welcome__spark--2" />
        <span className="brand-welcome__spark brand-welcome__spark--3" />
        <span className="brand-welcome__spark brand-welcome__spark--4" />
        <span className="brand-welcome__spark brand-welcome__spark--5" />
        <span className="brand-welcome__spark brand-welcome__spark--6" />
      </div>

      <Wrap className="brand-welcome__inner">
        <p className="brand-welcome__eyebrow brand-welcome__line brand-welcome__line--eyebrow">
          Mermaids beauty welcomes you
        </p>
        <h2 id="brand-welcome-heading" className="brand-welcome__display brand-welcome__line brand-welcome__line--title">
          Mermaids
        </h2>
        <p className="brand-welcome__tag brand-welcome__line brand-welcome__line--tag">beauty</p>
        <p className="brand-welcome__lede brand-welcome__line brand-welcome__line--lede">
          From hair to glowing skin and spa luxury, we are your destination for beauty and radiance. We look forward to
          an unforgettable experience — start your journey with us today.
        </p>
        <button
          type="button"
          className="hero-ads__cta-pill brand-welcome__cta-pill brand-welcome__line brand-welcome__line--cta"
          onClick={scrollToNextSection}
        >
          Scroll to see more
        </button>
      </Wrap>
    </section>
  );
});
