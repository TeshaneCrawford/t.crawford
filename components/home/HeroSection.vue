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
  icon: 'i-twemoji-rocket'
},
{
  label: 'Tech Enthusiast',
  icon: 'i-twemoji-technologist'
},
{
  label: 'Problem Solver',
  icon: 'i-twemoji-gear',
},
]
</script>

<template>
  <section class="flex justify-center flex-col gap-5">
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-6xl text-center">{{ title }}</h1>
    <sapn class="flex justify-center">
      <UBreadcrumb
      :ui="{
        ol: 'gap-x-6'
      }" :links="subtileLinks" />
    </sapn>
    <p class="text-center">{{ description }}</p>
    <div class="flex justify-center">
      <UButton
        class="mt-4 dark:bg-gray-300 dark:hover:bg-gray-200"
        size="lg"
        color="black" variant="solid"
        :ui="{
          font: 'font-semibold'
        }"
        :label="'Contact Me'"
        :icon="'i-line-md-email'"
      />
      <UButton
        class="mt-4 ml-4 dark:bg-gray-700/10 dark:hover:bg-gray-700/20"
        size="lg"
        color="gray" variant="solid"
        :label="'My GitHub'"
        :icon="'i-line-md-github'"
      />
    </div>
  </section>
</template>

<style scoped></style>
