<script lang="ts" setup>
import projects from '~/data/projects'

defineProps<{
  projecttitle?: string;
}>();


</script>

<template>
    <HomeSection
      :title="projecttitle || 'Projects'"
    >
    <div class="flex w-full flex-col gap-4">
    <NuxtLink
      v-for="project in projects.filter((projects) => projects.featured)"
      :key="project.name"
      class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary hover:text-main"
      :to="project.release === 'soon' ? '/' : project.link"
      :aria-label="project.name + ' project link'"
      :target="project.release === 'soon' ? '_self' : '_blank'"
    >
      <span class="whitespace-nowrap">
        {{ project.name }}
      </span>
      <div class="mx-2 h-[0.1px] w-full bg-muted" />
      <span class="whitespace-nowrap text-muted">
        {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
      </span>
    </NuxtLink>
    <div class="mt-4">
      <button
        class="btn-primary"
        @click="useRouter().push('/projects')"
      >
      <span class="text-white-shadow font-semibold cursor-pointer ">
        {{ $t("global.see_more") }}
      </span>
      </button>
    </div>
  </div>
  </HomeSection>
</template>

<style scoped></style>
