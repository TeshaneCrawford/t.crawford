<!--
  Credit: Adapted from https://github.com/zyyv/zyyv.dev/blob/main/app/components/ProseHeading.vue
-->
<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'
import { proseHeadingClick } from '~/utils/proseHeading'

// @unocss-skip-start
const props = defineProps<{
  id?: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
}>()
// @unocss-skip-end

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && (
  (typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true)
  || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.[props.tag])),
)
</script>

<template>
  <component
    :is="props.tag"
    :id="props.id"
    :class="[
      'group pr text-op-90',
      props.size ? `text-${props.size}` : 'text-sm',
    ]"
  >
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      text-inherit
      @click="proseHeadingClick($event, props.id)"
    >
      <slot />
    </a>
    <slot v-else />
    <span
      v-if="props.id && generate"

      trans
      fcc
      bg-primary:10
      pyc
      left--7
      size-5
      cursor-pointer
      rd
      pa
      op-0
      group-hover:op-100
      @click="proseHeadingClick($event, props.id)"
    >
      <Icon name="i-hugeicons-link-01" text-sm />
    </span>
  </component>
</template>
