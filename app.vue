<script setup lang="ts"></script>

<template>
<body class="text-gray-700 font-sans antialiased dark:text-gray-200">
  <div>
    <NuxtLoadingIndicator />
    <NuxtPwaManifest />
    <AppNavbar />
    <main class="overflow-x-hidden px-7 py-10 min-h-dvh">
      <NuxtPage />
    </main>
    <AppFooter class="relative ml-7" />
  </div>
</body>
</template>

<style scoped>
</style>