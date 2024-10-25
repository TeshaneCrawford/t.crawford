<script setup lang="ts">
import type { User } from '~~/types/github'
const { data: userData } = await useFetch<User>('/api/github-user')
// const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <div lg:px-0 md:px-8>
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
      <span class="flex items-center gap-1 op50 lt-md:hidden">
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
          <span font-mono>@{{ userData?.username }}</span>'s recent commits on GitHub
        </a>
      </p>
    </div>
    <div class="prose max-w-4xl!">
      <p class="mb-8 leading-12">
        <StaticMarkdownRender path="/home" />
      </p>
      <div class="flex flex-col justify-between sm:flex-row">
        <div class="flex flex-1 gap-8">
          <NuxtLink to="/blog" class="flex items-center gap-1 badge-lg-zinc dark:badge-lg-zinc">
            Blog
            <Icon name="i-hugeicons:arrow-right-02" />
          </NuxtLink>
          <NuxtLink to="/photos" class="flex items-center gap-1 badge-lg-zinc dark:badge-lg-zinc">
            Photos
            <Icon name="i-hugeicons:arrow-right-02" />
          </NuxtLink>
        </div>
      </div>
      <AppPageSeparator text="My core skillset" />
      <AppSkills />
    </div>
  </div>
</template>

<style scoped></style>
