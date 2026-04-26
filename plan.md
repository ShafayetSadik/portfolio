# Portfolio Build Plan

**Project:** Personal Portfolio — Modular, Extensible, Deployed on Vercel
**Author:** Senior Engineering
**Audience:** Junior Engineer (executor)
**Version:** 1.0

---

## Preamble

This document is the complete build specification for a personal portfolio website. It is written for a junior engineer who will execute it end-to-end.

Read this document once from top to bottom before writing any code. Do not skip sections. Do not reorder phases. If something is unclear, stop and ask — do not improvise on architecture decisions.

The goal is not just a portfolio that works today. The goal is a portfolio that the owner can extend for years without touching layout code. Every design decision below serves that goal.

---

## 1. Objectives & Non-Objectives

### 1.1 Objectives

The finished product must satisfy all of the following:

1. **Content-driven.** All visible content (name, bio, projects, skills, experience, contact) lives in structured data files, not in JSX. Adding a new project must require editing exactly one data file — never a component.
2. **Section-modular.** New sections (e.g. "Writing", "Speaking", "Testimonials") can be added by dropping a new section component into a registry and adding an entry to a config file. No existing code should need modification.
3. **Visually modern, restrained.** Minimalist aesthetic. Generous whitespace. A single accent color. One display typeface, one body typeface, one mono for labels. No gradients-for-gradient's-sake.
4. **Interactive where it matters.** Scroll reveals, smooth anchor navigation, hover states, active-section tracking in the nav. No animation for decoration alone.
5. **Responsive.** Works on 360px phones through 2560px monitors. Mobile is a first-class layout, not a scaled-down desktop.
6. **Fast.** Lighthouse performance score ≥ 95 on desktop, ≥ 90 on mobile. First contentful paint under 1.5s on a 4G connection.
7. **Live theme customizer.** While viewing the site, the owner can open a floating panel, pick a color (accent, background, surface), and see the entire UI recolor instantly. Chosen themes persist in `localStorage` and can be "locked in" as the new default by copying a generated snippet into the theme config.
8. **Deployed on Vercel** with automatic deploys from the `main` branch of GitHub.

### 1.2 Non-Objectives

To keep scope honest, the following are explicitly out of scope for v1:

- Blog / CMS integration
- Internationalization
- Dark/light theme toggle (the site is dark by design)
- Authentication or admin panel
- Backend API or database
- Analytics beyond Vercel's built-in

These may come in v2. Do not build for them now.

---

## 2. Technology Stack

All choices below are mandatory. Do not substitute.

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Native Vercel integration, RSC support, file-based routing |
| Language | TypeScript | Compile-time safety for the data contracts this project depends on |
| Styling | Tailwind CSS + CSS variables | Utility speed + theme tokens in one place |
| Fonts | `next/font` (Google) | Zero layout shift, self-hosted at build time |
| Icons | `lucide-react` | Consistent stroke weight, tree-shakeable |
| Animation | Framer Motion | Declarative scroll + enter animations |
| Color picker | `react-colorful` | Tiny (2.8kb), no deps, accessible — for the theme customizer |
| Linting | ESLint + Prettier | Non-negotiable, configured in step 3 |
| Deploy | Vercel (GitHub integration) | Push to deploy |
| Node | v20 LTS or later | Required by Next 14 |

---

## 3. Repository Layout

Create this exact structure. The architecture depends on it.

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Single-page composition (renders sections from registry)
│   ├── globals.css             # Tailwind imports, CSS variables, base styles
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             # Fixed top navigation
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── theme/
│   │   ├── ThemeProvider.tsx   # Context + localStorage + CSS variable injection
│   │   ├── ThemeCustomizer.tsx # Floating panel UI (color pickers, presets, export)
│   │   └── ThemePresets.ts     # Curated preset palettes
│   ├── ui/
│   │   ├── SectionShell.tsx    # Wrapper: label, title, divider (used by every section)
│   │   ├── Reveal.tsx          # Scroll-triggered fade+rise
│   │   ├── Counter.tsx         # Animated number
│   │   └── Tag.tsx
│   └── SectionRenderer.tsx     # Reads config, renders sections in order
├── content/
│   ├── site.ts                 # Site-wide config (name, nav order, contact)
│   ├── sections.ts             # Section registry & ordering (the extensibility core)
│   ├── theme.ts                # Default theme tokens (editable at build time)
│   ├── about.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
├── lib/
│   ├── types.ts                # Shared TypeScript types
│   └── utils.ts                # cn(), scrollTo(), etc.
├── public/
│   ├── images/
│   └── resume.pdf
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**Rules about this layout:**

- `components/sections/*` render data. They never import from other sections.
- `content/*` exports data. It never imports from `components/*`.
- `lib/types.ts` is the shared vocabulary. Both layers import from it.
- New features go in new files. Editing existing files is a last resort.

---

## 4. The Extensibility Architecture

This is the most important section. Read it twice.

### 4.1 The Section Registry

Every section on the page is registered in `content/sections.ts`. The page renders whatever is in the registry, in order.

```ts
// content/sections.ts
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
// ...

export type SectionId = "hero" | "about" | "skills" | "projects" | "experience" | "contact";

export interface SectionConfig {
  id: SectionId;
  label: string;          // Shown in nav
  component: React.FC;
  showInNav: boolean;
}

export const sections: SectionConfig[] = [
  { id: "hero",       label: "Home",       component: HeroSection,       showInNav: true  },
  { id: "about",      label: "About",      component: AboutSection,      showInNav: true  },
  { id: "skills",     label: "Skills",     component: SkillsSection,     showInNav: true  },
  { id: "projects",   label: "Projects",   component: ProjectsSection,   showInNav: true  },
  { id: "experience", label: "Experience", component: ExperienceSection, showInNav: true  },
  { id: "contact",    label: "Contact",    component: ContactSection,    showInNav: true  },
];
```

**To add a new section later (e.g. "Writing"):**
1. Create `components/sections/WritingSection.tsx`
2. Create `content/writing.ts` with the data
3. Add one line to the `sections` array above

That is the entire extensibility story. No other file changes.

### 4.2 The Data Contract

Every section component is a pure function of its data file. Example:

```ts
// content/projects.ts
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "lumina",
    title: "Lumina",
    year: 2025,
    description: "…",
    tags: ["React", "Node.js"],
    link: "https://lumina.example.com",
    accentColor: "#E8D5B7",
  },
  // add more by appending to this array
];
```

To add a project: append one object. To remove: delete one object. That's the contract.

### 4.3 The Section Shell

Every section renders inside `<SectionShell>` which provides the label, title, divider, and scroll anchor. This is what guarantees visual consistency as new sections are added.

```tsx
<SectionShell id="projects" label="02 / Work" title="Selected projects">
  {/* section-specific content */}
</SectionShell>
```

If a junior engineer ever finds themselves rebuilding the label/title/divider in a new section — stop. Use `SectionShell`.

---

## 5. Design System

### 5.1 Color Tokens

Defined once in `content/theme.ts` as the **default** theme, rendered as CSS variables in `app/globals.css`, and exposed to Tailwind via `tailwind.config.ts`. These values are the starting point — the theme customizer (section 5.5) overrides them at runtime.

| Token | Default Value | Use |
|---|---|---|
| `--bg` | `#0C0C0C` | Page background |
| `--fg` | `#F2EFEA` | Primary text |
| `--muted` | `#8A8680` | Secondary text, labels |
| `--accent` | `#D4A853` | Single accent — links, highlights, active states |
| `--surface` | `#161614` | Cards, elevated surfaces |
| `--border` | `#2A2826` | Hairlines, dividers |

Do not introduce additional color tokens. If a design need seems to require one, it doesn't — adjust opacity of an existing token instead. **Every color used anywhere in the app must reference one of these tokens.** Hardcoded hex values in components break the theme customizer and are grounds for PR rejection.

### 5.2 Typography

Three typefaces, loaded via `next/font`:

- **Display:** Playfair Display (serif, used for section titles and hero name)
- **Body:** DM Sans (sans-serif, 300/400/500 weights)
- **Mono:** JetBrains Mono (labels, timestamps, technical accents)

Set up once in `app/layout.tsx`. Use via Tailwind classes (`font-serif`, `font-sans`, `font-mono`).

### 5.3 Spacing & Rhythm

- Section vertical padding: `100px` desktop, `60px` mobile
- Max content width: `1200px`
- Consistent `gap-6` / `gap-8` / `gap-12` scale — do not invent in-between values
- Divider after every section title: 60px wide, 1px tall, accent color

### 5.4 Motion Principles

- Reveal on scroll, once, with a 0.8s cubic-bezier ease — never re-trigger
- Stagger delay: 0.1s between related elements
- Hover transitions: 0.3s
- No bouncing, no overshooting, no parallax. Modern minimalism is calm.

### 5.5 Live Theme Customizer

The site ships with a floating theme panel that lets the owner (and curious visitors) recolor the entire UI in real time. This is a first-class feature, not an afterthought — it's the reason the token system above is non-negotiable.

#### 5.5.1 Behavior

- A small floating button sits in the bottom-right of the viewport (a subtle paint-drop / palette icon)
- Clicking it slides out a panel from the right with: color pickers for each token, a row of preset themes, reset button, and "Export" button
- Dragging any color updates the CSS variables on `:root` instantly — every component recolors because every component uses tokens
- Selections save to `localStorage` under the key `portfolio:theme` and reload on next visit
- The "Export" button copies a formatted snippet to the clipboard that the owner can paste into `content/theme.ts` to make the current palette the new permanent default
- The panel is responsive: full-width drawer on mobile, 320px side panel on desktop
- `prefers-reduced-motion` disables the slide animation but not the feature

#### 5.5.2 Data Shape

```ts
// lib/types.ts
export interface Theme {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  surface: string;
  border: string;
}

// content/theme.ts
export const defaultTheme: Theme = {
  bg:      "#0C0C0C",
  fg:      "#F2EFEA",
  muted:   "#8A8680",
  accent:  "#D4A853",
  surface: "#161614",
  border:  "#2A2826",
};
```

#### 5.5.3 The Provider

`ThemeProvider` wraps the entire app in `app/layout.tsx`. It:

1. Reads `localStorage` on mount; falls back to `defaultTheme`
2. Holds the active theme in React state
3. On every theme change, writes each key to `document.documentElement.style.setProperty("--bg", value)` etc.
4. Also persists to `localStorage`
5. Exposes `{ theme, setToken, resetTheme, applyPreset }` via `useTheme()`

To prevent a flash of default theme before hydration, include a tiny blocking script in `<head>` that reads `localStorage` and sets the CSS variables before React paints. Framework: `next/script` with `strategy="beforeInteractive"`, or inline via `dangerouslySetInnerHTML` in `layout.tsx`.

#### 5.5.4 The Customizer UI

`ThemeCustomizer.tsx` is a client component (`"use client"`) rendered once in `app/layout.tsx` beside the children. It is visible on every page. Internally it uses `react-colorful`'s `HexColorPicker` for each token. The panel contains:

- A small header: "Theme"
- Six labeled color swatches — clicking one expands the picker beneath it
- A "Presets" row with 4–6 curated palettes (see below)
- Two buttons at the bottom: "Reset to default" and "Copy code"

Keep the entire customizer under 200 lines. It is a tool, not a product.

#### 5.5.5 Presets

`components/theme/ThemePresets.ts` exports a small curated list. Examples:

```ts
export const presets: { name: string; theme: Theme }[] = [
  { name: "Midnight Gold",  theme: { bg: "#0C0C0C", fg: "#F2EFEA", muted: "#8A8680", accent: "#D4A853", surface: "#161614", border: "#2A2826" } },
  { name: "Paper White",    theme: { bg: "#FAFAF7", fg: "#1A1A1A", muted: "#6B6B66", accent: "#C2410C", surface: "#F2F0EB", border: "#E0DDD5" } },
  { name: "Forest Ink",     theme: { bg: "#0F1512", fg: "#E8ECE9", muted: "#7A8783", accent: "#7FB069", surface: "#182320", border: "#2A3632" } },
  { name: "Royal Navy",     theme: { bg: "#0A1128", fg: "#EDEFF7", muted: "#7882A0", accent: "#F4A261", surface: "#141D3A", border: "#26304F" } },
  { name: "Rose Dust",      theme: { bg: "#1A0F14", fg: "#F5E6E8", muted: "#9A7F85", accent: "#E76F51", surface: "#241620", border: "#3A2530" } },
];
```

Owner can add their own presets by appending to this array.

#### 5.5.6 Hiding in Production (Optional)

By default the customizer is visible to everyone. If the owner wants to hide it from visitors and keep it only for themselves, wrap the render in a check for a URL query parameter:

```tsx
// Only render if ?theme=edit is in the URL
const searchParams = useSearchParams();
const showCustomizer = searchParams.get("theme") === "edit";
```

Document this in `README.md` under "Theming".

---

## 6. Build Phases

Execute these in order. Do not start a phase until the previous one is complete and committed.

### Phase 0 — Environment Setup

1. Install Node.js v20 LTS
2. Install Git; configure `user.name` and `user.email`
3. Create a GitHub account if needed
4. Create a Vercel account; link it to GitHub
5. Install VS Code with extensions: ESLint, Prettier, Tailwind CSS IntelliSense

**Exit criteria:** `node -v` prints v20+, `git --version` works, you can log into Vercel.

### Phase 1 — Project Scaffolding

1. Run `npx create-next-app@latest portfolio` — select: TypeScript ✓, ESLint ✓, Tailwind ✓, App Router ✓, `src/` directory ✗, Turbopack ✓
2. `cd portfolio` and verify with `npm run dev`
3. Install dependencies:
   ```
   npm install framer-motion lucide-react clsx tailwind-merge
   npm install -D prettier prettier-plugin-tailwindcss
   ```
4. Create `.prettierrc` with the project's formatting rules
5. Commit: `chore: initial scaffold`

**Exit criteria:** A default Next.js app runs at `localhost:3000`.

### Phase 2 — Foundation

1. Create the folder structure from section 3 (empty files are fine)
2. Build `lib/types.ts` with every interface this project will use (`SectionConfig`, `Project`, `Experience`, `SkillGroup`, `ContactLink`, etc.)
3. Build `lib/utils.ts` with `cn()` (className merger) and `scrollToSection()`
4. Configure `app/globals.css` with CSS variables from section 5.1
5. Configure `tailwind.config.ts` to expose those variables as Tailwind colors
6. Set up fonts in `app/layout.tsx` using `next/font/google`
7. Add site metadata (title, description, Open Graph) in `app/layout.tsx`
8. Commit: `feat: foundation — types, tokens, fonts`

**Exit criteria:** A blank page loads with the correct background color and fonts.

### Phase 3 — Shared UI Primitives

Build, in order:

1. `SectionShell.tsx` — wraps every section, renders label + title + divider + scroll anchor
2. `Reveal.tsx` — IntersectionObserver-based fade/rise, accepts a `delay` prop
3. `Counter.tsx` — animates a number from 0 to target once visible
4. `Tag.tsx` — small pill for project tags

Each primitive gets its own commit: `feat(ui): add <component>`.

**Exit criteria:** Each component has a clear props interface and can be imported from `@/components/ui/*`.

### Phase 4 — Layout Shell

1. Build `Nav.tsx` — reads the section registry, renders links, tracks active section via IntersectionObserver
2. Build `MobileMenu.tsx` — fullscreen overlay on small viewports
3. Build `Footer.tsx` — copyright, small print
4. Update `app/page.tsx` to render `<Nav />`, `<SectionRenderer />`, `<Footer />`
5. Build `SectionRenderer.tsx` — imports the registry, maps over it, renders each section component

**Exit criteria:** Navigation is fixed, scrolls smoothly to anchors, highlights the active section.

### Phase 5 — Content Files

Before building sections, populate the data. This is deliberate — building against real data prevents fantasy designs.

Create and fill:
- `content/site.ts` (name, tagline, email, socials)
- `content/about.ts` (bio, stats)
- `content/skills.ts` (grouped by category)
- `content/projects.ts` (real or placeholder projects)
- `content/experience.ts` (roles, dates, descriptions)

**Exit criteria:** All data files type-check against `lib/types.ts`.

### Phase 6 — Sections

Build one section at a time, in this order. Each gets its own commit.

1. `HeroSection` — name, tagline, CTA
2. `AboutSection` — bio + animated stat grid
3. `SkillsSection` — category cards
4. `ProjectsSection` — project list with visuals
5. `ExperienceSection` — timeline
6. `ContactSection` — email + social links

Each section:
- Imports its data from `content/*`
- Uses `<SectionShell>` for chrome
- Uses `<Reveal>` for entrance animation
- Stays under 150 lines; extract sub-components if longer

**Exit criteria:** The page renders end-to-end. Visual spot-check on desktop and mobile.

### Phase 6.5 — Theme Customizer

This phase exists because the token discipline from Phase 2 makes it trivial, and because verifying live theming early catches any component that cheated with a hardcoded color.

1. Install `react-colorful`
2. Create `content/theme.ts` exporting `defaultTheme` of type `Theme`
3. Build `components/theme/ThemeProvider.tsx`:
   - Client component, wraps children
   - Reads `localStorage` on mount, falls back to `defaultTheme`
   - Writes all tokens to `document.documentElement.style` on change
   - Exposes `useTheme()` hook returning `{ theme, setToken, resetTheme, applyPreset }`
4. Add the no-flash inline script to `app/layout.tsx` `<head>` — reads `localStorage.getItem("portfolio:theme")` and applies variables before paint
5. Wrap `{children}` in `<ThemeProvider>` inside `app/layout.tsx`
6. Create `components/theme/ThemePresets.ts` with at least 5 curated presets
7. Build `components/theme/ThemeCustomizer.tsx`:
   - Floating button bottom-right (28px square, palette icon from lucide-react)
   - Slide-in panel (right side on desktop, bottom drawer on mobile)
   - Six color tokens, each as a labeled row with swatch + collapsible `HexColorPicker`
   - Preset row showing 5 mini color-chip previews
   - "Reset" and "Copy code" buttons at the bottom
   - "Copy code" writes a `defaultTheme = { ... }` snippet to the clipboard
8. Render `<ThemeCustomizer />` in `app/layout.tsx` (outside `<main>`, so it floats above content)
9. Smoke test: change accent to hot pink, reload page, confirm it persists. Click reset, confirm it returns to default.

**Exit criteria:**
- Changing any swatch instantly recolors the entire site — no component is immune
- Refreshing the page preserves the chosen theme
- Presets apply all six tokens at once
- "Copy code" produces a valid TypeScript snippet that can be pasted into `content/theme.ts`
- If any component does *not* recolor when a token changes, it contains a hardcoded color — fix it before moving on

### Phase 7 — Polish Pass

Reserved time for the details that separate a good portfolio from a great one:

- Hover states on every interactive element
- Focus rings for keyboard navigation
- `prefers-reduced-motion` respected (disable Reveal transitions)
- Proper `alt` text on all images
- Heading hierarchy audit (one `<h1>`, logical `<h2>` progression)
- Meta tags, Open Graph image, favicon
- Lighthouse audit — fix any issue below the targets in section 1.1

**Exit criteria:** Lighthouse scores meet targets. Keyboard navigation works top to bottom.

### Phase 8 — Deployment

1. Create a new GitHub repo (private or public, your call)
2. `git remote add origin <url>` and push
3. On vercel.com → Import Project → select the repo → Deploy
4. Verify the deployed URL loads correctly
5. (Optional) Settings → Domains → add a custom domain and configure DNS

**Exit criteria:** The production URL works on a phone you've never used before.

---

## 7. Adding New Content Later

This section is for the site owner (future you) after launch.

### Add a project

Open `content/projects.ts`. Append a new object to the array. Save. Commit. Push. Live in ~45 seconds.

### Add a skill

Open `content/skills.ts`. Either add an item to an existing category's array, or append a new category object.

### Add a new section (e.g. "Writing")

1. Create `content/writing.ts` with your data
2. Create `components/sections/WritingSection.tsx` — copy an existing section as a template
3. Import the new section in `content/sections.ts` and add it to the `sections` array in the position you want
4. Commit and push

No other file needs to change. This is the payoff for the architecture.

### Reorder sections

Rearrange the objects in the `sections` array in `content/sections.ts`. That's it.

### Change the default theme

Two ways, pick one:

1. **Visually (recommended).** Open the live site, click the palette button bottom-right, adjust colors until it looks right, click "Copy code", paste the snippet into `content/theme.ts`, commit.
2. **By hand.** Open `content/theme.ts` and edit the hex values directly.

Either way, the change becomes the new baseline for every visitor.

### Add a theme preset

Open `components/theme/ThemePresets.ts`. Append a new `{ name, theme }` object. It will appear in the customizer panel on next build.

---

## 8. Acceptance Criteria

The project is done when all of the following are true:

- [ ] Production URL is live on Vercel
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 (desktop)
- [ ] Tested on iOS Safari, Android Chrome, desktop Chrome, Firefox, Safari
- [ ] Tab-through keyboard navigation reaches every interactive element in a sensible order
- [ ] All content is driven by files in `content/`
- [ ] Adding a hypothetical new section requires changes only to `content/sections.ts` and two new files in `components/sections/` and `content/`
- [ ] The theme customizer recolors every visible element when any token is changed — no component escapes the token system
- [ ] Chosen theme persists across page reloads via `localStorage`
- [ ] No flash of default theme on reload (pre-hydration script works)
- [ ] No console errors or warnings in production
- [ ] `README.md` explains how to run locally and how to add a section
- [ ] Git history is clean — conventional commits, no "wip" or "fix stuff"

---

## 9. What Not to Do

Hard-learned rules from 30 years of this. Violating any of them is grounds for a code review rejection.

- **Do not hardcode content inside section components.** Ever. This breaks the entire extensibility model.
- **Do not hardcode colors anywhere.** Not hex, not `rgb()`, not named colors. Every color references a token via `var(--token)` or its Tailwind alias. Hardcoded colors silently break the theme customizer.
- **Do not add a CSS framework on top of Tailwind.** Not Bootstrap, not Chakra, not Material UI. If a utility doesn't exist, write a component.
- **Do not install a library for something you can write in 30 lines.** Especially for animations, state, or utilities.
- **Do not use `any` in TypeScript.** If the type is hard, that's signal to think harder, not to escape.
- **Do not commit `.env` files.** Do not commit `node_modules`. Check `.gitignore` before the first push.
- **Do not deploy without testing the production build locally first.** `npm run build && npm start` catches things dev mode hides.
- **Do not skip the mobile layout.** More than half of visitors will be on phones.
- **Do not add a section without adding it to the registry.** Orphaned components rot.

---

## 10. Questions to Ask Before Starting

Before opening the terminal, answer these in a notes file:

1. What is the one thing you want a visitor to remember after leaving the site?
2. Who is the audience — recruiters, potential clients, peers, all three?
3. What three projects will you lead with? (If you don't know, pick five and cut two later.)
4. What domain name will you use? Buy it on day one; DNS can take 24 hours to propagate.
5. Do you have high-quality images or screenshots for each project? If not, generate them before Phase 6.

Do not start coding until these are answered. Code without intent produces portfolios that look like every other portfolio.

---

*End of plan.*
