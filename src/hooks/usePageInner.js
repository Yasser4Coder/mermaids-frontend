import { useEffect } from "react";

/** Adds `page-inner` (and optional extra body classes) while the page is mounted. */
export function usePageInner(extraClass = "") {
  useEffect(() => {
    const classes = ["page-inner", ...extraClass.split(/\s+/).filter(Boolean)];
    document.body.classList.add(...classes);
    return () => document.body.classList.remove(...classes);
  }, [extraClass]);
}
