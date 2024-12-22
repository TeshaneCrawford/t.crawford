<script setup lang="ts">
interface Props {
  rawbody: string
}

const props = defineProps<Props>()

const readingTime = computed(() => {
  const wordsPerMinute = 200
  const words = props.rawbody.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
})
</script>

<template>
  <span class="text-gray-11 font-light">
    {{ readingTime }} min read
  </span>
</template>
