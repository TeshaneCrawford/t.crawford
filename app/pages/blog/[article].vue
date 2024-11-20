<script setup lang="ts">
import type { BlogPost } from '~~/types/content'
import type { ParsedContent } from '@nuxt/content'

// View transition config
const TRANSITION_DURATION = '0.5s'
const viewTransitionName = computed(() => `article-${slug}`)

const route = useRoute('blog-article')
const slug = route.params.article
if (!slug) navigateTo('/blog')

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)

const { data: page } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent(path.value)
      .only(['title', 'date', 'tags', 'body', 'authors', 'description', 'content'])
      .findOne(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
  })
}

route.meta.title = page.value.title

const formatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
})


const content = computed(() => getContentFromBody(page.value?.body));

// Helper function to extract text content from body
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContentFromBody = (body: any): string => {
  if (!body?.children) return ''
  return body.children
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((node: any) => {
      if (node.type === 'text') return node.value || ''
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (node.children) return node.children.map((child: any) => child.value || '').join(' ')
      return ''
    })
    .join(' ')
}

// Calculate reading time from content
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  return `${minutes} min read`
}

type BlogPostContent = Pick<ParsedContent, '_path' | 'title' | 'date' | 'tags' | 'description' | 'content' | 'body'>

const transformToBlogPost = (content: BlogPostContent | null): BlogPost | null => {
  if (!content || !content._path) return null

  // Calculating reading time directly from the content body
  const contentText = getContentFromBody(content.body)
  const readingTime = calculateReadingTime(contentText)

  return {
    _path: content._path,
    title: content.title || '',
    description: content.description,
    date: content.date,
    tags: content.tags,
    readingTime,
  }
}

// Navigation fetching
const { data: navigation } = await useAsyncData(
  `${path.value}-navigation`,
  async () => {
    try {
      const allPosts = await queryContent('blog')
        .only(['_path', 'title', 'date', 'description', 'tags', 'body'])
        .sort({ date: -1 })
        .find()

      const currentIndex = allPosts.findIndex(post => post._path === path.value)
      if (currentIndex === -1) return { prev: null, next: null }

      // Circular navigation
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : allPosts.length - 1
      const prevIndex = currentIndex < allPosts.length - 1 ? currentIndex + 1 : 0

      const nextPost = allPosts[nextIndex] as BlogPostContent
      const prevPost = allPosts[prevIndex] as BlogPostContent

      return {
        prev: transformToBlogPost(prevPost),
        next: transformToBlogPost(nextPost),
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching navigation:', error)
      return {
        prev: null,
        next: null,
      }
    }
  },
  {
    server: true,
    immediate: true,
  }
)

defineOgImageComponent('DefaultOg', {
  date: formatter.format(new Date(page.value.date)),
  title: page.value.title,
  tags: page.value.tags,
})

if (import.meta.server) {
  useRoute().meta.description = page.value.description
}

// definePageMeta({
//   title: () => page.value?.title || 'Article'
// })

definePageMeta({
  layout: 'blog'
})

useSeoMetaConfig({
  description: page.value?.description
});
</script>

<template>
  <main   md:px-8 xl:px-0 >
    <!-- Add fade transition to back button -->
    <div
      class="mb-8 animate-fade-in-up opacity-0"
      style="animation-delay: 0.1s; animation-fill-mode: forwards;"
    >
      <NuxtLink
        to="/blog"
        class="group inline-flex items-center rounded-lg text-neutral-500 underline underline-offset-4 underline-wavy transition-all duration-300 dark:text-neutral-400 hover:underline hover:underline-offset-4 hover:underline-solid"
      >
        <span class="i-hugeicons:arrow-left-02 text-lg transition-transform group-hover:-translate-x-0.5" />
        Back to Blogs
      </NuxtLink>
    </div>
    <section v-if="page">
      <Prose :toc="page.body?.toc">
        <template #header>
          <ProseHeaderArticle
            v-if="page.title"
            :title="page.title"
            :date="page.date"
            :categories="page.tags"
            :authors="page.authors"
            :content="content"
          >
            <template #title>
              <h1 :style="{ viewTransitionName }">{{ page.title }}</h1>
            </template>
          </ProseHeaderArticle>
        </template>

        <!-- Add transition to content -->
        <div :style="{ viewTransitionName: `content-${slug}` }">
          <StaticMarkdownRender :path="path" />
        </div>
      </Prose>
      <div
        class="animate-fade-in-up opacity-0"
        style="animation-delay: 0.3s; animation-fill-mode: forwards;"
      >
        <BlogNavigation
          v-if="navigation"
          :prev="navigation.prev"
          :next="navigation.next"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Enhance header transitions */
header>h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}

/* Add smooth transitions for all elements */
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: v-bind(TRANSITION_DURATION);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Specific transitions for article content */
::view-transition-old(content-*),
::view-transition-new(content-*) {
  animation: none;
  mix-blend-mode: normal;
  height: 100%;
}

::view-transition-old(content-*) {
  opacity: 0;
  transform: translateY(20px);
}

::view-transition-new(content-*) {
  opacity: 1;
  transform: translateY(0);
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
    transition: none !important;
  }
}
</style>