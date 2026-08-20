# 20° Restobar — Visual Design Specification

**Status:** Art-direction specification  
**Version:** 1.0 — 20 August 2026  
**Foundation:** `DESIGN.md`

## 1. Creative position

The visual system should feel **cultured, warm and nocturnal without becoming dark, theatrical without becoming a theme park**. The identity is not “Spain” expressed through clichés. It is Mediterranean social energy translated through material, light, rhythm and hospitality.

Three attributes guide every design decision:

- **Tactile:** linen, stone, ceramic, glass, skin, steam, metal and leaf.
- **Editorial:** decisive crops, disciplined type, irregular but balanced pacing.
- **Alive:** real gestures, changing light and small signs of human presence.

## 2. Visual narrative

### Act I — Mineral daylight

Use `--paper-50`, `--chalk-0`, ink typography, natural side light and generous negative space. Establish clarity and place.

### Act II — Warm social energy

Introduce terracotta, sand, food and people. Layouts become more layered; type remains calm.

### Act III — Ink and ember

Use `--ink-950` and `--ember-900`, candle highlights, bar reflections and controlled pale-blue accents. Finish with practical visit information at high contrast.

The narrative can progress down the homepage but must not change facts or hide content by local time.

## 3. Logo treatment

- Use the supplied vector mark; never redraw it from raster reference.
- Maintain a clear space equal to the circular degree mark diameter.
- Primary lockups: ink on light; chalk on dark; one-colour only.
- Do not apply gradients, shadows, bevels, masks through the logo or animated distortion.
- Header mark must remain legible at compact sizes; use an approved simplified mark if available.
- Favicon/app icons require dedicated optical assets.

## 4. Colour application

### Light surface pairing

- Canvas `#F5F0E7`.
- Primary text `#091A2A`.
- Secondary text: a tested ink/mineral value, never sand for body copy.
- Accent `#B69B76` for rules, large labels and non-text decoration.
- Primary action uses `#091A2A` on light; hover shifts to `#17344A`.

### Night surface pairing

- Canvas `#091A2A` or `#2A1712`.
- Primary text `#FFFDF8`.
- Secondary text uses a contrast-tested pale neutral.
- Sand and sea accents support structure; not small low-contrast labels.

### Terracotta

Terracotta is a moment of heat. Use for an important editorial accent, status detail or select action—not as a universal brand button colour.

### Gradients

Only for media legibility. Gradients must be subtle, bounded to the text region and removable when the crop already provides sufficient contrast.

## 5. Typography system

### Roles

| Role | Style | Notes |
|---|---|---|
| Display XL | Editorial serif, 400 | Homepage statements, 2–5 lines max |
| Display L | Editorial serif, 400 | Page titles |
| Heading M | Grotesk, 500–600 | Section orientation |
| Body L | Grotesk, 400 | Intro paragraphs |
| Body | Grotesk, 400 | General content |
| Label | Grotesk, 600 | Sentence case; compact |
| Data | Grotesk tabular numerals | Hours, prices, capacities |

### Responsive type tokens

```css
--type-display-xl: clamp(3.5rem, 9vw, 9rem);
--type-display-l:  clamp(3rem, 6.5vw, 6.5rem);
--type-heading-m:  clamp(1.5rem, 2.4vw, 2.5rem);
--type-body-l:     clamp(1.125rem, 1.4vw, 1.375rem);
--type-body:       clamp(1rem, .96rem + .2vw, 1.125rem);
--type-label:      .875rem;
```

- Display tracking: -0.03em to -0.015em after font testing.
- Body tracking: normal; line-height 1.55–1.7.
- Display line-height: .9–1.02; never clip diacritics.
- Avoid centred paragraphs beyond three short lines.
- German compound words must be tested at 320 px; manual soft breaks are permitted only in display copy.

## 6. Layout composition

### Grid

- Desktop: 12 columns; base gutter 24 px; exterior margin fluid 32–72 px.
- Tablet: 8 columns; 20–24 px gutters.
- Mobile: 4 columns; 16 px gutters and 20 px exterior margin where possible.
- Max frame: 1440 px; selected media can extend beyond frame to viewport edge.

### Rhythm

Alternate dense and open sections. Do not repeat `headline + paragraph + three cards`.

- Hero: compressed top/bottom framing; media-dominant.
- Editorial proof: narrow measure and generous vertical field.
- Experience index: structured, rhythmic, interactive.
- Menu: information-dense but calm.
- Visit: compact, practical and high-contrast.

### Alignment

Primary alignment is left. Centred alignment is reserved for one intentional interlude or compact CTA, not the default.

## 7. Signature graphic language

### The 20° cut

- A 20-degree clipping edge or reveal references the name.
- May appear on hero transition, one key image or section boundary.
- Do not clip text or interaction targets.
- Mobile may replace diagonal crop with a safer rectangular crop.
- Reduced motion shows the final clipped state immediately.

### Rules and indices

- 1 px or optical hairline in sand/low-contrast ink.
- Number experiences `01—05` using tabular numerals.
- Rules can expand on focus/hover; motion ≤ 240 ms.

### Icons

- Custom minimal line icons only where they improve scanning: time, location, people, accessibility.
- 1.5 px optical stroke at 24 px grid.
- Never use icons instead of labels for critical actions.

## 8. Photography layout

- Mix room-establishing, medium interaction and macro-detail images.
- Use asymmetry through crop and placement, not arbitrary rotation.
- Maximum one intentionally overlapping image cluster per long page.
- Keep faces, hands, plates and glass rims away from responsive crop danger zones.
- Credits are available in CMS and displayed where contractually required.

### Recommended crop matrix

| Use | Wide | Medium | Compact |
|---|---|---|---|
| Hero | 16:10 | 4:3 | 4:5 |
| Experience feature | 3:2 | 4:3 | 1:1 or 4:5 |
| Editorial portrait | 4:5 | 4:5 | 3:4 |
| Menu/detail | 1:1 | 1:1 | 1:1 |
| Event proof | 16:9 | 3:2 | 4:3 |

## 9. Components

### Header

- Wide: logo left, navigation centre/left, DE/EN and reserve right.
- Compact: logo, reserve text/link, menu icon with visible label or accessible name.
- Transparency is permitted only with verified contrast across the full hero sequence.
- Add a 1 px divider when solid; avoid shadow unless necessary over content.

### Buttons and links

- Primary button: rectangular with restrained 2–4 px radius or sharp edge depending on logo geometry; 48–56 px height.
- Secondary action: underlined text or text + arrow/rule.
- Avoid pill buttons as the global default.
- Focus-visible ring: 2 px plus offset, theme-specific high contrast.

### Experience index

- Each row spans the editorial frame; name large, occasion and service metadata small.
- Active row controls a single preview stage.
- Preview changes via opacity/clip, never full layout reflow.
- Mobile shows each preview inline; no hover dependency.

### Menu

- Clear category headings, prices aligned predictably, descriptions beneath names.
- Dietary markers use text abbreviations plus legend.
- Dotted leader lines are optional; test readability and wrapping.
- Long menus favour document typography over cards.

### Forms

- Labels always visible above controls.
- 52–56 px control height; textarea ≥ 144 px.
- Border/background changes are subtle; focus and errors are unmistakable.
- Required fields stated once and marked consistently.
- Success screen retains navigation and useful next steps.

### Footer

- Use an ink field with 3–4 aligned information groups.
- Make address/hours primary; social icons secondary.
- Reserve CTA visible but not competing with legal and contact comprehension.

## 10. Motion styling

- UI response: 160–240 ms.
- Section reveal: 450–700 ms.
- Image clip reveal: 700–1000 ms when on-screen and non-blocking.
- Parallax travel: typically 4–12% of element dimension, never huge viewport sweeps.
- Stagger maximum: 60 ms per item; do not stagger long body text line by line.
- Motion stops after content settles; no decorative perpetual drift.
- Full rules are specified in `PARALLAX-SCROLLING.md`.

## 11. Visual accessibility

- Test all exact token pairs; palette intention is not proof of contrast.
- Text never crosses uncontrolled busy media without a robust contrast layer.
- Focus must be visible in light, warm and night themes.
- Links inside paragraphs use underline or another non-colour cue.
- Text remains readable at 200% zoom without two-dimensional page scrolling at standard desktop width.
- High-contrast/forced-colour mode preserves controls and focus.
- Do not reveal essential content only through animation.

## 12. Visual QA matrix

Review at minimum:

- 320 × 568 compact.
- 390 × 844 modern compact.
- 768 × 1024 tablet portrait.
- 1024 × 768 tablet landscape/short desktop.
- 1440 × 900 desktop.
- 1920 × 1080 cinema with max-width behavior.
- 200% zoom.
- Reduced motion and forced colours.
- German longest-case copy and English equivalent.
- Slow image load and missing image.

## 13. Approval tests

A visual direction passes only when:

1. Viewers can name the business category and location from the hero.
2. It remains recognisably 20° without relying on the logo.
3. The five experiences feel related but meaningfully different.
4. Real content survives at least 30% copy expansion.
5. Mobile is an authored composition, not a collapsed desktop.
6. The direction looks intentional with motion disabled.
7. Performance owners approve the media and font plan.
8. No generic AI/stock visual language remains.

