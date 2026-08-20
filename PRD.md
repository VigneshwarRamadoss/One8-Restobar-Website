# 20° Restobar Website — Product Requirements Document

**Status:** Draft for stakeholder validation  
**Version:** 1.0 — 20 August 2026  
**Decision owner:** 20° Restobar  
**Product partners:** Brand, Operations, Reservations, Events, Design, Engineering, SEO

## 1. Product summary

Rebuild 20grad.com as a high-performing hospitality product that converts visual interest into reservations and qualified event enquiries. The website should communicate five facets of one destination—Bar, Restaurante, Bistro, Patio and Cocina—through a coherent, premium experience.

The redesign is not a visual reskin. It consolidates operational data, makes menus accessible and indexable, establishes a bilingual content model, modernises performance and accessibility, and converts the current atmospheric concept into a clear decision journey.

## 2. Problem statement

The current site contains strong brand ingredients but makes visitors work too hard. Its content repeats, key details conflict, navigation exposes the internal concept before the visitor understands it, essential images lack meaningful alternatives, menus depend on PDFs, and complex legacy interaction increases risk. The new product must retain memorability while becoming faster, clearer and more trustworthy.

### Investment thesis

The working delivery envelope is approximately **₹5,00,000**. This is a premium custom-marketing-site investment, not an unlimited product budget. It is justified only if spending concentrates on conversion architecture, original art direction, real photography treatment, reusable components, structured content, performance, accessibility and release QA. Decorative experiments that cannot improve differentiation, trust or task success are out of scope. `IMPLEMENTATION.md` converts this principle into staged deliverables and gates.

## 3. Objectives and success measures

### Business objectives

1. Increase completed reservation hand-offs.
2. Increase qualified event enquiries.
3. Improve discovery for Spanish restaurant, cocktail bar, patio and private dining intent in Düsseldorf.
4. Reduce staff time spent correcting hours, menus and basic visitor questions.

### User outcomes

1. A first-time visitor understands the proposition in under five seconds.
2. A ready-to-book visitor reaches availability in one click from any page.
3. A cautious visitor can validate menu, atmosphere, hours and location quickly.
4. An event organiser can judge fit and submit a structured enquiry.
5. A disabled visitor can complete the same goals without a reduced experience.

### KPIs

| Metric | Baseline | Launch target | Measurement |
|---|---:|---:|---|
| Reserve CTA → OpenTable hand-off rate | Instrument before redesign | +20% relative after 8 weeks | First-party event + outbound confirmation |
| Event form qualified completion | Instrument before redesign | ≥ 35% of form starts | Privacy-respecting funnel |
| Menu engagement | Instrument before redesign | ≥ 25% of non-bounce sessions | HTML menu view/download |
| Mobile task success: find hours + reserve | Usability baseline | ≥ 90% | Moderated/unmoderated test |
| WCAG 2.2 AA critical issues | Unknown | 0 at launch | Automated + manual audit |
| Core Web Vitals | Audit pre-build | Pass all three at p75 | Real-user monitoring |
| Content inconsistency incidents | Current known issue | 0 | CMS validation + QA |

Targets are hypotheses until baseline analytics and consent configuration are validated.

## 4. Scope

### MVP / launch scope

- Homepage.
- Experience overview and detail pages for Bar, Restaurante, Bistro, Patio and Cocina.
- Menus index plus accessible HTML menu views and PDF downloads.
- Events/private dining landing page and enquiry form.
- Visit page: live status, hours, address, transport/parking and map link.
- About/culinary philosophy page.
- German and English routes with language parity for launch content.
- Global navigation, footer, reservation hand-off and consent-aware analytics.
- CMS-managed operational data, SEO fields, media and redirects.
- Legal pages and privacy controls.

### Phase 2 candidates

- Seasonal stories/editorial journal.
- Gift cards.
- Event package downloads.
- Press/awards module.
- First-party reservation integration if operationally justified.
- CRM automation after explicit consent and ownership review.

### Non-goals

- Building a reservation engine.
- Ecommerce or food delivery.
- A decorative day/night toggle that changes core content.
- Autoplay audio.
- WebGL as a dependency for understanding or booking.
- Recreating every legacy page one-for-one.

## 5. Personas and jobs to be done

### The spontaneous local

“When deciding where to go tonight, I need to see the mood, menu, hours and availability quickly so my group can commit.”

### The occasion planner

“When planning a date or celebration, I need confidence that the room, food and service match the occasion before I reserve.”

### The business host

“When hosting clients, I need location, privacy options and dependable information so there are no surprises.”

### The event organiser

“When comparing venues, I need capacity, formats, indicative inclusions and a professional response path.”

### The visiting diner

“When I find 20° through search or social, I need an English explanation, directions and a fast way to reserve.”

## 6. Functional requirements

### Global

- **FR-G01:** Persistent reservation access on every route.
- **FR-G02:** Responsive DE/EN navigation that preserves route context.
- **FR-G03:** One CMS record supplies hours everywhere; support exceptions and holiday closures.
- **FR-G04:** Global search is not required; information architecture must make it unnecessary at launch.
- **FR-G05:** External links identify their destination where ambiguity exists and open safely.
- **FR-G06:** Contact details are machine-readable and directly actionable.

### Homepage

- **FR-H01:** Hero states destination, cuisine/experience and Düsseldorf location.
- **FR-H02:** Show current open status and next relevant service period.
- **FR-H03:** Provide reserve and menu actions above the fold.
- **FR-H04:** Introduce the five experiences in a browsable editorial index.
- **FR-H05:** Feature one current seasonal story and event/private dining proof.
- **FR-H06:** Avoid mandatory splash screens and unskippable sequences.

### Experiences

- **FR-X01:** Each page defines who/what the space is for, service period and related menu.
- **FR-X02:** Media gallery is user-controlled and supports captions where informative.
- **FR-X03:** Each page provides reserve, visit and adjacent-experience actions.
- **FR-X04:** Cocina focuses on culinary leadership, sourcing and team proof; claims require approval.

### Menus

- **FR-M01:** Present categories and items in semantic HTML.
- **FR-M02:** Support name, description, price, allergens/dietary markers and availability note.
- **FR-M03:** Show a “last updated” date and service applicability.
- **FR-M04:** Provide accessible PDF as secondary format.
- **FR-M05:** CMS prevents publishing an undated or destination-less menu.

### Events

- **FR-E01:** Explain available spaces, event types, capacity ranges and service options.
- **FR-E02:** Form fields: name, email, phone optional, event type, preferred date/time, guest count, space preference, message, consent.
- **FR-E03:** Validate inline, preserve entered data on recoverable errors and show a confirmation reference.
- **FR-E04:** Spam protection must not create an inaccessible puzzle.
- **FR-E05:** Route enquiry to an owned mailbox/CRM and define response SLA copy.

### Visit

- **FR-V01:** Show current status, full hours, exceptional closures and source timestamp.
- **FR-V02:** Provide address, map link, public transport, parking and accessibility information.
- **FR-V03:** Do not load an invasive map iframe before consent; static map preview may link out.

## 7. Content model

| Entity | Required fields |
|---|---|
| Global settings | Venue name, address, phone, email, reservation URL, social URLs, default SEO |
| Hours | Day, service label, open/close, valid-from/to, exception, locale note |
| Experience | Slug, localized title/intro/body, service periods, hero media, gallery, related menu, SEO |
| Menu | Type, locale, effective date, service, categories, item list, PDF, status |
| Menu item | Name, description, price, dietary/allergen metadata, availability |
| Event space | Name, capacity ranges, layouts, description, media, accessibility notes |
| Story | Title, dek, body, author, publish date, media, related experiences |
| Media | Asset, focal point per breakpoint, alt/caption by locale, rights/expiry, credit |

## 8. Non-functional requirements

- **Accessibility:** WCAG 2.2 AA; zero critical axe issues plus manual task audit.
- **Performance:** LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1 at p75; budgets in `TRD.md`.
- **Availability:** 99.9% monthly target excluding planned maintenance; graceful CMS/API degradation.
- **Security:** HTTPS, secure headers, dependency scanning, server-side form validation, rate limiting and least privilege.
- **Privacy:** Consent before non-essential tracking; data minimisation; retention documented.
- **SEO:** Server-rendered content, canonical/alternate URLs, sitemap, robots, structured data and redirects.
- **Maintainability:** Typed content contracts, component documentation and non-developer publishing flow.

## 9. Analytics plan

Track only decision-relevant events:

- `reserve_cta_clicked` with page, placement and locale.
- `menu_viewed`, `menu_pdf_downloaded` with menu type/effective date.
- `experience_viewed` and experience-to-reserve progression.
- `event_form_started`, validation error category, submitted and failed.
- `directions_clicked`, `phone_clicked`, `email_clicked`.
- Core Web Vitals and uncaught client errors.

Never send names, emails, phone numbers, free text or full URLs containing personal data to analytics.

## 10. Acceptance criteria

Launch is accepted when:

1. All MVP routes and both locales pass content sign-off.
2. Reservation, event, menu, hours and directions tasks pass on supported devices and keyboard-only use.
3. No conflicting hours, dead links, debug output or placeholder media remain.
4. Accessibility audit has no blocker/critical issues and documented resolution of serious issues.
5. Performance budgets pass on production-like hosting; RUM is installed.
6. Structured data validates and sitemap/canonical/hreflang rules are correct.
7. All legacy URLs have tested redirect decisions.
8. Editors can update hours, exceptions, menus and key media without deployment.
9. Rollback, incident owner and launch-day monitoring are documented.

## 11. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Award ambition drives heavy effects | Slow, inaccessible site | Performance budget and motion gate before visual approval |
| Insufficient real imagery | Generic result | Commission shot list before high-fidelity design |
| Conflicting operational ownership | Incorrect guest information | One CMS source and named operations approver |
| PDF-only menus persist | Poor mobile/SEO/accessibility | HTML menu is release requirement |
| Third-party reservation/analytics failure | Conversion loss | Clear hand-off, monitored links and fallback contact |
| Bilingual content drift | Unequal experience | Locale completeness validation in CMS |

## 12. Required decisions before build

- CMS and hosting selection.
- Authoritative hours and menu owner.
- DE/EN translation workflow.
- OpenTable link/widget mode.
- Event routing and response SLA.
- Photography production and usage rights.
- Font licensing.
- Supported browser matrix and analytics platform.
