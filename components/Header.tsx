import { business, waLink } from "@/lib/config";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquire", href: "#enquire" },
  { label: "Visit", href: "#visit" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink sm:text-2xl"
        >
          {business.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(`Hi ${business.shortName}, I'd like to book an appointment.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-accent sm:px-5"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}
