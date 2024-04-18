<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-16">
        <div
          v-if="title || description || $slots.title
            || $slots.description" class="flex flex-col gap-4"
        >
          <AppPageTitle>
            <slot name="title">
              {{ title }}
            </slot>
          </AppPageTitle>
          <p class="max-w-4xl text-gray-500 dark:text-gray-400 font-mono">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
