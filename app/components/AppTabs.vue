<script setup lang="ts">
interface Tab {
  label: string
  id: string
}

interface Props {
  tabs: Tab[]
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const activeTab = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

// Add keyboard navigation support
const handleKeyDown = (event: KeyboardEvent, currentIndex: number) => {
  const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'))
  let newIndex: number

  switch (event.key) {
    case 'ArrowRight':
      newIndex = (currentIndex + 1) % props.tabs.length
      break
    case 'ArrowLeft':
      newIndex = (currentIndex - 1 + props.tabs.length) % props.tabs.length
      break
    default:
      return
  }

  const newTab = props.tabs[newIndex]
  const newButton = tabButtons[newIndex] as HTMLElement

  if (newTab && newButton) {
    activeTab.value = newTab.id
    newButton.focus()
  }
}
</script>

<template>
  <div class="mt-8 w-full">
    <div class="">
      <div class="mb-6">
        <nav class="flex gap-4" aria-label="Tabs">
          <div role="tablist" class="flex gap-4">
            <button
              v-for="(tab, index) in tabs"
              :id="`tab-${tab.id}`"
              :key="tab.id"
              role="tab"
              :aria-selected="activeTab === tab.id"
              :aria-controls="`panel-${tab.id}`"
              :tabindex="activeTab === tab.id ? 0 : -1"
              :class="[
                'py-2 px-1 border-b-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-7 focus-visible:ring-offset-2',
                activeTab === tab.id
                  ? 'border-teal-7 text-teal-11'
                  : 'border-transparent text-gray-11 hover:border-gray-7 hover:text-gray-12',
              ]"
              @click="activeTab = tab.id"
              @keydown="handleKeyDown($event, index)"
            >
              {{ tab.label }}
            </button>
          </div>
        </nav>
      </div>
      <div
        :id="`panel-${activeTab}`"
        class="mt-8"
        role="tabpanel"
        :aria-labelledby="`tab-${activeTab}`"
      >
        <slot :active-tab="activeTab" />
      </div>
    </div>
  </div>
</template>
