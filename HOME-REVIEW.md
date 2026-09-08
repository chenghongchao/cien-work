# CIEN — HOME v0.4

Home only. No deployment or remote push is part of this checkpoint.

## Run on Windows

Install Node.js 22.13.0 or newer. Extract the complete archive into a normal folder, then double-click `start-home.cmd`. Wait for Vite to report that it is ready, and open:

http://localhost:5173/

Keep the command window open. If the port is already in use, close the old Home development server before starting this one. The port is fixed so the review URL does not silently change.

## Run from a terminal

From the folder containing package.json:

```sh
npm ci
npm run dev
```

The existing project uses React, TypeScript, Next-compatible application APIs, and the Vinext/Vite development runtime. This checkpoint preserves that runtime and adds no dependencies.

## Local review modes

- Normal: http://localhost:5173/
- Static composition: http://localhost:5173/?review=still
- Remove the text to inspect the environment: http://localhost:5173/?review=environment

The review modes apply only in the development environment. A system preference for reduced motion disables fragment motion, parallax, and appearance animations, and displays all four capability descriptions.

## Image integrity

The displayed Hero is an unchanged copy of approved IMAGE 01 (1672 × 941). Its SHA-256 is:

`683f20323075cbc8d352daa9db96b4bf435b34fddcae7c275d5be579591c4e51`

It is rendered at its original aspect ratio, with no image filter, retouch, crop, or recoloring. The transient moving strips reuse the same source. Three environmental residue edges are traced to x=601, x=885, and x=1141 in that image; they contain no portrait pixels.

## Scope

The only page is Home. Its working calls to action target Home's operating scope and proof. Future page names remain inactive; no unavailable route is presented as a working page.

## Changed files

Modified:

- app/page.tsx — the six connected Home scenes.
- app/globals.css — static spatial composition, continuous exposure, responsive layouts, and motion fallbacks.
- app/layout.tsx — preserve the English-first presentation through the document translation attribute.
- components/home-hero.tsx — unchanged original image and small, transient fragment motion.
- package.json — make the development command work in Windows as well as Unix shells, with a fixed port.

Added:

- components/home-geometry.ts — source image dimensions and traced fragment coordinates.
- components/home-environment.tsx — one persistent atmospheric layer.
- components/home-continuity.tsx — passive, frame-batched scroll enhancement and measured scene positions.
- components/home-capabilities.tsx — accessible capability activation plus a full static/mobile presentation.
- components/home-navigation.tsx — quiet navigation and a keyboard-operable mobile disclosure.
- public/images/cien-hero-original.png — byte-identical copy of approved IMAGE 01.
- public/images/film-grain.svg — small, static monochrome grain tile.
- start-home.cmd — Windows startup helper.
- HOME-REVIEW.md — run instructions and review limits.

## Review status

The production build, focused Home TypeScript check, local asset references, six-scene structure, and internal anchor targets passed. The original Hero bytes were verified identical to the supplied PNG.

The repository-wide TypeScript command still reports missing Cloudflare ambient declarations in the untouched starter's db/index.ts and worker/index.ts. This was kept outside the Home change; the normal project build succeeds.

The requested browser visual QA was blocked by automatic approval review because the workspace reported insufficient credits. This checkpoint must not be treated as visually approved. Review the normal, static, environment-only, and mobile views before approving it.
