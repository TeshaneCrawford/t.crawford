<script lang="ts" setup>
import type { Toc } from '@nuxt/content'

const toc = inject<Toc>('toc')

const { activeHeadings } = useScrollSpyHeadings()

function activeClass(id: string): string {
  return activeHeadings.value.includes(id) ? '!dark:text-primary !text-primary-600' : '' // Important to override text-zinc-900
}
</script>

<template>
  <ProseNavigationGroup icon="i-heroicons-bars-3-solid">
    <template #title>
      <h3 class="text-neutral-700 dark:text-neutral-400">
        Table of Content
      </h3>
    </template>
    <template #links>
      <ol
        v-if="toc"
        class="text-neutral-500 dark:text-neutral-400"
      >
        <li
          v-for="link in toc.links"
          :key="link.id"
        >
          <ProseNavigationGroupLink
            :to="`#${link.id}`"
            :class="activeClass(link.id)"
          >
            {{ link.text }}
          </ProseNavigationGroupLink>
          <ol
            v-if="link.children"
            class="ml-4 text-neutral-500 dark:text-neutral-400"
          >
            <li
              v-for="child in link.children"
              :key="child.id"
            >
              <ProseNavigationGroupLink
                :to="`#${child.id}`"
                :class="activeClass(child.id)"
              >
                {{ child.text }}
              </ProseNavigationGroupLink>
            </li>
          </ol>
        </li>
      </ol>
    </template>
  </ProseNavigationGroup>
</template>

<style scoped></style>
