import { Feed } from 'feed'
import * as cheerio from 'cheerio'
import { SameAs, SiteDescription, SiteLanguage, SiteName, SiteTagLine, SiteUrl } from '../../scripts'
import { serverQueryContent } from '#content/server'

export async function generatedBlogFeed(event: any) {
    // Fetch all documents
    const feed = new Feed({
        title: `${SiteTagLine} | ${SiteName}`,
        description: SiteDescription,
        id: SiteUrl,
        link: SiteUrl,
        language: SiteLanguage,
        image: `${SiteUrl}/logo.png`,
        favicon: `${SiteUrl}/favicon.ico`,
        copyright: `Copyright (c) 2023-present, ${SiteName}`,
        feedLinks: {
            json: `${SiteUrl}/feed.json`,
            atom: `${SiteUrl}/feed.atom`,
            rss: `${SiteUrl}/feed.xml`,
        },
    })

    const posts = await serverQueryContent(event, 'posts').find()

  for (const post of posts) {
    const path = post._path.replace('posts', 'blog')
    // this will return the SSR content of the post
    const content = await $fetch<string>(path)
    let $ = cheerio.load(content)
    const prose = $('.prose').html()
    $ = cheerio.load(prose)
    // remove all attributes from all elements
    $('*').each(function() {
      this.attribs = {}
    })
    const item = {
      title: post.title,
      id: `${SiteUrl}${path}`,
      link: `${SiteUrl}${path}`,
      description: post.description,
      content: $('body').html(),
      image: post.image,
      author: [
        {
          name: SiteName,
          link: SameAs[0],
        },
      ],
      date: new Date(post.publishedAt),
    }
    feed.addItem(item)
  }

  return feed
}