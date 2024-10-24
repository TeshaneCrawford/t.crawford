<script lang="ts" setup>
withDefaults(defineProps<{
  link?: string;
}>(), {
  link: '/home',
});

// inspired by Lukas Guschlbauer's <https://www.der-lukas.net>
</script>

<template>
  <div
    class="size-full bg-#0a0a0b px-20 py-10 text-#e6e6e6 tracking-tight"
  >
    <div class="size-full justify-end">
      <h1 class="w-500px text-100px/[1] font-600 tracking-tighter">
        Teshane Crawford
      </h1>

      <div class="my-4 block b-(t-1 #939395/50)" />

      <div class="flex flex-nowrap items-center justify-between text-8/[1]">
        <p>Software Engineer</p>
        <p>{{ link }}</p>
      </div>
    </div>

    <div class="absolute right-16 top-16">
      T. Crawford
    </div>
  </div>
</template>

<style scoped></style>
