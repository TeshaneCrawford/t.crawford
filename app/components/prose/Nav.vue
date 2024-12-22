<script setup lang="ts">
interface BlogPost {
  title: string
  date: string
  path: string
}

const route = useRoute('blog-article')
const slug = computed(() => {
  const articleSlug = route.params.article
  if (!articleSlug) return null
  return Array.isArray(articleSlug) ? articleSlug[0] : articleSlug
})

// Redirect if no slug is found
watchEffect(() => {
  if (!slug.value) navigateTo('/blog')
})

const path = computed(() => route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''))

// Fetch current page with error handling
const { data: page, error: pageError } = await useAsyncData(
  path.value,
  () => queryCollection('blog')
    .path(path.value)
    .select('title', 'date', 'path')
    .first(),
)

// Handle 404
if (!page.value || pageError.value) {
  throw createError({
    statusCode: 404,
    message: 'Article not found',
    fatal: true,
  })
}

// Fetch adjacent posts
const [{ data: prevPost }, { data: nextPost }] = await Promise.all([
  useAsyncData<BlogPost | null>(`${path.value}-prev`, () =>
    queryCollection('blog')
      .where('date', '<', page.value?.date)
      .order('date', 'DESC')
      .first(),
  ),
  useAsyncData<BlogPost | null>(`${path.value}-next`, () =>
    queryCollection('blog')
      .where('date', '>', page.value?.date)
      .order('date', 'ASC')
      .first(),
  ),
])

// Helper to safely get the slug from path
const getSlug = (path?: string) => {
  if (!path) return ''
  const segments = path.split('/')
  return segments[segments.length - 1] || ''
}
</script>

<template>
  <nav class="mt-16 w-full flex flex-col gap-8 pt-8 md:flex-row md:justify-between">
    <ClientOnly>
      <ProseNavLink
        v-if="prevPost?.path"
        direction="previous"
        :title="prevPost.title"
        :path="getSlug(prevPost.path)"
      />

      <ProseNavLink
        v-if="nextPost?.path"
        direction="next"
        :title="nextPost.title"
        :path="getSlug(nextPost.path)"
      />
    </ClientOnly>
  </nav>
</template>

<style scoped></style>
