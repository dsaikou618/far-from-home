import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const journal = defineCollection({
  loader: glob({
    base: "./src/content/journal",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
