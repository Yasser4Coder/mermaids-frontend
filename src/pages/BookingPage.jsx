import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Wrap } from "../components/ui/Wrap";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";
import { formatDZD } from "../lib/formatDZD";
import { cn } from "../lib/cn";

const STEPS = ["Service", "Stylist", "Time", "Confirm"];

const SERVICES = [
  { name: "Balayage & gloss", duration: "150 min", price: 35800 },
  { name: "Signature cut & finish", duration: "60 min", price: 11500 },
  { name: "LED calm facial", duration: "45 min", price: 16900 },
  { name: "Gel manicure", duration: "45 min", price: 3500 },
];

const STYLISTS = ["First available", "Sara — colour", "Amira — skin", "Nadia — nails"];

const TIMES = ["Mon 10:00", "Mon 14:30", "Tue 11:00", "Wed 16:00", "Sat 09:30"];

export function BookingPage() {
  usePageInner("page-booking");
  useDocumentTitle("Book");
  const [step, setStep] = useState(1);
  const [service, setService] = useState(SERVICES[0]);
  const [stylist, setStylist] = useState(STYLISTS[0]);
  const [time, setTime] = useState(TIMES[0]);
  const [confirmed, setConfirmed] = useState(false);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <PageHero
        compact
        eyebrow="Booking"
        title="Reserve your visit"
        lede="Four quick steps — pick what you need, optionally choose your artist, select a time, and confirm."
      />
      <Wrap className="pb-16">
        <ol className="mb-8 flex flex-wrap justify-between gap-2" aria-label="Booking steps">
          {STEPS.map((label, i) => {
            const n = i + 1;
            return (
              <li
                key={label}
                className={cn(
                  "flex flex-1 min-w-[4.5rem] flex-col items-center gap-1 rounded-xl px-2 py-3 text-center text-xs sm:text-sm",
                  step >= n ? "bg-gold text-white" : "bg-pink-100 text-muted"
                )}
              >
                <span className="font-bold">{n}</span>
                <span>{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="glass-panel p-6 md:p-8">
          {confirmed ? (
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Confirmed</p>
              <h2 className="mt-2 font-serif text-2xl text-ink">You&apos;re booked</h2>
              <p className="mt-3 text-muted">
                {service.name} with {stylist} at {time}. We&apos;ll send prep tips by SMS.
              </p>
              <Button to="/" className="mt-8">
                Back to home
              </Button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <>
                  <h2 className="font-serif text-xl text-ink">Choose a service</h2>
                  <p className="mt-1 text-sm text-muted">
                    Prices match our <Link to="/services" className="text-gold hover:underline">services menu</Link>.
                  </p>
                  <div className="mt-6 space-y-3">
                    {SERVICES.map((s) => (
                      <label
                        key={s.name}
                        className={cn(
                          "flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition",
                          service.name === s.name ? "border-gold bg-gold-soft" : "border-gold/15 hover:border-gold/40"
                        )}
                      >
                        <input
                          type="radio"
                          name="service"
                          className="sr-only"
                          checked={service.name === s.name}
                          onChange={() => setService(s)}
                        />
                        <span>
                          <span className="block font-medium text-ink">{s.name}</span>
                          <span className="text-sm text-muted">
                            {s.duration} · from {formatDZD(s.price)}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h2 className="font-serif text-xl text-ink">Choose stylist</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {STYLISTS.map((name) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => setStylist(name)}
                        className={cn(
                          "rounded-xl border p-4 text-start transition",
                          stylist === name ? "border-gold bg-gold-soft" : "border-gold/15 hover:border-gold/40"
                        )}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h2 className="font-serif text-xl text-ink">Pick a time</h2>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {TIMES.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium transition",
                          time === slot ? "bg-gold text-white" : "bg-pink-100 text-ink-soft hover:bg-gold-soft"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <h2 className="font-serif text-xl text-ink">Confirm booking</h2>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between gap-4 border-b border-gold/10 pb-3">
                      <dt className="text-muted">Service</dt>
                      <dd className="font-medium text-ink">{service.name}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-gold/10 pb-3">
                      <dt className="text-muted">Stylist</dt>
                      <dd className="font-medium text-ink">{stylist}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-gold/10 pb-3">
                      <dt className="text-muted">Time</dt>
                      <dd className="font-medium text-ink">{time}</dd>
                    </div>
                    <div className="flex justify-between gap-4 pt-1">
                      <dt className="text-muted">From</dt>
                      <dd className="font-semibold text-ink">{formatDZD(service.price)}</dd>
                    </div>
                  </dl>
                </>
              )}
              <div className="mt-8 flex flex-wrap justify-between gap-3">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={back}>
                    Back
                  </Button>
                ) : (
                  <span />
                )}
                {step < 4 ? (
                  <Button type="button" onClick={next}>
                    Continue
                  </Button>
                ) : (
                  <Button type="button" onClick={() => setConfirmed(true)}>
                    Confirm booking
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Wrap>
    </>
  );
}
