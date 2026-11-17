# Design Documentation

Design tokens and conventions extracted from the existing codebase. This documents what is currently implemented, not aspirational guidelines.

## Identity

### Palette

Brand palette defined in `app/globals.css` via `@theme inline` (derived from 1kB primary `#1a76a6`):

| Token       | Hex       | Usage                                                     |
| ----------- | --------- | --------------------------------------------------------- |
| `brand-50`  | `#eff8fc` | Light backgrounds (badges, hover states, CTA card tint)   |
| `brand-100` | `#dceff8` | Active states (language switch), light hero radial, CTA border |
| `brand-200` | `#b9dfef` | Badge borders, article card gradient fallbacks            |
| `brand-300` | `#85c6e2` | Dark mode hover accents and badge text                    |
| `brand-400` | `#49a8cf` | Dark mode primary accent (links, tags, icons, highlights) |
| `brand-500` | `#258bb9` | Bullet dots, decorative elements                          |
| `brand-600` | `#1a76a6` | Primary accent (buttons, links, tags, icons, overlines)   |
| `brand-700` | `#195e86` | Button hover, light badge text, article gradient fallback |
| `brand-800` | `#1a4f6e` | Dark mode badge borders, active language switch text      |
| `brand-900` | `#1b425b` | Dark mode active states (language switch), focus rings    |
| `brand-950` | `#102a3c` | Dark mode hero radial gradient, badge backgrounds         |

Neutral palette uses Tailwind's `zinc` scale throughout:

| Token      | Usage                                          |
| ---------- | ---------------------------------------------- |
| `zinc-50`  | Input backgrounds, muted light sections        |
| `zinc-100` | Card, header, and footer borders (light mode)  |
| `zinc-200` | Dividers, input and outline-button borders     |
| `zinc-300` | Secondary text (dark mode nav links, lists)    |
| `zinc-400` | Muted text (dark mode descriptions, captions)  |
| `zinc-500` | Captions, disclaimers, timestamps, overlines   |
| `zinc-600` | Body text and nav links (light mode)           |
| `zinc-700` | Label text, body lists (light), borders (dark) |
| `zinc-800` | Borders and input backgrounds (dark mode)      |
| `zinc-900` | Card and dropdown backgrounds (dark mode)      |
| `zinc-950` | Page and mobile drawer background (dark mode)  |

### Background and foreground

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --chrome: #ffffff;
  --surface-muted: #fafafa;
}

@media (prefers-color-scheme: dark) {
  --background: #202328;
  --foreground: #ededed;
  --chrome: #1c222b;
  --surface-muted: #24272c;
}
```

Dark mode is automatic, based on `prefers-color-scheme`. Components use `dark:` variants alongside semantic surface tokens.

Dark surfaces override the shared zinc tokens only in dark mode, keeping light mode unchanged:

| Token           | Hex       | Usage                                                |
| --------------- | --------- | ---------------------------------------------------- |
| `zinc-950`      | `#202328` | Charcoal page background with a faint cool-blue tint |
| `surface-muted` | `#24272c` | Slightly lighter, subtly cool section backgrounds    |
| `chrome`        | `#1c222b` | Subtle dark-blue header and footer                   |
| `zinc-900`      | `#252a32` | Slightly blue-tinted cards and panels                |
| `zinc-800`      | `#383e47` | Borders and input backgrounds                        |
| `zinc-700`      | `#555c66` | Stronger borders and interactive states              |

Dark hero gradients use 30% opacity to avoid tinting the entire page blue.

### Typography

- **Font family:** Geist Sans (`--font-geist-sans`) for body, Geist Mono (`--font-geist-mono`) available for code
- **Loaded via:** `next/font/google` in `app/[locale]/layout.tsx`
- **Antialiasing:** `antialiased` on `<html>`

Type scale (Tailwind classes used):

| Element            | Light style                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| Page title (h1)    | `text-4xl sm:text-6xl font-semibold leading-tight tracking-tight` (or `sm:text-5xl`) |
| Section title (h2) | `text-2xl sm:text-3xl font-semibold tracking-tight` or `text-3xl sm:text-4xl`        |
| Card title (h3)    | `text-lg font-semibold`                                                              |
| Body text          | `text-sm leading-6 text-zinc-600 dark:text-zinc-400`                                 |
| Subtitle / lead    | `text-lg leading-8 text-zinc-600 dark:text-zinc-400`                                 |
| Overline           | `text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400` |
| Badge              | `text-xs font-medium`                                                                |
| Caption            | `text-xs text-zinc-500 dark:text-zinc-400`                                           |
| Nav links          | `text-sm font-medium text-zinc-600 dark:text-zinc-300`                               |

### Spacing

- Page max-width: `max-w-6xl` (1152px) with `px-6` horizontal padding
- Content max-width (prose): `max-w-3xl` (768px)
- Hero max-width: `max-w-4xl` (896px)
- Section vertical padding: `py-16`, `py-20`, or `py-24`
- Card padding: `p-5`, `p-6`, or `p-8`
- Grid gaps: `gap-5`, `gap-6`, `gap-8`, `gap-10`, `gap-12`
- Component spacing (`mt`): `mt-3`, `mt-4`, `mt-6`, `mt-8`

### Border radius

| Usage                     | Class          |
| ------------------------- | -------------- |
| Cards, panels, forms, CTA | `rounded-2xl`  |
| Outcome cards             | `rounded-xl`   |
| Buttons (primary/outline) | `rounded-full` |
| Inputs, dropdown items    | `rounded-lg`   |
| Badges                    | `rounded-full` |
| Language switch container | `rounded-full` |
| Language switch buttons   | `rounded-full` |
| Decorative dots, avatars  | `rounded-full` |

### Shadows

- Home offering cards on hover: `hover:shadow-lg hover:shadow-brand-100/60 dark:hover:shadow-none`
- Article cards on hover: `hover:shadow-lg`
- Product screenshot: `shadow-xl dark:shadow-none`
- Dropdown menu: `shadow-2xl shadow-zinc-900/10 dark:shadow-none`
- No shadows in dark mode (`dark:shadow-none`)

### Animations and transitions

- Color transitions: `transition-colors` on interactive elements (links, buttons, inputs)
- Shadow transitions: `transition-shadow` on cards
- Opacity transitions: `transition-opacity` on client logos and the mobile menu panel (`duration-200 ease-out`)
- Dropdown/accordion chevrons: `transition-transform` (`group-hover:rotate-180`, `group-focus-within:rotate-180`, or `rotate-180`)
- Dropdown menu: `transition-all` with `invisible opacity-0 → visible opacity-100` on group hover/focus
- No page transitions or scroll animations

## Components

### Buttons

**Primary (CTA):**
`rounded-full bg-brand-600 px-6 text-sm font-medium text-white hover:bg-brand-700`
Heights vary by context: `h-12` in heroes and forms, `h-11 px-5` in `LandingCta`, `h-10 px-5` in service cards, and `px-4 py-2` in the header.

**Secondary (outline):**
`rounded-full border border-zinc-200 px-6 text-sm font-medium hover:border-brand-300 hover:text-brand-600 dark:border-zinc-700 dark:hover:text-brand-400`
Height: `h-12`. Used as secondary CTA alongside primary.

**Submit button:**
Same as primary, with `focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`.

### Cards

All cards share: `rounded-2xl border border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900`.

- **Offering / Service / Value prop / Course cards** — `SectionIcon` + title + body (+ optional metadata and CTA link/button). Padding: `p-6` or `p-8`.
- **Outcome cards (`LandingOutcomes`)** — `rounded-xl`, `SectionIcon` (`check`) + body. Padding: `p-5`.
- **Article cards (`ArticleCard`)** — image (or gradient placeholder) + tag + title + excerpt + read more link. Hover: `hover:shadow-lg`.
- **Testimonial card (Home)** — client logo + blockquote + figcaption with circular avatar photo.
- **About cards (`AboutMission`, `AboutWho`)** — `SectionIcon` + title + body or bullet list. Padding: `p-8`.

### Navbar (Header) & Mobile Menu

- Sticky: `sticky top-0 z-50`
- Glassmorphism: `bg-white/80 backdrop-blur dark:bg-chrome/80`
- Height: `h-16`
- Bottom border: `border-b border-zinc-100 dark:border-zinc-800`
- Logo left (`Logo`), desktop nav links right-aligned (`hidden md:flex`), language switch + Contact CTA button + mobile menu trigger on the right
- Services dropdown: single-column popover (`w-72`) appearing on hover/focus-within with links to `/services#benefits` and the 3 service detail pages
- Mobile navigation (`MobileMenu`): hamburger button visible below `md` (`md:hidden`) opening a portal-rendered full-screen drawer (`top-16`) with an expandable Services accordion, top-level links, and full-width Contact CTA

### Footer

- Background: `bg-zinc-50 dark:bg-chrome`
- Top border: `border-t border-zinc-100 dark:border-zinc-800`
- 4-column grid on `md` (`md:grid-cols-[1.5fr_1fr_1fr_1fr]`): logo (`Logo` + `kB`) + description + language switch column, plus 3 link columns (Company, Products & contact, Legal)
- Copyright bar at bottom with `border-t border-zinc-200 dark:border-zinc-800`, plus company registration identifiers (LBR, Permit, VAT)

### Forms (Contact)

- Labels: `text-sm font-medium text-zinc-700 dark:text-zinc-300`
- Inputs: `rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm`
- Focus: `focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none`
- Dark inputs: `dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100`
- Textarea: same styling, `resize-none`, `rows={5}`
- Form wraps in a card (`rounded-2xl border ... p-8`) with honeypot field (`work_address`), status/error alerts, and direct email column

### Sections

- **Hero sections** — radial gradient background (`radial-gradient` with `brand-100`/`brand-950`, 30% opacity in dark mode), centered text, badge + `h1` + subtitle + CTA buttons
- **Client logo strip (Home)** — responsive grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-7`) with grayscale logos and `mix-blend-multiply` / `dark:mix-blend-screen`
- **Split sections (`LandingSplit`)** — `border-y bg-zinc-50 dark:bg-surface-muted`, 2-column grid with bulleted steps
- **CTA banners (`LandingCta`)** — `rounded-2xl border border-brand-100 bg-brand-50/50 dark:border-zinc-800 dark:bg-zinc-900/60`, horizontal flex layout with text and primary button
- **Metrics grid (`ProductsPageContent`)** — 3-column `<dl>` with `SectionIcon` and `text-3xl font-semibold text-brand-600 dark:text-brand-400` values
- **Prose content** — `prose prose-zinc dark:prose-invert` with brand-colored links

### Language Switch

- Pill-shaped container: `rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900`
- Active locale: `bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200`
- Inactive locale: `text-zinc-600 hover:text-brand-700 dark:text-zinc-300 dark:hover:text-brand-300`
- Preserves current page and localized `[slug]` across `/services/[slug]`, `/articles/[slug]`, and `/training/[slug]`

## Responsive

### Breakpoints used (Tailwind defaults)

| Prefix | Min-width | Primary usage                                             |
| ------ | --------- | --------------------------------------------------------- |
| `sm:`  | 640px     | Hero text scaling, form grid (2-col), button layout (row) |
| `md:`  | 768px     | Desktop nav / mobile menu toggle, card grids (2-3 cols), footer |
| `lg:`  | 1024px    | Logo grid (7-col), service grid (3-col), split layouts    |

- Mobile: single column, stacked layouts, full-screen drawer menu below `md`
- Cards stack vertically on mobile, grid on tablet+
- Hero buttons stack vertically on mobile, row on `sm`

## UX conventions

### Spacing hierarchy

- Between major sections: `py-16` to `py-24`
- Between section title and content: `mt-8` to `mt-14`
- Between card elements: `mt-2` to `mt-4`
- Between form fields: `gap-5`

### Visual hierarchy

1. Overline (uppercase, tracking-widest, brand color) signals section category
2. Large semibold heading
3. Muted subtitle (`zinc-600` / `dark:zinc-400`)
4. Content grid or bullet list
5. CTA link or button

### Interactive patterns

- Links: `brand-600` (`dark:brand-400`) color, no underline, color transition on hover
- Cards: subtle shadow on hover on home offerings and articles (light mode only)
- Dropdowns: appear on hover AND `focus-within` (keyboard accessible)

### Navigation

- Logo links to home
- Services has a hover/focus dropdown menu (`Applications & MVPs`, `Code & security audits`, `Hosting & management`)
- Products, Training, and About as direct links
- Contact as primary CTA button (`rounded-full bg-brand-600`)
- Language switch in both header and footer

## Accessibility

### Currently implemented

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<blockquote>`, `<dl>`
- **Form labels & live feedback:** all inputs have `<label>` with `htmlFor` matching `id`; submission feedback uses `role="status"` and `role="alert"`; form sets `aria-busy`
- **Required fields & autocomplete:** `required` and `autoComplete` on name, email, organization fields; honeypot hidden via `aria-hidden="true"` and `tabIndex={-1}`
- **ARIA labels & dialog semantics:** language switch buttons have `aria-label`; mobile menu uses `aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal`, `inert` when closed, Escape key close, and body scroll lock
- **Decorative elements:** `aria-hidden` on background gradients, icons, and decorative dots
- **Image alt text:** images use descriptive `alt` text (`Client` names, product screenshot alt, article titles)
- **Focus styles:** inputs have visible `focus:ring-2 focus:ring-brand-100` + `focus:outline-none`
- **Button focus:** submit button has `focus:ring-2 focus:ring-brand-400 focus:ring-offset-2`
- **Keyboard navigation:** dropdown menu responds to `group-focus-within`
- **Color contrast:** `brand-600` on white backgrounds, `brand-400` on dark backgrounds
- **Text balance:** `text-wrap: balance` utility on headings

### Not yet implemented

- Skip navigation link
- Focus trap in dropdown menu and mobile navigation drawer
- Reduced motion preferences (`prefers-reduced-motion`)
