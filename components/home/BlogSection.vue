<script lang="ts" setup>
const { error } = await useAsyncData('blogs', () => queryContent('/blogs/').findOne());

if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message || 'Page not found',
    fatal: true,
  })
}

const {
  fetchBlogArticles,
  articles,
} = useBlog()

await fetchBlogArticles()

defineProps<{
  blogtitle?: string;
}>();
</script>

<template>
  <HomeSection
    :title="blogtitle || 'RecentBlog'"
  >
    <div v-for="item in articles" :key="item._path" class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <BlogCard
            :path="item._path!"
            :title="item.title"
            :description="item.description"
            :published-at="item.publishedAt"
            :authors="item.authors"
          />
    </div>
    <NuxtLink class="text-gray-800 dark:text-gray-100 font-semibold hover:underline" to="/blogs">
      Read all blogs
    </NuxtLink>
  </HomeSection>
</template>

<style scoped></style>
