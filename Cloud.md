# Irise Capital Website - Cloud Documentation

## Overview
Irise Capital is an investment advisory firm website built with [Astro](https://astro.build). This documentation covers setup, development, deployment, and maintenance.

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
│   ├── favicon.svg       # Brand favicon
│   ├── robots.txt        # SEO crawl directives
│   └── site.webmanifest  # PWA manifest
├── src/
│   ├── components/
│   │   ├── SEO.astro     # Meta tags & structured data (FinancialService)
│   │   ├── Header.astro  # Site header with navigation
│   │   └── Footer.astro  # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro   # Homepage with all sections from design
│   └── styles/
│       └── global.css    # Design system & utilities
├── astro.config.mjs      # Astro configuration
├── package.json
└── tsconfig.json
```

---

## Content Sections (Based on Design)

- **Hero**: "Empowering Informed Investment Decisions"
- **Marquee**: "Never Settle For Less"
- **Services**: Investment Confidence, Personalized Planning
- **Investments**: Crypto, Stocks, Mutual Funds, Commodities
- **Range of Investments Chart**: Pie chart visualization
- **Benefits**: Account Setup, Support, Education
- **Founder**: Raajveer Nath bio
- **Contact**: Form and email

---

## SEO Configuration

### Meta Tags
Edit `src/components/SEO.astro` defaults:
- Title: Irise Capital | Empowering Informed Investment Decisions
- Description: Investment Advisory Firm info...

### Structured Data
Includes `FinancialService` schema with founder information, address, and price range.

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## Design System

CSS custom properties are defined in `src/styles/global.css`:
- **Primary Color**: Green (#00ff88)
- **Background**: Dark (#0a0a0a)
- **Typography**: Inter (Body) + Outfit (Headings)

*Last updated: December 2024*
