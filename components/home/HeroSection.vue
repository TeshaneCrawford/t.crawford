<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  status?: {
    title: string
    description: string
  }
}>()

const subtileLinks = [{
  label: 'Software Engineer',
},
{
  label: 'Tech Enthusiast',
},
{
  label: 'Problem Solver',
},
]
</script>

<template>
  <section class="flex justify-center flex-col gap-2">
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-7xl text-center">{{ title }}</h1>
    <sapn class="flex justify-center">
      <UBreadcrumb
      :ui="{
        ol: 'gap-x-1',
      }" :links="subtileLinks">
      <template #default="{ isActive, link }">
        <span :class="isActive ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'">{{ link.label }}</span>
      </template>
      </UBreadcrumb>
    </sapn>
    <p class="text-center mt-4 text-lg">{{ description }}</p>
    <div class="flex justify-center">
      <UButton
        class="mt-4 dark:bg-gray-300 dark:hover:bg-gray-200"
        size="xl"
        color="black" variant="solid"
        :ui="{
          font: 'font-semibold'
        }"
        :label="'Contact Me'"
        :icon="'i-line-md-email'"
        to="mailto:crawfordteshane@gmail.com"
        target="_blank"
      />
      <UButton
        class="mt-4 ml-4 "
        size="xl"
        color="gray" variant="solid"
        :label="'My GitHub'"
        :icon="'i-line-md-github'"
        to="https:github.com/TeshaneCrawford"
        target="_blank"
      />
    </div>
  </section>
</template>

<style scoped></style>
