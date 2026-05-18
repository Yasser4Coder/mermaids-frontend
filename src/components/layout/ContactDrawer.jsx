import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SITE } from "../../lib/constants";

const ContactDrawerContext = createContext(null);

export function ContactDrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.classList.toggle("contact-drawer-open", isOpen);
    return () => document.body.classList.remove("contact-drawer-open");
  }, [isOpen]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <ContactDrawerContext.Provider value={value}>
      {children}
      <ContactDrawerPanel />
    </ContactDrawerContext.Provider>
  );
}

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) throw new Error("useContactDrawer must be used within ContactDrawerProvider");
  return ctx;
}

function ContactDrawerPanel() {
  const { isOpen, close } = useContactDrawer();

  return (
    <div id="contact-drawer" className={`contact-drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
      <button type="button" className="contact-drawer__backdrop js-contact-close" aria-label="Close contact panel" onClick={close} />
      <aside
        id="contact-drawer-panel"
        className="contact-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-drawer-title"
        tabIndex={-1}
      >
        <div className="contact-drawer__head">
          <h2 id="contact-drawer-title" className="contact-drawer__title">
            Contact us
          </h2>
          <button type="button" className="contact-drawer__close js-contact-close" aria-label="Close contact panel" onClick={close}>
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>
        <div className="contact-drawer__body">
          <section className="contact-drawer__block">
            <h3 className="contact-drawer__label">
              <i className="fa-solid fa-phone" aria-hidden="true" /> Phone
            </h3>
            <p className="contact-drawer__line">
              <a href={`tel:+${SITE.phone}`}>{SITE.phoneDisplay.replace(/ /g, "\u00a0")}</a>
            </p>
          </section>
          <section className="contact-drawer__block">
            <h3 className="contact-drawer__label">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> Email
            </h3>
            <p className="contact-drawer__line">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </section>
          <section className="contact-drawer__block">
            <h3 className="contact-drawer__label">
              <i className="fa-solid fa-location-dot" aria-hidden="true" /> Studio
            </h3>
            <address className="contact-drawer__address">
              {SITE.address[0]}
              <br />
              {SITE.address[1]}
            </address>
          </section>
        </div>
      </aside>
    </div>
  );
}
