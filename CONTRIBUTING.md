# Contributing to One 8 Restobar

Thank you for contributing to the One 8 Restobar project! This document outlines the standards and workflows for the repository.

## Prerequisites
- Node.js 18.17+
- npm (do not use yarn or pnpm to avoid lockfile conflicts)

## Branching & Commits
- Use descriptive branch names: `feature/menu-filters`, `fix/header-mobile`
- Commit messages should be clear and imperative: `Add dietary filter component`, `Fix header layout on mobile`

## Adding or Updating Content
All content is managed through the CMS provider in `src/lib/cms/`.
1. **Menu Items**: Add new items to `src/lib/cms/data/food-menu.ts`.
2. **Drafts**: Any new menu item should default to `status: 'source-draft'`.
3. **Approval**: Items must not be changed to `client-approved` without written confirmation from the client operations team.
4. **Validation**: Draft items are explicitly hidden from production builds.

## Adding Components
1. Place global layout components in `src/components/global/`.
2. Place feature-specific components in their respective domain folders (e.g., `src/components/menus/`).
3. Use CSS Modules (`[Component].module.css`) for all styling.
4. Adhere strictly to the design tokens defined in `src/app/globals.css`.

## Testing
Always run tests before opening a pull request.
```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# E2E and Accessibility (Playwright + Axe)
npm run test:e2e
```
