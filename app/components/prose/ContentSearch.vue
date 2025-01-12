<script lang="ts" setup>
import MiniSearch from 'minisearch'

const query = ref('')
const focused = ref(false)
const searchRef = ref<HTMLElement | null>(null)
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('blog'))

const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'content', 'id'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 2 },
  },
})

miniSearch.addAll(toValue(data.value) ?? [])
const results = computed(() => query.value ? miniSearch.search(query.value) : [])
const hasResults = computed(() => results.value.length > 0)

// Handle click outside
onClickOutside(searchRef, () => {
  focused.value = false
})

// Handle escape key using useEventListener
useEventListener(document, 'keyup', (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    focused.value = false
    query.value = ''
  }
})
</script>

<template>
  <div ref="searchRef" class="relative w-full">
    <div class="relative">
      <div class="relative flex items-center">
        <Icon
          name="hugeicons-search-01"
          class="absolute left-3 top-1/2 text-gray-11 -translate-y-1/2"
        />
        <input
          v-model="query"
          type="text"
          placeholder="Search articles..."
          class="w-full border border-gray-7 rounded-md bg-gray-3 px-10 py-2 text-sm text-gray-12 focus:border-gray-8 placeholder:text-gray-11 focus:outline-none focus:ring-1 focus:ring-gray-8"
          @focus="focused = true"
        >
        <button
          v-if="query"
          class="absolute right-3 top-1/2 text-gray-11 -translate-y-1/2 hover:text-gray-12"
          @click="query = ''"
        >
          <Icon name="hugeicons-cancel-01" class="h-4 w-4" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 translate-y-1"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-1"
    >
      <div
        v-if="focused && query.length > 0"
        class="absolute left-0 right-0 z-20 mt-2 overflow-hidden border border-gray-7 rounded-md bg-gray-3 shadow-lg"
      >
        <div v-if="hasResults" class="max-h-[60vh] overflow-y-auto py-2">
          <NuxtLink
            v-for="result in results"
            :key="result.id"
            :to="result.id"
            class="block px-4 py-2 hover:bg-gray-4"
          >
            <h3 class="text-sm text-gray-12 font-medium">
              {{ result.title }}
            </h3>
            <p class="line-clamp-2 mt-1 text-xs text-gray-11">
              {{ result.content }}
            </p>
          </NuxtLink>
        </div>
        <div v-else class="px-4 py-6 text-center">
          <p class="text-sm text-gray-11">
            No results found for "{{ query }}"
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.transform {
  transform-origin: top;
}

/* Hide browser's default search cancel button */
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

input[type="search"]::-webkit-search-decoration {
  display: none;
}
</style>
