<template>
  <div>
    <BackgroundCanvas />
    <AppNavbar />
    <main class="ma of-x-hidden py-10 min-h-dvh">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
