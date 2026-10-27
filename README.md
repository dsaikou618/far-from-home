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
- Sections: `src/components/`
- Global styles: `src/styles/global.css`
- Fonts: `src/assets/fonts/`
- Favicon: `public/favicon.svg`

## Deployment

Pushes to `master` run `.github/workflows/pages.yml`, which builds the site with Astro and deploys it to GitHub Pages.

Live site: https://dsaikou618.github.io/far-from-home/

## Current draft

The journal is empty and the Instagram and TikTok links are pending. Real entries and handles will replace the empty states when they are available.

`DESIGN.md` is a local design reference and is not deployed.
