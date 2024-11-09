export const useSeoMetaConfig = (config?: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  // Get title from route.meta or config
  const pageTitle = config?.title || (route.meta.title as string) || '';

  const defaultConfig = {
    siteName: 'Teshane Crawford',
    description: 'Teshane Crawford\'s personal website',
    image: '/images/og-images/ogImage.jpeg',
    url: runtimeConfig.public.siteUrl || 'https://teshanecrawford.com'
  };

  // Merge provided config with defaults
  const seoConfig = {
    ...defaultConfig,
    ...config,
    title: pageTitle, // Use the title from meta or config
    url: config?.url || `${defaultConfig.url}${route.path}`
  };

  // Don't append site name since it's handled by useHead in app.vue
  useSeoMeta({
    title: seoConfig.title, // Just use the page title
    description: seoConfig.description,

    // Open Graph
    ogTitle: seoConfig.title,
    ogDescription: seoConfig.description,
    ogImage: seoConfig.image,
    ogUrl: seoConfig.url,

    // Twitter
    twitterTitle: seoConfig.title,
    twitterDescription: seoConfig.description,
    twitterImage: seoConfig.image,
  });
};