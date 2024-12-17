import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
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
          twitter: z.string()
        })),
        tags: z.array(z.string()),
        date: z.string(),
        content: z.any().nullable()
      })
    }),
  }
})
