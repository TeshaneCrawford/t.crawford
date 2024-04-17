<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import type { Method } from '~/types/methods'
import { NuxtLink } from '#components'

const props = defineProps<{
  filename: string
  methods?: Method[]
  toc: Toc
}>()

const github = usePortfolio().value.github

const communityLinks = [
  {
    name: 'Like on GitHub',
    to: 'https://github.com/TeshaneCrawford/t.crawford',
    class: 'i-line-md-star-alt-twotone'
  },
  {
    name: 'Edit Page',
    to: `https://github.com/${github.owner}/edit/${github.branch}/content/${props.filename}`,
    class:'i-line-md-edit-twotone'
  },
  {
    name: 'Follow on X',
    to: 'https://x.com/_d_shybrid',
    class: 'i-line-md-twitter-x'
  }
]
</script>

<template>
  <nav class="space-y-6 divide-y divide-gray-200 dark:divide-gray-800">
    <ProseNavigationGroup icon="i-heroicons-list-bullet-20-solid">
      <template #title>
        Sommaire
      </template>
      <ProseNavigationToc :toc="toc" />
    </ProseNavigationGroup>
    <ProseNavigationGroup v-if="methods" class="pt-6" icon="i-heroicons-inbox-20-solid">
      <template #title>
        Resources
      </template>
      <div class="space-y-2">
        <ProseNavigationGroupItem :is="NuxtLink" v-for="method in methods" :key="method.name" :to="method.url" target="_blank" rel="noopener" class="flex items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4" :class="method.icon" />
            {{ method.name }}
          </div>
          <div class="i-heroicons-arrow-up-right-20-solid w-3 h-3" />
        </ProseNavigationGroupItem>
      </div>
    </ProseNavigationGroup>
    <ProseNavigationGroup class="pt-6" icon="i-ri-team-fill">
      <template #title>
        Community
      </template>
      <div class="space-y-2">
        <ProseNavigationGroupItem :is="NuxtLink" v-for="link in communityLinks" :key="link.name" :to="link.to" target="_blank" rel="noopener" class="flex items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4" :class="link.class" />
            {{ link.name }}
          </div>
          <div class="i-ri-arrow-right-up-line w-3 h-3" />
        </ProseNavigationGroupItem>
      </div>
    </ProseNavigationGroup>
  </nav>
</template>

<style scoped></style>
