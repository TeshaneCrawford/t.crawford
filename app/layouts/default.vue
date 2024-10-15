<script lang="ts" setup></script>

<template>
  <div>
    <AppNavbar />
    <main class="ma of-x-hidden px-7 py-10 prose md:px-0">
      <slot />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped></style>
