<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()
const folderName = route.params.folder as string

definePageMeta({
  layout: 'photos',
  validate: async (route) => {
    return !!route.params.folder
  },
})

useSeoMeta({
  title: computed(() => `Photos from ${folderName}`),
  description: computed(() => `Browse through photos from the ${folderName} collection.`),
})

// Watch for query changes to handle modal state
watch(
  () => route.query.image,
  (newValue) => {
    console.log('Image query changed:', newValue)
  },
)
</script>

<template>
  <div class="md:px-8 xl:px-0">
    <PhotosImgGrid :folder="$route.params.folder as string" />
  </div>
</template>
