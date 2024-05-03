<script lang="ts" setup>
import type { NuxtError } from '#app'
import type { BlogPostCard } from '~/types/blog'

const route = useRoute()
const category = (route.params as { category?: string }).category || '';

const { data, error } = await useAsyncData(`blogs:categories:${category}`, () => queryContent('/blogs/').only(['_path', 'title', 'description', 'publishedAt', 'authors']).where({ categories: { $contains: category } }).find()) as { data: Ref<BlogPostCard[]>, error: Ref<NuxtError | null> }

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true,
  })
}

const description = `Blog's articles in the category ${category}`
useHead({
  templateParams: {
    subtitle: 'Categories',
  },
  titleTemplate: '%s %separator %subtitle %separator %siteName',
})
useSeoMeta({
  title: category,
  description,
})
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])
// defineOgImageComponent('OgImagePage')
// useTrackPageview()
</script>

<template>
  <!-- <Head>
    <SchemaOrgWebPage :type="['CollectionPage']" />
  </Head> -->
  <AppMain v-if="data">
    <template #header>
      <AppPageHeading :description="description">
        <template #title>
          <div class="capitalize">
            {{ category }}
          </div>
        </template>
      </AppPageHeading>
    </template>
    <AppListGrid class="mt-8">
      <AppListGridItem v-for="item in data" :key="item._path">
        <BlogCard
          :path="item._path!"
          :title="item.title"
          :description="item.description"
          :published-at="item.publishedAt"
          :authors="item.authors"
        />
      </AppListGridItem>
    </AppListGrid>
  </AppMain>
</template>