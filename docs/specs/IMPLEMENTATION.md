# 20° Restobar — Implementation & Delivery Plan

**Status:** Build plan and commercial scope guardrail  
**Version:** 1.0 — 20 August 2026  
**Working investment envelope:** approximately ₹5,00,000, subject to final scope, taxes, vendors, licensing, photography and contractual terms

## 1. Delivery principle

The investment becomes worthwhile when it produces a measurable, maintainable business asset—not only an impressive launch. The plan therefore funds research, frame-by-frame design, reusable engineering, real content, performance, accessibility and QA. It does not spend disproportionate effort on effects that cannot improve brand differentiation, reservations, event leads or operational efficiency.

This document is a delivery framework, not a commercial quotation.

## 2. Definition of “complete”

The launch is complete only when:

- All approved frames exist at compact, medium and wide layouts.
- Reservation, menu, events, visit and locale flows work end-to-end.
- Real content and approved media replace every placeholder.
- Editors can update hours, exceptions, menus and page content.
- Accessibility, performance, SEO, analytics, security and legal checks pass.
- Redirects, monitoring, rollback and ownership are live.

## 3. Frame register and build ownership

### Global frame system

| ID | Frame/module | Product owner | Design deliverable | Engineering deliverable | Primary KPI |
|---|---|---|---|---|---|
| G01 | Header/nav | Marketing | All states + focus order | Responsive accessible nav | Route discovery |
| G02 | Reserve action | Operations | Placement/state rules | Configured outbound tracking/fallback | Reservation hand-off |
| G03 | Hours/status | Operations | Open/closed/exception states | Central timezone-aware resolver | Trust/task success |
| G04 | Language | Marketing | DE/EN state | Context-preserving localized routing | International completion |
| G05 | Footer | Marketing/Legal | Responsive groups | Structured data/contact/legal links | Recovery/directions |

### Homepage frame system

| ID | Frame | Design/asset dependency | Component/route | Acceptance signal |
|---|---|---|---|---|
| H00 | First paint | Poster + palette | `HeroShell` | Useful content without JS; no flash/shift |
| H01 | Hero | Signature wide/portrait asset | `Hero` | Category/location + two actions visible |
| H02 | Decision rail | Hours source | `VisitStatusBar` | Today/next status accurate |
| H03 | Brand proof | Approved concise copy/detail image | `EditorialIntro` | ≤ 70-character text measure |
| H04 | Experience index | Five approved preview assets | `ExperienceIndex` | Keyboard/touch/hover parity |
| H05–H09 | Space previews | Per-space crop/alt | `ExperiencePreview` | Stable stage; explicit navigation |
| H10 | Current menu | Current content + dish/drink assets | `MenuFeature` | HTML menu and effective date |
| H11 | Events | Capacity facts + group visual | `EventFeature` | Enquiry path clear |
| H12 | Cocina/team | Approved claims + action portrait | `CocinaFeature` | Human/culinary proof |
| H13 | Visit | Address/hours/transport | `VisitPanel` | Directions/phone/reserve reachable |
| H14 | Footer | Global data | `SiteFooter` | Legal/contact complete |

### Secondary templates

| Template | Frames | Reuse strategy |
|---|---:|---|
| Experience detail × 5 | 7 per page | One template with authored theme/media/content variants |
| Menu index | 4 | Shared menu cards and current-state rules |
| Menu detail × 3 | Variable document sections | One semantic menu renderer |
| Events | 7 + form states | Shared media, capacity and form components |
| Visit | 5 | Shared status/hours/address components |
| About/Cocina | 6 | Editorial components, limited signature motion |
| Legal/error | Content-dependent | Robust typography and recovery components |

No frame proceeds to build without copy status, data source, asset status, responsive design and acceptance notes.

## 4. Recommended investment allocation

Allocation should be agreed commercially after asset and integration discovery. As a scope-control starting point:

| Workstream | Indicative share | Value created |
|---|---:|---|
| Discovery, UX, IA and conversion | 12% | Prevents building the wrong journeys |
| Art direction, UI system and responsive frames | 22% | Ownable brand differentiation and build clarity |
| Content/asset preparation | 10% | Trust, SEO and realistic visual proof |
| Front-end/CMS implementation | 32% | Reusable, maintainable production product |
| Motion and visual polish | 8% | Memorable signature moments within budget |
| QA: accessibility, performance, devices, SEO | 11% | Protects users, revenue and launch quality |
| Launch, training and stabilisation | 5% | Safe handoff and operational independence |

Photography production, paid font licences, translation, CMS/hosting subscriptions, third-party fees and taxes may sit outside the web build unless explicitly included. If budget tightens, reduce motion and page variants before cutting accessibility, content truth, performance or QA.

## 5. Phased plan

### Phase 0 — Alignment and evidence

**Outputs**

- Stakeholder kickoff and decision matrix.
- Analytics/content/SEO/legacy URL audit.
- Operational fact sheet: hours, menus, events, contact, claims.
- Asset and rights inventory.
- Final scope, schedule, platform and KPI baseline.

**Gate:** owner signs authoritative content sources and launch scope.

### Phase 1 — UX architecture

**Outputs**

- Validated sitemap and key user flows.
- Low-fidelity frame map for every template.
- Content model and CMS author roles.
- Task prototype for Reserve, Menu, Event and Visit.
- Usability findings and prioritised revisions.

**Gate:** critical tasks meet agreed comprehension/success threshold before visual polish.

### Phase 2 — Art direction and real-content plan

**Outputs**

- Two distinct visual territories, each using real/reference content responsibly.
- Selected direction with token foundations.
- Photography/asset production brief and crop matrix.
- Hero and experience-index motion proof.

**Gate:** selected direction passes brand, accessibility and performance feasibility review.

### Phase 3 — UI system and frame production

**Outputs**

- Components and states.
- Homepage H00–H14 at compact/medium/wide.
- All secondary templates and long/error states.
- Motion annotations and reduced-motion frames.
- Content/asset tracker tied to frame IDs.

**Gate:** design QA and engineering handoff checklist complete; no ambiguous component states.

### Phase 4 — Foundation build

**Outputs**

- Repository, CI/CD, preview environments.
- Tokens, typography, layout primitives and global shell.
- CMS schemas, locale routing, previews and data validation.
- SEO/metadata/structured-data baseline.
- Central hours/status resolver.

**Gate:** global shell works at target sizes, keyboard/JS-off baseline passes, editors can preview content.

### Phase 5 — Template and flow build

**Build order**

1. Homepage frames H00–H04 and H13–H14.
2. Experience template and H05–H09 integration.
3. HTML menus and H10.
4. Events content/form and H11.
5. Cocina/about and H12.
6. Visit, legal, error and locale completeness.

**Gate:** all critical paths pass E2E with production-like content.

### Phase 6 — Motion and polish

**Outputs**

- Tier B/C enhancements from `PARALLAX-SCROLLING.md`.
- Art-directed responsive imagery.
- Visual regression baselines.
- Cross-device designer QA.

**Gate:** static and reduced-motion experiences remain complete; motion budget passes mid-tier phone test.

### Phase 7 — Hardening and launch

**Outputs**

- Accessibility audit and remediation.
- Performance, security, SEO, analytics and consent verification.
- Redirect import and crawl.
- CMS training and runbook.
- Production deploy, smoke test and monitoring.

**Gate:** launch checklist signed by Product, Operations, Design and Engineering.

### Phase 8 — Stabilisation and optimisation

- Monitor errors, form delivery, outbound reservations and Web Vitals.
- Fix launch defects within agreed warranty window.
- Review KPI baseline versus first 4–8 weeks.
- Prioritise evidence-based improvements; do not immediately add decorative scope.

## 6. Suggested sprint structure

Actual duration depends on team size and content readiness. A practical sequence is:

| Sprint | Focus | Demonstrable outcome |
|---:|---|---|
| 1 | Discovery + content truth | Signed scope, audit, frame inventory |
| 2 | UX + prototype | Tested critical flows |
| 3 | Art direction | Approved visual/motion territory |
| 4 | UI system + homepage frames | Responsive H00–H14 design |
| 5 | Secondary frames + CMS foundation | Complete design and working data model |
| 6 | Global shell + homepage | Production-quality core journey |
| 7 | Experiences + menus | Reusable templates and HTML menu |
| 8 | Events + visit + locales | Full conversion and operational flows |
| 9 | Motion + content integration | Real assets and signature polish |
| 10 | QA + launch | Audited, monitored production release |

Parallel content/photography work must start no later than UX approval; late assets are a leading risk to premium quality.

## 7. Roles and responsibility

| Role | Accountable for |
|---|---|
| Client decision owner | Scope, commercial and final launch approval |
| Operations owner | Hours, menus, service truth, reservation and event routing |
| Product/PM | Outcomes, prioritisation, acceptance and risk |
| UX/UI lead | Flows, frame register, system, responsive/motion annotations |
| Art/photography lead | Real visual production, rights, grade and crop intent |
| Content/SEO lead | DE/EN copy, metadata, redirects and claim verification |
| Engineering lead | Architecture, implementation quality, performance/security |
| QA/accessibility | Device/task testing, WCAG audit and regression |

One person can hold multiple roles, but each accountability must have a named owner.

## 8. Design-to-development handoff package

- Frame register with stable IDs.
- Figma/page hierarchy matching frame IDs and component names.
- Token definitions and theme pairing table.
- Components with all states and responsive behavior.
- Copy deck/content IDs and localization status.
- Asset IDs, crop/focal metadata, alt/caption/rights status.
- Motion storyboard and reduced-motion equivalent.
- Analytics event map.
- Accessibility annotations and keyboard order.
- Acceptance criteria per frame/template.

No measurement should require engineers to infer values from screenshots.

## 9. Scope control

### Change test

A new request enters the launch scope only when it answers all four:

1. Which user/business outcome improves?
2. Which current requirement changes?
3. What design, content, engineering and QA effort is added?
4. What is removed, delayed or added to budget?

### Priority order under constraint

Protect in this order:

1. Operational truth and critical conversion flows.
2. Accessibility, security and performance.
3. Real content and responsive quality.
4. Reusable component/CMS maintainability.
5. Signature visual polish.
6. Additional animation and editorial variants.

## 10. QA and acceptance matrix

| Area | Evidence required |
|---|---|
| Product | PRD acceptance criteria and signed content |
| Frame fidelity | Side-by-side design QA across target viewports |
| Responsive | 320, 390, 768, 1024, 1440, 1920 widths plus short landscape |
| Accessibility | Automated report + manual keyboard, screen-reader, zoom, reduced-motion |
| Performance | Production Lighthouse + field RUM plan + bundle report |
| SEO | Crawl, canonicals, hreflang, sitemap, robots, structured-data validation |
| Content | DE/EN parity, hours/menu source, claims, spelling and legal review |
| Forms | Validation, spam, idempotency, delivery, failure/retry and privacy |
| Analytics | Consent behavior and event payload inspection |
| Security | Headers, dependency/secret scan and input validation |
| Operations | CMS training, permissions, backup/rollback and update runbook |

## 11. Launch checklist

### Before deploy

- Content freeze and exception process.
- Backup/rollback confirmed.
- Domain/DNS/TLS and environment variables reviewed.
- Redirect file tested.
- No staging indexation.
- OpenTable, phone, email, map and event routing smoke-tested.
- Analytics consent and privacy links verified.
- Critical pages cached and forms uncached correctly.

### Immediately after deploy

- Smoke test DE/EN at compact and wide sizes.
- Submit sitemap and inspect robots/canonical.
- Verify structured data and Open Graph previews.
- Verify form delivery and reference.
- Check error tracking, uptime and Web Vitals receipt.
- Crawl for 4xx/5xx/mixed content.

### First 14 days

- Daily critical-error/form review initially, then taper.
- Watch outbound reservation and menu engagement versus baseline.
- Review search indexing and redirects.
- Fix severity-one/two defects before feature expansion.

## 12. Business-value review

At 4–8 weeks, review:

- Reservation hand-off change by placement/page/device.
- Qualified event enquiries and staff follow-up quality.
- Menu engagement and common paths to reserve.
- Directions/phone usage and recurring customer questions.
- Core Web Vitals and accessibility regressions.
- CMS update time and error rate.

The premium investment is successful when the website is more distinctive **and** reduces uncertainty, increases qualified action and remains cheaper to operate. Awards or showcase submissions are a secondary outcome after real customer and business performance.

