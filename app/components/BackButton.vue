<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <slot>
    <button
      class="border-b border-gray-500 border-opacity-70 bg-transparent text-gray-500 opacity-70 dark:border-gray-400 hover:border-opacity-100 dark:text-gray-400 hover:opacity-100"
      aria-label="Go back to previous page"
      @click="router.back()"
    >
      Go Back ..
    </button>
  </slot>
</template>