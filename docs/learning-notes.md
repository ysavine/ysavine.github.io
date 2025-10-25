# Learning Notes

## Generics power scroll orchestration
- `useSmoothScroll<T extends string>()` constrains valid section ids at compile time. Try adding an unsupported string to see TypeScript flag it immediately.
- The hook keeps `sectionRefs` typed as `Record<T, HTMLElement | null>`, which unlocks DOM APIs with full autocomplete while preventing accidental misuse (e.g., scrolling to a non-existent section).

## Discriminated unions keep navigation honest
- `SectionId` is a literal union (`'hero' | 'about' | 'projects' | 'contact'`). Anywhere you add a new section, TypeScript prompts you to update every consumer.
- `sections` lives in `src/data/sections.ts`. If you remove or rename an entry, the compiler warns you about stale imports, preventing navigation bugs.

## Forwarding refs without losing safety
- Each section uses `forwardRef<HTMLDivElement, SectionProps>` so the layout can attach smooth scroll refs. The generic arguments document the DOM shape and the props shape simultaneously.
- `SectionProps` lives in `src/types/sections.ts`, acting as a single source of truth.

## Ambient declarations for non-TS assets
- `src/types/css.d.ts` declares a module for `*.module.css` imports, so TypeScript is aware of CSS Modules when you add them.
- `src/types/three.d.ts` is ready for intrinsic element augmentation when you introduce custom three.js objects.

## TODO quick hits
- Replace copy in `src/data/sections.ts` and section components with real content.
- Swap the placeholder mesh in `src/three/HeroCanvas.tsx` for your branded three.js scene.
- Decide on a styling approach (Tailwind, CSS Modules, styled-components) and wire it in. The CSS types file already keeps TS happy.
