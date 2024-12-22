<script lang="ts" setup>
interface Props {
  title: string
  level?: number
}

withDefaults(defineProps<Props>(), {
  level: 2,
})
</script>

<template>
  <details class="my-8 border-1 border-gray-300/40 rounded-xl bg-gray-300/10 px-4 py-4 dark:border-gray-700/40 dark:bg-gray-700/10">
    <summary class="flex flex-row cursor-pointer list-none items-center gap-2 text-sm text-gray-11 font-semibold">
      <Icon name="hugeicons:play" class="h-3 w-3 transition-transform duration-75 ease-in" data-icon />
      <span class="prose dark:prose-invert">
        <slot name="title">{{ title }}</slot>
      </span>
    </summary>
    <div data-content class="mt-2 prose dark:prose-invert">
      <slot />
    </div>
  </details>
</template>

<style scoped>
details[open] [data-icon] {
  transform: rotate(90deg);
}

[data-content] :deep(p:last-child) {
  margin-bottom: 0;
}

/* Add markdown prose styling adjustments */
:deep(.prose) {
  max-width: none;
}
</style>
