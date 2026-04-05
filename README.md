# ARC IT Solutions — Multi-Page Production Website

A premium software engineering & creative design agency website built with Next.js 15 App Router, TypeScript, and Tailwind CSS.

## Stack
- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript (strict, zero errors)
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Icons**: Inline SVG — zero icon library dependency

## Pages

| Route | Page |
|---|---|
| `/` | Home — editorial entry point with featured work |
| `/services` | Full services page — all 4 disciplines in depth |
| `/work` | Portfolio index — all case studies |
| `/work/[slug]` | Individual case study (4 pages, statically generated) |
| `/about` | Company story, values, team size, recognition |
| `/process` | 4-phase methodology + FAQ |
| `/contact` | Dedicated contact page with production-ready form |

## Getting Started

```bash
npm install
npm run dev       # Development → http://localhost:3000
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
```

## Project Structure

```
axiom-studio/
├── app/
│   ├── layout.tsx              # Root layout — full SEO metadata
│   ├── page.tsx                # Home page (server component)
│   ├── globals.css             # Design tokens + base styles
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── process/page.tsx        # Process page
│   ├── services/page.tsx       # Services page
│   └── work/
│       ├── page.tsx            # Work index
│       └── [slug]/
│           ├── page.tsx        # Case study (server component)
│           └── CaseStudyClient.tsx  # Interactive next-project link
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, active states, mobile menu
│   │   └── Footer.tsx          # Full footer with page links
│   ├── sections/
│   │   ├── HeroSection.tsx     # Animated canvas hero
│   │   ├── TestimonialsSection.tsx  # Interactive quote switcher
│   │   ├── CTABanner.tsx       # Pre-footer CTA
│   │   └── ContactSection.tsx  # Form (standalone + embedded modes)
│   └── ui/
│       ├── PageHero.tsx        # Reusable inner-page header
│       ├── ServiceCard.tsx     # Hoverable service card
│       ├── ProjectCard.tsx     # Hoverable project card (work index)
│       ├── FeaturedProjectRow.tsx  # Featured project row (home)
│       └── ContactInfoLink.tsx # Hoverable contact detail
└── lib/
    └── data.ts                 # ALL site content — single CMS-ready source
```

## Content Architecture

**All content lives in `/lib/data.ts`** — arrays of typed objects:

```ts
siteConfig    // Name, email, phone, social links
stats         // Hero stats strip
services[]    // 4 services with capabilities, technologies, long descriptions
projects[]    // Case studies with metrics, challenge, solution, outcome
testimonials[] // Client quotes
processSteps[] // 4 phases with deliverables and detail paragraphs
values[]       // Company values
recognition[]  // Awards list
teamStats[]    // Team metrics
```

To connect a CMS, replace any array with a fetch call:
```ts
// Before:
export const projects = [ /* static data */ ]

// After (Sanity example):
export async function getProjects() {
  return client.fetch(`*[_type == "project"]`)
}
```

## Design System

All tokens in `app/globals.css`:

```css
--bg-primary: #0d0d0b        /* near-black */
--bg-secondary: #141410
--accent-gold: #c9a84c       /* signature gold */
--text-primary: #f0ead8      /* warm cream */
--text-secondary: #a09880
--font-display: 'Cormorant Garamond'
--font-body: 'DM Sans'
```

## Deployment

**Vercel (recommended — zero config):**
```bash
npx vercel
```

**Other Node.js hosts:** Standard Next.js build, no special config required.

## Post-Deploy Checklist

- [ ] Replace `axiomstudio.com` with real domain in `app/layout.tsx`
- [ ] Add real OG image at `public/og-image.jpg` (1200×630px)
- [ ] Update contact details in `lib/data.ts` → `siteConfig`
- [ ] Wire form in `ContactSection.tsx` to real API (Resend, SendGrid, etc.)
- [ ] Replace placeholder case studies in `lib/data.ts` → `projects[]`
- [ ] Add real `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Add analytics script to `app/layout.tsx` (Plausible recommended)
- [ ] Connect CMS for dynamic case studies and blog (Sanity, Contentful)
- [ ] Set up `public/robots.txt` and `public/sitemap.xml`

## Engineering Standards

| Concern | Implementation |
|---|---|
| SEO | Per-page `metadata` exports, semantic h1→h3, canonical URL, OG + Twitter cards |
| Performance | No heavy libraries, static generation (SSG), CSS-first animations |
| Accessibility | ARIA landmarks, `aria-current` nav, `aria-invalid` forms, `focus-visible`, reduced-motion |
| Security | Security headers in `next.config.ts`, honeypot on form, `nosniff`, `X-Frame-Options` |
| Mobile | Fluid `clamp()` typography, hamburger menu, responsive grids, accessible tap targets |
| Architecture | Server/client split — metadata in server components, interactivity in client components |
| CMS-ready | All content in typed `lib/data.ts` — swap any export to a fetch call |
