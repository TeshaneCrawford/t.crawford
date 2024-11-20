<script setup lang="ts">
interface Tab {
  label: string;
  id: string;
}

interface Props {
  tabs: Tab[];
  modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const activeTab = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <div class="w-full mt-8">
    <div class="">
      <div class="mb-6">
        <nav class="flex gap-4" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'py-2 px-1 border-b-2 text-sm font-medium transition-colors',
              activeTab === tab.id
                ? 'border-teal-400 text-teal-500 dark:text-teal-300'
                : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
      <div class="mt-8">
        <slot :active-tab="activeTab" />
      </div>
    </div>
  </div>
</template>