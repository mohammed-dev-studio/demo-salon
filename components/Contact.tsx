import {
  business,
  directionsLink,
  formatHours,
  mapEmbedSrc,
  waLink,
} from "@/lib/config";

export default function Contact() {
  return (
    <section id="visit" className="border-t border-ink/10 bg-sand/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Details */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              Visit
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Find us
            </h2>

            <address className="mt-6 not-italic text-sm leading-relaxed text-ink">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.city} {business.address.pincode}
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={directionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-accent"
              >
                Get directions
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                className="rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
              >
                Call {business.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="mt-10">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Opening hours
              </h3>
              <dl className="divide-y divide-ink/10 border-y border-ink/10 text-sm">
                {business.hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-baseline justify-between py-2.5"
                  >
                    <dt className="text-ink">{row.day}</dt>
                    <dd className={!row.opens ? "text-muted" : "text-ink"}>
                      {formatHours(row)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={waLink(`Hi ${business.shortName}, I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dark"
            >
              Message us on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-sand">
              <iframe
                title={`Map showing ${business.name}`}
                src={mapEmbedSrc()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-85 w-full border-0 sm:h-105"
              />
            </div>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
            >
              Open in Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
