import { business, directionsLink } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{business.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              {business.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-cream/85">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-cream"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-cream"
                >
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={directionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
              Address
            </h3>
            <address className="text-sm not-italic leading-relaxed text-cream/85">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.city} {business.address.pincode}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Website by Ibrahim — Web Developer, Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
