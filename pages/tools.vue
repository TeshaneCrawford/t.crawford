<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import tools from '~/composables/toolPage';

useTitle('Tools | Teshane Crawford')
useHead({
  title: 'Tools | Teshane Crawford',
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
  <div class="prose ma">
    <PageHeader title="Tools"
      description="In case you're wondering what tech I use, here's a current list of the most common. This list is always changing as I grow." />
    <div v-for="(tool, index) in tools.toolsData" :key="index">
      <h2>
        {{ tool.title }}
      </h2>
      <div grid grid-cols-3 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6>
      <div v-for="(value) in tool.toolData" 
      class="relative flex flex-col gap-3 items-center justify-center bg-transparent p-8 border border-gray-2 hover:border-gray-400 dark:hover:border-neutral-600 rounded-md transition-all lg:hover:!scale-110 active:!scale-80 hover:z-10 hover:origin-center text-gray-700 hover:text-black dark:text-gray-300/80 dark:hover:text-white"
      >
        <NuxtLink v-if="value.link" :to="value.link" target="_blank" :title="value.label"
        >
          <icon v-if="value.icon" :name="value.icon" w-2.1em h-2.1em/>
          <p class="absolute text-[10px] select-none">
            {{ value.name }}
          </p>
        </NuxtLink>
        <!-- <div v-if="value.link" class="font-light">
          <a :href="value.link" target="_blank" rel="noopener noreferrer">
            {{ value.link }}
          </a>
        </div> -->
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
