<script lang="ts" setup></script>

<template>
  <div>
    <AppNavbar />
    <main class="px-7 py-10 of-x-hidden">
      <slot />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped></style>
