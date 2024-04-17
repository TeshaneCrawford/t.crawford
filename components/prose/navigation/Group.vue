<script lang="ts" setup>
defineProps<{
  icon?: string
}>()

const open = ref(false)
</script>

<template>
  <div class="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
    <ProseNavigationGroupTitle>
      <button class="xl:hidden flex gap-2 items-center" @click="open = !open">
        <span v-if="icon" class="w-5 h-5" :class="icon" />
        <slot name="title" />
        <span class=" i-ri-arrow-right-s-line h-5 w-5 transition ease-in duration-100" :class="{ 'rotate-90': open, 'rotate-0': !open }" />
      </button>
      <span class="hidden xl:inline">
        <slot name="title" />
      </span>
    </ProseNavigationGroupTitle>
    <div v-if="open" class="xl:hidden">
      <slot />
    </div>
    <div class="hidden xl:block">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
