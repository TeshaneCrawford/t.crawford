import { Feed } from 'feed'

export default defineEventHandler(async (_event) => {
  const feed = new Feed({
    title: 'Teshane Crawford',
    description: 'Teshane Crawford - Personal website and blog',
    id: 'https://teshanecrawford.com/',
    link: 'https://teshanecrawford.com/',
    language: 'en',
    copyright: '© 2024 Teshane Crawford',
  })

  return {
    headers: { 'Content-Type': 'application/rss+xml' },
    body: feed.rss2(),
  }
})
