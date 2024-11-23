<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <slot>
    <button
      type="button"
      class="flex items-center gap-1 border-b border-gray-500 border-opacity-70 bg-transparent text-gray-500 font-mono opacity-70 transition-colors dark:border-gray-400 hover:border-opacity-100 dark:text-gray-400 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400"
      role="navigation"
      aria-label="Navigate to previous page"
      @click="router.back()"
    >
      <Icon name="i-tabler-terminal" class="h-4 w-4" aria-hidden="true" />
      <span>go back ..</span>
    </button>
  </slot>
</template>