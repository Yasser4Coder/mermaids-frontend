import { useContactDrawer } from "./ContactDrawer";

const BUTTONS = [
  { icon: "fa-phone", title: "Phone", label: "Show phone numbers" },
  { icon: "fa-envelope", title: "Email", label: "Show email" },
  { icon: "fa-location-dot", title: "Location", label: "Show address" },
];

export function ContactRail() {
  const { open } = useContactDrawer();

  return (
    <div className="contact-rail" role="group" aria-label="Quick contact">
      {BUTTONS.map((b) => (
        <button
          key={b.icon}
          type="button"
          className="contact-rail__btn js-contact-open"
          aria-expanded="false"
          aria-controls="contact-drawer-panel"
          title={b.title}
          onClick={open}
        >
          <i className={`fa-solid ${b.icon}`} aria-hidden="true" />
          <span className="sr-only">{b.label}</span>
        </button>
      ))}
    </div>
  );
}
