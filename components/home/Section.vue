<script lang="ts" setup>
const route = useRoute()
defineProps<{
  title?: string;
  route?: string;
}>();
</script>

<template>
  <section class="sm:px-8 lg:px-16 mt-16 sm:mt-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-8">
        <div
          v-if="title || $slots.title
          " class="flex flex-col gap-4"
        >
          <HomeSectionTitle>
            <slot name="title">
              {{ title }}
            </slot>
          </HomeSectionTitle>
        </div>
        <slot />
        </div>
      </div>
  </section>
</template>

<style scoped></style>
