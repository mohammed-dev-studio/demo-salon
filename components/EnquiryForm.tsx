"use client";

import { useState } from "react";
import { business, waLink } from "@/lib/config";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    // Indian mobile numbers: 10 digits, starting 6-9.
    const digits = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // No backend. The enquiry opens in WhatsApp, pre-filled.
    // The salon replies from the same app they already use all day.
    const message = `Hi ${business.shortName}, I'd like to book an appointment.

Name: ${name.trim()}
Phone: ${digits}`;

    const url = waLink(message);

    // Anchor click instead of window.open — popup blockers silently drop
    // window.open(..., "noopener,noreferrer") in Firefox and some Chrome configs.
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <section id="enquire" className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Enquiry
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Send us your number
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Tell us your name and number. We will message you on WhatsApp to fix
            a time. No calls during working hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md space-y-4" noValidate>
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              placeholder="Priya Sharma"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Mobile number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              placeholder="98765 43210"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-accent"
          >
            Send on WhatsApp
          </button>

          <p className="text-xs leading-relaxed text-muted">
            Opens WhatsApp with your details filled in. Nothing is stored on
            this website.
          </p>
        </form>
      </div>
    </section>
  );
}
