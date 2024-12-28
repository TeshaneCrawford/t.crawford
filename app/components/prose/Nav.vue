<script setup lang="ts">
interface BlogPost {
  title: string
  date: string
  path: string
}

// Extract and validate the article slug from route params
const route = useRoute('blog-article')
const slug = computed(() => {
  const articleSlug = route.params.article
  if (!articleSlug) return null
  return Array.isArray(articleSlug) ? articleSlug[0] : articleSlug
})

// Safety redirect to blog index if no article is found
watchEffect(() => {
  if (!slug.value) navigateTo('/blog')
})

// Normalize the path by removing trailing slashes and .json extensions
const path = computed(() => route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''))

// Fetch the current article metadata
const { data: page, error: pageError } = await useAsyncData(
  path.value,
  () => queryCollection('blog')
    .path(path.value)
    .select('title', 'date', 'path')
    .first(),
)

if (!page.value || pageError.value) {
  throw createError({
    statusCode: 404,
    message: 'Article not found',
    fatal: true,
  })
}

// Fetch adjacent posts with circular navigation (wraps around at start/end)
const [{ data: prevPost }, { data: nextPost }] = await Promise.all([
  useAsyncData<BlogPost | null>(`${path.value}-prev`, async () => {
    const prev = await queryCollection('blog')
      .where('date', '<', page.value?.date)
      .order('date', 'DESC')
      .first()

    // Wrap to the latest post when at the beginning
    return prev || queryCollection('blog')
      .order('date', 'DESC')
      .first()
  }),
  useAsyncData<BlogPost | null>(`${path.value}-next`, async () => {
    const next = await queryCollection('blog')
      .where('date', '>', page.value?.date)
      .order('date', 'ASC')
      .first()

    // Wrap to the earliest post when at the end
    return next || queryCollection('blog')
      .order('date', 'ASC')
      .first()
  }),
])

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
        v-if="prevPost?.path && prevPost?.path !== path"
        direction="previous"
        :title="prevPost.title"
        :path="getSlug(prevPost.path)"
      />

      <ProseNavLink
        v-if="nextPost?.path && nextPost?.path !== path"
        direction="next"
        :title="nextPost.title"
        :path="getSlug(nextPost.path)"
      />
    </ClientOnly>
  </nav>
</template>

<style scoped></style>
