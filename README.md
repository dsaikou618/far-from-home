# Saikou Diallo portfolio

Personal portfolio for Saikou Diallo, a computer science student at Nordakademie in Germany. Built with Astro and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/portfolio/.

## Checks and build

```bash
npm run check
npm run build
npm run preview
```

The preview server serves the built site at http://localhost:4321/portfolio/.

## Editing

- Page content: `src/data/site.ts`
- Sections: `src/components/`
- Global styles: `src/styles/global.css`
- Fonts: `src/assets/fonts/`

## Deployment

Pushes to `master` run `.github/workflows/pages.yml`, which builds the site with Astro and deploys it to GitHub Pages.

Live site: https://dsaikou618.github.io/portfolio/

`DESIGN.md` is a local design reference and is not deployed.
