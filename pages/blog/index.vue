<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page?.value?.title,
  ogTitle: page?.value?.title,
  description: page?.value?.description,
  ogDescription: page?.value?.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blogs/').only(['_path', 'title', 'description', 'datePublished']).find())

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
    if ((a as never)[orderBy.value] < (b as never)[orderBy.value])
      return -1 * order.value

    if ((a as never)[orderBy.value] > (b as never)[orderBy.value])
      return 1 * order.value

    return 0
  })
})

</script>

<template>
  <AppPageHeading :title="page?.title" :description="page?.hero?.description ?? page?.description">
    <div class="flex flex-col gap-8">
    <div class="flex justify-between">
        <UInput
          v-model="search"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          variant="outline"
          color="white"
          :trailing="false"
          name="input"
          placeholder="Search for an item"
        />
        <UButtonGroup size="sm" orientation="horizontal">
          <UButton
            :icon="order === 1 ? 'i-heroicons-bars-arrow-up-20-solid' : 'i-heroicons-bars-arrow-down-20-solid'"
            color="white"
            :title="order === 1 ? 'Ascending order' : 'Descending order'"
            @click="toggleOrder()"
          />
          <USelectMenu
            v-model="orderBy"
            class="w-32"
            :options="orderByOptions"
            color="white"
            placeholder="Trier par"
            select-class="cursor-pointer"
            value-attribute="id"
            option-attribute="label"
          >
            <template #label>
              {{ currentOrderBy?.label }}
            </template>
          </USelectMenu>
        </UButtonGroup>
      </div>
      <AppGrid v-if="results.length">
        <AppCard v-for="blog in results" :key="blog._path" :to="blog._path" :title="blog.title" :description="blog.description" :date="blog.datePublished" />
      </AppGrid>
      <p v-else class="text-center text-gray-500 dark:text-gray-400">
        No blogs match your search.
      </p>
  </div>
  </AppPageHeading>
</template>

<style scoped></style>
