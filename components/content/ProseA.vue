<script setup lang="ts">
const props = defineProps<{
  href: string
  target?: string
  rel?: string
}>()

const whiteList = [
  'teshaneccrawford.live',
  'nuxt.com',
  'github.com',
  'typescriptlang.org',
  'vuejs.org',
  'unocss.dev',
  'tailwindcss.com',
  'vitejs.dev',
  'angular.dev'
]

const rel = computed(() => {
  if (whiteList.some(domain => props.href.includes(domain)))
    return 'noopener'

  return 'noopener noreferrer'
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    :rel="rel"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped></style>
