<script setup lang="ts">
interface Props {
  cite?: string;
}

defineProps<Props>();
</script>

<template>
  <blockquote class="my-6 border-l-4 border-neutral-300 bg-neutral-50 pl-4 py-3 dark:border-neutral-600 dark:bg-neutral-800/50 transition-all duration-200 hover:border-l-indigo-500 m-inline-0 relative">
    <div class="text-neutral-800 dark:text-neutral-200 font-normal italic">
      <slot />
    </div>
    <cite v-if="cite" class="mt-2 block text-sm text-neutral-600 dark:text-neutral-400">
      — {{ cite }}
    </cite>
  </blockquote>
</template>
