<script setup lang="ts">
import type { User } from '~~/types/github'
const { data: userData } = await useFetch<User>('/api/github-user')
// const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex flex-row items-center pb-12 space-x-3">
        <a :href="`https://github.com/${userData?.username}`" target="_blank">
          <img :src="userData?.avatar" :alt="userData?.name" mr1 h-18 w-18 rounded-full shadow>
        </a>
        <div v-if="userData?.name" class="flex flex-col">
          <span class="font-semibold font-mono">@{{ userData?.username }}</span>
          <span class="op50">{{ userData?.bio }}</span>
        </div>
      </div>
      <span class="flex items-center gap-1 lt-md:hidden">
        <Icon name="i-hugeicons-location-01" /> {{  userData?.location }}
      </span>
    </div>
    <div flex="~ col">
      <div mb text-3xl>
        <a :href="`https://github.com/${userData?.username}`" target="_blank">
          {{ userData?.name }}
        </a>
        is <span animate-pulse>Coding...</span>
      </div>
      <p flex gap-2 op50>
        <a :href="`https://github.com/${userData?.username}`" target="_blank">
          <span font-mono>@{{ userData?.username }}</span>'s recent releases commits on GitHub
        </a>
      </p>
    </div>
    <div class="prose-container">
      <p class="mb-8 leading-12">
        <StaticMarkdownRender path="/home" />
      </p>
      <div class="flex flex-col justify-between sm:flex-row">
        <div class="flex flex-1 gap-8">
          <NuxtLink to="/blog" class="flex items-center gap-2">
            Blog
            <Icon name="i-hugeicons:square-arrow-right-01" />
          </NuxtLink>
          <NuxtLink to="/photos" class="flex items-center gap-2">
            Photos
            <Icon name="i-hugeicons:square-arrow-right-01" />
          </NuxtLink>
        </div>
        <!-- <NuxtLink to="/photos" class="flex items-center gap-2 font-mono">
          crawfordteshane@gmailcom
          <Icon name="i-hugeicons:copy-01" aria-label="Copy Email Address" />
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
