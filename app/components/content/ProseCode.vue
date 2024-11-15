<script setup lang="ts">
import { type PropType, ref } from 'vue'
import type { BuiltinLanguage } from 'shiki'
import { useClipboard, onClickOutside } from '@vueuse/core'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  inGroup: {
    type: Boolean,
    default: false,
  },
  highlights: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
})

const config = useConfig()
const iconMap = computed(() => new Map(Object.entries(config.value?.iprose?.codeIcon || {})))
const icon = computed(() =>
  iconMap.value.get(props.filename?.toLowerCase()) ||
  iconMap.value.get(props.language?.toLowerCase() || '')
)

const hovered = ref(false)
const copyButtonRef = ref<HTMLButtonElement | null>(null)
const state = ref<'init' | 'copied'>('init')

const { copy: copyToClipboard } = useClipboard({ legacy: true })

async function copy() {
  try {
    await copyToClipboard(props.code)
    state.value = 'copied'
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Couldn\'t copy to clipboard!', err)
  }
}

onClickOutside(copyButtonRef, () => {
  if (state.value === 'copied') {
    state.value = 'init'
  }
})
</script>

<template>
  <div
    class="prose-code mt-2 overflow-hidden border border-neutral-300/40 rounded-md bg-neutral-50 dark:border-neutral-300/10 dark:bg-black/50"
  >
    <div
      v-if="!inGroup && filename"
      class="group relative overflow-hidden font-mono"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <div class="flex items-center border-b border-neutral-300/40 px-4 py-3 text-sm dark:border-neutral-300/10">
        <Icon
          v-if="icon"
          :name="icon"
          class="mr-2 h-4 w-4 text-neutral-600 dark:text-neutral-400"
        />
        <span class="text-neutral-600 dark:text-neutral-400">
          {{ filename }}
        </span>

        <button
          ref="copyButtonRef"
          class="ml-auto transition-opacity duration-100"
          :class="[(hovered || state === 'copied') ? 'opacity-100' : 'opacity-0']"
          @click="copy"
        >
          <span class="sr-only">Copy to clipboard</span>
          <span class="h-6 w-6 flex items-center justify-center rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Transition name="fade">
              <UnoIcon
                v-if="state === 'copied'"
                class="icon i-hugeicons-tick-01 h-4 w-4 text-green-500"
              />
              <UnoIcon
                v-else
                class="icon i-hugeicons-copy-01 h-4 w-4 text-neutral-500 dark:text-neutral-400"
              />
            </Transition>
          </span>
        </button>
      </div>

      <slot />
    </div>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(pre) {
  @apply bg-white dark:bg-[#0f0f0f];
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  @apply rounded-t-none;
}

:deep(pre code) {
  @apply font-mono text-sm;
  padding: 0;
  background: none;
  /* overflow-x: auto; */
  /* @apply flex flex-col overflow-auto */
}

:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}

/* .prose-code {
  max-width: 100%;
  width: 100%;
} */
</style>