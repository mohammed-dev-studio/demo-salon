import { business } from "@/lib/config";

export default function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Services
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Prices are starting points and depend on hair length, product and time.
            Ask us on WhatsApp for an exact quote.
          </p>
        </div>

        {/* Simple list with prices — the Essential tier.
            Premium replaces this with photo cards and expandable detail. */}
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {business.services.map((service) => (
            <li
              key={service.name}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="sm:flex-1">
                <h3 className="font-display text-lg text-ink">{service.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-accent sm:text-base">
                {service.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
