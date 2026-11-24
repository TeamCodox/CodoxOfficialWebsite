# Codox Official Website

A dark, editorial agency website built with React, Vite, and Tailwind CSS. It includes a homepage, filterable portfolio, six service-detail routes, and a privacy policy page, with glass surfaces, responsive navigation, 3D pointer effects, marquees, and reduced-motion support.

![Codox](src/assets/logo.png)

## Table of contents

- [Features](#features)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Configuration and content](#configuration-and-content)
- [Routing and deployment](#routing-and-deployment)
- [Interactive behavior](#interactive-behavior)
- [Current integration status](#current-integration-status)
- [Development notes](#development-notes)
- [License](#license)

## Features

- Responsive homepage with hero, services, projects, team, pricing, testimonials, workflow, FAQ, contact, and footer sections
- Portfolio page with category filtering and pagination
- Dedicated detail pages for web development, mobile development, UI/UX design, admin panel development, SEO, and brand identity
- Privacy policy page with in-page document navigation
- Shared navigation, UI primitives, loading screen, and page data
- Pointer-based 3D tilt and radial glare on cards
- Elastic SVG wireframe interaction in the hero
- Draggable, spring-animated liquid-glass magnifier on the portfolio
- Infinite marquee tracks and scroll-reveal animations
- Mobile navigation drawer with Escape, outside-click, and resize handling
- Reduced-motion fallbacks and touch-device safeguards
- Centralized content and technology registries in `src/constants`

## Technology stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| Icons | Lucide React and Material Symbols |
| Fonts | Hanken Grotesk, Poppins, Playfair Display |
| Package lock | npm, lockfile version 3 |

The locked dependencies currently resolve to React 19.3.1, Vite 8.3.4, and Lucide React 1.77.0.

## Project structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx                 # Route switching, loading state, and hash scrolling
    ├── main.jsx                # React entry point
    ├── assets/                 # Brand, loader, hero, and technology logos
    ├── components/
    │   ├── common/             # Header, marquee, and liquid magnifier
    │   ├── legal/              # Privacy policy page components
    │   ├── portfolio/          # Portfolio hero, project grid, and CTA
    │   ├── sections/           # Homepage sections
    │   ├── services/           # Service detail sections
    │   └── ui/                 # Reusable cards, headings, buttons, and effects
    ├── constants/              # Navigation and all content registries
    ├── context/                # Loading provider
    ├── hooks/                  # Shared DOM interaction lifecycle
    ├── lib/                    # Small utilities
    ├── pages/                  # Top-level portfolio, privacy, and service pages
    └── styles/
        └── index.css           # Tailwind directives and global animations
```

Important source locations:

- `src/App.jsx` contains the complete client-side route switch.
- `src/constants/index.js` re-exports the content modules.
- `src/components/ui/index.js` re-exports reusable UI primitives.
- `src/hooks/useSiteInteractions.js` manages card tilt, glare, reveal, and cleanup behavior.
- `src/styles/index.css` contains custom keyframes and global scroll behavior.

## Routes

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/App.jsx` | Main agency landing page |
| `/portfolio` | `src/pages/PortfolioPage.jsx` | Filterable project archive |
| `/privacy-policy` | `src/pages/PrivacyPolicyPage.jsx` | Privacy policy document |
| `/services/web-development` | `src/pages/ServiceDetailPage.jsx` | Web development detail |
| `/services/mobile-development` | `src/pages/ServiceDetailPage.jsx` | Mobile development detail |
| `/services/ui-ux-design` | `src/pages/ServiceDetailPage.jsx` | UI/UX design detail |
| `/services/admin-panel-development` | `src/pages/ServiceDetailPage.jsx` | Admin panel detail |
| `/services/seo-services` | `src/pages/ServiceDetailPage.jsx` | SEO services detail |
| `/services/brand-identity` | `src/pages/ServiceDetailPage.jsx` | Brand identity detail |

Hash links such as `/#services`, `/#projects`, and `/#contact` scroll to sections after navigation. Unknown service slugs render a “Service not found” state.

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

These versions satisfy the engine requirement used by the locked Vite 8 toolchain.

### Installation

```bash
npm install
```

Use `npm ci` for a clean install that exactly follows `package-lock.json`.

### Development

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that output locally.

The production build is currently verifiable and succeeds with Vite 8.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

There is no test runner or linter configured in `package.json`.

## Configuration and content

Tailwind theme tokens are defined in `tailwind.config.js`. The global stylesheet is `src/styles/index.css`.

### Navigation

Edit `src/constants/navigation.js`:

- `NAV_ITEMS` — header links
- `FOOTER_SECTIONS` — footer columns
- `FOOTER_SOCIAL_LINKS` — footer social profiles

The header resolves links differently based on whether it is fixed on the homepage or absolute on another page.

### Services

Edit `src/constants/services.js`:

- `SERVICES` — homepage service cards
- `SERVICE_CONTENT` — copy for service-detail routes
- `SERVICE_STACK_KEYS` — mapping between route slugs and technology-stack registries

### Technology stacks

Edit `src/constants/techstack.js`:

- `TECH` — one-time registry for names and logo assets
- `TECH_STACK` — technology groups for each service

Technology details are presented in `src/components/services/ServiceTechStack.jsx`.

### Projects

Edit `src/constants/projects.js` and add or update entries in `PROJECTS`:

```js
{
  number: "05",
  title: "Example Product",
  category: "Product Platform",
  code: "// product.launch()",
  image: "/path-to-preview.png",
  imagePosition: "top center",
  description: "Short description of the project.",
  tags: ["React", "Tailwind CSS"],
}
```

The same data is used by the homepage and portfolio. The portfolio currently duplicates the four real entries to generate 24 sample cards; set `USE_SAMPLE_DATA` and `SAMPLE_PROJECT_COUNT` in `src/components/portfolio/PortfolioProjects.jsx` to switch or tune this behavior.

### Other content

| Module | Primary export |
| --- | --- |
| `src/constants/pricing.js` | `PRICING_PLANS` |
| `src/constants/testimonials.js` | `TESTIMONIALS` |
| `src/constants/workflow.js` | `WORKFLOW` |
| `src/constants/team.js` | `TEAM_MEMBERS` |
| `src/constants/faqs.js` | `FAQS` |
| `src/constants/contact.js` | `CONTACT_INFO`, `CONTACT_SOCIALS` |
| `src/constants/hero.js` | Hero wireframe, cursor, and action data |
| `src/constants/legal.js` | Privacy policy metadata, sections, and contact |

## Routing and deployment

Routing is implemented with browser `window.location.pathname` and `popstate`; it does not use React Router or another routing library.

For a static host, configure an SPA fallback so every route serves `index.html`:

- Netlify: create `_redirects` containing `/* /index.html 200`
- Vercel: add framework-appropriate rewrite rules or deploy through Vite detection
- Apache: enable a fallback rewrite to `index.html`
- nginx: route unresolved paths to `index.html`

Example nginx location:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Because the project uses root-relative URLs, deploy it at the domain root or update asset and navigation URLs when hosting below a subpath.

## Interactive behavior

### Loading screen

`LoadingBar` displays for 2 seconds on initial or route-level loads and honors `prefers-reduced-motion`.

### Cards and reveals

`useSiteInteractions` adds pointer tilt and radial glare to supported fine-pointer devices. It reveals project, team, and pricing cards with `IntersectionObserver`, and skips or disables those effects for reduced-motion users and touch devices.

### Hero

The hero models a wireframe with points and springs. Pointer movement or drag can deform edges, while pointer capture and boundary limits keep the interaction controlled.

### Portfolio magnifier

`LiquidGlassMagnifier` provides dragging and throwing with velocity, damping, and boundary bounce. `LiquidGlass` supplies the SVG/canvas displacement filter used by the magnifier.

### Marquees

Marquee tracks move in both directions and pause on hover where supported. Reduced-motion CSS should stop or suppress decorative movement.

## Current integration status

Some UI is intentionally decorative or awaiting a real backend integration:

- The contact form prevents browser submission but does not send data anywhere.
- Social and community entries in `src/constants/contact.js` may point to placeholder domains or `#`.
- Several footer links are placeholders, including Terms of Service and Cookie Policy.
- The portfolio currently uses sample pagination populated from the same four entries in `PROJECTS`.
- Project cards load remote Google-hosted image URLs.
- The privacy policy content and legal contact details are sample content that should be reviewed before production use.
- No analytics, CMS, database, authentication, or form-service integration is configured.

These items should be completed before using the site for a live business.

## Development notes

- Prefer editing constants instead of duplicating copy inside section components.
- Use the UI exports in `src/components/ui/index.js` for shared visual primitives.
- Add route-aware cleanup to new global DOM effects and respect `prefers-reduced-motion`.
- Keep internal navigation rooted at `/` or `/#section` so hash navigation works across pages.
- Replace placeholder or remote project assets with reviewed, locally or canonically hosted resources.
- Add tests and linting before production; neither is currently configured.

## License

No license file or license declaration is currently present in this repository. All usage, distribution, and modification rights should be clarified before public release.
