<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  status?: {
    title: string
    description: string
  }
}>()
</script>

<template>
  <section class="flex justify-center flex-col gap-2">
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-7xl text-center mb-8">{{ title }}</h1>
    <p class="flex justify-center text-xs sm:text-base">
      <span>
        Software Engineer
      </span><span class="mx-2 font-black" >.</span>
      <span>
        Programmer
      </span><span class="mx-2 font-black" >.</span>
      <span>
        Problem Solver
      </span>
    </p>
    <p class="text-center mt-4 text-lg">{{ description }}</p>
    <div class="mt-3 flex items-center justify-center">
      <AvailabilityStatus
background
       />
    </div>
    <div class="flex justify-center flex-wrap sm:flex-nowrap">
      <UButton
        class="mt-4 dark:bg-gray-300 dark:hover:bg-gray-200"
        size="xl"
        color="black" variant="solid"
        :ui="{
          font: 'font-semibold'
        }"
        :label="'Contact Me&nbsp;&nbsp;💬'"
        to="/chat"
        target="_blank"
      />
      <UButton
        class="mt-4 ml-4 "
        size="xl"
        color="gray" variant="solid"
        :label="'My work'"
        :icon="'i-ri-briefcase-2-fill'"
        to="/projects"
      />
    </div>
  </section>
</template>

<style scoped>
</style>
