<script setup lang="ts">
import { withoutTrailingSlash, joinURL } from 'ufo'
import type { BlogArticle } from '~/types'

const route = useRoute()
const { copy } = useClipboard()

const { data: article } = await useAsyncData(route.path, () => queryContent<BlogArticle>(route.path).findOne())
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description
})

const title = article.value.head?.title || article.value.title
const description = article.value.head?.description || article.value.description
useSeoMeta({
  titleTemplate: '%s | Teshane Blog',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} | Teshane Blog`
})

if (article.value.image) {
  const site = useSiteConfig()
  useSeoMeta({
    ogImage: joinURL(site.url, article.value.image),
    twitterImage: joinURL(site.url, article.value.image)
  })
} else {
  defineOgImage({
    component: 'Docs',
    title,
    description,
    headline: 'Blog'
  })
}

  const socialLinks = computed(() => {
    const articleValue = article.value
    const path = articleValue?._path || ''
    return [
      {
        icon: 'i-simple-icons-linkedin',
        to: `https://www.linkedin.com/sharing/share-offsite/?url=https://teshane.tech${path}`
      },
      {
        icon: 'i-simple-icons-x',
        to: `https://twitter.com/intent/tweet?url=https://teshane.tech${path}`
      }
    ]
  })

  function copyLink () {
  if (article.value) {
    copy(`https://teshane.tech${article.value._path}`)
  }
}
</script>