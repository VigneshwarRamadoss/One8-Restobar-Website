# One 8 Restobar

![Status](https://img.shields.io/badge/Status-Development-orange)
![Tech Stack](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)

A premium restobar shaped around shared plates, crafted pours, and evenings that move at their own pace in Düsseldorf. Website designed by The Dot company.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16 (App Router)** | Core framework, Server Components, SSR/SSG |
| **React 19** | UI Library |
| **TypeScript 5** | Strict type safety |
| **CSS Modules** | Scoped, native CSS styling with design tokens |
| **Playwright + Axe** | Automated end-to-end and accessibility testing |

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Architecture

For a detailed visual guide of the component tree, data flow, and design system, see:
👉 [**`docs/ARCHITECTURE.md`**](./docs/ARCHITECTURE.md)

### Folder Structure

```
├── .ai/                  # AI agent configuration (Claude, etc.)
├── docs/                 # Documentation and design specs
│   └── specs/            # Original PRD, TRD, and design requirements
├── public/               # Static assets (fonts, images, SVGs)
├── scripts/              # Build, validation, and reporting scripts
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # React components (global, home, menus)
│   └── lib/              # CMS content provider, utilities, types
└── tests/                # Playwright E2E and accessibility test suites
```

## Content Governance

All menu content is managed via a strict TypeScript schema in `src/lib/cms/content-provider.ts`. 
Content follows a governance lifecycle (`source-draft` → `client-approved`). Unapproved or "draft" content is strictly blocked from production builds but visible in development.

## Testing

To run the Playwright test suite and Axe accessibility audits:

```bash
npm run test:e2e
```

## Documentation & Specs

All original requirement documents (PRD, TRD, Visual Design, Web Flow) can be found in the [`docs/specs/`](./docs/specs/) directory.

## Contributing

Please refer to [`CONTRIBUTING.md`](./CONTRIBUTING.md) for branch naming conventions, commit formats, and guidelines for adding new components or menu items.
