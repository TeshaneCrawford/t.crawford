<script setup lang="ts">
const route = useRoute()
// Immediate fetch with server-side rendering
const { data: article } = await useAsyncData('article', () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
}, {
  immediate: true,
  server: true,
})

const { activeHeading } = useScrollSpy()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useSeoMeta(article.value?.seo ?? {})
defineOgImageComponent('DefaultOg', {
  title: article.value?.title ?? '',
  date: article.value?.date ? formatDate(article.value.date) : null,
  tags: article.value?.tags ?? [],
})

definePageMeta({
  layout: 'blog',
  keepalive: true,
  key: route => route.path,
})
</script>

<template>
  <main id="main-content" class="py-10">
    <div class="mx-auto max-w-[90rem] flex gap-x-8 px-4 lg:px-8 sm:px-6">
      <!-- Desktop Table of Contents -->
      <aside
        class="hidden lg:block lg:w-64 lg:flex-none"
        aria-label="Table of contents"
      >
        <ProseToc
          v-if="article?.body?.toc?.links"
          :links="article.body.toc.links"
          :active-id="activeHeading"
        />
      </aside>

      <!-- Main Article Content -->
      <article
        class="mx-auto max-w-none min-w-0 w-full"
        :aria-labelledby="article?.title ? 'article-title' : undefined"
      >
        <template v-if="article">
          <nav
            class="mb-8 flex flex-wrap items-center text-sm"
            aria-label="Breadcrumb"
            role="navigation"
          >
            <ol class="flex flex-wrap items-center">
              <li class="min-w-[24px]">
                <NuxtLink
                  to="/"
                  class="inline-flex items-center nav-link"
                  aria-label="Go to homepage"
                >
                  <Icon name="hugeicons-home-01" class="mr-1" aria-hidden="true" />
                  <span class="hidden sm:inline">Home</span>
                </NuxtLink>
              </li>
              <li aria-hidden="true">
                <Icon name="hugeicons-chevron-right" class="mx-2 text-gray-9" />
              </li>
              <li class="min-w-[24px]">
                <NuxtLink
                  to="/blog"
                  class="inline-flex items-center nav-link"
                  aria-label="Go to blog"
                >
                  <Icon name="hugeicons-file-01" class="mr-1" aria-hidden="true" />
                  <span class="hidden sm:inline">Blog</span>
                </NuxtLink>
              </li>
              <li aria-hidden="true">
                <Icon name="hugeicons-arrow-right-01" class="mx-2 text-gray-9" />
              </li>
              <li class="max-w-[200px] sm:max-w-none">
                <span class="block truncate text-gray-11" aria-current="page">
                  {{ article.title }}
                </span>
              </li>
            </ol>
          </nav>

          <!-- Article Header: Title, Author, and Metadata -->
          <header class="mb-8 max-w-3xl space-y-4">
            <h1 id="article-title" class="text-4xl font-bold">
              {{ article.title }}
            </h1>
            <div
              class="flex flex-col flex-wrap gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"
              role="contentinfo"
              aria-label="Article metadata"
            >
              <div
                v-for="author in article.authors"
                :key="author.name"
                class="flex items-center gap-2"
                role="presentation"
              >
                <img
                  :src="author.picture"
                  :alt="`${author.name}'s profile picture`"
                  class="h-8 w-8 rounded-full"
                  loading="lazy"
                >
                <div class="flex flex-col">
                  <span class="text-gray-12 font-medium op-90">{{ author.name }}</span>
                  <a
                    :href="`https://twitter.com/${author.twitter}`"
                    class="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Follow ${author.name} on Twitter`"
                  >
                    @{{ author.twitter }}
                  </a>
                </div>
              </div>
              <div
                class="flex items-center gap-4 text-gray-11 sm:ml-auto"
                role="complementary"
                aria-label="Article details"
              >
                <time :datetime="article.date" aria-label="Publication date">
                  {{ formatDate(article.date) }}
                </time>
                <ProseReadingTime :rawbody="article.rawbody" />
              </div>
            </div>
          </header>

          <!-- Article Body -->
          <div class="max-w-3xl prose" role="article">
            <ContentRenderer
              :key="route.path"
              :value="article"
              eager
            />
          </div>
        </template>

        <!-- Previous/Next Article Navigation -->
        <ProseNav aria-label="Article navigation" />
      </article>
    </div>
  </main>
</template>

<style>
.prose-lg {
  width: 100%;
}

.prose {
  opacity: 1;
}
</style>
