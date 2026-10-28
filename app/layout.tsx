import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { business } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Title and description must contain the business name AND the area.
 * This is the single most important SEO field on the site.
 */
export const metadata: Metadata = {
  title: `${business.name} — Salon in Jogeshwari West, Mumbai`,
  description:
    "Haircut, colour, facial, waxing and bridal makeup in Jogeshwari West, Mumbai. Walk in or book on WhatsApp.",
  openGraph: {
    title: `${business.name} — Salon in Jogeshwari West, Mumbai`,
    description:
      "Haircut, colour, facial, waxing and bridal makeup in Jogeshwari West, Mumbai.",
    type: "website",
  },
};

/** LocalBusiness structured data — helps Google understand the business. */
const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  description: business.intro,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: business.hours.flatMap((h) => {
    if (!h.opens || !h.closes) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.opens,
        closes: h.closes,
      },
    ];
  }),
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
