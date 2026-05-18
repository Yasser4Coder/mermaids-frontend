import { cn } from "../../lib/cn";

export function Wrap({ narrow, className, children, as: Tag = "div" }) {
  return <Tag className={cn(narrow ? "wrap wrap--narrow" : "wrap", className)}>{children}</Tag>;
}
