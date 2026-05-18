import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    const base = "Mermaids";
    document.title = title ? `${title} — ${base}` : `${base} — Beauty Salon & Boutique`;
  }, [title]);
}
