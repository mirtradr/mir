# RoR Simulator

A mobile-style **Risk-of-Ruin simulator** for prop-trading evaluations, exported from a
Claude Design project. It runs a 10,000-path Monte Carlo simulation over a trading
strategy (win rate, reward:risk, risk per trade) against an account's profit target and
max drawdown, then reports pass odds, risk of ruin, expectancy, and a plain-English verdict.

## Running it

The app loads its runtime (`support.js`), design-system bundle, and token CSS via relative
paths, so it needs to be served over HTTP (opening the file directly with `file://` won't
work). A tiny zero-dependency static server is included:

```bash
node serve.cjs
# then open http://localhost:8766
```

Or use any static server, e.g. `npx serve` or `python3 -m http.server`.

## Files

| Path | What it is |
|------|------------|
| `index.html` | Entry point — the app, cleaned of Claude Design's editor-only instrumentation. |
| `RoR Simulator.dc.html` | Original source file as exported from Claude Design (kept for reference). |
| `support.js` | Claude Design `x-dc` runtime (templating, `<sc-if>`, `<x-import>`, `{{ }}` bindings). |
| `_ds/mir-app-design-system-…/` | The Mir design system: component bundle (`_ds_bundle.js`), design tokens, and styles. |
| `uploads/` | Source asset(s) referenced by the project. |
| `serve.cjs` | Minimal local static server for development. |

## How it works

The UI is authored as a declarative `<x-dc>` template with `{{ }}` interpolations and
`<sc-if>` screen conditionals. A `<script type="text/x-dc">` defines a `Component`
(extending `DCLogic`) that holds state and the Monte Carlo `simulate()` logic; `support.js`
compiles and renders it. Design-system components (`Button`, `Badge`) are pulled in via
`<x-import component-from-global-scope="…">` from the bundled `MirDesignSystem` global.

> Illustrative only — a static end-of-day drawdown model, not financial advice.
