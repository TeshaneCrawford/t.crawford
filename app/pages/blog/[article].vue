<script setup lang="ts">
import type { BlogPost } from '~~/types/content'
import type { ParsedContent } from '@nuxt/content'
// viewtransition
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


// Hhandle undefined input
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

const content = computed(() => getContentFromBody(page.value?.body));

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const transformToBlogPost = async (
  content: Pick<ParsedContent, '_path' | 'title' | 'date' | 'tags' | 'description'> | null
): Promise<BlogPost | null> => {
  if (!content || !content._path) return null

  return {
    _path: content._path,
    title: content.title || '',
    description: content.description,
    date: content.date,
    tags: content.tags,
  }
}

// navigation
// Queries for navigation
const { data: navigation } = await useAsyncData(`${path.value}-navigation`,
async () => {
  if ((import.meta.server || import.meta.dev) as true) {
    const [prevContent, nextContent] = await Promise.all([
      queryContent('blog')
        .where({ _path: { $ne: path.value } })
        .only(['_path', 'title', 'date', 'description', 'tags', 'content'])
        .sort({ date: -1 })
        .findOne(),
      queryContent('blog')
        .where({ _path: { $ne: path.value } })
        .only(['_path', 'title', 'date', 'description', 'tags', 'content'])
        .sort({ date: 1 })
        .findOne(),
    ])
    const [prev, next] = await Promise.all([
      transformToBlogPost(prevContent),
      transformToBlogPost(nextContent)
    ])
    if (prev) {
      const prevContent = await queryContent(prev._path).only(['body']).findOne()
      prev.readingTime = calculateReadingTime(getContentFromBody(prevContent.body))
    }
    if (next) {
      const nextContent = await queryContent(next._path).only(['body']).findOne()
      next.readingTime = calculateReadingTime(getContentFromBody(nextContent.body))
    }
    return {
      prev,
      next,
    }
  }
  return {
    prev: null,
    next: null
  }
})

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
    <div
      class="mb-8 animate-fade-in-down opacity-0"
      style="animation-delay: 0.2s; animation-fill-mode: forwards;"
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

        <StaticMarkdownRender :path="path" />
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
header>h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation: fade-out 0.5s ease-in-out;
}

::view-transition-new(root) {
  animation: fade-in 0.5s ease-in-out;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}
</style>