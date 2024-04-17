import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ParsedBlog extends ParsedContent {
  datePublished?: string
  dateModified?: string
}