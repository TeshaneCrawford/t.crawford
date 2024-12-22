<script lang="ts" setup>
withDefaults(defineProps<{
  title: string
  subtitle?: string
}>(), {
  title: 'Blog',
  subtitle: '',
})
</script>

<template>
  <div
    class="size-full bg-#0a0a0b px-20 py-10 text-#e6e6e6 tracking-tight"
    style="
      background-image: linear-gradient(45deg, #ff2e2e00 80%, #ff2e2e41 125%);
    "
  >
    <div class="size-full justify-end">
      <h1 class="w-600px text-balance text-52px/[1.15] font-600">
        {{ title }}
      </h1>

      <p class="w-600px text-balance text-10/[1.15]">
        {{ subtitle }}
      </p>

      <div class="my-4 block b-(t-1 #939395/50)" />

      <div class="flex flex-nowrap items-center justify-between text-8/[1]">
        <p>Teshane Crawford</p>
        <p>/blog</p>
      </div>
    </div>

    <div class="absolute right-16 top-16">
      T. Crawford
    </div>
  </div>
</template>

<style scoped></style>
