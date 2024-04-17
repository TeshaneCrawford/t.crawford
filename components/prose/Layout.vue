<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import type { Method } from '~/types/methods'

defineProps<{
  title?: string
  date?: string
  toc: Toc
  filename: string
  methods?: Method[]
}>()
</script>

<template>
   <article class="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-6">
    <div class="xl:col-start-2 max-w-prose mx-auto w-full">
      <ProseContentHeader
        :title="title"
        :date="date"
      />
      <UDivider class="mt-8" />
    </div>

    <ProseContentBody class="xl:col-start-2 mx-auto">
      <slot />
    </ProseContentBody>

    <div class="max-w-prose mx-auto w-full row-start-2 xl:row-start-1 xl:row-span-2 xl:col-start-3">
      <ProseNav :toc="toc" :filename="filename" :methods="methods" class="xl:sticky xl:top-[5.5rem] xl:overflow-y-auto xl:max-h-[calc(100vh-5.5rem)]" />
      <UDivider class="xl:hidden mt-6" />
    </div>
  </article>
</template>

<style scoped></style>
