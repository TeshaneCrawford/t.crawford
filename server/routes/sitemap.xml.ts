import { SitemapStream, streamToPromise } from 'sitemap'
import { SiteUrl } from '../../scripts'
import { contentPaths } from '../util/content'

export default defineEventHandler(async (event) => {
    const routes = await contentPaths(event)

    const sitemap = new SitemapStream({
        hostname: SiteUrl,
    })
    for (const url of routes) {
        sitemap.write({
            url,
        })
    }
    sitemap.end()
    return streamToPromise(sitemap)
})