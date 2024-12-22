<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { proseHeadingClick } from '~/utils/proseHeading'

defineProps<{
  links: TocLink[]
  activeId?: string
  isNested?: boolean
}>()
</script>

<template>
  <nav
    v-if="links?.length"
    :aria-label="isNested ? undefined : 'Table of contents'"
    class="opacity-40 transition-opacity duration-200 hover:opacity-100"
    :class="[
      isNested ? 'ml-4 mt-2.5' : 'sticky top-24',
    ]"
  >
    <!-- Only show heading for root TOC -->
    <h2 v-if="!isNested" class="mb-4 text-sm text-gray-12 font-semibold">
      On this page
    </h2>

    <ul class="text-sm space-y-2.5">
      <li
        v-for="link in links"
        :key="link.id"
        class="leading-normal"
      >
        <a
          :href="`#${link.id}`"
          class="block transition-all duration-200"
          :class="[
            'text-gray-11 hover:text-gray-12',
            {
              'text-gray-12 font-medium transform translate-x-1': activeId === link.id,
              'pl-4': link.depth === 3,
              'pl-6': link.depth === 4,
              'font-medium': link.depth === 2,
            },
          ]"
          @click="proseHeadingClick($event, link.id)"
        >
          {{ link.text }}
        </a>
        <Toc
          v-if="link.children?.length"
          :links="link.children"
          :active-id="activeId"
          :is-nested="true"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  scrollbar-width: none;
  will-change: opacity;
}

nav::-webkit-scrollbar {
  display: none;
}

a {
  transform-origin: left;
}
</style>
