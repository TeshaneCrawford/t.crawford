<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()
</script>

<template>
  <div class="mt-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300/40 dark:border-gray-700/40">
    <div class="overflow-hidden group relative pt-4">
      <span v-if="language" class="absolute top-2 left-3 text-xs font-mono">
        {{ language }}
      </span>
      <span v-if="filename" class="absolute top-2 left-8 text-xs font-mono">
        {{ filename }}
      </span>
      <ProseCodeCopy :code="code" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 2rem;
}

:deep(pre) {
  @apply bg-gray-100 dark:bg-gray-950;
  @media (prefers-color-scheme: dark) {
    @apply bg-gray-900;
  }
  @apply rounded-t-none;
}
</style>

