import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each past bridge is one Markdown file in src/content/projects/.
// The project with the latest `date` is featured on the home page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    community: z.string(),
    country: z.string(),
    date: z.coerce.date(),
    peopleServed: z.number().optional(),
    spanMeters: z.number().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    photos: z.array(z.object({ src: z.string(), caption: z.string().optional() })).default([]),
    travelers: z.array(z.string()).default([]),
    quotes: z
      .array(z.object({ text: z.string(), name: z.string(), role: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { projects };
