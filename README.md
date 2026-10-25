# Codox React Website

A Vite + React conversion of the supplied Codox HTML export. The original Tailwind class names, typography, colors, page sections, images, and interaction scripts have been retained where possible.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project layout
- `src/components/sections/`: one React component per original page section and footer
- `src/components/common/`: reusable shared UI primitives (`Button`, `SectionHeading`)
- `src/hooks/useSiteInteractions.js`: migrated pointer effects, scroll behavior, reveal animations, and FAQ interactions
- `src/styles/index.css`: Tailwind entry point and global styles
- `tailwind.config.js`: original exported color, spacing, radius, and typography tokens

## Notes
- The source export referenced an unresolved `{{DATA:ANIMATION:ANIMATION_112}}` placeholder. It was not executable source code, so it was omitted.
- Images that were remote in the original HTML remain remote URLs. Download and move them into `src/assets/` if you want to self-host them.
- Contact forms and links keep their original destinations/placeholder behavior; connect them to your backend or a form service when those endpoints are available.
