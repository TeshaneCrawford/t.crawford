<script lang="ts" setup>
import type { Toc } from '@nuxt/content'

const props = defineProps<{
  title?: string
  toc?: Toc
}>()

provide('toc', props.toc)
</script>

<template>
  <article class="grid grid-cols-1 items-start gap-y-12 md:grid-cols-[70%_1fr] xl:grid-cols-[75%_1fr] md:gap-x-8 md:gap-y-0">
    <div class="row-start-1">
      <slot name="header">
        <header v-if="title">
          <h1 class="text-neutral-950 dark:text-neutral-50">
            {{ title }}
          </h1>
        </header>
      </slot>
    </div>

    <ProseContent
      class="col-start-1 row-start-3 md:row-start-2"
      :class="{ 'md:mt-8': title || $slots.header }"
    >
      <slot />
    </ProseContent>

    <ProseNav class="neutral-scrollbar top-4 col-start-1 row-start-2 md:sticky md:row-span-2 md:col-start-2 md:row-start-1 md:max-h-[calc(100vh-1rem)] md:overflow-y-auto">
      <ProseNavigationToc v-if="toc" />

      <slot name="nav" />
    </ProseNav>
  </article>
</template>

<style scoped></style>
