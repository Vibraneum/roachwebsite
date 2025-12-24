# IRISE Website - Cloud Documentation

## Overview
IRISE is a cockroach-inspired bio-mimetic robot website built with [Astro](https://astro.build). This documentation covers setup, development, deployment, and maintenance.

---

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs at `http://localhost:4321`

---

## Project Structure

```
roach website/
├── public/
│   ├── favicon.svg       # Site favicon
│   ├── robots.txt        # SEO crawl directives
│   └── site.webmanifest  # PWA manifest
├── src/
│   ├── components/
│   │   ├── SEO.astro     # Meta tags & structured data
│   │   ├── Header.astro  # Site header with navigation
│   │   └── Footer.astro  # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro   # Homepage
│   └── styles/
│       └── global.css    # Design system & utilities
├── astro.config.mjs      # Astro configuration
├── package.json
└── tsconfig.json
```

---

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

---

## SEO Configuration

### Meta Tags
Edit `src/components/SEO.astro` defaults:
- `title` - Page title
- `description` - Page description
- `image` - OG image for social sharing

### robots.txt
Located at `public/robots.txt`. Pre-configured to allow all crawlers including AI/LLM bots.

### Sitemap
Auto-generated on build. Configure in `astro.config.mjs`.

### JSON-LD Structured Data
Embedded in SEO component for LLM optimization. Includes Organization, WebSite, WebPage, and Product schemas.

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build locally
npm run build

# Deploy dist/ folder to Netlify
```

### Other Platforms
Build outputs to `./dist/`. Deploy this folder to any static host.

---

## Adding Content

### New Pages
Create `.astro` files in `src/pages/`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title" description="Page description">
  <!-- Content here -->
</BaseLayout>
```

### Images
1. Place images in `public/` folder
2. Reference as `/image-name.ext`

---

## Design System

CSS custom properties are defined in `src/styles/global.css`:

- **Colors**: `--color-primary`, `--color-bg-primary`, etc.
- **Typography**: `--text-sm` to `--text-5xl` (fluid)
- **Spacing**: `--space-1` to `--space-32`
- **Utilities**: `.container`, `.btn`, `.card`, `.glass`

---

## Environment Variables

Create `.env` or `.env.local` for secrets:
```env
# Add API keys or config here
PUBLIC_SITE_URL=https://irise.vibraneum.com
```

---

## Maintenance Checklist

- [ ] Update `site` URL in `astro.config.mjs` before production
- [ ] Replace placeholder images with actual robot images
- [ ] Add team member data
- [ ] Configure contact form backend
- [ ] Set up analytics (optional)
- [ ] Add social media links in Footer

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Schema.org](https://schema.org) - Structured data reference
- [Open Graph Protocol](https://ogp.me)

---

*Last updated: December 2024*
