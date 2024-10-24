<script lang="ts" setup>
type Type = 'info' | 'warning' | 'danger'

defineProps<{
  type: Type
}>()

const typeClasses: Record<Type, string> = {
  info: 'border-blue-300/40 dark:border-blue-700/40 bg-blue-200/20 dark:bg-blue-700/10 dark:text-blue-50 text-blue-950',
  warning: 'border-yellow-300/40 dark:border-yellow-700/40 bg-yellow-200/20 dark:bg-yellow-700/10 dark:text-yellow-50 text-yellow-950',
  danger: 'border-red-300/40 dark:border-red-700/40 bg-red-200/20 dark:bg-red-700/10 dark:text-red-50 text-red-950',
}
</script>

<template>
  <div class="alert my-8 border rounded-md px-4 py-4 text-sm" :class="typeClasses[type]">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style scoped>
.alert :deep(*:first-child) {
  margin-top: 0;
}

.alert :deep(*:last-child) {
  margin-bottom: 0;
}
</style>