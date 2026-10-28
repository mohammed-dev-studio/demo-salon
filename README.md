# Aura Salon & Spa — Essential Tier Demo

A single-page salon website demonstrating the **Essential (₹3,000)** tier.

Built as the reusable base for every Essential client. Swap `lib/config.ts`, replace the photos, and you have a client site in under a day.

---

## What this demo demonstrates

- One scrolling page, no extra routes
- Static hero photo (no video — that is Premium)
- Services as a simple list with prices (Premium uses photo cards)
- 9-photo gallery in a plain grid (Premium adds a 4-image hero slider)
- Enquiry form: **name + phone only**, submits to WhatsApp
- Timings, address, embedded map, one-tap directions
- Floating WhatsApp button
- LocalBusiness schema (basic tier)
- Mobile-first throughout

## What is deliberately missing

These are the Premium tier's differentiators. Do not add them here — the demo's job is to make the gap visible.

- Multi-page routes
- Video hero
- Photo cards for services
- Testimonials block
- FAQ block with schema
- Open/Closed live badge
- Google Analytics
- Full Google Business Profile setup

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```
npm run build
```

This produces a fully static site in `out/`. No server, no database, no monthly cost.

```
npx serve out
```

---

## Deploy to Cloudflare Pages (₹0)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo.
4. Build settings:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
5. Save and deploy. You get a `your-project.pages.dev` URL in about two minutes.

Custom domain: **Custom domains** → add `clientsalon.in` → point the registrar's nameservers at the two Cloudflare gives you → SSL issues automatically.

---

## Making this a client site

Everything you need to change lives in **`lib/config.ts`**. Nothing else.

1. **Copy this repo** — GitHub → *Use this template* → name it `salon-{client-name}`.
2. Edit `lib/config.ts`:

- `name`, `tagline`, `phone`, `whatsapp`, `email`
- `address`, `mapQuery`
- `hours`
- `services` — name, price, description
- `gallery` — 9 image URLs
3. Replace images. Put client photos in `public/images/` and change the URLs to `/images/filename.jpg`. Compress every image under 300 KB before committing.
4. Update `metadata` in `app/layout.tsx` — title and description must include the business name and the area.
5. Deploy. Send the `.pages.dev` link for review.

### The one rule

**Never let an image over 300 KB into the repo.** A salon will send 8 MB photos straight from her phone. Compress before committing:

```
# macOS / Linux with ffmpeg
ffmpeg -i input.jpg -vf scale=1280:-1 -q:v 6 output.jpg
```

Or use https://squoosh.app — drag, set quality to 70, download.

---

## Checklist before you send the review link

- □  
Every text in `lib/config.ts` replaced — no "Aura Salon" left anywhere
- □  
Phone number works and opens WhatsApp correctly
- □  
All 9 gallery images load
- □  
Form opens WhatsApp with name and phone pre-filled
- □  
Map shows the correct area
- □  
"Get directions" opens navigation
- □  
Tested on a real phone, on mobile data — not just desktop
- □  
Page title shows the business name and area
- □  
Lighthouse mobile score above 90

## Checklist at handover

- □  
Domain registered in the **client's** name and email
- □  
DNS pointed at Cloudflare, SSL padlock visible
- □  
Google Business Profile website field updated
- □  
ZIP of this repo sent to the client
- □  
Registrar login handed over
- □  
Signed agreement copy given
- □  
30-day fix window start date noted

---

## Stack

- Next.js 15 (App Router, static export)
- React 19
- Tailwind CSS 4
- No database, no backend, no server

## Cost to run

₹0 per month. Cloudflare Pages free tier permits commercial use. The only recurring cost is the domain, paid by the client.

</BDS:create_file>
<BDS:create_file fileName="demo-salon/package.json">

```json
{
  "name": "demo-salon",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "npx serve out",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.5.4",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.13",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4.1.13",
    "typescript": "^5.9.2"
  }
}

