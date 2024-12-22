<script lang="ts" setup></script>

<template>
  <div>
    <AppNavbar />
    <HomeHeaderSection />
    <main class="ma max-w-5xl of-x-hidden px-7 py-10 min-h-dvh md:px-0">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
