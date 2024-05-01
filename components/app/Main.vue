<script lang="ts" setup></script>

<template>
  <main class="min-h-[calc(100vh-4rem)] py-4 md:py-4">
    <div v-if="$slots.header" class="mb-8 lg:mb-16">
      <slot name="header" />
    </div>

    <slot />
  </main>
</template>

<style scoped></style>
