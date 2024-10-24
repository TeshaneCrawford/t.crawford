<script setup lang="ts">
import type { PropType } from 'vue'
import type { BuiltinLanguage } from 'shiki'

 defineProps({
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
  highlights: {
    type: Array as PropType<number[]>,
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
  style: {
    type: [String, Object] as PropType<string | Record<string, string>>,
    default: null,
  },
  inGroup: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <ProseCode
    :code="code"
    :language="language"
    :filename="filename"
    :highlights="highlights"
    :meta="meta"
    :in-group="inGroup"
  >
  <pre
      :class="$props.class"
      :style="style"
    ><slot /></pre>
  </ProseCode>
</template>

<style scoped>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>