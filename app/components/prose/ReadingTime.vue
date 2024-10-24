<script setup lang="ts">
interface Props {
  content: string;
}

const props = defineProps<Props>();

const readingTime = computed(() => {
  const wordsPerMinute = 200;
  const words = props.content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
});
</script>

<template>
  <span class="text-neutral-500 font-light dark:text-neutral-400">
    {{ readingTime }} min read
  </span>
</template>