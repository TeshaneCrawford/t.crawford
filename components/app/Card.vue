<script lang="ts" setup>
defineProps<{
  to?: string
  title?: string
  description?: string
  date?: string
}>()
</script>

<template>
  <UCard as="blog" :ui="{ base: 'group relative overflow-visible flex flex-col', shadow: '', background: 'bg-white dark:bg-gray-900', divide: 'divide-none', ring: 'ring-0', body: { padding: 'py-0 px-0 sm:p-0 !pt-2' }, header: { base: 'flex flex-col', padding: '' } }">
    <template #header>
      <div
        class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50 sm:-inset-x-6 sm:rounded-2xl duration-200 ease-in"
      />
      <h2 class="font-semibold">
        <NuxtLink :to="to">
          <span class="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20 sm:rounded-2xl" />
          <span class="relative">
            {{ title }}
          </span>
        </NuxtLink>
      </h2>
      <dl v-if="date" class="order-first pb-2 relative text-gray-500 dark:text-gray-400">
        <dt class="sr-only">
          Date of publication
        </dt>
        <dd>
          <time :datetime="ISODate(date)">
            {{ formatDate(date) }}
          </time>
        </dd>
      </dl>
    </template>

    <p class="relative text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </UCard>
</template>

<style scoped></style>
