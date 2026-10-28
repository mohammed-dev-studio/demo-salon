/**
 * Everything a client site needs to change lives in this file.
 * Nothing else in the codebase should contain business-specific text.
 */

export const business = {
  name: "Aura Salon & Spa",
  shortName: "Aura",
  tagline: "Hair, skin and bridal care in Jogeshwari West.",
  intro:
    "A quiet salon tucked off S.V. Road. We do haircuts, colour, facials and bridal makeup — with appointments that start on time.",

  phone: "+919876543210", // display format
  phoneRaw: "919876543210", // digits only, for tel: and wa.me
  whatsapp: "919876543210",
  email: "hello@aurasalon.in",

  address: {
    line1: "Shop 4, Ground Floor, Shanti CHS",
    line2: "S.V. Road, Jogeshwari West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400102",
  },

  /** Used for the Google Maps embed and the directions link. */
  mapQuery: "19.141929,72.8404389",

  hours: [
    { day: "Monday", opens: null, closes: null },
    { day: "Tuesday", opens: "10:00", closes: "20:00" },
    { day: "Wednesday", opens: "10:00", closes: "20:00" },
    { day: "Thursday", opens: "10:00", closes: "20:00" },
    { day: "Friday", opens: "10:00", closes: "21:00" },
    { day: "Saturday", opens: "09:00", closes: "21:00" },
    { day: "Sunday", opens: "09:00", closes: "19:00" },
  ],

  services: [
    {
      name: "Haircut & Styling",
      price: "from ₹500",
      description: "Cut, blow-dry and finish. Includes a consultation.",
    },
    {
      name: "Hair Colour",
      price: "from ₹1,500",
      description: "Global colour, highlights and root touch-ups.",
    },
    {
      name: "Hair Spa & Treatment",
      price: "from ₹1,200",
      description: "Deep conditioning for dry or chemically treated hair.",
    },
    {
      name: "Facial & Cleanup",
      price: "from ₹800",
      description: "Brightening, hydrating and anti-acne facials.",
    },
    {
      name: "Waxing & Threading",
      price: "from ₹150",
      description: "Full body waxing and eyebrow shaping.",
    },
    {
      name: "Manicure & Pedicure",
      price: "from ₹700",
      description: "Classic and spa options, with gel polish on request.",
    },
    {
      name: "Bridal Makeup",
      price: "from ₹8,000",
      description:
        "Trial, day-of makeup and draping. Book at least two weeks ahead.",
    },
    {
      name: "Party Makeup",
      price: "from ₹2,500",
      description: "Evening looks for receptions and family functions.",
    },
  ],

  /** Exactly nine images for the Essential tier. */
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
      alt: "Salon interior with styling chairs",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
      alt: "Hair styling in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      alt: "Hair colour being applied",
    },
    {
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80",
      alt: "Blow dry finish",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      alt: "Spa treatment room",
    },
    {
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
      alt: "Facial treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
      alt: "Manicure in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
      alt: "Makeup application",
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
      alt: "Finished bridal look",
    },
  ],

  /** Hero image. One static photo — video is a Premium feature. */
  hero: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
    alt: "Aura Salon & Spa interior",
  },
} as const;

/** Builds a wa.me link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Google Maps directions link — opens navigation in one tap. */
export function directionsLink(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.mapQuery,
  )}`;
}

/** Google Maps embed src for the contact section. */
export function mapEmbedSrc(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapQuery,
  )}&output=embed`;
}

/** Formats a 24-hour time ("20:00") as 12-hour ("8:00 pm"). */
function to12h(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/** One row of the opening hours table, ready to display. */
export function formatHours(row: {
  opens: string | null;
  closes: string | null;
}): string {
  if (!row.opens || !row.closes) return "Closed";
  return `${to12h(row.opens)} – ${to12h(row.closes)}`;
}
