# One 8 Restobar — Metallic Accent System

## Purpose

Introduce champagne-gold and brushed-silver detailing without turning the website into a jewellery, casino, or generic “luxury” template. Metal is a finishing material, not a background treatment: the dark hospitality atmosphere, editorial typography, photography, and content remain dominant.

## Design Principle

- Use metal on approximately 10% of the interface and dark neutral surfaces on the remaining 90%.
- Use gold to indicate warmth, appetite, service, and conversion.
- Use silver to indicate structure, navigation, craft, and precision.
- Keep every metallic treatment one pixel thick unless it is a small status detail.
- Never apply metallic gradients to headings, paragraphs, full cards, or large backgrounds.
- Never use continuous shimmer, particles, glow, sparkle, or looping animations.

## Material Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--metal-gold-deep` | `#806034` | Dark edge of champagne gold |
| `--metal-gold` | `#c3a064` | Primary champagne-gold line |
| `--metal-gold-highlight` | `#ead49e` | Short reflected highlight |
| `--metal-silver-deep` | `#667177` | Dark edge of brushed silver |
| `--metal-silver` | `#aeb8bd` | Primary brushed-silver line |
| `--metal-silver-highlight` | `#e0e4e5` | Short reflected highlight |
| `--metal-line-duration` | `800ms` | Section-line reveal duration |

The gradients simulate a restrained change in reflectance. They do not attempt photorealistic chrome.

## Section Mapping

| Area | Material | Treatment | Behaviour |
| --- | --- | --- | --- |
| Global navigation | Silver | Thin active/hover underline | UI-speed transition only |
| Header reservation action | Gold | Narrow reflected sweep | Runs once per hover or keyboard focus |
| Brand philosophy | Silver | Short editorial rule | Reveals once when entering the viewport |
| Experience index | Gold | Active desktop row rule | Responds to pointer and keyboard focus |
| Menu feature | Gold | Full-width chapter divider | Reveals once; prices remain warm gold |
| Private events | Gold | Divider above factual capacity data | Reveals once |
| Craft & Kitchen | Silver | Short rule plus static image-edge detail | Reveals once; no image shimmer |
| Visit | Silver | Divider above logistics columns | Reveals once; status remains semantic |
| Footer | None | Existing static borders only | No decorative motion |

## Motion Specification

- Section rules reveal using `transform: scaleX()` so they do not cause layout or paint-heavy width animation.
- Reveal duration: 800ms with the existing premium ease-out curve.
- Reveal threshold: approximately 25% visibility, triggered once per page view.
- Interactive nav and CTA effects use the existing 160–220ms interface timing.
- No scroll-linked animation and no animation library are required.
- With `prefers-reduced-motion: reduce`, metallic lines render immediately and CTA/nav transitions are removed.
- Content, links, and controls never depend on the decorative animation or on JavaScript.

## Accessibility and Performance

- Every line is `aria-hidden` and carries no meaning.
- Focus indicators remain visually stronger than metallic decoration.
- Gold and silver are not used as the sole indicator of state; active navigation retains `aria-current` and semantic weight.
- The observer disconnects after the first reveal and creates no continuous work.
- The line component adds no external dependency and isolates the only client-side reveal behaviour.
- Static server-rendered content remains complete when JavaScript is unavailable.

## Acceptance Criteria

- No heading or large surface uses a metallic gradient.
- No metallic effect loops while the page is idle.
- Metallic rules remain one physical CSS pixel at all responsive sizes.
- Navigation, reservation, and experience states are keyboard-operable.
- Reduced-motion mode contains no visible sweep or reveal.
- The treatment remains legible and uncluttered at 320, 390, 768, 1024, 1440, and 1920 pixels.
- No horizontal overflow, layout shift, or new accessibility violation is introduced.

