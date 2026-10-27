# Far From Home

Travel journal for Saikou and Tri. Built with Astro and deployed to GitHub Pages as a draft before the MVP.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/far-from-home/.

## Checks and build

```bash
npm run check
npm run build
npm run preview
```

The preview server serves the built site at http://localhost:4321/far-from-home/.

## Editing

- Page content: `src/data/site.ts`
- Journal entries: `src/content/journal/`
- Sections: `src/components/`
- Global styles: `src/styles/global.css`
- Fonts: `src/assets/fonts/`
- Favicon: `public/favicon.svg`

## Adding a journal entry

Create a Markdown file in `src/content/journal/`:

```md
---
title: "Entry title"
description: "One sentence for the journal list."
date: 2026-11-01
location: "City, country"
cover: "/images/journal/your-photo.jpg"
coverAlt: "What the photo shows"
draft: false
---

Start the body here. Use `##` for section headings.
```

Put photos in `public/images/journal/`. The file name becomes the slug, so `first-stop.md` is published at `/far-from-home/journal/first-stop/`. Set `draft: true` to keep an entry out of the build. The cover fields are optional.

## Deployment

Pushes to `master` run `.github/workflows/pages.yml`, which builds the site with Astro and deploys it to GitHub Pages.

Live site: https://dsaikou618.github.io/far-from-home/

## Current draft

The journal list and entry pages are ready. The empty state stays until the first real entry is added. The Instagram and TikTok links are still pending.

`DESIGN.md` is a local design reference and is not deployed.
