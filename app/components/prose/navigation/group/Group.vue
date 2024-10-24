<script lang="ts" setup>
defineProps<{
  noDisclosure?: boolean
  icon?: string
}>()

const open = ref(false)

const id = useProseNavGroupId()
</script>

<template>
  <div class="text-sm">
    <div class="text-neutral-950 font-semibold dark:text-neutral-50">
      <div class="hidden md:block">
        <slot name="title" />
      </div>
      <!-- eslint-disable-next-line vue/valid-v-on -->
      <button
        v-if="!noDisclosure"
        class="flex items-center gap-2 md:hidden"
        type="button"
        :aria-expanded="open"
        :aria-controls="id"
        @click="open = !open"
      >
        <span
          class="h-4 w-4"
          :class="icon"
        />
        <slot name="title" />
        <span
          class="i-ri-arrow-right-s-line h-4 w-4 transition ease-in"
          :class="{ 'transform rotate-90': open }"
        />
      </button>
    </div>
    <div
      :id="id"
      class="mt-2 text-neutral-500 md:block dark:text-neutral-400"
      :class="{ hidden: !open && !noDisclosure }"
    >
      <slot name="links" />
    </div>
  </div>
</template>

<style scoped></style>
