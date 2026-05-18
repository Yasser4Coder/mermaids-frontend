import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

export function BrandLockup({ footer, className }) {
  return (
    <Link
      to="/"
      className={cn("brand-lockup", footer && "brand-lockup--footer", className)}
      aria-label="Mermaids — home"
    >
      <span className={cn("brand-lockup__mark", footer && "brand-lockup__mark--dark")}>
        <img src="/images/logo.png" width={footer ? 100 : 120} height={footer ? 100 : 120} alt="" decoding="async" />
      </span>
      <span className="brand-lockup__word">
        <span className="brand-lockup__title">Mermaids</span>
        <span className="brand-lockup__sub">Salon &amp; Boutique</span>
      </span>
    </Link>
  );
}
