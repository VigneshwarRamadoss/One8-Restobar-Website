# One 8 Restobar — Visual System & Antigravity Implementation Brief

**Status:** Art-direction previsualisation  
**Language:** English  
**Brand position:** Contemporary urban Indian restobar; social, tactile, editorial and nocturnal  

> The supplied images are previsualisation references. They do not document the real One 8 venue, staff, dishes, entrance or event spaces. Keep them visibly marked as preview assets in development and replace them with client-approved photography before production launch.

## 1. Design DNA

The site should feel premium because it is composed, useful and believable—not because it uses more effects.

- **Tactile:** mineral plaster, midnight-blue surfaces, dark timber, brushed steel, natural linen, condensation, steam and honest food texture.
- **Editorial:** decisive crops, asymmetric balance, serif display type, narrow reading measures and generous negative space.
- **Alive:** real service gestures, incidental guests, imperfect table settings and a clear transition from blue hour to warm evening.
- **Indian and contemporary:** people, food cues and hospitality context should belong to a modern urban Indian restobar. Avoid imported Mediterranean, European-bistro and generic hotel imagery.
- **Restrained:** no neon nightclub language, gold overload, fake Michelin plating, rooftop spectacle, stock-photo smiles or orange-and-teal colour grading.

## 2. Frame-by-frame asset map

| Website frame | Asset | Job | Crop / focal rule | Accessibility |
|---|---|---|---|---|
| Home hero | `01-home-hero-wide.png` | Establish category, atmosphere and desire in under five seconds | Desktop 16:10; use a separate 4:5 art-directed crop on compact screens; protect left copy-safe field | Empty alt when the adjacent H1 and proposition communicate the same meaning |
| Home brand proof | `02-brand-proof-portrait.png` | Make hospitality tactile through one service gesture | 4:5; preserve hand, glass and plate; do not centre-crop the hand off-frame | `A server sets a water glass beside a shared plate.` if informative |
| Experience: Dining | `03-experience-dining.png` | Prove shared dining and social scale | 3:2 desktop, 4:5 compact; keep the passing gesture and all four diners readable | Describe the shared-table action, not inferred relationships |
| Experience: Bar | `04-experience-bar.png` | Communicate crafted drinks and human exchange | 3:2 desktop, 4:5 compact; preserve drink and bartender's hand | `A bartender serves a cocktail across the bar.` |
| Experience: Terrace | `05-experience-terrace.png` | Differentiate the open-air occasion | 3:2 desktop, 4:5 compact; preserve foliage, one table and architectural shelter | Describe visible terrace use; do not claim season or location |
| Experience: Private Lounge | `06-events-private-lounge.png` | Support private-event consideration without inventing capacity | 16:9 / 4:3; keep table lead-in and staff preparation | `Staff prepare a private dining table before an event.` |
| Menu index / home menu feature | `07-menu-shared-plate.png` | Create appetite and make the food route visually distinct | 1:1 only; retain full plate rim and upper-left quiet field | Keep decorative unless the exact approved dish is later identified |
| Home Craft & Kitchen primary | `08-kitchen-plating-portrait.png` | Prove process and kitchen discipline | 4:5; keep plate, both hands and stainless pass | `A cook finishes a plate at the kitchen pass.` |
| Home Craft & Kitchen secondary | `09-kitchen-process-detail.png` | Add tactile rhythm to the diptych | 3:2 / 4:3; keep hand, falling spice and plate | Decorative if paired with the primary process image |
| About hero | `10-about-hero-wide.png` | Explain hospitality as preparation and welcome | 16:10 desktop; authored 4:5 compact crop; keep host gesture | Empty alt when the About heading and lead provide equivalent context |
| Visit arrival | `11-visit-arrival.png` | Reassure users about the arrival moment | 3:2; keep threshold and guests; never use as a map or factual façade | `Two guests approach an open restaurant entrance at blue hour.` |
| About Craft & Kitchen | `12-about-craft-reference.png` | Replace the rejected pottery image with an unmistakable restaurant-kitchen scene | 4:5; preserve chef hands, plate and stainless-steel context | Literal action description only |

## 3. Sections that should remain image-free

- Header and navigation
- Decision rail / live status
- Full HTML menu body
- Event enquiry form
- Weekly hours and verified contact information
- Legal pages
- Footer

These frames depend on speed, scanning and trust. Decorative photography would compete with the task.

## 4. Antigravity implementation prompt

```text
Implement the supplied One 8 Restobar visual pack across the existing React/Next.js website. First inspect the existing components, CSS Modules, design tokens, publication-safety utilities and Markdown specifications. Preserve the current information architecture and verified content. Do not redesign the product into a generic luxury template.

VISUAL INTENT
One 8 is a contemporary urban Indian restobar. Its visual language is tactile, editorial and alive: midnight ink, mineral stone, paper linen, dark timber, brushed steel and restrained amber warmth. Premium quality must come from hierarchy, spacing, crop discipline, typography and believable hospitality moments—not gradients, glassmorphism, floating cards, excessive animation or luxury clichés.

ASSET MAPPING
- Home hero: /images/previsual/01-home-hero-wide.png
- Brand proof: /images/previsual/02-brand-proof-portrait.png
- Dining experience: /images/previsual/03-experience-dining.png
- Cocktail bar experience: /images/previsual/04-experience-bar.png
- Outdoor terrace experience: /images/previsual/05-experience-terrace.png
- Private lounge and Events proof: /images/previsual/06-events-private-lounge.png
- Menu index and Taste of One 8: /images/previsual/07-menu-shared-plate.png
- Craft & Kitchen portrait: /images/previsual/08-kitchen-plating-portrait.png
- Craft & Kitchen detail: /images/previsual/09-kitchen-process-detail.png
- About hero: /images/previsual/10-about-hero-wide.png
- Visit arrival: /images/previsual/11-visit-arrival.png
- About craft proof: /images/previsual/12-about-craft-reference.png

IMPLEMENTATION RULES
1. Replace visible “Asset Required” boxes only where an asset is mapped above.
2. Use next/image with explicit width/height or fill inside an aspect-ratio container. Provide correct sizes and object-fit: cover.
3. Configure focal positions per breakpoint. Do not rely on one automatic centre crop for every viewport.
4. Keep all headings, labels and CTAs as semantic HTML. Never embed text in an image.
5. Add a subtle development-only “PREVISUALISATION — REPLACE WITH CLIENT PHOTOGRAPHY” label. Never expose the label as image alt text.
6. Never publish generated imagery as proof of the real venue, dish, staff, entrance, event capacity or accessibility.
7. Do not place busy photography behind long copy. Use a bounded ink gradient only when required for contrast.
8. Preserve existing paper, ink, mineral, sand and terracotta tokens. Do not recolour every section to match the photograph.
9. Experience rows must control one stable desktop media stage through opacity/clip transitions. Mobile must render its image inline; no hover dependency.
10. Use motion only for comprehension: 700–900 ms image reveal, 160–240 ms UI response, 4–8% optional parallax travel. Disable parallax and reveal travel for prefers-reduced-motion.
11. Home hero is the only priority image. Set priority/fetchPriority high only there. Lazy-load every below-fold image.
12. Do not add decorative images to the decision rail, menu document body, enquiry form, hours, contact blocks, legal pages or footer.

RESPONSIVE BEHAVIOUR
- 320–767: authored 4:5 or 1:1 crops, inline experience media, no fixed backgrounds, no parallax, minimum 44px targets.
- 768–1023: 8-column compositions, 4:3 media where appropriate, controlled sticky behaviour only when viewport height permits.
- 1024–1439: 12-column editorial compositions and stable experience preview stage.
- 1440+: cap content at the existing max frame; media may bleed intentionally but copy must not stretch.
- Test 200% zoom, reduced motion, keyboard navigation, slow image loading and missing-image fallbacks.

PERFORMANCE
- Generate AVIF and WebP through the framework image pipeline.
- Set realistic sizes attributes for each grid position.
- Prevent CLS with explicit aspect ratios.
- Do not preload all experience images.
- Keep the hero mobile derivative appropriately sized; do not send a desktop master to a 320px device.
- Confirm the hero remains within the agreed LCP budget before completion.

ACCEPTANCE TESTS
- No “Asset Required” text remains in mapped frames.
- No pottery, clay studio, Mediterranean stock imagery or generic European façade remains.
- Home, Menus, Experiences, Events, About and Visit feel like one visual system.
- Each image answers a user question and has an intentional compact crop.
- Text contrast meets WCAG 2.2 AA on the real crop.
- Layout remains usable with images disabled or failed.
- Playwright and Axe pass at 320, 390, 768, 1024, 1440 and 1920 widths.
- Capture compact and wide screenshots for every changed route.
- Run lint, strict TypeScript checks, tests and the production build.

Do not change verified business facts, invent missing content, add fake reviews or begin unrelated milestones. Stop and report any asset whose crop cannot satisfy the intended composition.
```

## 5. Production replacement shot list

Use these previsuals as a photographer's shot brief. Recreate the visual roles using the real One 8 venue, current menu items and consented staff/guests. Record rights, focal points, alt/caption decisions and expiry for every final asset.

