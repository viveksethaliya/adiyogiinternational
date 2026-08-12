# Adiyogi International - Project Structure

Below is the high-level directory structure for the Adiyogi International website, built with Next.js 16 (App Router) and Tailwind CSS v4.

```text
t:\freelance\adiyogi\
├── DOCS/                       # Project documentation
│   └── content.md              # Brand messaging and copy
├── public/                     # Static assets (images, icons, etc.)
│   ├── hero_port_ship_*.png
│   ├── warehouse_interior_*.png
│   ├── truck_highway_*.png
│   └── products/               # Product specific images and videos
│       ├── 1/                  # Anugrah Chakki Fresh Atta assets
│       ├── 2/                  # SLB Kabutar Masala assets
│       └── 3/                  # Natural Keshari Gold assets
├── src/                        # Source code
│   ├── app/                    # Next.js App Router structure
│   │   ├── about/
│   │   │   └── page.tsx        # About Us page
│   │   ├── api/
│   │   │   └── contact/        # Contact form API route
│   │   │       └── route.ts
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact Us page
│   │   ├── products/
│   │   │   ├── anugrah-chakki-fresh-atta/
│   │   │   │   └── page.tsx    # Product Detail: Anugrah Atta
│   │   │   ├── kabutar-masala/
│   │   │   │   └── page.tsx    # Product Detail: Kabutar Masala
│   │   │   ├── natural-keshari-gold/
│   │   │   │   └── page.tsx    # Product Detail: Keshari Gold
│   │   │   └── page.tsx        # All Products listing page
│   │   ├── services/
│   │   │   ├── [slug]/         # Dynamic service detail pages
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx        # Services listing page
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles and Tailwind v4 theme variables
│   │   ├── layout.tsx          # Root layout with shared Header/Footer
│   │   └── page.tsx            # Homepage
│   └── components/             # Reusable React components
│       ├── layout/             # Global layout components
│       │   ├── Footer.tsx
│       │   └── Header.tsx
│       ├── shared/             # Shared functional components
│       │   ├── Breadcrumbs.tsx
│       │   ├── ContactForm.tsx
│       │   ├── CTABanner.tsx
│       │   ├── Providers.tsx
│       │   └── StatCounter.tsx
│       └── ui/                 # Base UI components
│           ├── Button.tsx
│           ├── Card.tsx
│           └── SectionHeading.tsx
├── document.md                 # Original project requirements
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration (if applicable)
└── tsconfig.json               # TypeScript configuration
```

## Key Technologies & Libraries
* **Framework:** Next.js 16 (App Router, React 19)
* **Styling:** Tailwind CSS v4 (configured via `globals.css`)
* **Icons:** `lucide-react`
* **Animations:** `framer-motion` & CSS Animations
