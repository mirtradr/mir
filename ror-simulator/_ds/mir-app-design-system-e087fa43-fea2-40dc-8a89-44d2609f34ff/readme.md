# Mir — Design System

**Mir** is an app of useful, everyday trading tools — watchlists, price alerts, a fast order ticket, portfolio tracking. Where most trading interfaces are cold terminals (black backgrounds, neon red/green, dense grids), Mir is deliberately **warm, calm, and premium**: sand-and-cream surfaces, a single glossy **orange "sun"** as the brand focal point, soft frosted-glass panels, generously rounded cards, and big confident typography. The product should feel like a calm morning with your coffee, not a war room.

This design system is the source of truth for building Mir interfaces and branded assets.

## Sources
- **Aesthetic reference:** `uploads/IMG_5315.jpeg` — a soft, warm app concept (cream tones, glossy orange gradient orb, frosted-glass login card, large grotesque type, pill + dark-circle "arrow" buttons). This drove Mir's visual language; the *content* domain (trading) is ours.
- No codebase, Figma file, or brand font files were provided. Where assets were missing they were substituted and flagged (see Caveats).

---

## CONTENT FUNDAMENTALS — how Mir writes

- **Voice:** calm, plain-spoken, confident. Mir is a steady hand, never a hype machine. No rockets, no "to the moon," no fear-of-missing-out.
- **Person:** address the user as **you**; Mir refers to itself as **Mir** ("Mir will nudge you…"), occasionally **we** for support/legal. Never "I".
- **Casing:** **sentence case** everywhere — headings, buttons, nav ("Place order", "Buying power", "See all"), not Title Case. Tickers and acronyms stay uppercase (AAPL, ETF, P/E).
- **Tone examples:**
  - Hero: *"Good morning, Sasha"* · *"Markets are open"*
  - Helper: *"Set a price alert and Mir will nudge you the moment your level prints — no staring at the tape."*
  - Disclaimer (always present, never alarmist): *"Investing involves risk, including loss of principal."*
- **Numbers are first-class.** Prices, %s and P&L are always monospaced, tabular, signed (`+2.41%`, `−1.08%`). Two decimals for currency; the sign and color carry the meaning.
- **Brevity.** Labels are 1–3 words. Buttons are verbs ("Deposit", "Trade", "Place order"). Eyebrows are short uppercase ("PORTFOLIO VALUE").
- **Emoji:** none. Direction is shown with tuned color + a single arrow glyph (↑ ↓), never 🚀/📈.
- **Honesty:** in demos, always label data as illustrative ("demo · not a live brokerage").

---

## VISUAL FOUNDATIONS

- **Color.** Warm, low-contrast. A sand/cream neutral ramp (`--ink-*`, slightly brown-tinted, never pure gray) on a `--paper` background. **One** brand accent: the orange "sun" (`--orange-500` `#F26A1B`), used sparingly as a focal point and on the single primary CTA per view. Market direction uses **tuned-warm** semantics — an emerald gain (`--up #1F9D63`) and a vermilion loss (`--down #D84A3C`), softer than typical neon. Near-black is warm (`--ink-900 #1A1611`), used for high-contrast "dark" cards and the portfolio hero.
- **Typography.** `Hanken Grotesk` for everything UI/display — a warm geometric-humanist grotesque set at medium/semibold with tight negative tracking on big sizes. `Geist Mono` for **all numerals** (prices, %, stats, time) with tabular figures so columns align. Display sizes are large and calm (40–56px hero numbers).
- **Backgrounds.** Warm paper, often a soft vertical paper→cream wash (`--grad-paper`) plus a faint radial orange bleed top-right. The hero motif is the **glossy sun orb** (`--grad-sun`) — a radial-gradient sphere placed bleeding off an edge, behind glass. No photography is shipped; no busy patterns or textures. Never bluish/purple gradients.
- **Glass.** Frosted panels (`--surface-glass`, `backdrop-filter: blur(20px)`, hairline white border) used for the login card and value overlays floating over the orb. Use glass only over warm imagery/orbs, never over plain flat color.
- **Corner radii.** Generous and soft. Cards = **28px** (`--r-card`); inputs, toggles and small buttons are **fully pill** (`--r-pill`). Nothing is sharp; the smallest radius in regular use is 12px.
- **Cards.** Five surfaces: `soft` (white + hairline `--border-subtle` + soft warm shadow), `sunk` (sand, no shadow, for insets/stat blocks), `glass` (frosted), `dark` (warm near-black), `sun` (the orb gradient). Shadows are **warm and low-contrast** (brown-tinted alpha, e.g. `rgba(40,28,16,0.07)`), never gray/blue. Primary CTAs get a warm orange glow (`--shadow-brand`).
- **Borders.** Mostly hairlines in the neutral ramp (`--border-subtle`/`--border-default`). Dividers are `rgba(26,22,17,0.08)`. Avoid heavy or colored borders; never a colored left-border accent stripe.
- **Buttons.** Pill-shaped. `primary` = glossy sun gradient + glow (one per view); `secondary` = white + hairline; `dark` = warm near-black; `soft` = orange tint; `ghost`. The **dark circular "arrow" IconButton** is a signature affordance for advance/confirm.
- **Motion.** Subtle and soft. Default `--ease-out` (≈ cubic-bezier(.22,1,.36,1)), 120–320ms. Press states **shrink** (scale .92–.97); hover lightens the surface (card→sand) or deepens the brand. No bounces on content, no infinite decorative loops, respect reduced-motion.
- **Hover / press.** Hover = subtle background lift or brand-deepen; press = scale-down. Focus = a soft warm ring (`0 0 0 4px var(--focus-ring)`), never a hard blue outline.
- **Imagery vibe.** Warm, soft, slightly glossy 3D (the orbs). If real imagery is added later, keep it warm/cream, soft light, no cold tones, no heavy grain.
- **Layout.** Calm and breathable: 4px spacing grid, lots of whitespace, single-column mobile screens, content in soft cards with a 16–22px gutter. The portfolio value and primary CTA are the fixed anchors of any screen.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) — clean, rounded-cap, **2px** stroke line icons. Their soft geometric weight matches Hanken Grotesk and the rounded UI. *(Substitution: no proprietary Mir icon set was provided; Lucide is the documented standard.)*
- **Delivery:** loaded from CDN (`lucide@0.460.0`). In the React UI kit, icons render as **inline SVG** via a small `Icon` helper (`kit.jsx`) that reads Lucide's registry — stable across re-renders, no DOM replacement. In static specimen cards, `<i data-lucide>` + `lucide.createIcons()` is fine.
- **Usage:** line (stroke) style only, never filled/duotone. Default 18–22px, `currentColor` so they inherit text/brand color. Common glyphs: `arrow-right` (advance), `arrow-up-right` (external/grow), `trending-up`/`trending-down`, `chart-candlestick`, `wallet`, `bell`, `search`, `at-sign`, `lock`, `plus`/`minus`, `star`.
- **Direction glyphs:** the up/down arrows in price changes are typographic (↑ ↓ U+2191/2193) so they sit inline with mono figures.
- **Emoji / Unicode as icons:** never emoji. Only the ↑ ↓ − arrows/minus glyphs are used inline with numbers.
- **Logo:** the Mir mark is a simple geometric **sun orb** (`assets/mir-mark.svg`) — the brand's only illustrative element. Wordmark in `assets/mir-logo.svg` (dark) / `mir-logo-light.svg` (on dark).

---

## Index / manifest

**Foundations**
- `styles.css` — root entry (import list only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**Components** (`window.MirDesignSystem_e087fa.*`)
- `components/core/` — `Button`, `IconButton`, `Input`, `Card`, `Badge`, `Avatar`
- `components/trading/` — `ChangePill`, `Sparkline`, `Stat`, `BuySellToggle`, `PositionRow`

**UI kit**
- `ui_kits/app/` — Mir mobile trading app (Login → Portfolio → Asset detail). See its `README.md`.

**Specimen cards** (Design System tab) — `guidelines/*.html` (Colors, Type, Spacing, Brand).

**Assets** — `assets/mir-mark.svg`, `mir-logo.svg`, `mir-logo-light.svg`.

**Skill** — `SKILL.md` (download-ready Agent Skill).

---

## Caveats / substitutions
- **Fonts:** no brand font files supplied. Using **Hanken Grotesk** + **Geist Mono** (Google Fonts) as closest matches, loaded via `@import` (so no local binaries ship). Swap in licensed files + `@font-face` if Mir has its own.
- **Icons:** no proprietary set supplied → **Lucide** (CDN) is the documented standard.
- **Domain:** the reference image is a generic warm app concept; the trading content, data, and product structure are designed for Mir and are illustrative.
