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
  <div class="prose ma">
    <PageHeader title="Tools"
      description="In case you're wondering what tech I use, here's a current list of the most common. This list is always changing as I grow." />
    <div v-for="(tool, index) in tools.toolsData" :key="index">
      <h2>
        {{ tool.title }}
      </h2>
      <div flex flex-col gap-14>
        <div grid grid-cols-3 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6>
          <div v-for="(value) in tool.toolData" b="~ black op-10" dark-b="white op-10" rounded-md p-8 shadow-sm trans
            hover="bg-orange bg-op-3" dark-hover="bg-white bg-op-3"
            class="transition-all lg:hover:!scale-110 active:!scale-80 hover:z-10 hover:origin-center">
            <NuxtLink v-if="value.link" :to="value.link" target="_blank" :title="value.label" class="">
              <icon v-if="value.icon" :name="value.icon" w-2.1em h-2.1em />
              <p class="absolute text-[10px] select-none">
                {{ value.name }}
              </p>
            </NuxtLink>
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
</template>

<style scoped></style>
