<template>
  <code
    role="text"
    class="mx-1px rounded-md bg-sky-50 px-[0.375rem] py-[0.2rem] text-sky-500 font-400 font-mono transition-colors duration-200 dark:bg-sky-950 dark:text-sky-400 after:content-[''] before:content-['']"
  >
    <slot />
  </code>
</template>

<style scoped>
a code {
  border-width: 1px;
  border-style: dashed;
  border-color: theme('colors.sky.500');
  transition: all 200ms ease;
}

a:hover code {
  color: theme('colors.sky.600');
  border-style: solid;
  border-color: theme('colors.sky.600');
}

.dark a code {
  border-color: theme('colors.sky.400');
}

.dark a:hover code {
  color: theme('colors.sky.300');
  border-color: theme('colors.sky.300');
}
</style>
