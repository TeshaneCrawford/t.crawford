<script lang="ts" setup></script>

<template>
  <div class="w-full prose dark:prose-invert prose-zinc">
    <slot />
  </div>
</template>

<style scoped>
div> :deep(*> :first-child) {
  margin-top: 0;
}
</style>
