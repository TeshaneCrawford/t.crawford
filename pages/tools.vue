<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import tools from '~/composables/toolPage';

useTitle('Tools')
useHead({
  title: 'Tools',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'List of tech and tools I use to solve problems on a daily.',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'tools, tech, github, open source, vue, nuxt, angular, react, nest, node, javascript, typescript, c#, csharp, dotnet, .net, asp.net, asp.net core, kotlin, android',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="ma prose">
      <PageHeader
        title="Tools"
        description="In case you're wondering what tech I use, here's a current list of the most common. This list is always changing as I grow."
      />
      <div v-for="(tool, index) in tools.toolsData" :key="index">
        <h2>
          {{ tool.title }}
        </h2>
        <div flex flex-col gap-14>
          <div grid grid-cols-3 mt-5 gap-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6>
            <div
              v-for="(value, idx) in tool.toolData" :key="idx" b="~ black op-10" dark-b="white op-10" rounded-md px-8 pt-6 shadow-sm trans
              hover="bg-gray bg-op-3"
              class="flex flex-col items-center justify-center transition-all hover:z-10 hover:origin-center active:!scale-80 lg:hover:!scale-110"
            >
              <NuxtLink v-if="value.link" :to="value.link" target="_blank" :title="value.label" class="flex items-center">
                <icon v-if="value.icon" :name="value.icon" h-2.1em w-2.1em />
              </NuxtLink>
              <p class="select-none text-center text-[10px]">
                {{ value.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <p>
        <span class="font-bold">Note:</span> This page is a work in progress. I'll be adding more tools as I go.
        <br>
        Last updated on <span>{{ tools.lastUpdate }}</span>.
      </p>
      <br>
      <BackButton />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
