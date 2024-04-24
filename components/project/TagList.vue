<script lang="ts" setup>
import type { PropType } from 'vue';
defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>

<template>
  <ul class="tags">
    <li v-for="tag in tags" :key="tag">
      <NuxtImg :src="`/img/${tag}.svg`" :alt="tag" />
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.tags {
  display: flex;
  gap: 0.5rem;
  padding: 0;
  list-style: none;

  NuxtImg {
    display: block;
    height: 1rem;
    width: auto;
  }
}
</style>
