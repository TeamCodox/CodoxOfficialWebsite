# Codox — Production-Ready Digital Excellence Platform

A modern, high-performance, production-ready website built with **React**, **Vite**, and **Tailwind CSS**. The codebase features an atomic UI component library, centralized constants architecture, canvas/SVG shaders, a lightweight physics engine, and zero external routing dependencies.

---

## Table of Contents

- [Architectural Highlights](#architectural-highlights)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [UI Component Library (`src/components/ui/`)](#ui-component-library-srccomponentsui)
  - [SectionHeader](#1-sectionheader)
  - [SectionTitle](#2-sectiontitle)
  - [SectionBadge](#3-sectionbadge)
  - [CurvedUnderline](#4-curvedunderline)
  - [BentoCard](#5-bentocard)
  - [WatermarkNumber](#6-watermarknumber)
  - [Button](#7-button)
  - [CheckIcon](#8-checkicon)
  - [Magnetic](#9-magnetic)
  - [LiquidGlass](#10-liquidglass)
- [Data & Constants Architecture (`src/constants/`)](#data--constants-architecture-srcconstants)
- [Page & Routing Architecture](#page--routing-architecture)
  - [Homepage (`/`)](#1-homepage-)
  - [Portfolio Page (`/portfolio`)](#2-portfolio-page-portfolio)
  - [Service Detail Pages (`/services/:slug`)](#3-service-detail-pages-servicesslug)
  - [Privacy Policy Page (`/privacy-policy`)](#4-privacy-policy-page-privacy-policy)
- [Interactive Systems & Animation Pipeline](#interactive-systems--animation-pipeline)
  - [1. Elastic SVG Wireframe Simulator](#1-elastic-svg-wireframe-simulator)
  - [2. Perspective 3D Tilt & Radial Glare](#2-perspective-3d-tilt--radial-glare)
  - [3. Refraction Liquid Glass Engine](#3-refraction-liquid-glass-engine)
  - [4. Seamless Infinite Marquees](#4-seamless-infinite-marquees)
- [Developer Onboarding & Common Tasks](#developer-onboarding--common-tasks)
  - [Adding a New Project](#adding-a-new-project)
  - [Modifying Services](#modifying-services)
  - [Adjusting Pricing Tiers](#adjusting-pricing-tiers)
  - [Updating Team Members or FAQs](#updating-team-members-or-faqs)
- [Installation, Scripts, and Deployment](#installation-scripts-and-deployment)

---

## Architectural Highlights

- **Component-Driven UI Library**: Common visual primitives (headers, titles, badges, underlines, cards, watermarks, magnetic buttons) are extracted into `src/components/ui/`, eliminating markup duplication.
- **Single Source of Truth**: All static content, service definitions, project case studies, pricing tiers, FAQs, team bios, and legal clauses live in dedicated files in `src/constants/`.
- **DRY & Loop-Driven Rendering**: Sections map over typed arrays rather than copy-pasting HTML blocks, resulting in smaller bundle sizes and easier maintenance.
- **Zero-Dependency Lightweight Routing**: Built-in SPA path matching in `src/App.jsx` with full browser history support (`popstate`), smooth hash scrolling, and fallback rendering.
- **Safe DOM Lifecycle Management**: `useSiteInteractions` tracks event listeners and `IntersectionObserver` instances, cleaning them up on component unmount to prevent memory leaks.
- **Hardware-Accelerated Effects**: Leverages CSS transforms, `will-change`, and requestAnimationFrame loops for 60fps animations with full `prefers-reduced-motion` compliance.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Functional components, custom hooks, React DOM |
| **Bundler** | [Vite](https://vitejs.dev/) | Sub-second HMR, optimized Rolldown production builds |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Custom design tokens, forms plugin, responsive utility classes |
| **Icons** | [Lucide React](https://lucide.dev/) + Material Symbols | Crisp vector icons with configurable strokes and sizes |
| **Typography** | Google Fonts | Hanken Grotesk, Poppins, Playfair Display |

---

## Project Directory Structure

```text
CodoxOfficialWebsite/
├── index.html                           # Single-page application HTML entry
├── package.json                         # Project dependencies and run scripts
├── postcss.config.js                    # PostCSS configuration for Tailwind and Autoprefixer
├── tailwind.config.js                   # Design tokens (colors, fonts, radii, spacing)
├── vite.config.js                       # Vite bundler configuration with React plugin
├── README.md                            # Comprehensive project documentation
└── src/
    ├── main.jsx                         # Application entry mounting root element
    ├── App.jsx                          # Root layout, routing switch, and hash scroll handler
    ├── assets/                          # Static image assets and technology icons
    │   ├── hero.png                     # Hero section background mesh
    │   ├── logo.png                     # Primary Codox brand logo
    │   └── expertise/                   # Technology logos categorized by domain
    │       ├── cloud/                   # Vercel, Firebase, Netlify, Neon, OpenShift
    │       ├── codequality/             # SonarQube, Wiz
    │       ├── database/                # PostgreSQL, MySQL, MongoDB, Oracle
    │       ├── design/                  # Figma, User Research, Wireframing, Prototyping
    │       ├── devops/                  # Jenkins, GitLab
    │       ├── frameworks/              # React, Next.js, Node.js, Spring Boot, Flask, Vite, etc.
    │       ├── ide/                     # VS Code, IntelliJ IDEA
    │       ├── langs/                   # JavaScript, Python, Java
    │       ├── logging/                 # Kibana, Observe
    │       ├── seo/                     # Google Analytics, Search Console
    │       ├── versioncontrol/          # Git, GitHub, Bitbucket
    │       └── web/                     # HTML5, CSS3
    ├── components/
    │   ├── ui/                          # Reusable UI component library
    │   │   ├── BentoCard.jsx            # Frosted glass bento card with radial glare & tilt
    │   │   ├── Button.jsx               # Universal primary gradient and ghost pill button
    │   │   ├── CheckIcon.jsx            # Circular glowing checkmark indicator
    │   │   ├── CurvedUnderline.jsx      # Dual-stroke expressive SVG underline
    │   │   ├── LiquidGlass.jsx          # SVG displacement filter & refraction glass effect
    │   │   ├── Magnetic.jsx             # Magnetic cursor follower hover wrapper
    │   │   ├── SectionBadge.jsx         # Glowing pill badge with animated radar pulse
    │   │   ├── SectionHeader.jsx        # Standardized 2-column & centered section header
    │   │   ├── SectionTitle.jsx         # Section display heading with highlight & underline
    │   │   ├── WatermarkNumber.jsx      # Giant faded background corner number
    │   │   └── index.js                 # Barrel export for all UI components
    │   ├── common/                      # Shared compound site widgets
    │   │   ├── Header.jsx               # Fixed/absolute global navigation bar with pill menu
    │   │   ├── Marquee.jsx              # Bottom ticker marquee with horizontal mask fade
    │   │   └── LiquidGlassMagnifier.jsx # Draggable and throwable lens with spring physics
    │   ├── sections/                    # Homepage section components
    │   │   ├── HeroSection.jsx          # Elastic wireframe interactive hero section
    │   │   ├── ServicesSection.jsx      # Bento grid showcasing agency services
    │   │   ├── ProjectsSection.jsx      # Case studies showcase with ProjectCard component
    │   │   ├── TeamSection.jsx          # Team member cards with bio reveal on hover
    │   │   ├── PricingSection.jsx       # 3-tier pricing cards with feature checklists
    │   │   ├── TestimonialsSection.jsx  # Dual-track bidirectional marquee of client quotes
    │   │   ├── WorkflowSection.jsx      # 5-step delivery process timeline with glowing beam
    │   │   ├── FaqSection.jsx           # Accordion FAQ section with interactive sidebar
    │   │   ├── ContactSection.jsx       # Connectivity hub with inquiry form
    │   │   └── SiteFooter.jsx           # Giant brand watermark, link columns, legal footer
    │   ├── portfolio/                   # Dedicated Portfolio page components
    │   │   ├── PortfolioHero.jsx        # Portfolio display hero with draggable magnifier
    │   │   ├── PortfolioProjects.jsx    # Filterable project category grid with pagination
    │   │   └── PortfolioCta.jsx         # High-impact CTA with rotating border beam & magnetic buttons
    │   ├── services/                    # Dedicated Service Detail page components
    │   │   ├── ServiceDetailHero.jsx    # Canvas headline with measured selection box & cursor
    │   │   ├── ServiceFeatureGrid.jsx   # 3-card offering and engineering bento grid
    │   │   ├── ServiceProcess.jsx       # 4-stage technical delivery process timeline
    │   │   ├── ServiceTechStack.jsx     # Technical ecosystem cards with interactive chip tooltips
    │   │   └── serviceContent.js        # Legacy re-export forwarder
    │   ├── legal/                       # Dedicated Legal page components
    │   │   ├── components/
    │   │   │   ├── LegalHero.jsx        # Document header with metadata and version
    │   │   │   ├── LegalContent.jsx     # Two-column layout with sticky on-this-page navigation
    │   │   │   ├── LegalSection.jsx     # Individual numbered legal disclosure section
    │   │   │   └── LegalContactInformation.jsx # Official privacy team and headquarters cards
    │   │   └── constants.js             # Legacy re-export forwarder
    │   └── techstack/                   # Legacy techstack forwarder
    │       └── techstack.js             # Legacy re-export forwarder
    ├── constants/                       # Single source of truth data dictionaries
    │   ├── contact.js                   # Contact copy, social links, and headquarters info
    │   ├── faqs.js                      # FAQ items and answers
    │   ├── hero.js                      # Wireframe coordinates, cursor labels, and hero CTA actions
    │   ├── legal.js                     # Privacy policy clauses, metadata, and contact data
    │   ├── navigation.js                # Header nav items, footer columns, and footer social links
    │   ├── pricing.js                   # Beginner, Professional, and Enterprise pricing plans
    │   ├── projects.js                  # Featured case studies and portfolio projects
    │   ├── services.js                  # Homepage services array and detail page content maps
    │   ├── team.js                      # Team members, roles, bios, and social links
    │   ├── techstack.js                 # Unified tech registry (tools, logos, and service mappings)
    │   ├── testimonials.js              # Client quote cards and attribution info
    │   └── index.js                     # Barrel export for all application constants
    ├── hooks/
    │   └── useSiteInteractions.js       # 3D card tilts, pointer glare, and scroll reveal observer
    ├── lib/
    │   └── utils.js                     # ClassName merger utility (`cn`)
    └── styles/
        └── index.css                    # Tailwind directives, keyframe animations, global scroll rules
```

---

## UI Component Library (`src/components/ui/`)

All reusable UI components are located in `src/components/ui/` and can be imported directly or via the barrel file:

```jsx
import { SectionHeader, BentoCard, Button, SectionBadge } from "@/components/ui";
```

### 1. `SectionHeader`
Standardizes the header layout across all major website sections.

**Props:**
- `badge` *(string)*: Label for the top pill badge (e.g., `"our services"`).
- `titlePrefix` *(string)*: Standard heading text before the highlight (e.g., `"Solutions We"`).
- `titleHighlight` *(string)*: Italicized highlight word rendered in Playfair Display (e.g., `"Provide"`).
- `titleSuffix` *(string, optional)*: Punctuation or trailing text (e.g., `"."`).
- `subtitleEyebrow` *(string, optional)*: Uppercase subtitle label above the description.
- `subtitleDescription` *(string, optional)*: Explanatory paragraph.
- `centered` *(boolean, default: false)*: When `true`, renders a centered layout (e.g., in Testimonials). When `false`, renders the signature 2-column split header.
- `titleSize` *(string, default: "normal")*: `"normal"` | `"compact"` | `"large"`.

**Usage Example:**
```jsx
<SectionHeader
  badge="our services"
  titlePrefix="Solutions We"
  titleHighlight="Provide"
  subtitleEyebrow="Made for what's next"
  subtitleDescription="From first sketch to final launch, we build polished digital products that move your business forward."
/>
```

---

### 2. `SectionTitle`
Renders the responsive display heading with gradient text, an italic Playfair Display highlighted word, and the signature animated SVG underline.

**Props:**
- `prefix` *(string)*: Leading text.
- `highlight` *(string)*: Word to highlight with serif font and curved underline.
- `suffix` *(string, optional)*: Trailing text or punctuation.
- `size` *(string, default: "normal")*: `"compact"` | `"normal"` | `"large"`.

---

### 3. `SectionBadge`
A frosted pill badge featuring an animated pinging radar pulse dot.

**Props:**
- `label` *(string)*: Text displayed in uppercase font with tracking.
- `pulseColor` *(string, default: "bg-primary")*: Tailwind color class for the radar dot.
- `children` *(ReactNode, optional)*: Extra badges, counts, or icons to render inside the pill.

---

### 4. `CurvedUnderline`
The dual-stroke expressive SVG underline positioned underneath the section title highlight word. Uses non-scaling strokes and handles hover animations smoothly.

---

### 5. `BentoCard`
The signature frosted glass bento container used across Services, Tech Stack, and Features.

**Props:**
- `colSpan` *(string)*: Responsive grid column span (e.g., `"lg:col-span-7"`).
- `className` *(string)*: Additional custom classes.
- `style` *(object)*: Inline style overrides.
- `children` *(ReactNode)*: Content rendered inside the card.

**Features:**
- Frosted gradient backdrop (`from-white/[0.07] via-white/[0.035] to-white/[0.015]`).
- Cursor-following glare element (`.bento-glare`).
- 3D perspective depth with tilt on mouse move.

---

### 6. `WatermarkNumber`
Large, semi-transparent decorative number (`01`, `02`, `03`...) placed in the corner of cards. Uses a linear mask to fade into the card background.

**Props:**
- `number` *(string)*: The numeral string (e.g., `"01"`).
- `position` *(string, default: "-bottom-5 -right-2")*: Absolute placement classes.

---

### 7. `Button`
Universal call-to-action button and link component.

**Props:**
- `href` *(string, optional)*: If provided, renders an `<a>` tag; otherwise renders a `<button>`.
- `variant` *(string, default: "primary")*:
  - `"primary"`: Specular metallic gradient pill (`linear-gradient(#e2e2e2, #c6c6c7)`) with inset shadow.
  - `"secondary"`: Frosted dark glass container with border and hover glow.
  - `"ghost"`: Minimalist subtle border with transparent background.
- `icon` *(ReactNode, optional)*: Icon element.
- `iconPosition` *(string, default: "right")*: `"left"` | `"right"`.

---

### 8. `CheckIcon`
Circular badge with a glowing primary checkmark, used in pricing feature lists and trust checklists.

---

### 9. `Magnetic`
A physics-inspired hover wrapper that tracks the cursor and nudges child elements toward the pointer using spring translation.

**Props:**
- `strength` *(number, default: 0.25)*: Strength of the magnetic attraction.
- `children` *(ReactNode)*: Interactive button or element to wrap.

---

### 10. `LiquidGlass`
A canvas-backed SVG displacement filter engine that simulates real optical refraction, bevel depths, chromatic dispersion, and frosted glass distortion.

---

## Data & Constants Architecture (`src/constants/`)

All site content is decoupled from layout components into clean, typed modules:

| Constant File | Description | Key Exports |
| :--- | :--- | :--- |
| `navigation.js` | Site navigation, header links, footer columns, and social links | `NAV_ITEMS`, `FOOTER_SECTIONS`, `FOOTER_SOCIAL_LINKS` |
| `services.js` | Primary 6 services and deep content mapping for service detail pages | `SERVICES`, `SERVICE_STACK_KEYS`, `SERVICE_CONTENT` |
| `projects.js` | Case study data, screenshots, tags, categories, and code labels | `PROJECTS` |
| `pricing.js` | Tier names, pricing amounts, currency, features, and highlight badges | `PRICING_PLANS` |
| `testimonials.js` | Client quotes, highlighted phrases, client names, roles, and initials | `TESTIMONIALS` |
| `workflow.js` | 5-step delivery process with icons, descriptions, and code identifiers | `WORKFLOW` |
| `team.js` | Team members, headshots, roles, bios, and social profile links | `TEAM_MEMBERS` |
| `faqs.js` | Frequently asked questions and detailed answers | `FAQS` |
| `contact.js` | Contact section metadata, headquarters location, and social links | `CONTACT_INFO`, `CONTACT_SOCIALS` |
| `hero.js` | Elastic wireframe coordinates, floating cursor labels, and CTA actions | `CORNER_POSITIONS`, `FRAME_EDGES`, `CURSOR_LABELS`, `HERO_ACTIONS` |
| `techstack.js` | Master registry of technologies with asset logos and service category mapping | `TECH`, `TECH_STACK` |
| `legal.js` | Privacy policy clauses, version history, and legal contact details | `LEGAL_PAGE_METADATA`, `PRIVACY_POLICY_SECTIONS`, `PRIVACY_CONTACT` |
| `index.js` | Central barrel export exporting all constants | `export * from "./..."` |

---

## Page & Routing Architecture

Routing is managed in `src/App.jsx` without external routing packages, leveraging Vite's built-in SPA fallback and HTML5 History API:

### 1. Homepage (`/`)
The primary landing experience. Renders sequentially:
1. `HeroSection`: Interactive SVG rubber-band wireframe, floating cursors, hero headline, and quick CTA actions.
2. `ServicesSection`: 6-card bento grid displaying core capabilities with "Learn More" links pointing to `/services/:slug`.
3. `ProjectsSection`: Featured work grid showcasing real-world products with category tags and direct access to `/portfolio`.
4. `TeamSection`: Behind-the-scenes engineering and design leaders with interactive bio cards.
5. `PricingSection`: Transparent tiered pricing plans with feature checklists and "Get Started" triggers.
6. `TestimonialsSection`: High-speed dual-track infinite marquee of verified client stories.
7. `WorkflowSection`: Interactive 5-step delivery timeline connected by a luminous SVG gradient pipe.
8. `FaqSection`: Animated accordion answering key questions with a dedicated "Still curious?" contact card.
9. `ContactSection`: Project intake form with headquarters details and social community channels.
10. `SiteFooter`: Full-width CODOX brand watermark, product links, company links, legal links, and copyright info.

### 2. Portfolio Page (`/portfolio`)
Accessed from the header or via the "Explore All Projects" button:
- `PortfolioHero`: Display headline with interactive throwable `LiquidGlassMagnifier` lens and bottom marquee.
- `PortfolioProjects`: Filterable category switcher ("All Projects", "Product Platform", "Digital Experience", "DeFi Protocol", "Brand Identity") with animated sliding thumb and pagination controls (Previous/Next with numeric pagination and ellipsis collapsing).
- `PortfolioCta`: High-impact closing banner featuring a rotating conic border beam, slow scanline, and magnetic buttons.
- Followed by `FaqSection`, `ContactSection`, and `SiteFooter`.

### 3. Service Detail Pages (`/services/:slug`)
Dynamic route supporting 6 dedicated service blueprints:
- `/services/web-development`
- `/services/mobile-development`
- `/services/ui-ux-design`
- `/services/admin-panel-development`
- `/services/seo-services`
- `/services/brand-identity`

**Components rendered:**
- `ServiceDetailHero`: Features a design-canvas selection overlay (`SelectedTitle`) that dynamically measures the headline's width and height in real time, animated cursor landing, and quick consultation buttons.
- `ServiceFeatureGrid`: 3-card bento grid highlighting Core Offering, Infrastructure, and Engineering metrics.
- `ServiceProcess`: 4-stage process timeline ("Strategic Discovery", "System Architecture", "Precision Engineering", "Global Launch").
- `ServiceTechStack`: Bento grid mapping the specific tools, frameworks, databases, and platforms powering that service, complete with hover tooltips.
- Followed by `SiteFooter`.

### 4. Privacy Policy Page (`/privacy-policy`)
Comprehensive legal documentation page:
- `LegalHero`: Frosted glass header displaying metadata, document version, and last updated timestamp.
- `LegalContent`: Two-column layout featuring 6 legal sections, an interactive sticky "On this page" sidebar for quick jumping, and dedicated legal contact information.
- Followed by `SiteFooter`.

---

## Interactive Systems & Animation Pipeline

### 1. Elastic SVG Wireframe Simulator
Located in `HeroSection.jsx`:
- Models an interactive rectangle with 4 edges and normal vectors.
- Samples 11 points per edge with a dynamic Gaussian influence formula:
  $$\text{influence} = \exp\left(-\left(\frac{\text{distance}}{170}\right)^2\right)$$
- Connects points using cubic Bézier segments (`C x1 y1, x2 y2, endX endY`) to form a smooth organic contour.
- Supports pointer drag interactions with boundary clamping (`MAX_STRETCH = 72px`) and spring return physics.

### 2. Perspective 3D Tilt & Radial Glare
Managed globally via `useSiteInteractions.js`:
- Tracks cursor offset relative to card centers.
- Computes proportional rotation angles (`rotateX`, `rotateY`) and smooth scale transforms.
- Updates CSS custom properties (`--mouse-x`, `--mouse-y`) to position a dynamic radial gradient specular glare.

### 3. Refraction Liquid Glass Engine
Located in `LiquidGlass.jsx`:
- Dynamically creates an offscreen HTML5 2D canvas displacement map representing a rounded bevel profile.
- Renders normal-vector RGB color encodes into an SVG `<feDisplacementMap>` filter.
- Applies chromatic dispersion, lens blur (`feGaussianBlur`), and backdrop refraction.
- Integrated with `LiquidGlassMagnifier.jsx` which calculates 2D velocity, damping, boundary bounce restitution ($e = 0.8$), and drag pointer capture.

### 4. Seamless Infinite Marquees
CSS keyframe tracks in `src/styles/index.css`:
- Forward track (`.animate-marquee`): transforms $X$ from `0%` to `-50%`.
- Reverse track (`.animate-marquee-reverse`): transforms $X$ from `-50%` to `0%`.
- Automatically pauses on mouse hover (`hover:[animation-play-state:paused]`).
- Fully disabled for visitors with `prefers-reduced-motion: reduce`.

---

## Developer Onboarding & Common Tasks

### Adding a New Project
1. Open `src/constants/projects.js`.
2. Append a new project object to the `PROJECTS` array:
   ```javascript
   {
     number: "05",
     title: "Nova Protocol",
     category: "Product Platform",
     code: "// protocol.scale()",
     image: "https://your-image-url.com/preview.png",
     imagePosition: "top center",
     description: "A decentralized consensus engine built for high-throughput networks.",
     tags: ["React", "Rust", "WebSockets"],
   }
   ```
3. The new project will automatically appear in both the homepage `ProjectsSection` and the filterable `PortfolioProjects` grid.

### Modifying Services
- To modify the homepage cards, edit `SERVICES` in `src/constants/services.js`.
- To modify the detail page content or copy, edit `SERVICE_CONTENT` in `src/constants/services.js`.
- To attach different technologies to a service, update `TECH_STACK` in `src/constants/techstack.js`.

### Adjusting Pricing Tiers
Open `src/constants/pricing.js` and modify the values in `PRICING_PLANS`. Set `highlighted: true` on whichever card should display the elevated border and "Most Common" badge.

### Updating Team Members or FAQs
- Team members: edit `TEAM_MEMBERS` in `src/constants/team.js`.
- FAQ entries: edit `FAQS` in `src/constants/faqs.js`.

---

## Installation, Scripts, and Deployment

### Prerequisites
- **Node.js**: `20.19+` or `22.12+` (LTS recommended)
- **Package Manager**: `npm` (v10+) or `pnpm`

### Local Development
```bash
# Install dependencies
npm install

# Start Vite development server with Hot Module Replacement
npm run dev
```

### Production Build
```bash
# Build optimized client bundles into dist/
npm run build

# Preview the production build locally
npm run preview
```

### Deployment
The output in `dist/` is completely static and can be deployed directly to:
- **Vercel** (`vercel deploy`)
- **Netlify** (`netlify deploy --prod --dir=dist`)
- **Cloudflare Pages** (Build command: `npm run build`, output directory: `dist`)
- **GitHub Pages** / **AWS S3 + CloudFront**

---

*Architected with precision by the Codox Engineering Team.*
