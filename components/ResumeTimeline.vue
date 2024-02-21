<script lang="ts" setup>
import {NuxtLink} from '#components'

interface TimelineItem {
  title: string
  icon: string
  company: any
  description: string
  date: string
  location: string
}

defineProps<{
  title: string
  icon?: string | object
  items?: TimelineItem[]
}>()
</script>

<template>
  <div>
    <ol ml8>
      <li
        v-for="item, index in items"
        :key="`${index}-${item.company?.text ?? item.company}`"
        class="timeline-item w-md" text-xs
      >
        <h3 mt2 text-base text-lg font-bold line-height-none>
          <Icon v-if="item.icon" :name="item.icon" :class="{ 'rotate-180 filter-saturate-500': item.title === 'Persian' }" mr1 mt--1 />
          {{ item.title }}
          <br>
        </h3>
        <div class="icon-xs text-base-light" flex="~ col gap-2" mt-4>
          <component
            :is="typeof item.company?.link === 'string' ? NuxtLink : 'p'"
            v-if="item.company" :href="item.company?.link"
            :class="[{ 'prose-a': typeof item.company?.link === 'string' }]"
            target="_blank" flex="~ gap-1 items-center"
          >
            <Icon name="carbon:building" />
            {{ typeof item.company?.text === 'string' ? item.company?.text : item.company }}
          </component>
          <p v-if="item.date" flex="~ gap-1 items-center">
            <Icon name="carbon:calendar" />
            {{ item.date }}
          </p>
          <p v-if="item.location" flex="~ gap-1 items-center">
            <Icon name="carbon:location" />
            {{ item.location }}
          </p>
          <p v-if="item.description">
            <span ml2>
              -
            </span>
            {{ item.description }}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
