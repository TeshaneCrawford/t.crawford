<script lang='ts' setup>
import type { Repo } from '~~/types/project'

defineProps<{
  data: Repo[]
  label: string
  loading?: boolean
}>()

const containerMotion = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 400 },
  },
}

const itemMotion = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 300,
      delay: 100,
    },
  },
}
</script>

<template>
  <div
    v-if="data.length || loading"
    v-motion="containerMotion"
    lg:px-0
    md:px-8
  >
    <h3 v-motion="itemMotion" class="my-4 text-xl">
      {{ label }}
    </h3>
    <div
      v-motion
      grid="~ cols-1 md:cols-2 gap-4"
      :initial="{ opacity: 0, y: 20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 150,
          duration: 300,
          stagger: 100,
        },
      }"
    >
      <template v-if="loading">
        <GitHubSkeletonRepo v-for="n in 4" :key="n" />
      </template>
      <template v-else>
        <GitHubGithubRepo v-for="repo in data" :key="repo.id" :repo="repo" />
      </template>
    </div>
  </div>
</template>
