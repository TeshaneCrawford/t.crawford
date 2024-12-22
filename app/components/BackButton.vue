<script lang='ts' setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <slot>
    <button
      type="button"
      class="flex items-center gap-1 border-b border-gray-8 bg-transparent text-gray-11 font-mono opacity-70 transition-colors hover:border-opacity-100 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8"
      role="navigation"
      aria-label="Navigate to previous page"
      @click="router.back()"
    >
      <Icon name="i-tabler-terminal" class="h-4 w-4" aria-hidden="true" />
      <span>go back ..</span>
    </button>
  </slot>
</template>
