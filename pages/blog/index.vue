<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: blogs } = await useAsyncData('articles', () => queryContent('/blogs/').only(['_path', 'title', 'description', 'datePublished']).find())

const search = ref('')
const searchDebounced = refDebounced(search, 150)

</script>

<template>
  <div>
    Page: blog/index
  </div>
</template>

<style scoped></style>
