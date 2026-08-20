# 20° Restobar Website — Technical Requirements Document

**Status:** Proposed architecture  
**Version:** 1.0 — 20 August 2026  
**Audience:** Engineering, QA, DevOps, SEO, Analytics, CMS owners

## 1. Technical goals

Build a server-rendered, progressively enhanced website in which rich editorial motion never blocks content, accessibility or conversion. The system must let operations update hours and menus safely, let marketing manage localized editorial content, and let engineering enforce performance and quality in CI.

## 2. Recommended architecture

```text
Browser
  → CDN / edge cache / WAF
  → Next.js application (TypeScript, App Router, server components by default)
      ├── Headless CMS API
      ├── Reservation link configuration (OpenTable)
      ├── Event enquiry server action/API route
      ├── Transactional email or CRM adapter
      └── Consent-aware analytics + RUM
```

### Rationale

- Server rendering gives visitors and crawlers useful HTML immediately.
- Static generation/revalidation suits mostly editorial content and protects the site when the CMS is unavailable.
- Server Components minimise client JavaScript; motion islands stay isolated.
- A headless CMS supports structured bilingual content and one operational source of truth.

Use the current supported stable/LTS releases at implementation start. Pin exact versions in the repository and record them in an architecture decision record; do not encode future version numbers in this specification.

## 3. Technology baseline

| Layer | Requirement |
|---|---|
| Framework | Next.js App Router with React and strict TypeScript |
| Styling | CSS Modules or compiled vanilla CSS with design tokens; avoid runtime CSS-in-JS |
| CMS | Structured headless CMS with locales, preview, webhooks, role permissions and validation |
| Motion | Native CSS/WAAPI first; GSAP + ScrollTrigger only for audited parallax sequences |
| Forms | Server-side validation with shared typed schema; accessible HTML controls |
| Testing | Unit/component, Playwright E2E, axe integration, Lighthouse CI, visual regression |
| Hosting | CDN-backed platform supporting immutable assets, edge caching, logs and preview deploys |
| Observability | Error tracking, Web Vitals RUM, uptime checks and structured server logs |

Avoid jQuery, PJAX wrappers, global DOM mutation, client-only content rendering and autoplay carousel dependencies.

## 4. Repository structure

```text
app/
├── [locale]/
│   ├── (marketing)/
│   ├── erleben/[slug]/
│   ├── menus/[slug]/
│   ├── events/
│   ├── besuch/
│   └── layout.tsx
├── api/events/
├── sitemap.ts
├── robots.ts
└── not-found.tsx
components/
├── primitives/
├── navigation/
├── editorial/
├── reservation/
├── forms/
└── motion/
content/
├── queries/
├── schemas/
├── mappers/
└── fallbacks/
lib/
├── analytics/
├── accessibility/
├── security/
├── seo/
└── validation/
styles/
├── tokens.css
├── global.css
└── utilities.css
tests/
├── e2e/
├── accessibility/
├── visual/
└── performance/
```

## 5. Rendering and caching

- Pre-render all editorial and experience pages.
- Revalidate on CMS webhook; use a bounded time fallback if webhooks fail.
- Cache CMS reads and retain a last-known-good payload for operational information.
- The “open now” label is computed from authoritative hours plus Europe/Berlin timezone and exceptions; never hard-code it in page copy.
- Menu effective dates determine current/archived status.
- Event form is dynamic and uncached; confirmation responses never enter shared cache.
- Third-party widgets load only on routes that need them and after consent if non-essential.

## 6. Content contracts

Generate or maintain TypeScript types from CMS schemas. Validate external data at the boundary. A publish operation must fail when:

- required locale content is absent;
- an operational-hours range is invalid or overlaps unexpectedly;
- a menu has no effective date, currency or categories;
- meaningful media has no alt decision or rights metadata;
- internal relationships point to draft/unpublished content;
- SEO title/description constraints are breached beyond agreed limits.

## 7. Component architecture

- Components receive semantic data, not CMS-shaped blobs.
- Server components are default; add `use client` only for interaction that cannot be expressed with HTML/CSS.
- Every public component exposes semantic element choice where needed but keeps safe defaults.
- Motion wraps existing semantic content; it does not own content retrieval or reading order.
- A Storybook-equivalent component workbench documents all states at compact and wide widths.
- Design tokens are CSS custom properties generated from one source and validated for naming drift.

## 8. Performance budgets

### User-centred targets

At the 75th percentile, segmented mobile/desktop:

| Metric | Target |
|---|---:|
| Largest Contentful Paint | ≤ 2.5 s |
| Interaction to Next Paint | ≤ 200 ms |
| Cumulative Layout Shift | ≤ 0.1 |
| Time to First Byte | ≤ 800 ms target |

### Asset budgets per landing page

| Asset | Initial budget |
|---|---:|
| JavaScript | ≤ 170 KB gzip |
| CSS | ≤ 55 KB gzip |
| Fonts | ≤ 180 KB total WOFF2 |
| Above-fold images | ≤ 550 KB mobile, ≤ 900 KB wide |
| Optional hero video | ≤ 1.8 MB first segment; never LCP dependency |
| Third-party script | 0 blocking; ≤ 100 KB after consent/intent |

### Implementation rules

- Use responsive image `sizes`, explicit dimensions and art-directed crops.
- Priority/preload only the true LCP asset; never preload entire galleries.
- Self-host fonts, subset Latin Extended, use `font-display: swap` or optional where approved.
- Reserve layout space for media, embeds, status and dynamic copy.
- Lazy-load below-fold images and motion modules.
- Tree-shake animation libraries; load parallax only above the capable-device threshold.
- CI fails when Lighthouse/asset budgets regress beyond agreed tolerance.

## 9. Accessibility engineering

- Semantic landmarks: header, nav, main, sections and footer.
- Skip link is first focusable element.
- Route changes announce the new page and set logical focus.
- Modal navigation uses native dialog behavior or a rigorously tested accessible implementation.
- All form errors connect with `aria-describedby`; error summary receives focus on failed submit.
- Live open status is not an aggressive live region.
- Carousels, if retained, have visible controls, pause, status and no forced autoplay.
- Reduced motion is enforced both in CSS and animation setup code.
- Automated axe is a floor; manual NVDA/VoiceOver, keyboard, zoom and contrast checks are required.

## 10. SEO implementation

- Locale-aware metadata at every route: title, description, canonical, Open Graph and alternate language URLs.
- Generate XML sitemap from published routes and menu state.
- Use `Restaurant` JSON-LD with `name`, `address`, `geo`, `telephone`, `url`, `servesCuisine`, `hasMenu`, `acceptsReservations`, opening-hours specifications and images.
- Do not publish unverified ratings, Michelin claims or price ranges in structured data.
- HTML menus use meaningful headings and item markup; PDFs are not canonical landing pages.
- Preserve legacy authority with an explicit redirect map (301 permanent; 410 only when intentionally removed).
- Noindex preview, staging, form-confirmation and internal search-like states.

## 11. Event form service

### Request lifecycle

```text
Client semantic form
  → same-origin POST
  → CSRF/origin check + schema validation
  → rate limit + invisible honeypot/time check
  → CRM/email adapter
  → durable success/failure record without sensitive log fields
  → localized confirmation
```

### Requirements

- Server is authoritative; client validation is enhancement.
- Idempotency key prevents accidental duplicate enquiry.
- Encrypt data in transit and at rest in downstream system.
- Define retention and deletion process with the privacy owner.
- Do not put enquiry details in URL parameters, analytics or general application logs.
- Monitor delivery failures and alert a named owner.

## 12. Security and privacy

- TLS only; HSTS after deployment validation.
- Content Security Policy with nonces/hashes and explicit third-party allow-list.
- Headers: `X-Content-Type-Options: nosniff`, appropriate `Referrer-Policy`, `Permissions-Policy`, frame restrictions.
- Secure, HttpOnly, SameSite cookies where cookies are required.
- CMS uses least-privilege roles, MFA and audit history.
- Dependency and secret scanning in CI; no credentials in client bundles.
- Consent manager blocks non-essential analytics/embeds until choice.
- Sanitise rich text and validate all external URLs.

## 13. Browser and device support

Support the latest two stable major versions of Chrome, Edge, Firefox and Safari plus current iOS Safari and Android Chrome. The baseline experience must function on older evergreen versions without advanced motion. Confirm the final matrix using traffic data before launch.

Input modes to test: mouse, keyboard, touch, trackpad, 200% zoom and screen reader. Viewports include 320 px width and short landscape screens.

## 14. Observability

- RUM for LCP, INP, CLS with page type, locale and device class—no personal data.
- Client/server error tracking with source maps protected from public enumeration as appropriate.
- Synthetic checks for homepage, menu, events and OpenTable destination.
- Alerts for elevated 5xx, form delivery failures, CMS webhook failure and Web Vital regression.
- Release annotation connects metric changes to deployments.

## 15. CI/CD quality gates

Each pull request runs:

1. Type check, lint and unit tests.
2. CMS contract fixtures.
3. Component accessibility checks.
4. Playwright critical paths at compact and wide widths.
5. Visual regression for stable components.
6. Production build and bundle-budget check.
7. Lighthouse CI against representative routes.
8. Link and structured-data validation where deterministic.

Production deploy requires preview sign-off, migration/redirect check, CMS compatibility and rollback readiness.

## 16. Technical acceptance criteria

- Critical content is present in server HTML.
- Page works without client JS for navigation, reading, phone/email, menus and reserve link.
- No layout shift from images, fonts, header or status.
- No duplicate operational data sources.
- Forms survive validation and network recovery.
- Security headers, consent and privacy logging are verified in production.
- Performance and accessibility gates pass on representative production data.
- Editors can publish a menu and holiday exception without engineering.

## 17. Architecture decisions to record

- CMS selection and preview strategy.
- Hosting/CDN and regional data processing.
- Motion library threshold and no-motion implementation.
- Analytics/consent platform.
- CRM/email adapter and enquiry retention.
- Map strategy.
- Image pipeline and rights metadata.
- URL/locale policy.

## References

- Next.js metadata: <https://nextjs.org/docs/app/api-reference/functions/generate-metadata>
- Next.js image/font optimisation: <https://nextjs.org/learn/dashboard-app/optimizing-fonts-images>
- Core Web Vitals: <https://web.dev/articles/vitals>
- WCAG 2.2: <https://www.w3.org/TR/WCAG22/>
- Restaurant vocabulary: <https://schema.org/Restaurant>

