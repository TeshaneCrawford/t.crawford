import type { Author } from 'feed'
import { Feed } from 'feed'
import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { siteName, siteUrl } = config.public

  const feed = new Feed({
    title: `${siteName} Personal website and blog`,
    description: `Personal website and blog of ${siteName}`,
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: joinURL(siteUrl, '/favicon.ico'),
    favicon: joinURL(siteUrl, '/favicon.ico'),
    copyright: `Copyright © ${new Date().getFullYear()} ${siteName}`,
    feedLinks: {
      rss: joinURL(siteUrl, '/rss.xml'),
    },
    author: {
      name: String(siteName),
      link: siteUrl,
      email: undefined,
    } as Author,
  })

  // Fetch GitHub repos
  const repos = await $fetch('/api/github-repos')

  // Add repos to feed
  if (repos.All) {
    for (const repo of repos.All) {
      feed.addItem({
        title: repo.name,
        id: repo.html_url,
        link: repo.html_url,
        description: repo.description || '',
        date: new Date(repo.pushed_at),
        image: repo.open_graph_image_url || '',
        author: [{
          name: String(repo.owner.login),
          link: String(repo.owner.html_url),
        }],
      })
    }
  }

  // Return the feed as XML
  appendHeader(event, 'Content-Type', 'application/xml')
  return feed.rss2()
})
