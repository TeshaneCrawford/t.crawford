<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <!-- rename to Disclosure -->
  <details class="my-8 border-1 border-gray-300/40 rounded-xl bg-gray-300/10 px-4 py-4 dark:border-gray-700/40 dark:bg-gray-700/10">
    <summary class="flex flex-row cursor-pointer list-none items-center gap-2 text-sm text-gray-500 font-semibold dark:text-gray-300">
      <Icon name="hugeicons:play" class="h-3 w-3 transition-transform duration-75 ease-in" data-icon />
      <span>
        {{ title }}
        <ContentSlot :use="$slots.title" unwrap="p" />
      </span>
    </summary>
    <div data-content class="mt-2 text-sm text-gray-500 dark:text-gray-300">
      <ContentSlot :use="$slots.default" />
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
</style>