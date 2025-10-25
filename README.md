# ysavine.github.io

Personal site scaffold built with Vite, React, and TypeScript. This repo targets GitHub Pages (user site), so the production build is served from the repository root.

## Getting started
- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build for production: `npm run build` (outputs into `dist/`)
- Preview the production build: `npm run preview`

## Deploying to GitHub Pages
1. Ensure GitHub Pages is configured to serve from the `/` (root) of the `main` branch or from `/docs` if you prefer that workflow.
2. Option A – Manual deploy: run `npm run build` and copy the contents of `dist/` into the `docs/` folder, commit, and push. GitHub Pages can then be set to serve from `/docs`.
3. Option B – GitHub Actions: add the official `actions/deploy-pages` workflow to automate building and publishing from `dist/`.

## Project map
- `src/App.tsx` wires the layout, section registry, and smooth scrolling observer.
- `src/data/sections.ts` keeps navigation and rendered sections in sync via a typed registry.
- `src/hooks/useSmoothScroll.ts` demonstrates generics in hooks to guard against invalid section ids.
- `src/three/HeroCanvas.tsx` contains the React Three Fiber placeholder ready for custom 3D work.
- `docs/learning-notes.md` captures explanations of key TypeScript concepts used across the scaffold.

## Next steps
- TODO: Replace placeholder copy, assets, and CTA buttons with your real content.
- TODO: Introduce authentication-free contact automation (Formspree, Resend, etc.).
- TODO: Evaluate styling strategy (Tailwind, CSS Modules, or design system) and wire it in consistently.
