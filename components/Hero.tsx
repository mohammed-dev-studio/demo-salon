import { business, directionsLink } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[78vh] min-h-130 w-full overflow-hidden">
        {/* Static photo. Video hero is a Premium feature — deliberately absent. */}
        <img
          src={business.hero.src}
          alt={business.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/35 via-ink/60 to-ink/92" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-14 sm:pb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-cream/80">
            Jogeshwari West, Mumbai
          </p>

          <h1 className="max-w-2xl font-display text-4xl leading-[1.08] text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl">
            {business.tagline}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-base">
            {business.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#enquire"
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sand"
            >
              Send an enquiry
            </a>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
