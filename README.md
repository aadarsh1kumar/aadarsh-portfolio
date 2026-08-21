# Aadarsh Kumar — Portfolio

A dark, developer-focused portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Before you deploy

1. **Email** — `data/site.ts` has a placeholder email (`hello@aadarshkumar.dev`), marked `TODO`. Replace it with your real inbox.
2. **Resume** — drop your PDF at `public/resume.pdf` (the Hero and footer already link to `/resume.pdf`).
3. **Project links** — `data/projects.ts` has a `TODO` at the top. Add real `repo` / `live` URLs per project once repos are public / deployed. Until filled in, the GitHub button on each project falls back to your profile.
4. **Domain** — `data/site.ts` → `seo.url` is set to `https://aadarshkumar.dev`. Update it to your real domain (used for the sitemap, canonical metadata, and Open Graph tags).
5. **Screenshots** — each project detail page currently shows a text placeholder instead of a screenshot. Swap the placeholder block in `app/projects/[slug]/page.tsx` for an `<Image />` once you have real screenshots.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Structure

```
app/
  layout.tsx          Root layout, fonts, global metadata
  page.tsx             Home page — assembles all sections
  icon.tsx             Auto-generated favicon (no external asset needed)
  opengraph-image.tsx   Auto-generated OG share image
  sitemap.ts / robots.ts
  projects/[slug]/page.tsx   Project case-study route

components/
  Navbar, Hero, About, Activity, Technologies, Journey,
  Achievements, Projects, ProjectCard, CurrentlyLearning,
  Writing, Contact, Footer, Reveal (scroll-animation wrapper)
  icons/BrandIcons.tsx   Inline GitHub/LinkedIn marks
                         (lucide-react 1.x dropped brand logos)

data/
  site.ts          Identity, links, email, "currently" / "learning" / "exploring"
  projects.ts       Featured projects + full case-study content
  technologies.ts   Tech stack, grouped
  experience.ts     Journey / timeline entries
  achievements.ts   Hackathon & competition wins

lib/
  contributions.ts   Deterministic generator for the activity heatmap
  utils.ts
```

## Notes on a couple of implementation choices

- **Contribution heatmap** (`Activity` section): the brief asked not to fabricate real GitHub statistics. The grid in `lib/contributions.ts` is a seeded, deterministic pattern — clearly labelled "illustrative" in the UI — rather than invented real numbers. Swap it for a real GitHub GraphQL contributions query behind an API route if you want live data later.
- **Fonts**: uses the official self-hosted `geist` npm package rather than `next/font/google`, so builds don't depend on reaching Google's font CDN.
- **Tailwind v3.4 (LTS)**: pinned deliberately over v4 for config stability with the existing `tailwind.config.ts` setup.

## Deploying

Works out of the box on Vercel:

```bash
npx vercel
```

Or any Node host that supports Next.js 16 (`npm run build && npm run start`).
