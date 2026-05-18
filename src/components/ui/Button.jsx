import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

const VARIANT_CLASS = {
  solid: "btn--solid",
  outline: "btn--outline",
  light: "btn--light",
  ghost: "btn--ghost-appoint",
};

const SIZE_CLASS = {
  md: "",
  lg: "btn--lg",
};

export function Button({ variant = "solid", size = "md", to, href, className, children, ...props }) {
  const classes = cn("btn", VARIANT_CLASS[variant], SIZE_CLASS[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
