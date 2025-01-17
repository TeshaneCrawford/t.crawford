import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        // layout: z.enum(['default', 'blog']).default('default'),
        title: z.string(),
        description: z.string(),
        // head: z.object({
        //   meta: z.array(z.object({
        //     name: z.string(),
        //     content: z.string(),
        //   })).optional(),
        //   htmlAttrs: z.object({
        //     lang: z.string(),
        //   }).optional(),
        //   title: z.string(),
        //   bodyAttrs: z.object({
        //     class: z.string(),
        //   }).optional(),
        // }),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        authors: z.array(z.object({
          name: z.string(),
          picture: z.string(),
          twitter: z.string(),
        })),
        tags: z.array(z.string()),
        date: z.string(),
        updatedAt: z.string().optional(),
        image: z.string().default('/images/og/ogImage.jpeg'),
        rawbody: z.string(),
        toc: z.object({
          items: z.array(z.object({
            id: z.string(),
            text: z.string(),
            depth: z.number(),
          })).optional(),
        }).optional(),
      }),
    }),
  },
})
