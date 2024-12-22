interface SeoConfig {
  title?: string
  description?: string
  image?: string
  url?: string
  canonical?: string
}

export const useSeoMetaConfig = (config?: SeoConfig) => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()

  // Get title from route.meta or config
  const pageTitle = config?.title || (route.meta.title as string) || ''

  const defaultConfig = {
    siteName: 'Teshane Crawford',
    description: 'Teshane Crawford\'s personal website',
    image: '/images/og/ogImage.jpeg',
    url: runtimeConfig.public.siteUrl || 'https://teshanecrawford.com',
  }

  // Merge provided config with defaults
  const seoConfig = {
    ...defaultConfig,
    ...config,
    title: pageTitle, // Use the title from meta or config
    url: config?.url || `${defaultConfig.url}${route.path}`,
  }

  // Ensure image URL is absolute
  const fullImageUrl = seoConfig.image.startsWith('http')
    ? seoConfig.image
    : new URL(seoConfig.image, defaultConfig.url).toString()

  const canonical = config?.canonical || seoConfig.url

  // Don't append site name since it's handled by useHead in app.vue
  useSeoMeta({
    title: seoConfig.title, // Just use the page title
    description: seoConfig.description,

    // Open Graph
    ogTitle: seoConfig.title,
    ogDescription: seoConfig.description,
    ogImage: fullImageUrl,
    ogUrl: seoConfig.url,
    ogSiteName: canonical,
    robots: 'index, follow',
    author: defaultConfig.siteName,
    publisher: defaultConfig.siteName,

    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: seoConfig.title,
    twitterDescription: seoConfig.description,
    twitterImage: fullImageUrl,
    twitterSite: '@TeshaneCrawford',
  })
}
