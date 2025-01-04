<script setup lang="ts">
interface Props {
  rawbody: string
}

const props = defineProps<Props>()

const wordCount = computed(() => props.rawbody.trim().split(/\s+/).length)

const readingTime = computed(() => {
  const wordsPerMinute = 200
  return Math.ceil(wordCount.value / wordsPerMinute)
})
</script>

<template>
  <span class="text-gray-11 font-light">
    {{ wordCount }} words · {{ readingTime }} min read
  </span>
</template>
