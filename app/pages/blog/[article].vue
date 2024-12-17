<script setup lang="ts">
import type { Collections } from '@nuxt/content'

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
    && queryCollection('blog').path(path.value)
      .select('title', 'date', 'tags', 'body', 'authors', 'description', 'content')
      .first(),
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

// Add navigation queries
const { data: prevPost } = await useAsyncData(
  `${path.value}-prev`,
  () =>
    queryCollection('blog')
      .where('date', '<', page.value?.date)
      .order('date', 'DESC')
      .first()
)

const { data: nextPost } = await useAsyncData(
  `${path.value}-next`,
  () =>
    queryCollection('blog')
      .where('date', '>', page.value?.date)
      .order('date', 'ASC')
      .first()
)
</script>

<template>
  <main md:px-8 xl:px-0 >
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
          <StaticMarkdownRender :path="path as keyof Collections" />
        </div>
      </Prose>
    </section>
    <!-- Blog Navigation -->
        <nav class="mt-16 flex justify-between pt-8">
          <div v-if="prevPost" class="group max-w-[45%] flex flex-col">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Previous Article</span>
            <NuxtLink
              :to="`/blog/${prevPost.path?.split('/').pop()}`"
              class="nav-link group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-2 text-neutral-900 transition-colors dark:text-neutral-100"
            >
              {{ prevPost.title }}
            </NuxtLink>
          </div>
          <div v-if="nextPost" class="group max-w-[45%] flex flex-col items-end text-right">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Next Article</span>
            <NuxtLink
              :to="`/blog/${nextPost.path?.split('/').pop()}`"
              class="nav-link group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-2 text-neutral-900 transition-colors dark:text-neutral-100"
            >
              {{ nextPost.title }}
            </NuxtLink>
          </div>
        </nav>
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

/* Navigation link hover effect */
.nav-link {
  position: relative;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-image: linear-gradient(to right, currentColor 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 6px 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>