<script lang="ts" setup>
defineProps<{
  code: string
}>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <ClientOnly>
    <button v-if="isSupported" class="group/copy opacity-0 group-hover:opacity-100 absolute right-2 bottom-2 p-1 backdrop-blur bg-white/90 dark:bg-gray-800/90 rounded-sm transition w-8 h-8 flex justify-center items-center" @click="copy(code)">
      <span v-if="copied" class="sr-only">Copy to clipboard</span>
      <Transition
        appear
        mode="out-in"
        enter-active-class="duration-150 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="copied" class="i-heroicons-check-solid group-hover/copy:text-gray-400 dark:group-hover/copy:text-gray-300 transition ease-in" />
        <div v-else class="i-heroicons-clipboard-document group-hover/copy:text-gray-400 dark:group-hover/copy:text-gray-300 transition ease-in" />
      </Transition>
    </button>
  </ClientOnly>
</template>

<style scoped></style>
