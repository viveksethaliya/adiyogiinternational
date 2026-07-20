# Global Logistics — Site Pages & Content Spec
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS
**Type:** Informational corporate website (no auth, tracking, booking, or backend features)

---

## Route Map

```
/                     Home
/about                About Us
/services             Export & Logistics Services
/services/[slug]      Individual Service Detail (optional, if services need deep pages)
/industries           Industries We Serve
/process              Import & Export Process
/network              Global Trade Network
/infrastructure       Fleet, Warehouses & Infrastructure
/why-us               Why Choose Us + Certifications & Compliance
/testimonials         Client Testimonials
/insights             Latest Insights / Industry Articles (listing)
/insights/[slug]      Article Detail
/faq                  Frequently Asked Questions
/contact              Contact
```

Shared layout: global `Header` (nav) + global `Footer` in `app/layout.tsx`.

---

## 1. Home (`/`)

Purpose: First impression, trust-building, funnel visitors to deeper pages.

| Section | Content | Components |
|---|---|---|
| Hero | Headline, subheadline, 2 CTAs ("Request a Quote" — visual only, "Explore Services"), full-bleed freight/port image or video background | `HeroSection` |
| Trust Bar | Logos/stats strip (e.g. "15+ Years", "40+ Countries", "500+ Clients") | `StatCounterBar` |
| About Preview | 2–3 sentence company summary + "Learn More" link to `/about` | `AboutPreview` |
| Services Preview | Grid of 4–6 service cards (icon, title, 1-line desc) linking to `/services` | `ServiceCardGrid` |
| Process Snapshot | Condensed 4–5 step horizontal timeline linking to `/process` | `ProcessTimelineMini` |
| Industries Strip | Icon row of industries served | `IndustryIconStrip` |
| Global Network Teaser | World map with route lines/pins, "X ports, Y countries" | `WorldMapTeaser` |
| Why Choose Us | 3–4 differentiator cards (reliability, compliance, tech, coverage) | `WhyUsCards` |
| Statistics & Achievements | Animated counters (shipments handled, on-time %, warehouses, fleet size) | `StatCounters` |
| Testimonials Preview | 2–3 rotating testimonial cards | `TestimonialCarousel` |
| Latest Insights Preview | 3 latest article cards | `InsightCardGrid` |
| CTA Banner | "Partner with a logistics team you can trust" + Contact CTA | `CTABanner` |
| Footer | Full sitemap, contact info, socials, certifications logos | `Footer` |

---

## 2. About Us (`/about`)

Purpose: Establish company credibility and history.

- **Company Overview** — founding story, scope of operations, years active
- **Mission & Vision** — two-column or card layout, icon-led
- **Core Values** — grid (Integrity, Precision, Reliability, Global Reach, etc.)
- **Leadership / Team** (optional) — headshot cards, name, title (no bios required if not provided)
- **Company Timeline** — milestones (founding, expansions, certifications achieved)
- **Global Presence Strip** — small map or office location list
- **CTA** — link to `/contact`

Components: `MissionVisionSplit`, `ValuesGrid`, `CompanyTimeline`, `OfficeLocationsStrip`

---

## 3. Export & Logistics Services (`/services`)

Purpose: Detail every service offering with clarity.

Service categories to include (based on brief's terminology):
- Ocean Freight Forwarding
- Air Freight Forwarding
- Road Transportation / Inland Haulage
- Customs Clearance
- Warehousing & Distribution
- Export Documentation & Compliance
- Supply Chain Consulting
- Cargo Insurance Coordination (informational only)

Layout per service card: icon, title, 2–3 line description, "Learn More" (optional link to detail page).

Optional detail page (`/services/[slug]`) sections:
- Service overview
- Process specific to that service
- Benefits list
- Related industries
- CTA to contact

Components: `ServiceCardGrid`, `ServiceDetailHero`, `ServiceBenefitsList`

---

## 4. Industries We Serve (`/industries`)

Purpose: Show breadth of sector expertise.

Suggested industries:
- Manufacturing & Industrial Goods
- Automotive & Auto Parts
- Textiles & Apparel
- Agriculture & Perishables
- Pharmaceuticals & Healthcare
- Electronics & Technology
- Chemicals
- Retail & E-commerce Goods
- Oil, Gas & Energy

Layout: icon/image card grid, each with short description of specific logistics needs addressed.

Components: `IndustryCardGrid`, `IndustryDetailModal` (optional, no backend needed — static content)

---

## 5. Import & Export Process (`/process`)

Purpose: Educate visitors on how international trade/shipping works with this company.

Suggested step sequence (editable):
1. Inquiry & Consultation
2. Documentation & Compliance Review
3. Booking & Scheduling
4. Customs Clearance (Export)
5. Freight Transit (Ocean/Air/Road)
6. Customs Clearance (Import)
7. Final Delivery / Warehousing

Layout: Vertical or horizontal animated timeline, each step with icon, title, description, and relevant documentation notes (e.g. Bill of Lading, Commercial Invoice, Packing List).

Components: `ProcessTimeline`, `StepCard`, `DocumentationChecklist`

---

## 6. Global Trade Network (`/network`)

Purpose: Visualize global reach and partnerships.

- **Interactive/Static World Map** — shipping routes, key ports, partner regions
- **Key Trade Corridors** — list/cards (e.g. Asia–Europe, Trans-Pacific, Intra-Asia)
- **Partner Network** — freight partners, customs brokers, agents (logos or names)
- **Regional Offices / Hubs** — list with country + city

Components: `WorldMapInteractive`, `TradeCorridorCards`, `PartnerLogoGrid`, `RegionalOfficeList`

---

## 7. Why Choose Us (`/why-us`)

Purpose: Differentiation + compliance credibility (can also house Certifications).

- **Key Differentiators** — 4–6 cards (Reliability, Real-Time Coordination, Compliance Expertise, Competitive Pricing, Dedicated Account Management, Global Coverage)
- **Certifications & Compliance** — badge grid (ISO, customs authority accreditations, trade association memberships — placeholders until real certs provided)
- **Compliance Statement** — short paragraph on regulatory adherence
- **Comparison/Advantage Table** (optional)

Components: `DifferentiatorGrid`, `CertificationBadgeGrid`, `ComplianceStatement`

---

## 8. Fleet, Warehouses & Infrastructure (`/infrastructure`)

Purpose: Demonstrate physical operational capability.

- **Fleet Overview** — vehicle types, capacity stats
- **Warehousing Facilities** — locations, total sq. ft./sq. m, storage types (bonded, cold chain, general)
- **Technology & Tracking Systems** — informational description only (not a live tracking tool)
- **Infrastructure Stats** — counters (fleet size, warehouse count, total storage capacity)
- **Image Gallery** — ports, warehouses, fleet photography

Components: `FleetOverviewCards`, `WarehouseLocationGrid`, `InfraStatCounters`, `ImageGallery`

---

## 9. Client Testimonials (`/testimonials`)

Purpose: Social proof.

- Filterable/grid layout of testimonial cards: client name, company, industry, quote, rating (optional)
- Featured testimonial spotlight (larger card at top)

Components: `TestimonialGrid`, `FeaturedTestimonial`

---

## 10. FAQ (`/faq`)

Purpose: Address common export/logistics questions.

Suggested categories:
- General / Getting Started
- Documentation Requirements
- Customs & Compliance
- Shipping Timelines
- Pricing & Quotes (informational, no live pricing)
- Freight Types (Ocean/Air/Road)

Layout: Accordion grouped by category.

Components: `FAQAccordion`, `FAQCategoryTabs`

---

## 11. Latest Insights / Industry Articles (`/insights`, `/insights/[slug]`)

Purpose: Thought leadership, SEO, education.

Listing page:
- Article cards: image, category tag, title, excerpt, date, read time
- Category filter (Trade News, Regulations, Supply Chain Tips, Company News)

Detail page:
- Article hero image, title, meta (date, author, category)
- Rich text body
- Related articles section

Components: `InsightCardGrid`, `ArticleFilterTabs`, `ArticleBody`, `RelatedArticles`

*(Content source: static MDX/JSON for now since there's no backend — easy to edit later.)*

---

## 12. Contact (`/contact`)

Purpose: Convert interest into inquiries (visual-only form unless functionality added later).

- **Contact Hero** — headline + short intro
- **Contact Form (UI only)** — Name, Company, Email, Phone, Service Interest (dropdown), Message, Submit button (non-functional until backend/email service is wired up)
- **Company Contact Info** — HQ address, phone, email, business hours
- **Office Locations Map** — pins for offices/branches
- **Department Contacts** (optional) — Sales, Customer Support, Careers

Components: `ContactHero`, `ContactFormUI`, `ContactInfoCard`, `OfficeMap`

---

## Global Components (used across pages)

| Component | Used In |
|---|---|
| `Header` / `NavBar` | All pages |
| `Footer` | All pages |
| `CTABanner` | Home, Services, Industries, Contact |
| `StatCounter` | Home, Infrastructure |
| `SectionHeading` | All pages (consistent title/eyebrow pattern) |
| `Breadcrumbs` | All inner pages |
| `Button` (primary/secondary, brand orange/navy variants) | All pages |
| `Card` (base card with hover state) | Services, Industries, Insights, Testimonials |

---

## Design Tokens (Tailwind config reference)

```ts
colors: {
  navy: "#001B29",       // primary
  orange: "#FC8430",     // accent / CTA
  steel: "#2D3133",      // structural / text
  light: "#E0E3E5",      // backgrounds / borders
}
fontFamily: {
  display: ["Public Sans", "sans-serif"], // headings
  body: ["Inter", "sans-serif"],          // body/UI text
}
```

---

## Notes for Later Editing

- All content above is placeholder/informational scaffolding based on the project brief — swap in real company facts, certifications, office addresses, and testimonials before launch.
- No page includes authentication, tracking, booking, or payment functionality per brief Section 7.
- Contact form and "Request a Quote" buttons are visual-only until a backend/email service is connected.
- Services and Insights use dynamic `[slug]` routes — pair with a static JSON/MDX data source for easy content edits without touching components.