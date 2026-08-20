# Master Production Build Prompt — One 8 Restobar

**For:** Google Antigravity and Lovable  
**Client website:** One 8 Restobar  
**Creative/digital partner:** The Dot  
**Quality benchmark:** The experiential confidence and craft of <https://20grad.com/>, without copying its layout, code, copy, assets, brand devices or protected expression

## How to use this prompt

### Google Antigravity

1. Add the project folder containing the nine Markdown specifications to the Antigravity Project.
2. Enable the Modern Web Guidance and Chrome DevTools bundles if available.
3. Start in a new worktree for a protected implementation, or Local Mode for a new empty repository.
4. Paste the prompt below after `/goal` so the agent continues through implementation and verification.
5. Permit browser verification for the local site. Require artifacts: implementation plan, screenshots, test results and final audit.

### Lovable

1. Create a blank project and attach all nine Markdown specifications plus approved brand/image assets.
2. Paste the prompt below in **Plan mode** first.
3. Review the resulting component/frame plan. Resolve only genuine missing business inputs.
4. Switch to **Agent mode** and instruct it to execute the approved plan component-by-component.
5. Connect GitHub before major iterations and preserve stable versions.

---

## Copy-paste master prompt

```text
You are the combined product team for an international-standard hospitality website: senior product manager, creative director, UX architect, UI designer, design-systems lead, accessibility specialist, motion designer, senior frontend engineer, technical SEO engineer, performance engineer and QA lead.

YOUR MISSION

Design, build, test and prepare for production a complete website for:

Brand: One 8 Restobar
Creative and digital partner: The Dot
Category: Premium restaurant + bar / restobar
Quality benchmark: the experiential confidence, editorial storytelling, art direction and motion quality associated with https://20grad.com/

IMPORTANT ORIGINALITY RULE

Use 20grad.com only as a quality benchmark and category reference. Do not clone or closely reproduce its visual composition, code, copy, logo, exact colour system, page sequence, imagery, interactions, day/night concept or distinctive graphical treatment. Create an original visual identity and interaction system for One 8 Restobar. The finished site must be recognisably One 8, not a reskinned copy.

SOURCE-OF-TRUTH DOCUMENTS

Before proposing architecture or writing code, locate and read every one of these files completely:

1. DESIGN.md
2. PRD.md
3. WEB-FLOW.md
4. TRD.md
5. UI-UX-BRIEF-DESIGN.md
6. VISUAL-DESIGN.md
7. REALISTIC-VISUAL.md
8. PARALLAX-SCROLLING.md
9. IMPLEMENTATION.md

Treat these documents as binding requirements. Resolve conflicts using this precedence:

PRD.md → DESIGN.md → WEB-FLOW.md → TRD.md → IMPLEMENTATION.md → specialist visual/motion documents.

Do not silently ignore a requirement. If a requirement cannot be implemented in the current platform, document the constraint, implement the highest-quality progressive alternative and preserve the user outcome.

WORKING MODE

Do not jump directly to a generic generated homepage.

Phase A — inspect and plan:
- Inspect the repository, files, available assets, current configuration and platform capabilities.
- Create an implementation plan mapped to frame IDs G01–G05 and H00–H14 from IMPLEMENTATION.md.
- Create a requirement traceability table: requirement → component/route → test → status.
- Identify missing business data separately from missing technical work.
- Ask questions only when the missing answer would materially change architecture, brand identity, legal compliance or core conversion. Otherwise use reversible configuration and continue.
- Never fabricate address, opening hours, prices, reviews, awards, chef credentials, event capacity, phone, email or reservation URLs.

Phase B — build the foundation:
- Establish the project, design tokens, typography, grid, routing, content contracts, global shell and test setup.
- Build with real approved copy/assets where supplied.
- Where content is pending, use clearly centralised draft content marked for replacement in the content/data layer; do not show “lorem ipsum”, fake reviews or fake operational claims in production UI.

Phase C — build by component and frame:
- Build one reusable component/frame at a time.
- Verify compact and wide layouts after each major frame.
- Do not regenerate or rewrite working sections when refining one component.
- Preserve stable Git history/checkpoints.

Phase D — integrate and harden:
- Add content, responsive imagery, forms, metadata, structured data, motion tiers and graceful fallbacks.
- Run accessibility, performance, security, responsive, cross-browser, visual and functional checks.
- Fix root causes, not only visible symptoms.

Phase E — prove completion:
- Run the production build.
- Test every acceptance criterion.
- Inspect the website in a real browser at all required widths.
- Deliver screenshots, audit results, known constraints, content gaps and deployment instructions.

PLATFORM ADAPTER

For Google Antigravity/local-code execution:
- Prefer Next.js App Router, strict TypeScript, server components by default, CSS custom-property tokens and component-scoped styles.
- Use the current supported stable/LTS versions at implementation time and pin them.
- Use browser/Chrome tools to inspect compact and wide output, console errors, accessibility tree, network behavior and Core Web Vitals.
- Use a headless CMS adapter interface. If no CMS account is configured, implement a typed local content provider with the same interface so it can be replaced without redesigning components.

For Lovable:
- Use Plan mode before code, then Agent mode for implementation.
- Use the platform’s strongest supported React + TypeScript production stack.
- If the project is Vite-based, implement static/prerendered indexable marketing routes where supported, route-specific metadata and a clean future migration boundary. Do not pretend client-only rendering is equivalent to SSR.
- Use Tailwind only as an implementation utility, not as a visual identity. Define semantic tokens and avoid default shadcn/Lovable aesthetics.
- Use Lovable Cloud/Supabase only when it creates a real requirement such as event-form persistence or managed content. Do not add authentication or a database to a public restaurant website without need.
- Connect GitHub and keep the code exportable and maintainable outside Lovable.

BRAND STRATEGY

One 8 Restobar must feel like a confident international hospitality brand: contemporary, cinematic, social, tactile and warm. It should express a night worth remembering without falling into generic nightlife neon or beige “luxury restaurant” clichés.

Creative territory: “One table. Eight moods. One unforgettable night.”

Treat that line as a design territory and draft copy, not an unchangeable slogan or factual claim. If the business meaning of “One 8” is supplied, adapt the narrative to the verified brand story.

Original signature system for One 8:
- Use “1 / 8” as an editorial indexing system for moments, spaces or sensory chapters only when supported by real content.
- Develop a restrained “orbit” device: one precise circular arc or radial line referencing gathering around a table. Use it sparingly—maximum one leading device per viewport.
- Use asymmetrical editorial layouts, tactile materials, controlled depth and real hospitality photography.
- Do not reuse the 20-degree cut or the literal day/night switch from the reference website.

THE DOT SIGNATURE

The website must demonstrate The Dot’s quality through disciplined design, clean engineering, accessibility, performance and exceptional detail—not by making the agency louder than the client.

Implement a refined, configurable footer credit:
“A digital experience by The Dot”

Requirements:
- Visually secondary to One 8’s contact and reservation information.
- Use a single animated/static dot as the micro-signature; motion stops in reduced-motion mode.
- Link destination is configuration-driven and must not use a fake URL.
- Add an accessible label.
- Make the entire credit removable through one configuration flag without layout breakage.
- Never add “Made with AI”, builder branding or platform watermarks in the production experience.

DESIGN DIRECTION

Avoid AI-slop and template design.

Required qualities:
- Editorial rather than card-grid driven.
- Premium without excessive decoration.
- Realistic, human and atmospheric.
- High contrast and highly readable.
- Mobile authored independently, not a collapsed desktop.
- Irregular section rhythm with strong whitespace.
- One expressive idea per frame.

Prohibited defaults:
- Generic hero with centred vague headline over an unrelated stock image.
- Beige/black luxury template.
- Purple/neon gradient nightlife template.
- Glassmorphism, floating blobs, glow, random grain or excessive blur.
- Pills for every button and label.
- Three identical rounded cards repeated down the page.
- Infinite marquees, custom cursors, scroll-jacking or autoplay audio.
- AI-generated people, food, venue, staff or reviews presented as real.
- Fake Michelin/award/review statistics.
- Random icons where typography or a clear label works better.
- Excessive animation or hidden navigation.

VISUAL SYSTEM

Create semantic design tokens before page styling. The following is an initial One 8 direction; adjust exact values only after contrast testing and approved assets:

Colour:
- --night-950: #0B1014 — principal dark canvas
- --charcoal-800: #20282D — elevated dark surface
- --ivory-50: #F4EFE6 — principal light canvas
- --porcelain-0: #FFFCF6 — high light
- --wine-700: #6F2438 — controlled wine accent
- --ember-500: #C66B3D — heat/accent, sparing
- --brass-500: #B59662 — rule/details, not low-contrast body text
- --sage-400: #9EAA91 — quiet culinary accent
- --ink-text: #12171A
- --light-text: #FFF9F0

All exact foreground/background pairs must meet WCAG 2.2 AA. Never assume a token is accessible because it looks premium.

Typography:
- Display: licensed expressive editorial serif with Latin Extended support; provide a legal fallback if no licence exists.
- Interface/body: humanist grotesk with excellent readability.
- Self-host WOFF2 only when font rights permit.
- Maximum four font files in the initial load.
- Use fluid type and optical line breaks.
- Body measure 55–70 characters, line-height 1.55–1.7.
- Sentence-case UI labels; no excessive uppercase tracking.

Layout:
- 12-column wide, 8-column medium, 4-column compact.
- Maximum framed content width 1440px.
- Text measure is capped independently.
- Fluid section spacing using clamp().
- Images may bleed; text must remain aligned and readable.
- Avoid unnecessary bordered containers.

Interaction:
- Primary CTA is solid and high contrast, with restrained 2–4px corner radius or sharp corners.
- Secondary actions use text + rule/arrow.
- All interactive elements include default, hover, focus-visible, active, disabled, loading, success and error states.
- Minimum pointer target 44 × 44 CSS pixels.
- One dominant CTA per frame.

CONTENT DIRECTION

Primary language: use the verified business language. If none is supplied, build English as the launch locale and keep the content model ready for a second locale without showing an empty language switch.

Draft homepage proposition for layout testing:
“One 8 Restobar”
“Dinner, drinks and the energy between them.”

Draft supporting copy:
“A contemporary restobar shaped around shared plates, crafted pours and evenings that move at their own pace.”

Treat all copy as editable structured content. Do not invent city/location in the H1 until confirmed. Once location is supplied, the hero must communicate category + location clearly for users and SEO.

CTA labels must predict their destination:
- Reserve a table
- Explore the menu
- Discover the bar
- Plan an event
- Get directions

Do not use vague “Learn more” CTAs when a specific label is possible.

INFORMATION ARCHITECTURE

Build these launch routes, using verified slugs and locale policy:

1. Home
2. Experiences overview
3. Dining / Restaurant experience
4. Bar experience
5. Additional experience pages only when verified by the business (terrace, lounge, private dining, kitchen, etc.)
6. Menus index
7. Food menu — semantic HTML
8. Drinks/cocktail menu — semantic HTML
9. Events & private dining
10. Visit / hours / directions / contact
11. About One 8
12. Privacy
13. Legal / terms as jurisdiction requires
14. Accessible 404 and general error state

Do not force the five-space taxonomy from 20° onto One 8. The CMS/content model must allow the real One 8 venue structure.

GLOBAL COMPONENTS G01–G05

G01 — Header/navigation:
- Logo, concise navigation, locale when available and “Reserve a table”.
- Transparent only when contrast is verified over the exact hero crop; solid after threshold.
- Accessible desktop menu and full-height compact menu.
- Skip link first in focus order.
- Escape closes overlays; focus is managed correctly.

G02 — Reservation action:
- Persistent but not obstructive.
- Reservation URL is configuration-driven.
- If missing, show a controlled non-production notice in development; never ship a fake link.
- Track outbound action without personal data.

G03 — Opening status:
- Derive from one authoritative structured source, timezone and exceptions.
- States: open now, opens later, closed today, exceptional closure and unknown/unavailable.
- Never duplicate hours manually across pages.

G04 — Locale:
- Preserve route context.
- Never use flags.
- Hide the control until at least two complete locales exist.

G05 — Footer:
- One 8 address, hours, phone, email, maps, social, reservation and legal.
- The Dot credit is subtle, configurable and accessible.

HOMEPAGE — BUILD FRAME BY FRAME

H00 — First paint:
- Immediate useful render using the hero poster/colour field.
- No splash screen, blank loader or delayed CTA.
- No layout shift when fonts/media/motion initialise.

H01 — Hero:
- Real One 8 visual with wide and compact crops.
- Clear H1/proposition, “Reserve a table” and “Explore the menu”.
- Current/next service cue.
- One original orbit/radial detail at most.
- Optional muted short video only after poster-first loading and performance validation.

H02 — Decision rail:
- Today’s hours/status, location when known, reserve and directions.
- Scannable in under five seconds.

H03 — Brand proof:
- 60–90 words maximum.
- One concrete culinary/hospitality proof.
- Tactile real detail image.

H04 — Experience index:
- Build from verified One 8 spaces/occasions.
- Use editorial numbered rows (up to eight only when eight real chapters exist).
- Each row has name, “best for” phrase and service cue.
- Wide: focus/hover updates one reserved preview stage.
- Compact: each preview appears inline with explicit link.
- Keyboard, mouse and touch information parity.

H05–H09 — Experience previews:
- Real space/process/guest imagery.
- Stable media stage; no layout reflow.
- Preview transition 300–450ms.
- Explicit “Discover [experience]” link.

H10 — Current menu:
- Semantic HTML is primary; PDF is secondary.
- Show effective/updated date.
- Current representative food and drink visuals.
- Dietary/allergen legend where verified.

H11 — Events/private dining:
- Real group/space image.
- Verified capacity/format data only.
- Clear “Plan an event” route.

H12 — Craft/team:
- Real kitchen/bar/team process.
- No invented chef claims or awards.
- Human proof rather than generic brand language.

H13 — Visit:
- Status, weekly hours, exception notice, address, directions, transport/parking/accessibility where known, phone and reserve.
- Do not load an invasive map before consent; use a static preview/link.

H14 — Footer:
- Calm, high-contrast conclusion.
- No entrance animation that delays practical information.
- Configurable The Dot signature.

SECONDARY PAGE TEMPLATE

Each experience detail page must contain:
1. Hero with concise promise and service period.
2. Orientation strip: best for / when / where / reserve.
3. Editorial scene with real imagery.
4. Related menu.
5. User-controlled gallery or craft sequence.
6. Practical facts and accessibility notes.
7. Adjacent experience and reserve CTA.

MENUS

- Render categories/items as semantic HTML.
- Structured fields: name, description, price, currency, dietary/allergen metadata, availability and effective date.
- Responsive document typography, not a grid of cards.
- If content is unavailable, create typed sample content in a clearly marked development fixture; do not publish it as real.
- PDF download is secondary and labelled.

EVENT FORM

Fields:
- Name, email, optional phone.
- Event type.
- Preferred date and approximate time.
- Guest count.
- Space preference or “Help me choose”.
- Optional message.
- Required privacy acknowledgement.
- Separate optional marketing consent only when legally/operationally needed.

Behavior:
- Semantic form and server-side validation.
- Specific inline errors + focusable error summary.
- Preserve valid data after recoverable failure.
- Accessible non-puzzle spam protection.
- Idempotency/duplicate-submit protection.
- Localised confirmation with reference and only an approved response expectation.
- Never send personal fields/free text to analytics or general logs.
- If no backend/CRM is configured, implement the form boundary and a safe development adapter; clearly document what must be connected before production.

REALISTIC VISUAL POLICY

- Use supplied real One 8 assets.
- Never use AI-generated venue, people, food, drinks or staff as if they are real.
- If assets are missing, use neutral development placeholders that visibly state the required shot ID outside production builds; do not source random restaurant stock and call it One 8.
- Implement the asset metadata model from REALISTIC-VISUAL.md: focal points, compact/wide crops, alt decision, rights, credit and expiry.
- Support AVIF/WebP/JPEG and explicit dimensions.
- Hero requires separate compact and wide composition when one crop is insufficient.

MOTION AND PARALLAX

Motion must be progressive enhancement and follow PARALLAX-SCROLLING.md.

Capability tiers:
- Tier A: static final composition for reduced motion, data saver, JS-off and low capability.
- Tier B: opacity/small translate/clip reveals for compact/touch.
- Tier C: restrained two/three-layer depth only on capable wide devices.

Rules:
- Native scrolling only; no scroll-jacking.
- Text and controls stay in normal document flow.
- Parallax differential generally 4–12% maximum.
- Transform and opacity for continuous motion; avoid layout animation.
- No pinning that forces users to wait through copy.
- One signature motion idea per viewport.
- Motion ends before the practical Visit/footer frames.
- prefers-reduced-motion disables scroll-linked motion and autoplay video while preserving identical content/order.

ACCESSIBILITY

WCAG 2.2 AA is a release requirement.

Implement and verify:
- Semantic landmarks and one descriptive H1 per page.
- Logical headings and DOM/visual order.
- Keyboard access to all tasks.
- Visible focus in every theme.
- 44 × 44 minimum targets.
- Body contrast 4.5:1; large/essential UI at least 3:1.
- Useful contextual alt text and decorative empty alt.
- Labels always visible; no placeholder-only forms.
- Skip link, accessible navigation/dialogs, error handling and route focus.
- 200% zoom/reflow, screen-reader usage, forced colours and reduced motion.
- No essential hover-only, colour-only, audio-only or motion-only information.
- Core navigation, content, menus, phone/email and reservation link remain usable without JavaScript.

TECHNICAL SEO

- Server-render or prerender meaningful indexable HTML.
- Route-specific title, description, canonical and Open Graph image.
- Sitemap, robots and legacy redirect facility.
- Add Restaurant JSON-LD only with verified data: name, address, geo, telephone, URL, cuisine, menu, reservations, hours and images.
- Do not include fake rating, price range, awards or unconfirmed facts.
- Implement locale alternates only for complete translated pages.
- HTML menu pages are canonical; PDFs are supporting files.

PERFORMANCE BUDGETS

Field targets at the 75th percentile:
- LCP ≤ 2.5 seconds.
- INP ≤ 200ms.
- CLS ≤ 0.1.

Launch budgets per landing page:
- Initial JavaScript ≤ 170KB gzip.
- Initial CSS ≤ 55KB gzip.
- Fonts ≤ 180KB WOFF2 total.
- Above-fold images ≤ 550KB compact and ≤ 900KB wide.
- Optional hero video must not be the LCP dependency; ≤ 1.8MB first segment.
- No blocking third-party scripts.
- Motion JS ≤ 35KB gzip on routes requiring cinematic motion, preferably less.

Implementation safeguards:
- Preload only the true LCP asset.
- Lazy-load below-fold media and motion modules.
- Reserve media dimensions to prevent shift.
- Self-host/subset licensed fonts.
- Split third-party/reservation/map code by route and consent/intent.
- Do not sacrifice performance to imitate the reference website.

SECURITY AND PRIVACY

- Validate and sanitise all untrusted data.
- HTTPS-ready configuration and secure headers.
- Content Security Policy compatible with selected vendors.
- No secrets in client bundles.
- Rate-limit form endpoints.
- Consent before non-essential analytics/embeds.
- Minimise personal data and document retention.
- Perform a final dependency/security scan and resolve all critical findings before publishing.

ANALYTICS

Implement a provider-agnostic, consent-aware event layer:
- reserve_cta_clicked: page, placement, locale.
- menu_viewed / menu_pdf_downloaded: menu type, effective date.
- experience_viewed.
- event_form_started / submitted / failed and non-sensitive error category.
- directions_clicked / phone_clicked / email_clicked.
- Core Web Vitals and uncaught client errors.

Never transmit personal data, full form text or sensitive URL parameters.

COMPONENT AND CODE QUALITY

- Strict TypeScript; no broad any types without justification.
- Reusable semantic components, not a monolithic page component.
- Separate CMS/data mapping from presentation.
- Centralised configuration for business facts and integrations.
- No duplicated hours/contact/reservation data.
- No dead code, debug strings, console errors, placeholder comments or builder watermarks in production.
- Document non-obvious architectural decisions.
- Components include all states and are testable in isolation.
- Keep dependency count low and justify every animation/UI package.

REQUIRED TESTS

Automated:
- Typecheck, lint and production build.
- Unit tests for hours/status/timezone, menu current-state and validation.
- Component/accessibility tests for navigation, experience index, menu and form.
- End-to-end tests for reserve hand-off, menu, event submission/error recovery, visit and locale behavior.
- Automated accessibility scan on representative routes.
- Asset/bundle budget checks.
- Link, metadata and structured-data checks.

Manual/browser verification:
- Widths: 320, 390, 768, 1024, 1440 and 1920 pixels.
- Short landscape viewport.
- Keyboard-only.
- Screen reader spot check.
- 200% zoom.
- Reduced motion and forced colours.
- Slow connection and failed image.
- Current iOS Safari, Android Chrome and latest evergreen desktop browsers where available.
- Browser Back/forward and route focus.

VISUAL QA

Capture and inspect at minimum:
- Homepage H00–H14 at 390×844 and 1440×900.
- Mobile menu open state.
- Experience detail.
- Long menu page.
- Event form default, error and success.
- Visit page with exceptional-closure state.
- 404.
- Reduced-motion hero/experience index.

Reject and revise if:
- The result resembles a common AI landing-page template.
- The hero does not communicate category and location/context.
- Mobile appears to be collapsed desktop.
- The same card pattern repeats across sections.
- The website loses identity with the logo hidden.
- Motion disabled makes the composition feel unfinished.
- Real long-form/menu content breaks layout.
- CTA, hours or menus are difficult to find.

DEFINITION OF DONE

Do not declare completion until all of the following are true:

1. All approved routes, frames and responsive states are implemented.
2. Every PRD launch requirement has a traceable implementation and test.
3. No operational data is fabricated or duplicated.
4. Reservation, menu, events, visit and contact flows work end-to-end or have clearly documented production connection blockers.
5. Accessibility review has no blocker or critical issue.
6. Production build passes and has no console errors.
7. Performance budgets pass on representative pages or every exception has measured evidence and approval.
8. Metadata, canonical, sitemap, robots and Restaurant structured data are correct for verified content.
9. Responsive browser screenshots have been reviewed and corrected.
10. Reduced-motion and JavaScript-off baselines remain usable.
11. The Dot credit is refined, accessible, configurable and secondary.
12. README includes setup, environment variables, content workflow, test commands, deployment, rollback and known external dependencies.

FINAL DELIVERY ARTIFACTS

Provide:
- Working production-ready source code.
- Requirement traceability table with final status.
- Architecture and content-model summary.
- Environment variable example with no secrets.
- CMS/content editing instructions.
- Test and audit results.
- Performance/bundle report.
- Responsive screenshots.
- Asset/content gaps that require the client.
- Deployment and rollback instructions.
- Prioritised post-launch recommendations tied to reservations, event leads, menu engagement and operational efficiency.

Begin by reading all nine Markdown specifications, inspecting the project/assets and producing the frame-by-frame implementation plan. Do not generate UI before that plan is complete.
```

---

## Recommended second prompt after the plan is approved

Use this as a separate execution message, especially in Lovable Agent mode:

```text
The frame-by-frame plan is approved. Execute it in the agreed order.

Build the global foundations and components G01–G05 first, then homepage H00–H04 and H13–H14. Verify 390×844 and 1440×900, keyboard behavior, console output and reduced motion before continuing. Then build H05–H12 and the secondary templates component-by-component.

After each milestone:
1. run the relevant tests and production build;
2. inspect the rendered result in-browser;
3. fix regressions before moving on;
4. update the requirement traceability table;
5. preserve a stable version/checkpoint.

Do not replace verified content with invented content. Do not use generic stock or AI-generated hospitality visuals. Do not weaken accessibility, performance or semantic structure to add visual effects.

Continue until the complete Definition of Done in the master prompt is satisfied.
```

## Recommended final audit prompt

```text
Perform a production-readiness audit of the entire One 8 Restobar website. This is an evidence-based verification pass, not a redesign.

Audit every requirement in the nine Markdown specifications and master prompt. Run the production build, automated tests, accessibility checks, security review, link/metadata/structured-data checks and bundle analysis. Inspect all required viewport screenshots in the browser, including reduced motion, keyboard navigation, error states, long menu content and the event form.

Fix every blocker, critical issue and safe in-scope serious issue. Re-run affected tests after each fix. Do not hide failures or lower thresholds.

Return:
- pass/fail requirement traceability table;
- test/build/audit evidence;
- before/after screenshots for corrected visual issues;
- remaining external blockers requiring real business data or credentials;
- deployment and rollback checklist;
- a concise launch recommendation: GO, CONDITIONAL GO or NO-GO with reasons.
```

