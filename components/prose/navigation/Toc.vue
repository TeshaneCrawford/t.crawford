<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import { NuxtLink } from '#components'

defineProps<{
  toc: Toc
}>()

const { activeHeadings } = useScrollSpyHeadings()

function isActive(id: string) {
  return activeHeadings.value.includes(id)
}
</script>

<template>
  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-2">
    <li v-for="link in toc.links" :key="link.id">
      <ProseNavigationGroupItem :is="NuxtLink" :to="`#${link.id}`" class="block" :class="isActive(link.id) ? 'text-sky-500 dark:text-sky-400!' : ''">
        {{ link.text }}
      </ProseNavigationGroupItem>
      <template v-if="link.children">
        <ul class="ml-2 pl-4 my-2 border-l border-gray-300 dark:border-gray-700 space-y-2">
          <li v-for="child in link.children" :key="child.id">
            <ProseNavigationGroupItem :is="NuxtLink" :to="`#${child.id}`" class="block" :class="isActive(child.id) ? 'text-sky-500 dark:text-sky-400!' : ''">
              {{ child.text }}
            </ProseNavigationGroupItem>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<style scoped></style>
