<script lang="ts" setup>
const items = [{
  key: 'showcase',
  label : 'Showcase',
  description: 'Selected projects',
}, {
  key: 'gitHub',
  label: 'GitHub',
  description: 'Highlighted github repositories'
}]
</script>

<template>
  <UTabs :items="items">
    <template #item="{ item }">
      <div v-if="item.key === 'showcase'">
        <ProjectCard />
      </div>

      <div v-else-if="item.key === 'github'">
        <ProjectGitHubPanel />
      </div>
    </template>
  </UTabs>
</template>

<style scoped></style>
