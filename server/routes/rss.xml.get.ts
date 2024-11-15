import { Feed } from 'feed'
import { defineEventHandler, createError } from 'h3'
import { serverQueryContent } from '#content/server'
import type { ParsedContent } from '@nuxt/content'

interface BlogPost extends ParsedContent {
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any
  tags?: string[]
  date: string
  _path: string // Ensure _path is always defined for BlogPost
}

export default defineEventHandler(async (event) => {
  // Only generate feed during dev or prerender
  if (!import.meta.dev && !import.meta.prerender) {
    return
  }

  try {
    const posts = await serverQueryContent(event)
      .where({ _partial: false, _draft: false })
      .sort({ date: -1 })
      .find()

    const blogPosts: BlogPost[] = posts.filter((post): post is BlogPost =>
      typeof post._path === 'string' &&
      typeof post.title === 'string' &&
      typeof post.description === 'string' &&
      typeof post.date === 'string'
    )

    const feed = new Feed({
      title: 'Teshane Crawford',
      description: 'The personal website of Teshane Crawford',
      id: 'https://teshanecrawford.com/',
      link: 'https://teshanecrawford.com/blog',
      language: 'en',
      image: 'https://teshanecrawford.com/__og-image__/static/og.png',
      favicon: 'https://teshanecrawford.com/favicon.svg',
      copyright: `© 2022-${new Date().getFullYear()} Teshane Crawford. All rights reserved.`,
      feedLinks: {
        json: 'https://teshanecrawford.com/feed/json',
        atom: 'https://teshanecrawford.com/feed/atom',
        rss: 'https://teshanecrawford.com/rss.xml'
      },
      author: {
        name: 'Teshane Crawford',
        email: 'crawfordteshane@gmail.com',
        link: 'https://teshanecrawford.com/'
      }
    })

    for (const post of blogPosts) {
      // Extract slug from path (removes leading '/blog/' if present)
      const slug = post._path.replace(/^\/blog\//, '')

      // Convert body content to HTML string if needed
      const content = typeof post.body === 'string'
        ? post.body
        : JSON.stringify(post.body)

      feed.addItem({
        title: post.title,
        id: `https://teshanecrawford.com/blog/${slug}`,
        link: `https://teshanecrawford.com/blog/${slug}`,
        description: post.description,
        content: content.replace(
          /<img src="\//g,
          '<img src="https://teshanecrawford.com/'
        ),
        category: post.tags?.map(tag => ({ name: tag })) || [],
        author: [
          {
            name: 'Teshane Crawford',
            email: 'crawfordteshane@gmail.com',
            link: 'https://teshanecrawford.com'
          }
        ],
        date: new Date(post.date),
        image: `https://teshanecrawford.com/__og-image__/static/blog/${slug}/og.png`
      })
    }

    event.node.res.setHeader('Content-Type', 'application/xml')

    return feed.rss2()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating RSS feed:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to generate RSS feed'
    })
  }
})