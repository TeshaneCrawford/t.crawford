<script setup lang="ts">
import { getLangIcon } from '~/composables/useConfig'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const { copy, copied } = useClipboard()
const icon = computed(() => getLangIcon(props.language, props.filename))
</script>

<template>
  <div class="code-block group">
    <div v-if="icon" class="code-header">
      <div class="filename-section">
        <Icon :name="icon" class="icon" />
        <span class="filename">{{ filename }}</span>
      </div>
      <div class="copy-container">
        <button
          class="copy-button"
          :title="copied ? 'Copied!' : 'Copy code'"
          @click="copy(code)"
        >
          <Icon
            :name="copied ? 'i-hugeicons-tick-01' : 'i-hugeicons-copy-01'"
            class="copy-icon"
          />
        </button>
      </div>
    </div>
    <pre :class="$props.class"><slot /></pre>
  </div>
</template>

<style>
.code-block {
  border: 1px solid #3333;
  border-radius: 0.375rem;
  overflow: visible; /* Allow header to be visible outside container when sticky */
  margin: 1em 0;
  background: rgba(255, 255, 255, 0.5);
  position: relative; /* Create new stacking context for z-index handling */
  max-height: 80vh; /* Add max height */
  display: flex; /* Enable proper flex layout for scrolling content */
  flex-direction: column;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #3333;
  background: rgba(184, 183, 183, 0.067);
  position: sticky; /* Make header stick when scrolling */
  top: 0;
  z-index: 10; /* Ensure header stays above code content when scrolling */
}

.filename-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.filename {
  font-size: 0.875rem;
  color: inherit;
}

.copy-container {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
}

.copy-button {
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
  opacity: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.group:hover .copy-button {
  opacity: 1;
}

.copy-icon {
  width: 1rem;
  height: 1rem;
}

:is([prose=""], .prose) pre {
  margin: 0;
  border-radius: 0;
  padding: 1rem;
  overflow: auto; /* Enable both horizontal and vertical scrolling */
  max-width: 100%;
  white-space: pre;
  flex: 1; /* Allow pre element to fill available space */
}

pre {
  overflow: auto; /* Enable smooth scrolling in both directions */
  max-height: calc(80vh - 3rem); /* Subtract header height from container max-height */
}

pre code {
  display: inline-block;
  min-width: 100%;
  font-family: monospace;
}

pre code .line {
  display: block;
}

pre code .highlight {
  background: #0001 !important;
}

.dark {
  .code-block {
    background: rgb(46, 45, 45, 0.5);
  }

  .code-header {
    background: #1b1b1b;
    border-bottom: 1px solid rgba(105, 105, 105, 0.2);
  }

  pre code .highlight {
    background: #fff2 !important;
  }
}
</style>
