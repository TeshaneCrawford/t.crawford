<script setup lang="ts"></script>

<template>
  <div class="max-w-none prose" :class="$style.prose">
    <slot />
  </div>
</template>

<style module>
.prose {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
