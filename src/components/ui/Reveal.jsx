import { cn } from "../../lib/cn";
import { useRevealRef } from "../../hooks/useReveal";

export function Reveal({ as: Tag = "div", className, children, ...props }) {
  const ref = useRevealRef();
  return (
    <Tag ref={ref} className={cn("reveal", className)} {...props}>
      {children}
    </Tag>
  );
}
