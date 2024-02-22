<script lang="ts" setup>
const { page: post} = useContent()
</script>

<template>
  <div>
    <AppNavbar />
    <main ma prose>
      <slot />
      <!-- <AppFooter /> -->
    </main>
  </div>
</template>

<style scoped></style>
