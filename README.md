# Mayura — Interior & Renovation, Kerala

Single-page portfolio and enquiry site. Built from the "Interior Store Website —
Build Brief": one long scroll, five sections, no routing.

```
Hero  →  Marquee (services)  →  Portfolio  →  Marquee (areas)  →  Closing CTA
```

## Commands

```bash
npm run dev
```

`npm run build` produces `dist/`, `npm run preview` serves that build, and
`npm run lint` runs oxlint. There is no test suite.

## Stack

Vite + React + TypeScript, Tailwind for styling, `framer-motion` for the
animation, `lenis` for smooth scroll. Deliberately **not** used: `shadergradient`,
`liquid-glass-js`, `liquid-logo`, `react-three-fiber` — the CTA glass and the
hero backdrop are plain CSS, which keeps the bundle light for the mid-range
Android connections that make up most of this audience.

## Filling in real content

Everything still outstanding is marked `TODO`:

```bash
grep -rn TODO src/
```

Two files hold essentially all of it:

- **`src/data/site.ts`** — business name, headline copy, and the phone /
  WhatsApp / Instagram / email links. All four contacts are currently dummy
  values.
- **`src/data/projects.ts`** — the portfolio cards. Drop photos into
  `public/projects/` and set `src` on each entry. The grid, the cards, and every
  animation read from this array, so **adding real photography is a data change,
  not a component change.**

Set `completed: true` on a project only once it is genuinely built and
photographed — that flag is what removes the "Sample Style" badge. Per the
brief, unbuilt work must never be presented as a finished project.

### Images

Every image in the site is currently an **AI concept render**, tagged as such on
the page. `PlaceholderImage` falls back to `RoomScene` — a hand-drawn SVG
interior — whenever `src` is absent, so the site still renders with no assets at
all.

Sources live in `public/projects/`, `public/hero/` and `public/cta/` as WebP.

**Known gap:** the hero's before and after are different rooms. The mask reveal
is meant to show *one* room transforming, which needs both frames shot from the
same camera position. Generate the after by inpainting furniture into
`/hero/before.webp` with the walls, window and floor masked off — a separately
generated room will not line up.

## Deliberately absent

Per the brief's "Do Not Invent" section: no testimonials and no "why choose us"
statistics until the store supplies real quotes and real figures. Do not carry
over numbers from Livspace or anywhere else.

## Notes for future work

- `src/index.css` defines `.gpu` as `will-change` only. Do not add a `transform`
  to it — that silently overrides Tailwind's own transform utilities.
- The hero's `--mx` / `--my` / `--r` custom properties are declared on the
  `.hero-stage` section so the masked layer and the lens ring can both inherit
  them. Re-declaring them on `.hero-reveal` would shadow the inherited value and
  pin the mask to the centre.
- Each marquee track holds exactly two copies of the list and translates -50%.
  That pairing is what makes the loop seamless; changing one half breaks it.
- Animation is gated on `prefers-reduced-motion` in three places: the CSS media
  query in `index.css`, the `usePrefersReducedMotion` hook, and framer-motion's
  `<MotionConfig reducedMotion="user">` in `App.tsx`.
