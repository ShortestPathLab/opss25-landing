import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const team = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().optional(),
      image: z.string().optional(),
      alumni: z.boolean().optional(),
    }),
});

const program = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      date: z.string(),
      events: z.array(
        z.object({
          image: z.string().optional(),
          time: z.string(),
          name: z.string(),
          description: z.string(),
        })
      ),
    })
  ),
});

export const collections = { blog, team, program };
