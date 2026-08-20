# One 8 Restobar — Menu Experience Specification

**Status:** Production design specification with source menu awaiting client validation  
**Version:** 1.0 — 20 August 2026  
**Language:** English only  
**Applies to:** `/menus`, `/menus/food`, `/menus/drinks`, `/menus/wine`, homepage H10 and all menu-related components  
**Source menu:** `food Beverage.pdf`, 24 pages, supplied by the client  
**Design foundation:** `DESIGN.md`, `PRD.md`, `WEB-FLOW.md`, `TRD.md`, `VISUAL-DESIGN.md`

## 1. Purpose

This document defines how One 8 Restobar's menu must be structured, designed and implemented as a premium web experience. It translates the supplied print menu into accessible, responsive, indexable HTML while preserving the energy and breadth of the food offering.

The result must feel like One 8 Restobar—not a digital copy of the supplied “Sundays” booklet and not a generic menu template.

The menu has four jobs:

1. Help guests understand the food offering quickly.
2. Make a large multi-cuisine menu easy to browse on a phone.
3. Build enough confidence for a guest to reserve or visit.
4. Give the One 8 team a safe, structured way to update items, prices and availability.

## 2. Source interpretation and content status

### Observed in the supplied PDF

- The document is a 24-page A4 “Sundays — The Everyday Getaway” food booklet created in June 2024.
- It uses a tropical botanical border, mustard-yellow content panels, blue menu typography and pink/blue section tabs.
- The menu contains Indian, Pan-Asian, European and bar-food categories.
- Prices are presented in INR and the booklet states that prices are exclusive of taxes.
- The booklet includes a general allergy/intolerance instruction, but it does not provide reliable item-level allergen data.
- Vegetarian and non-vegetarian sections are identified, while vegan and gluten-free status are not consistently documented.
- Some items offer multiple variants using slash-separated prices without sufficiently explicit accessible labels.
- The final page contains “Sundays” private-party contact information and third-party availability marks; these are not One 8 facts.

### Binding content rule

The supplied PDF is a **content reference, not final One 8 production truth**.

- Do not publish the “Sundays” logo, tagline, contact details, social handle, botanical artwork or platform marks as One 8 content.
- Do not treat the PDF's June 2024 prices, descriptions, tax language or availability as current until the One 8 operations owner approves them.
- Do not infer vegan, gluten-free or allergen-safe status from an item's name.
- Every extracted item must enter the content system with `sourceStatus: "source-draft"` until approved.
- Production release is blocked if source-draft content remains publicly visible without explicit client approval.

## 3. Experience principles

### Editorial, not transactional

The menu should read like a well-designed hospitality publication, not an ecommerce catalogue. Use typography, rhythm, hierarchy and whitespace instead of a wall of cards.

### Fast orientation

A guest must be able to move from the menu title to a desired category in one interaction. The sticky category navigator must never cover headings or trap keyboard focus.

### Structured abundance

The source is intentionally broad. Organise it into a small number of understandable chapters, then preserve the more specific source categories inside each chapter.

### Honest dietary information

Dietary and allergen information is operational data. Display only verified facts and explain what each marker means.

### Conversion without interruption

Reserve and Visit actions remain available but do not repeat between every category or interrupt reading.

## 4. Information architecture

### Menu routes

```text
/menus
├── /menus/food
├── /menus/drinks       [content required]
└── /menus/wine         [content required]
```

The supplied PDF contains a food menu and limited photographed drinks, but not a structured drinks or wine list. `/menus/drinks` and `/menus/wine` must remain controlled unpublished/draft routes until separate approved data exists.

### Food-menu chapters

The long food menu should use five top-level chapters:

1. **Start & Share**
   - Bar Snacks & Fritters
   - Soups
   - Sliders
   - Salads
2. **From Asia**
   - Asian Appetizers
   - Pan-Asian Mains
   - Asian Rice & Noodles
3. **From India**
   - Tandoor & Indian Appetizers
   - The Four States
   - Pan-Indian Gravies & Curries
   - Biryani, Rice & Breads
4. **Familiar Favourites**
   - Thin-Crust Pizzas
   - From Our Grills
   - World of Pastas
5. **Desserts**

This grouping is a web navigation layer. Do not rename culturally specific dishes inside the source data without culinary/operations approval.

## 5. Menu page frames

### M00 — First paint

- Render title, short introduction, effective date and first categories in server HTML.
- No full-page loader or delayed menu reveal.
- Reserve layout space for the category navigator and any media.

### M01 — Menu hero

- H1: **Food Menu**.
- Supporting line: concise and specific to the approved offering.
- Show service applicability, effective date, currency and tax note.
- Primary action: **Reserve a table**.
- Secondary action: **Download PDF**, only when a current accessible PDF exists.
- Use one real One 8 food/table image or a quiet material field; do not reuse the PDF cover art.

### M02 — Category navigator

- Display the five top-level chapters.
- Wide: horizontal or editorial side index.
- Compact: accessible horizontally scrollable navigation or disclosure-based jump list.
- Current chapter can be indicated through IntersectionObserver as an enhancement.
- All anchor links must work without JavaScript.

### M03 — Dietary controls

- Default: **All dishes**.
- Only show filters backed by approved data.
- Potential filters: Vegetarian, Vegan, Gluten-free.
- Do not show Vegan or Gluten-free filters based only on the supplied PDF.
- Announce the visible result count politely after filtering.

### M04–M08 — Menu chapters

Each chapter contains:

- chapter number and title;
- optional one-sentence orientation;
- source subcategories;
- semantic item lists;
- variant labels and prices;
- dietary markers when verified;
- no decorative animation on every item.

### M09 — Allergy and pricing notice

- Place after the menu and link to it from the dietary legend.
- Draft wording pending operations/legal approval:

> Dietary markers are provided as general guidance. Please tell our team about allergies or dietary requirements before ordering. Cross-contact may occur in our kitchen. Prices are shown in Indian rupees. Applicable taxes are added as required.

### M10 — Conversion close

- Quiet high-contrast band with **Reserve a table** and **Plan your visit**.
- Link to Drinks and Wine only when those menus are published.
- Do not animate this frame in a way that delays interaction.

## 6. Visual direction

### Relationship to the website design system

Use the website's editorial structure and design tokens:

| Role | Token/value | Menu use |
|---|---|---|
| Primary light canvas | `--paper-50` / `#F5F0E7` | Long reading surface |
| Elevated light | `--chalk-0` / `#FFFDF8` | Notes and focused regions |
| Primary dark | `--ink-950` / `#091A2A` | Hero/footer and primary type |
| Secondary dark | `--ink-800` / `#17344A` | Hover/elevated night surface |
| Brand detail | `--sand-500` / `#B69B76` | Rules, numbers and non-body accents |
| Heat accent | `--terracotta-600` / `#A84F36` | Selected state or chapter moment |
| Cool accent | `--sea-300` / `#AFC8C8` | Large decorative detail only |

The current project `DESIGN.md` still contains legacy 20° names and German labels. For this menu, use the token principles but all public One 8 copy and controls must be English.

### Typography

- Display serif: chapter numbers and titles.
- Humanist grotesk: navigation, item names, descriptions, prices and notes.
- Item name: 18–22 px fluid, medium weight.
- Description: 15–17 px fluid, line-height 1.5–1.6.
- Price: tabular numerals, aligned with the correct item/variant.
- Category heading: `clamp(2rem, 4.5vw, 4.75rem)`.
- Avoid condensed uppercase for long headings; the supplied print treatment is not suitable for extended screen reading.

### Composition

- Wide: menu content uses 8–10 of 12 columns; text never stretches across the full 1440 px frame.
- Use a two-column item layout only when each column preserves logical reading order independently.
- Compact: one column, item name and price share a row when space permits; variants stack beneath.
- Alternate generous chapter openings with efficient item lists.
- Do not put every menu item inside a card.
- Use 1 px sand/ink rules, chapter numbering and restrained editorial offsets.

### Imagery

- Use 3–5 real One 8 images across the entire food menu, not one image per item.
- Suggested moments: shared starters, tandoor/process, Pan-Asian main, table spread and dessert.
- Images are chapter punctuation and proof, not decorative wallpaper.
- Never use the supplied “Sundays” photography as One 8 venue proof unless the client confirms rights and provenance.

## 7. React and Next.js architecture

Use the existing Next.js App Router with React and strict TypeScript.

### Server Components

Server-render:

- menu route shell;
- breadcrumbs and metadata;
- menu chapters, categories and items;
- dietary legend and operational notes;
- reserve/visit links;
- structured data.

### Client Components

Use a small isolated client island only for:

- dietary filtering;
- active-category enhancement;
- optional user-controlled gallery.

Do not make the full menu page a Client Component. Do not refetch static menu data in the browser or add global state management.

### Component inventory

```text
MenuIndex
MenuHero
MenuMetadata
MenuChapterNav
MenuChapter
MenuCategory
MenuItem
MenuVariant
MenuPrice
DietaryFilter
DietaryLegend
AllergenNotice
MenuDownloadAction
MenuState
MenuConversionBand
```

## 8. Typed content model

```ts
type ContentStatus = "source-draft" | "client-approved" | "archived";
type Availability = "available" | "seasonal" | "unavailable";
type DietaryCode = "V" | "VG" | "GF";

interface Menu {
  id: string;
  slug: "food" | "drinks" | "wine";
  title: string;
  description?: string;
  locale: "en";
  currency: "INR";
  effectiveDate?: string;
  lastUpdated?: string;
  serviceApplicability?: string[];
  status: ContentStatus;
  chapters: MenuChapter[];
  pdf?: MenuDocument;
}

interface MenuChapter {
  id: string;
  title: string;
  introduction?: string;
  order: number;
  categories: MenuCategory[];
}

interface MenuCategory {
  id: string;
  sourceTitle: string;
  displayTitle: string;
  order: number;
  items: MenuItem[];
}

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  variants: MenuVariant[];
  dietary: DietaryCode[];
  allergens: string[];
  availability: Availability;
  status: ContentStatus;
  sourcePage: number;
}

interface MenuVariant {
  id: string;
  label: string;
  priceMinor: number;
}

interface MenuDocument {
  url: string;
  fileSize?: string;
  effectiveDate?: string;
  accessible: boolean;
}
```

Store numeric prices as minor units or another consistent numerical representation. Format with `Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" })`. Never store slash-separated price strings as the only data.

## 9. Variant and price rules

The PDF frequently presents prices such as `299/329/329` or `399/399/429/449`. These are inaccessible unless each value is tied to a labelled variant.

Required transformation:

```text
Tom Yum Soup
Vegetarian — ₹299
Chicken — ₹329
Prawns — ₹329
```

Do not show `₹299/₹329/₹329` without those labels.

Before import, operations must confirm the label order for every multi-price item, including:

- Vegetarian / Chicken / Prawns;
- Veg / Egg / Chicken / Prawns;
- Salted / Peri-Peri / Parmesan;
- Vegetarian / Chicken;
- Egg / Chicken / Prawns;
- pasta base or protein variants;
- bread Plain / Butter / Garlic variants.

## 10. Source menu inventory

The following is a visually reviewed extraction from the supplied PDF. It is provided for content modelling and client validation, not automatic production publication.

### Start & Share

#### Bar Snacks & Fritters — source pages 4–5

- Zucchini fritters — 399
- Sundays onion rings — 399
- Cocktail podi idli — 399
- French fries — 199 / 249 / 349; labels shown as Salted / Peri-Peri / Parmesan
- Cherry cheese pineapple — 399
- Panko paneer fingers — 429
- Sundays peanut masala — 299
- Loaded nachos — 369 / 399; Vegetarian / Chicken
- Peri Peri lotus stem chips — 429
- Classic fish fingers — 549
- Peri Peri chicken tenders — 449
- Meen kuzhambu mini idly — 499
- Classic Sundays shrimp — 599
- Crispy calamari — 499
- Goan buttered garlic prawns — 599
- Mutton samosas — 499

Items containing “Sundays” require One 8 naming approval before publication.

#### Soups from India & Rest of Asia — source page 6

- Nenju elumbu — 329
- Dhaniya ka shorba — 299
- Asian egg drop soup — 299 / 329 / 329; Egg / Chicken / Prawns
- Tom Yum soup — 299 / 329 / 329; Vegetarian / Chicken / Prawns
- Manchow soup — 299 / 329 / 329; Vegetarian / Chicken / Prawns
- Lemon coriander soup — 299 / 329 / 329; Vegetarian / Chicken / Prawns
- Hot & sour — 299 / 329 / 329; Vegetarian / Chicken / Prawns

#### Sliders — source page 7

- Bombay vada pav — 499
- Asian sesame paneer — 499
- Crusted chicken — 529
- Turkish lamb — 599
- Griddle mince beef — 599

#### Salads — source page 7

- Sundays Greek — 399
- Classic Caesar, Chicken or Paneer — 399
- Marina Madras salad — 349
- Green salad — 299

### From Asia

#### Asian Appetizers — Vegetarian — source page 8

- Spinach feta wonton — 399
- Vegan spring rolls — 399; “vegan” claim requires confirmation
- Chilli crispy corn kernel — 429
- Classic Chinese chilli — Lotus stem 429 / Mushroom 429 / Baby corn 429 / Paneer 499
- Salt & Pepper — Mushroom 429 / Baby corn 429 / Paneer 499
- Honey chilli potatoes — 399
- Cauliflower Manchurian — 399

#### Asian Appetizers — Non-Vegetarian — source page 9

- Hawker chicken satay — 499
- Thai pandan wraps — Chicken 399 / Prawns 499
- Classic Chinese chilli — Chicken 499 / Prawns 549
- Crunchy honey pulled chicken — 449
- Korean bonchon chicken wings — 449
- Golden fried prawns — 599
- Sunday's chilli beef — 499
- Korean beef bulgogi — 499

#### Pan-Asian Mains — source page 21

- Kung pao — Veg 429 / Chicken 499 / Prawns 529
- Wok-tossed chilli gravy — Veg 399 / Chicken 449 / Prawns 529
- Schezwan-style gravy — Veg 429 / Chicken 499 / Prawns 529
- Red Thai curry — Veg 429 / Chicken 449 / Prawns 529
- Green Thai curry — Veg 429 / Chicken 449 / Prawns 529
- Malaysian beef rendang — 529
- Wok-tossed Cantonese gravy — 429; variant requires confirmation

#### Asian Rice & Noodles — source page 22

- Classic fried rice — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Tom Yum fried rice — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Schezwan fried rice — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Burnt garlic fried rice — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Hakka noodles — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Schezwan noodles — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Burnt garlic noodles — Veg 399 / Egg 399 / Chicken 429 / Prawns 449
- Chicken dan dan noodles — 429

### From India

#### Tandoor & Indian Appetizers — Vegetarian — source page 10

- Tandoori paneer tikka — 429
- Paneer makai sheek — 429
- Tandoori aloo — 399
- Malai broccoli — 429
- Bharwa mushroom — 429
- Hara bhara seekh — 449
- Dahi ke sholay — 399

#### Tandoor & Indian Appetizers — Non-Vegetarian — source page 11

- Tandoori chicken tikka — 429
- Achari half tandoori chicken — 499
- Harayali chicken — 499
- Malai chicken — 429
- Classic seekh kebab — 529
- Reshmi chicken kebab — 449
- Tandoori mutton chops — 899
- Kasundi fish tikka — 549
- Harayali prawns — 599

#### The Four States — Vegetarian — source page 12

- Paneer ghee roast — 499
- Paneer gongura fry — 429
- Mushroom milagu fry — 429
- Curry leaf paneer pepper roast — 429
- Chettinad potato roast — 399
- Paneer 65 — 399
- Mushroom chukka — 399
- Vendakkai muru muru fry — 399

#### The Four States — Non-Vegetarian — source page 13

- Mangalore ghee roast — Egg 429 / Chicken 499 / Prawns 599
- Chicken milagu fry — 499
- Andhra chilli chicken — 449
- Sundays 65 — Chicken 449 / Prawns 599
- Malnadu tawa fry — Seer 599 / Prawns 599
- Military mutton chops — 699
- Mutton chukka — 549
- Slow-cooked kheema unde — 549

#### Pan-Indian Gravies & Curries — Vegetarian — source page 18

- Paneer tikka masala — 429
- Paneer khurchan — 429
- Southern vegetable kurma — 429
- Subz meloni — 399
- Mushroom do pyaaz — 429
- Malabar vegetable stew — 429
- Dal makhani — 399
- Adraki dal tadka — 399

#### Pan-Indian Gravies & Curries — Non-Vegetarian — source page 19

- Butter chicken — 449
- Chicken bhuna masala — 449
- Murgh khurchan — 449
- Chicken gassi — 449
- Mutton chops kuzhambu — 599
- Mangalorean curry — Seer fish 549 / Prawns 599
- Prawn kadai masala — 599
- Nalli nihari — 799
- Mutton saaru — 599

#### Biryani, Rice & Breads — source page 20

- Donne biryani — Chicken 499 / Mutton 599
- Nawabi vegetable dum biryani — 449
- Ghee rice — 329
- Jeera rice — 329
- Curd rice — 349
- Steamed rice — 299
- Neer dosa — 149
- Tatte idly — 129
- Idiyappam — 129
- Tandoori roti — Plain 129 / Butter 149
- Tandoori naan — Plain 129 / Butter 149 / Garlic butter 169
- Tandoori kulcha — Plain 129 / Butter 249; source price requires confirmation

### Familiar Favourites

#### Thin-Crust Pizzas — source page 15

- Margherita — 599
- Paneer tikka pizza — 599
- Pizza capricciosa — 599
- Pizza piperade — 599
- Quattro formaggi pizza — 599
- Pulled chicken pizza — 699
- Chicken tikka pizza — 699
- Pizza pepperoni — 699
- Pizza bolognese — 699

#### From Our Grills — source page 16

- Grilled paneer steak — 549
- Chicken pepper steak — 599
- Chicken confit — 629
- Sea grill, Mahi Mahi or prawns — 799
- Fillet pepper steak — 799

The source says grill items are served with grilled vegetables, mashed potato and herb rice; confirm that this applies to every item.

#### World of Pastas — source page 17

- Mac and cheese — Veg 599 / Chicken 649 / Shrimp 699
- Alfredo, spaghetti or penne — Veg 549 / Chicken 599 / Shrimp 699
- Arrabbiata, spaghetti or penne — Veg 549 / Chicken 599 / Shrimp 699
- Basil pesto, spaghetti or penne — Veg 549 / Chicken 599 / Shrimp 699
- Spaghetti aglio e olio — Veg 549 / Chicken 599 / Shrimp 699
- Lasagna — 599 / 699; variant labels require confirmation
- Meatball spaghetti — 649

### Desserts — source page 23

- Double chocolate brownie — 399
- Chocolate cake flambé — 399
- Flourless chocolate cake — 399
- Tiramisu — 399
- Blueberry cheesecake — 399
- Rose milk tres leches — 399

## 11. Dietary and allergen rules

- `V` means the kitchen has confirmed the item as vegetarian.
- `VG` means the kitchen has confirmed the item and preparation as vegan.
- `GF` means the kitchen has confirmed the recipe as gluten-free; it is not a guarantee against cross-contact.
- Never infer markers from section headings alone during migration; operations must approve item-level data.
- The peanut symbol shown for some PDF items is not a complete allergen system.
- Store allergens as structured approved data only after a kitchen review.
- Do not offer a “nut-free” filter unless the venue can operationally support that claim.
- Always provide a written legend; icons alone are insufficient.

## 12. Responsive behavior

### Compact: 320–599 px

- Single-column menu.
- Chapter jump control follows the header but does not create a second oversized sticky bar.
- Item name and starting/single price share a row; variants stack below.
- Description remains full width.
- Minimum 16 px body text and 44 px controls.
- No horizontal price tables.

### Medium: 600–1023 px

- One generous column or two independent category columns.
- Dietary controls can remain inline.
- Chapter photography can use 4:3 or 3:2 crops.

### Wide: 1024–1439 px

- Optional sticky editorial chapter index occupying 2–3 columns.
- Menu content occupies 7–8 columns.
- Media may occupy the remaining columns only when it does not reduce text clarity.

### Cinema: 1440 px and above

- Preserve the 1440 px frame and text measure.
- Do not spread item names and prices across excessive distance.

## 13. Motion

- Menu reading must not depend on motion.
- Chapter titles may reveal with opacity and 12–20 px translate.
- Active-nav rules may expand over 160–240 ms.
- Do not animate every item or price.
- No parallax behind dense menu text.
- `prefers-reduced-motion` shows all content in final position and disables smooth programmatic scrolling.

## 14. Accessibility

- One `h1`; chapters use `h2`; source categories use `h3`.
- Each item and its variants/prices must remain programmatically associated.
- Anchor navigation moves to headings that can receive logical focus without trapping it.
- Filters use real buttons with selected state.
- Result-count updates use a polite status region.
- Links use more than colour alone.
- Text contrast meets WCAG 2.2 AA on every theme.
- Test keyboard, screen reader, 200% zoom, reflow, forced colours and reduced motion.
- Core menu content, navigation, Reserve and Visit must work with JavaScript disabled.

## 15. Performance

- Server-render the complete menu.
- Client JavaScript is limited to filtering and active-category enhancement.
- Do not use a large UI/state library for the menu.
- Lazy-load below-fold images with explicit dimensions.
- Do not preload every food photograph.
- Menu text is available before fonts and images finish.
- Preserve the project budgets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile; initial JS ≤ 170 KB gzip and CSS ≤ 55 KB gzip.

## 16. SEO and structured data

- Page title: `Food Menu | One 8 Restobar`.
- Description uses verified cuisine and location language only.
- `/menus/food` is canonical for the HTML menu.
- The PDF is not canonical.
- Add breadcrumbs and strong internal links from Home, Experiences and Visit.
- Connect Restaurant `hasMenu` structured data to the canonical HTML route.
- Do not expose draft prices or unverified operational facts in structured data.

## 17. States

Design and implement:

- source draft;
- client-approved/current;
- archived menu;
- empty category;
- temporarily unavailable item;
- unavailable menu;
- missing PDF;
- invalid slug;
- content-provider failure;
- JavaScript-disabled filters;
- slow or failed image.

Every state must explain what happened and offer a useful recovery action. Draft banners are visible only in authenticated preview/development, not as premium public copy.

## 18. Analytics

Track only:

- `menu_viewed` with menu slug and effective date;
- `menu_category_selected` with category ID;
- `menu_filter_used` with non-sensitive marker;
- `menu_pdf_downloaded` with effective date;
- `reserve_cta_clicked` with placement `menu`;
- `visit_cta_clicked` with placement `menu`.

Do not track individual item browsing in a way that creates noise without a business decision.

## 19. Content validation checklist

Before publication, the One 8 operations owner must confirm:

- current item names and descriptions;
- exact prices and tax wording;
- all variant-to-price mappings;
- vegetarian, vegan and gluten-free markers;
- item-level allergens and cross-contact wording;
- current availability and seasonal items;
- spelling/transliteration of regional dish names;
- whether “Sundays” items should be renamed or removed;
- whether food photographs and graphic assets are licensed for One 8;
- effective date and PDF version;
- drinks and wine source documents.

## 20. Definition of done

The menu experience is complete only when:

1. `/menus` and `/menus/food` are fully functional in English.
2. Drinks and Wine remain unpublished until approved content exists.
3. Complete food content is server-rendered as semantic HTML.
4. Every multi-price item has labelled variants.
5. All public content is client-approved; no “Sundays” identity leaks into One 8.
6. Dietary filters show only verified data and work as progressive enhancement.
7. Compact and wide compositions pass visual review.
8. Keyboard, screen-reader, zoom, reduced-motion and JavaScript-off checks pass.
9. Route metadata, canonical URL, breadcrumbs and structured-data connections are correct.
10. Performance budgets and production build pass.
11. H10 and global navigation link to the menu routes.
12. Source PDF remains available only as an approved secondary download.

