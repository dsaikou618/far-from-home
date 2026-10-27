const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const basePath = base;

export const canonicalUrl = (site: URL | undefined, origin: string) =>
  new URL(base, site ?? origin).href;

export const entryUrl = (id: string) => `${basePath}journal/${id}/`;

export const assetUrl = (path: string) =>
  `${basePath}${path.replace(/^\/+/, "")}`;
