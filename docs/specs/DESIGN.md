# 20° Restobar — Experience & Design System

**Status:** Foundation specification  
**Version:** 1.0 — 20 August 2026  
**Owner:** Product + Design  
**Applies to:** All public pages, menus, reservation journeys, event enquiries and editorial modules

## 1. Purpose

This document is the visual and interaction source of truth for the 20° Restobar redesign. The product must feel like a confident Düsseldorf interpretation of Mediterranean hospitality: warm, cinematic, tactile and socially alive. It must never resemble a generic luxury restaurant template.

The experience has two jobs:

1. Make a visitor want to be at 20°.
2. Let that visitor reserve, inspect menus, find the venue or enquire about an event without friction.

“Award-winning” is treated as a quality bar, not an excuse for novelty. Every expressive moment must strengthen atmosphere, orientation or conversion.

## 2. Evidence and design premise

### Observed on the current public website

- 20° presents five connected experiences: **Bar, Restaurante, Bistro, Patio and Cocina**.
- The brand idea is “more than food and drink”: a Mediterranean/Spanish lifestyle in central Düsseldorf.
- Key tasks are reservation through OpenTable, menu discovery, event enquiries, location/contact and venue exploration.
- The present system uses a day/night mode, editorial photography, image sliders, page transitions and scroll-based scene compositions.
- Current CSS exposes a navy/blue, sand/gold and pale-blue palette, including `#0C233F`, `#374F65`, `#B39C7C`, `#A8C4CA` and `#1D2F40`.
- Content and operational data are inconsistent in places: multiple opening-hour variants appear, “Restaurantbereich geschlossen” conflicts with general discovery language, an email is visually reversed, images have empty alt text and a server debug string is visible in the homepage output.

### Redesign premise

Preserve the duality of **Düsseldorf precision × Mediterranean ease**. Replace the literal day/night theme switch with an art-directed progression: mineral daylight near the top, ember and midnight tones deeper in the journey. The user may browse quickly without being forced through animation.

## 3. UX pillars

### 3.1 Target audiences

| Audience | Context | Primary need | Design response |
|---|---|---|---|
| Local couples and friends | Mobile, evening planning | Atmosphere, availability, menu | Cinematic proof + persistent reserve action |
| Business diners | Mobile/desktop, time-sensitive | Credibility, quiet areas, location | Clear venue options, private dining and logistics |
| Düsseldorf visitors | Mobile, unfamiliar area | What it is, distance, hours, language | Immediate proposition, map and DE/EN support |
| Event organisers | Desktop/mobile, comparison mode | Capacity, formats, response path | Dedicated events page with structured enquiry |
| Food and cocktail enthusiasts | Discovery/social referral | Craft, chef, seasonal menus | Ingredient stories and current menus, not filler copy |
| Accessibility users | Keyboard, screen reader, zoom, reduced motion | Equal access to every task | WCAG 2.2 AA as a release requirement |

### 3.2 Navigation

- Header items: **Erleben**, **Menüs**, **Events**, **Über 20°**, **Besuch**.
- Primary CTA: **Tisch reservieren**.
- Logo returns home; current page is indicated visually and semantically.
- “Erleben” contains Bar, Restaurante, Bistro, Patio and Cocina; do not show these five as competing top-level links on small screens.
- Mobile uses a full-screen sheet with visible reservation, current opening status, address and language control.
- Menus remain available as readable HTML first; PDF is a secondary download.
- All critical destinations must be reachable in two interactions or fewer from any page.

### 3.3 Accessibility

- Conform to WCAG 2.2 AA; include keyboard, screen-reader, 200% zoom and high-contrast manual testing.
- Body text contrast ≥ 4.5:1; large text and essential UI ≥ 3:1.
- Minimum pointer target: 44 × 44 CSS px; no essential hover-only content.
- One descriptive `h1` per page; headings follow a logical hierarchy.
- Provide skip link, visible `:focus-visible`, labelled controls, useful alt text and captions/transcripts for meaningful media.
- Decorative images use empty alt; meaningful food/interior images describe the experience without marketing adjectives.
- Honour `prefers-reduced-motion`: remove parallax, autoplay and large transforms; preserve content order.
- Never encode meaning by colour, position or motion alone.
- Reservation and event flows remain usable without JavaScript where the external service permits.

### 3.4 User journey rule

Every landing state answers within one viewport:

1. What is 20°?
2. Why is it distinctive?
3. Is it open / when can I visit?
4. How do I reserve?

The shortest conversion path is: **Landing → Reserve CTA → OpenTable date/party selection**. The reassurance path is: **Landing → Menu or Experience → Reserve**.

## 4. Visual principles

### 4.1 Art direction

Use documentary hospitality photography: imperfect hands, steam, condensation, linen, ceramic, reflected light and real guests with consent. Avoid floating 3D food, neon gradients, glassmorphism, excessive rounded cards, generic AI people, random grain overlays and decorative blobs.

Signature device: **the 20° cut**—a restrained 20-degree diagonal used for image reveals, dividers and transition masks. It appears at most once per viewport and never distorts reading order.

### 4.2 Colour system

The palette evolves from the existing identity while improving contrast and warmth.

| Token | Value | Use |
|---|---:|---|
| `--ink-950` | `#091A2A` | Night backgrounds, primary text on light |
| `--ink-800` | `#17344A` | Secondary dark surface |
| `--mineral-700` | `#38586B` | Informational accents |
| `--sea-300` | `#AFC8C8` | Cool highlight, never small text on white |
| `--sand-500` | `#B69B76` | Brand accent and rules |
| `--terracotta-600` | `#A84F36` | Warm action/accent, sparingly |
| `--paper-50` | `#F5F0E7` | Primary light canvas |
| `--chalk-0` | `#FFFDF8` | Elevated light surface |
| `--ember-900` | `#2A1712` | Warm cinematic section |
| `--success-700` | `#276445` | Open/confirmed status |
| `--error-700` | `#9A302A` | Errors; pair with text/icon |

Colour themes are section-scoped (`data-theme="light|warm|night"`), not user-critical modes. All token pairs must be contrast-tested before approval.

### 4.3 Typography

- **Display:** a licensed high-contrast editorial serif with Latin Extended support (recommended shortlist: Canela, Editorial New or equivalent). Use for emotional headlines only.
- **Interface/body:** a humanist grotesk with excellent German characters and numerals (recommended: Suisse Intl, Neue Haas Grotesk or a performance-safe licensed equivalent).
- **Fallback:** Georgia for display; system sans for interface.
- Self-host WOFF2; maximum four font files across initial load.
- Body: `clamp(1rem, .96rem + .2vw, 1.125rem)`, line-height 1.55–1.7, measure 55–70 characters.
- Display: `clamp(3rem, 8vw, 8.5rem)`, line-height .88–1.02; use optical line breaks.
- UI labels are sentence case. Avoid wide tracking on long uppercase labels.

### 4.4 Grid and spacing

- Max content width: 1440 px; text measure capped independently.
- Desktop: 12 columns, 24 px gutters; tablet: 8; mobile: 4 with 16–20 px edge padding.
- Spacing base: 4 px. Core scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144.
- Section rhythm: `clamp(5rem, 11vw, 10rem)`.
- Prefer alignment and whitespace over containers. Cards are used only for genuinely discrete choices.

### 4.5 Imagery and media

- Hero desktop ratio: art-directed 16:10; mobile crop: 4:5. Never use one crop for all viewports.
- Deliver AVIF and WebP with JPEG fallback; specify dimensions and focal point.
- Hero may use a 6–8 second muted video only when poster-first loading, data budgets and reduced-motion fallback pass.
- Image gradients are functional and local to text contrast; no permanent heavy colour wash.

## 5. Component rules

| Component | Rule |
|---|---|
| Header | Transparent over safe hero area, then solid on scroll; ≤ 72 px desktop / 64 px mobile |
| Primary CTA | High-contrast solid; label “Tisch reservieren”; one dominant CTA per section |
| Secondary CTA | Text + directional rule/arrow; not a ghost pill by default |
| Experience index | Editorial list with preview media; keyboard focus triggers the same preview as hover |
| Menu teaser | Menu type, last-updated date, short description, HTML view and PDF download |
| Opening status | Derived from one data source; “Heute geöffnet bis …” plus full-hours disclosure |
| Event module | Capacity, format, spaces, inclusions and form; no mailto-only journey |
| Gallery | User-controlled; no autoplay carousel for core content |
| Footer | Address, live hours, phone, email, maps, legal, social and reserve CTA |
| Language switch | `DE / EN`, preserves current route and never uses flags |

### Interaction states

All interactive components define default, hover, focus-visible, active, disabled, loading, success and error states. Motion duration is 160–240 ms for controls and 400–700 ms for editorial reveals. Easing: `cubic-bezier(.22,1,.36,1)`; no elastic easing in core UI.

## 6. Responsive behavior

Design fluidly; use content breakpoints rather than device labels.

- Compact: 320–599 px — single-column, no essential overlapping content, bottom reserve affordance after hero.
- Medium: 600–1023 px — 8-column compositions, touch-first previews, restrained motion.
- Wide: 1024–1439 px — full navigation and two-column editorial layouts.
- Cinema: ≥1440 px — max-width preserved; imagery can bleed, text does not stretch.
- Landscape short viewports: navigation and modal sheets must fit with internal scrolling.

## 7. Performance and SEO foundation

- Field targets at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
- Additional launch budgets: initial JS ≤ 170 KB gzip, initial CSS ≤ 55 KB gzip, mobile hero ≤ 450 KB poster / ≤ 1.8 MB optional video after interaction or idle.
- Server-render indexable content; enhance motion progressively.
- One canonical URL per page; German default plus English alternates when translated.
- Route-level title, description, canonical, Open Graph image and Restaurant structured data.
- Structured menus, address, geo, telephone, reservation URL and a single authoritative opening-hours source.
- No text embedded only in images or PDFs.

## 8. Content voice

German is primary; English is a complete parallel experience, not a partial toggle. Voice is sensory, concise and specific. Use “Du” consistently after owner approval. Prefer proof (“Patio im Andreas Quartier”, “Cocktails an der Bar”) over vague luxury claims. Operational facts outrank prose.

## 9. Quality gate

A screen is design-complete only when:

- Its primary user goal is obvious in five seconds.
- Mobile, keyboard, reduced-motion, loading, empty and error states are designed.
- Copy, hours, menu dates and links have an accountable source.
- Contrast, focus order, tap size and heading hierarchy pass review.
- Motion has purpose and a reduced-motion equivalent.
- Real photography has an approved crop, rights record, alt decision and performance derivative.
- No placeholder copy, stock-looking imagery or template UI remains.

## 10. Dependencies and open decisions

- Confirm authoritative opening hours, service periods and holiday exceptions.
- Confirm current menu PDFs and whether menus can be represented as CMS content.
- Confirm OpenTable configuration and whether an inline accessible widget is permitted.
- Confirm DE/EN copy ownership and legal/privacy requirements.
- Obtain original logo/vector assets, brand guidelines and licensed fonts.
- Obtain an approved real-photo library or schedule the shot list in `REALISTIC-VISUAL.md`.

## References

- Current site: <https://20grad.com/>
- WCAG 2.2: <https://www.w3.org/TR/WCAG22/>
- Core Web Vitals: <https://web.dev/articles/vitals>
- Restaurant structured data vocabulary: <https://schema.org/Restaurant>

