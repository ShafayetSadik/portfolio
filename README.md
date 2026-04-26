# Portfolio

A modular, content-driven portfolio built with Next.js, TypeScript, Tailwind CSS, and a live theme customizer.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Content model

All visible content lives in `content/`.

- `content/site.ts` controls hero/contact copy, social links, and site metadata.
- `content/about.ts` controls biography and stats.
- `content/skills.ts` controls skill categories.
- `content/projects.ts` controls project cards.
- `content/experience.ts` controls timeline entries.

## Add a project

Append a new object to the `items` array in `content/projects.ts`.

## Add a new section

1. Create a new data file in `content/`.
2. Create a new component in `components/sections/`.
3. Import the component into `content/sections.ts` and append a new entry to the `sections` array.

No other file changes are required.

## Theming

The floating palette button opens the live theme customizer.

- Theme changes persist in `localStorage` with the key `portfolio:theme`.
- Use `Copy code` to generate a `defaultTheme` snippet for `content/theme.ts`.
- Presets can be extended in `components/theme/ThemePresets.ts`.

## Deployment

The project is designed for Vercel deployment from the `main` branch.
