<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="lg:px-0 md:px-8">
    <div class="">
      <div class="mx-auto max-w-2xl flex flex-col gap-16 lg:max-w-5xl">
        <div
          v-if="title || description || $slots.title || $slots.description"
          class="flex flex-col gap-4"
        >
          <AppTitle>
            <slot name="title">
              {{ title }}
            </slot>
          </AppTitle>
          <p class="max-w-4xl text-sm text-gray-11 font-mono sm:text-base">
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
