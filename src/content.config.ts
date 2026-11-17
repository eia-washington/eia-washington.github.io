import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each past bridge is one Markdown file in src/content/projects/.
// The project with the latest `date` is featured on the home page.
const projects = defineCollection({
  // Files with "example" in the name are templates and are not published.
  loader: glob({ pattern: ['**/*.md', '!**/*example*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    community: z.string(),
    country: z.string(),
    date: z.coerce.date(),
    peopleServed: z.number().optional(),
    spanMeters: z.number().optional(),
    spanIsProjected: z.boolean().default(false),
    daysUncrossable: z.number().optional(),
    connects: z.string().optional(),
    partners: z.array(z.string()).default([]),
    cutout: z.string().optional(),
    cutoutAlt: z.string().optional(),
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
