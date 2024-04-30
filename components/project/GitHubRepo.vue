<script setup lang="ts">
interface Props {
  name: string
  description: string
  star: number
  language: string
  link: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  description: 'no description ',
  star: 0,
  language: 'no language',
  link: '-',
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="overflow-hidden border dark:border-gray-700 shadow rounded-xl"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <Icon name="logos:github-octocat" size="20" />
          <p class="text-xl font-medium">{{ name }}</p>
        </div>
        <p>{{ description }}</p>
      </div>
      <div class="flex items-center gap-x-5">
        <div class="flex space-x-2 items-center">
          <Icon name="heroicons:star" size="20" class="dark:text-cyan-500" />
          <span>{{ star }}</span>
        </div>
        <div class="flex space-x-2 items-center">
          <!-- <Icon name="heroicons:tag" size="20" class="dark:text-cyan-500" /> -->
          <span >
          <div
            class="h-3 w-3 inline-flex rounded-full"
            :style="{ backgroundColor: language ? getLanguageColor(language) : '' }"
          />
          {{ language }}
        </span>
          <!-- <div class="">{{ language }}</div> -->
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
