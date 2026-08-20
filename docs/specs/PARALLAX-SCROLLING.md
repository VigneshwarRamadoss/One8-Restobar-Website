# 20° Restobar — Parallax & Scroll Motion Specification

**Status:** Motion engineering brief  
**Version:** 1.0 — 20 August 2026  
**Principle:** Scroll motion creates spatial memory; it must never control access to content.

## 1. Motion objectives

- Give the real venue a sense of depth and material presence.
- Connect the five experiences into one continuous hospitality journey.
- Use the 20-degree brand device as a precise reveal language.
- Preserve native scroll, reading order, accessibility and excellent performance.

## 2. Prohibited patterns

- Scroll-jacking or replacing native scroll physics.
- Mandatory horizontal scrolling for primary content.
- Pinning long text while the user waits through a sequence.
- Large background motion that causes nausea or loses orientation.
- Parallax on every section.
- Autoplay motion that competes with reading.
- Canvas/WebGL for content that can be expressed as semantic HTML and responsive images.
- Motion-triggered navigation or controls that move away from the pointer.

## 3. Capability tiers

| Tier | Conditions | Experience |
|---|---|---|
| A — Static | Reduced motion, data saver, low capability or JS unavailable | Final compositions, no parallax, native content order |
| B — Essential motion | Default compact/touch | Opacity, small translate and clip reveals; no multi-layer depth |
| C — Cinematic | Wide pointer-capable device meeting performance check | Two/three-layer parallax at restrained range |

The server renders Tier A. Enhancement selects B or C without changing semantic content.

## 4. Homepage motion: frame by frame

### Frame 00 → 01: first paint to hero

- Hero poster, H1 and actions render immediately.
- Optional 20° mask resolves from 105% to 100% over 700–900 ms after first paint.
- Text opacity may enter over 400 ms; no character-by-character split.
- Reserve action is interactive from first paint.
- Reduced motion: final state, no transition.

### Frame 01 → 02: hero exit / decision rail

- Media translates at 0.92–0.96 scroll ratio, maximum 8% travel.
- Copy remains in normal flow; do not pin.
- Header switches to solid when a contrast-safe sentinel crosses the top.
- Status/CTA rail never overlaps browser UI on compact screens.

### Frame 02 → 03: brand proof

- Tactile detail reveals behind a 20° clip edge.
- Image travel: 6% vertical maximum.
- Body copy appears as one block; avoid line stagger.

### Frame 03 → 04: five-experience index entrance

- Index rules expand from inline start over 500 ms.
- Rows fade/translate 12–20 px with maximum 50 ms stagger.
- Preview stage is already allocated; no layout shift.

### Frames 05–09: experience previews

- Focus/hover/tap crossfades between preloaded near-neighbour images.
- Crossfade 300–450 ms; 20° clip may lead, but do not combine with scale and rotation.
- Labels and CTA remain stationary.
- Keyboard focus and hover produce identical informational states.
- Compact: each image is inline; entrance reveal only.

### Frame 10: menu scene

- Foreground detail and background room may move at ratios 1.03 and .96.
- Total differential movement ≤ 12% of element height.
- Price/menu text never parallax-scrolls.

### Frame 11: event scene

- Use one depth layer or a simple reveal; this is a conversion block.
- CTA does not animate continuously and remains stable on hover/focus.

### Frame 12: Cocina/team

- Process image can reveal from behind portrait or material plane.
- No artificial 3D rotation of faces/food.

### Frame 13 → 14: visit/footer landing

- Motion decelerates and ends.
- Practical information appears without reveal delay.
- Footer is static to signal completion.

## 5. Experience-page motion pattern

Use at most two signature scenes per page:

1. **Hero depth:** restrained media travel while title exits naturally.
2. **Editorial depth scene:** foreground object, action subject and venue context.

All other sections use simple intersection reveals or none. Repetition across five experience pages should feel like a system, not cloned choreography; each space changes imagery and pacing, not interaction grammar.

## 6. Parallax scene anatomy

```text
Section (normal document flow, min-height only as content requires)
├── Semantic text block (never transformed for parallax)
├── Media stage (overflow clipped)
│   ├── Background layer: ratio .96–.98
│   ├── Subject layer: ratio 1.00
│   └── Foreground layer: ratio 1.02–1.05
└── Optional caption (normal flow)
```

Prefer one photograph with an internal sense of depth. Multi-layer cut-outs require exceptionally clean real assets and should be limited to one hero campaign moment.

## 7. Motion tokens

```css
--motion-ui-fast: 160ms;
--motion-ui: 240ms;
--motion-reveal: 600ms;
--motion-cinematic: 900ms;
--ease-out: cubic-bezier(.22, 1, .36, 1);
--ease-standard: cubic-bezier(.2, 0, 0, 1);
--parallax-subtle: 0.04;
--parallax-standard: 0.08;
--parallax-max: 0.12;
```

Values are maximum design tokens, not a requirement to animate at the maximum.

## 8. Technical implementation

- CSS transitions/animations handle control states and simple reveals.
- IntersectionObserver activates/deactivates off-screen scenes.
- For scroll-linked motion, use CSS scroll-driven animation where support and QA are sufficient; otherwise requestAnimationFrame via a single managed motion module.
- GSAP/ScrollTrigger is allowed only if it reduces complexity and is code-split to pages with Tier C scenes.
- Transform and opacity only for continuous motion; avoid layout properties.
- Use passive listeners where appropriate and one animation loop.
- Pause work when document is hidden; destroy observers/triggers on route change.
- Set `will-change` shortly before animation and remove it afterward.
- Never preload all scene media.

## 9. Reduced motion

At `prefers-reduced-motion: reduce`:

- Disable scroll-linked transforms and autoplay video.
- Remove large clip reveals; allow instant state or a short opacity change ≤ 150 ms if acceptable.
- Do not pin sections.
- Keep carousels manual.
- Show the same copy, images, captions and actions in the same reading order.

Provide an in-product motion toggle only if research shows a need beyond OS preference; do not add settings theatre by default.

## 10. Compact and touch behavior

- No pointer-following effects or custom cursor.
- Avoid fixed-background simulations.
- Limit reveal translate to ≤ 20 px.
- Disable multi-layer parallax under the agreed content/capability breakpoint.
- Respect browser bars and safe-area insets.
- Test fast flick, reverse scroll, orientation change and browser Back restoration.

## 11. Performance safeguards

- Motion JS budget: ≤ 35 KB gzip on routes that use Tier C; zero on purely static routes where feasible.
- Maintain smooth interaction on representative mid-tier Android hardware; do not use desktop-only frame-rate evidence.
- Long tasks > 50 ms during scroll require investigation.
- Do not animate filter blur, large shadows or full-screen colour effects continuously.
- Decode the next preview image on intent/near visibility; keep fallback immediate.
- RUM correlates Web Vitals with page type, not individual identity.

## 12. Motion QA script

For every animated frame verify:

1. Enter slowly, quickly and from a deep link.
2. Reverse scroll midway.
3. Resize/orientation change during and after scene.
4. Keyboard focus while preview changes.
5. Reduced motion before load and changed at runtime.
6. Background tab and resume.
7. Slow network/image failure.
8. 200% zoom and short viewport.
9. iOS Safari and Android Chrome touch scrolling.
10. Back/forward scroll restoration.

## 13. Acceptance criteria

- Native scroll is never intercepted.
- Core content and actions work with JS off.
- Reduced-motion version contains no scroll-linked movement.
- No visible layout shift when motion initialises.
- Focus target never moves unexpectedly.
- Each motion scene has a documented narrative purpose.
- Motion budgets and representative-device tests pass.
- A visitor can skim from hero to footer without waiting for choreography.

