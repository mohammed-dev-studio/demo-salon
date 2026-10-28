import { business } from "@/lib/config";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-ink/10 bg-sand/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Gallery
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Inside the salon
          </h2>
        </div>

        {/* Plain uniform grid — the Essential tier.
            Premium adds a 4-image auto-rotating hero slider. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {business.gallery.map((image, index) => (
            <div
              key={image.src}
              className="aspect-square overflow-hidden bg-sand"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 3 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
