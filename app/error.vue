<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({
      statusCode: 500,
      message: 'An error occurred',
    }),
  },
})

const errorState = useError()
const position = ref({ x: 50, y: 50 })
const isHovering = ref(false)

// Move the error text randomly when user hovers, but keep it within bounds
const handleHover = () => {
  if (!isHovering.value) {
    isHovering.value = true
    position.value = {
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
    }
    setTimeout(() => isHovering.value = false, 1)
  }
}

// Clear error and return to home page
const handleError = () => {
  clearError()
  navigateTo('/')
}

useSeoMetaConfig({
  title: 'Error',
  description: 'An error occurred while rendering the page.',
})

definePageMeta({
  title: 'Error',
})

defineOgImageComponent('PageOg', {
  link: '/error',
})

useSeoMeta({
  ogTitle: 'Error',
  ogDescription: 'An error occurred while rendering the page.',
  twitterTitle: 'Error',
  twitterDescription: 'An error occurred while rendering the page.',
  twitterCard: 'summary_large_image',
})

useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-neutral-6 dark:text-neutral-2',
  },
})
</script>

<template>
  <NuxtLayout name="error">
    <main class="flex flex-col items-center justify-center p-4">
      <!-- Animated 404 -->
      <div
        ref="errorText"
        class="cursor-pointer select-none text-8xl text-neutral-6 font-bold transition-all duration-2 dark:text-neutral-2"
        :style="{
          position: 'relative',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }"
        @mouseenter="handleHover"
      >
        {{ errorState?.statusCode }}
      </div>

      <!-- Error text -->
      <div class="mt-8 text-center">
        <h1 class="mb-8 animate-pulse text-5xl text-neutral-6 font-bold font-serif dark:text-neutral-3">
          {{ errorState?.statusCode === 404 ? 'Oops! This page is playing hide and seek' : 'Uh oh! Something went wrong' }}
        </h1>
        <p class="mb-12 text-neutral-6 dark:text-neutral-3">
          {{ errorState?.message || (errorState?.statusCode === 404 ? 'Try to catch the 404 above! (Spoiler: It\'s quite shy)' : 'Our team is on it!') }}
        </p>

        <div class="flex items-center justify-center gap-4">
          <Icon name="i-hugeicons:search-02" class="animate-bounce text-neutral-5" />
          <p class="text-neutral-5 font-serif italic">
            Still searching for that page...
          </p>
        </div>
      </div>

      <button
        class="mt-12 flex items-center gap-2 text-neutral-5 underline-offset-6 transition-colors dark:text-neutral-4 hover:underline dark:hover:text-neutral-3"
        as="link"
        @click="handleError"
      >
        <Icon name="i-hugeicons:arrow-left-04" />
        Take Me Home
      </button>
    </main>
  </NuxtLayout>
</template>

<style scoped>
/* .animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 1% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
} */
</style>
