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

const { results: searchResults } = useMiniSearch(searchDebounced, blogs.value!, {
  idField: '_path',
  fields: ['title', 'description'],
  storeFields: ['_path', 'title', 'description', 'datePublished'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

const order = ref<1 | -1>(-1)
const toggleOrder = function () {
  order.value = order.value === 1 ? -1 : 1
}

const orderByOptions = [
  {
    id: 'datePublished',
    label: 'Publication',
  },
  {
    id: 'title',
    label: 'Title',
  },
]
const orderBy = ref<string>('datePublished')
const currentOrderBy = computed(() => orderByOptions.find(option => option.id === orderBy.value))

const results = computed(() => {
  const currentBlogs = searchDebounced.value ? [...searchResults.value] : [...blogs.value!]

  if (!orderBy.value)
    return currentBlogs

  return currentBlogs.sort((a, b) => {
    if (a[orderBy.value] < b[orderBy.value])
      return -1 * order.value

    if (a[orderBy.value] > b[orderBy.value])
      return 1 * order.value

    return 0
  })
})

</script>

<template>
  <div>
    Page: blog/index
  </div>
</template>

<style scoped></style>
