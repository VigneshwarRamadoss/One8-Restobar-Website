# 20° Restobar — Web Flow & Information Architecture

**Status:** Interaction blueprint  
**Version:** 1.0 — 20 August 2026  
**Related:** `PRD.md`, `DESIGN.md`, `UI-UX-BRIEF-DESIGN.md`

## 1. Navigation model

```text
Home
├── Erleben
│   ├── Bar
│   ├── Restaurante
│   ├── Bistro
│   ├── Patio
│   └── Cocina
├── Menüs
│   ├── Speisekarte
│   ├── Weinkarte
│   └── Cocktails
├── Events & Private Dining
├── Über 20°
├── Besuch
│   ├── Öffnungszeiten
│   ├── Anfahrt & Parken
│   └── Kontakt
├── Tisch reservieren → OpenTable
└── Legal
    ├── Datenschutz
    └── Impressum
```

Recommended localized routes:

```text
/de/...
/en/...
```

The locale switch maps equivalent slugs; it does not send users back to home.

## 2. Global shell flow

### Desktop header

1. Page loads with skip link first in DOM.
2. Logo, primary nav, language switch and reserve CTA are visible.
3. Over the hero, the header uses a contrast-safe overlay state.
4. After leaving hero threshold, it becomes a solid compact header.
5. “Erleben” opens on click/Enter; Escape closes; focus returns to trigger.

### Mobile header

1. Logo + Reserve + Menu trigger remain visible.
2. Menu opens as a full-height modal sheet.
3. Focus is trapped; page behind is inert; Escape and close button work.
4. Menu exposes current status, address, DE/EN and all navigation destinations.
5. Selecting a route closes the sheet before navigation.

### Global reservation flow

```text
Any page
  → “Tisch reservieren”
  → OpenTable in same tab by default
  → date / time / party selection
  → external confirmation
```

If product owners require a new tab, communicate this accessibly. Preserve a fallback phone link near the CTA; do not embed a broken or inaccessible third-party widget.

## 3. Homepage journey

### Flow A — Ready to reserve

```text
Search / social / direct
  → Hero: proposition + location + live status
  → Reserve CTA
  → OpenTable
```

Target interactions before hand-off: **1**.

### Flow B — Validate before booking

```text
Homepage hero
  → View menus
  → HTML menu with date, prices and dietary markers
  → Sticky / in-context reserve CTA
  → OpenTable
```

### Flow C — Choose the right atmosphere

```text
Homepage
  → “Five ways to experience 20°” index
  → Hover/focus/tap previews a space
  → Experience detail
  → Gallery + use case + hours + related menu
  → Reserve
```

On touch, first tap selects/previews; an explicit “Entdecken” link navigates. Do not overload a single tap with ambiguous behavior.

### Homepage section order

1. Hero: clear proposition, Reserve, Menus, current status.
2. Short brand statement with proof.
3. Five-experience editorial index.
4. Current menu/seasonal highlight.
5. Events/private dining proof.
6. Culinary philosophy/Cocina.
7. Visit strip: hours, address, directions.
8. Footer.

## 4. Experience detail flow

Each page uses a consistent narrative:

1. Hero: experience name, concise promise, service period.
2. Orientation bar: **Best for**, **When**, **Where inside 20°**, reserve CTA.
3. Editorial scene: one strong paragraph + real-life imagery.
4. Menu connection: the relevant food/drink menu.
5. Gallery or craft sequence; user-controlled.
6. Practical proof: accessibility, group suitability and specific constraints.
7. Adjacent experience and reserve CTA.

### Closed-state behavior

If a space/service is unavailable now:

- State “Heute ab 18:30” or the next known opening—not a dead “closed”.
- Offer the next relevant action: reserve another day, view a currently open area or call.
- Never hide content solely because of time of day; search and planning happen anytime.

## 5. Menu flow

```text
Menus index
  → Select food / wine / cocktails
  → Semantic HTML menu
  → Filter dietary markers (optional enhancement)
  → Reserve
  ↘ Download accessible PDF (secondary)
```

### Menu rules

- Default to current menu; archived URLs redirect or show a clear archived label.
- Filters update the visible list and announce result count to assistive technology.
- Dietary labels are explanatory, not medical guarantees; include kitchen cross-contact note approved by operations.
- Prices use locale formatting and visible currency context.
- PDF opens only on explicit download/view action.

## 6. Event enquiry flow

```text
Events landing
  → Review spaces / capacities / formats
  → Choose “Event anfragen”
  → Step 1: event essentials
  → Step 2: contact + optional details
  → Review and consent
  → Submit
  → Confirmation page + reference + response expectation
```

### Event essentials

- Event type.
- Preferred date and approximate time.
- Guest count.
- Preferred space or “help me choose”.

### Contact

- Name and email required.
- Phone optional.
- Free-text details optional.
- Privacy acknowledgement; marketing consent separate and optional.

### Validation and recovery

- Validate after blur and submit, not on every keystroke.
- Error summary links to fields; each field has specific inline guidance.
- Preserve entries after network/server errors.
- Duplicate submission protection does not discard a successful submission.
- Confirmation states who will respond and by when; do not promise an unapproved SLA.

## 7. Visit and contact flow

```text
Visit
  → Current status + full weekly hours
  → Exceptional closure notice (if applicable)
  → Directions / transport / parking / accessibility
  → Maps, phone, email or reserve
```

Map link opens the chosen map service. A static preview can be shown before consent; the address remains text and copyable.

## 8. Language flow

1. Respect an explicit prior locale choice.
2. Otherwise serve German at `/de` and offer English visibly.
3. Do not auto-redirect repeatedly based on browser language.
4. Switching locale retains route and query parameters that are safe/relevant.
5. If a translation is genuinely unavailable, keep the user on the destination and label the fallback language.

## 9. System and edge states

| State | Required behavior |
|---|---|
| CMS unavailable | Serve cached/static last-known-good content; mark only truly dynamic status as unavailable |
| OpenTable unreachable | Show phone action and a polite status message; monitor outbound endpoint |
| No menu published | Hide invalid card and show contact/last valid approved menu according to policy |
| Image fails | Layout remains stable; meaningful alt/context preserves understanding |
| JavaScript disabled | Navigation, content, menu, phone, email and reservation link remain usable |
| Reduced motion | No parallax/autoplay; content appears in final positions |
| Form server error | Preserve values, show retry and alternative contact |
| 404 | Helpful brand message + Home, Menus, Reserve and Visit links |
| Offline/poor network | Text and critical actions render before rich media |

## 10. Back/forward and scroll restoration

- Normal browser history semantics; no fake single-page routing that breaks Back.
- Restore scroll on return from internal detail routes where technically reliable.
- Route changes move focus to the new page `h1` or announced main region.
- Deep links to menu categories and event sections remain stable.

## 11. Flow acceptance tests

1. From every route, a keyboard user reaches Reserve within three Tab stops after the header entry point.
2. A first-time mobile user finds today’s hours and directions in ≤ 30 seconds.
3. A user can view a current menu without downloading a PDF.
4. A failed event submission preserves all valid inputs.
5. DE ↔ EN switching retains page context.
6. Browser Back behaves predictably after experience preview and detail navigation.
7. Reduced-motion mode contains no viewport-scale animated translation.
8. No operational fact is manually duplicated across components.

