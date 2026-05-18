import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANG_KEY } from "../lib/constants";

const LangContext = createContext(null);
const LANGUAGES = ["en", "fr", "ar"];

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && LANGUAGES.includes(stored)) setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((code) => {
    setLangState(LANGUAGES.includes(code) ? code : "en");
  }, []);

  const value = useMemo(() => ({ lang, setLang, languages: LANGUAGES }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
