import { useEffect, useId, useRef, useState } from "react";
import { useLang } from "../../context/LangContext";
import { cn } from "../../lib/cn";

const LABELS = { en: "English", fr: "Français", ar: "Arabic" };

export function LangSwitcher() {
  const menuId = useId();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="lang-switcher">
      <button
        type="button"
        className="nav-icon-btn lang-switcher__toggle"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        aria-label="Change language"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <i className="fa-solid fa-language" aria-hidden="true" />
      </button>
      <div
        id={menuId}
        role="menu"
        className="lang-switcher__menu"
        hidden={!open}
      >
        {Object.entries(LABELS).map(([code, label]) => (
          <button
            key={code}
            type="button"
            className={cn("lang-switcher__option", lang === code && "is-active")}
            role="menuitemradio"
            aria-checked={lang === code}
            data-lang={code}
            onClick={() => {
              setLang(code);
              setOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
