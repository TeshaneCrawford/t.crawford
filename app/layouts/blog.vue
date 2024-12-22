<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <AppNavbar />
    <HomeHeaderSection />
    <div class="max-w-8xl px-4">
      <div class="mx-auto max-w-[90rem]">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped></style>
