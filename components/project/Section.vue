<script lang="ts" setup>
import projects from '~/data/projects';
import type { Repo } from '~/types/project';

onMounted(async () => {
  const data = await $fetch<Repo[]>('https://api.github.com/users/TeshaneCrawford/repos?sort=updated');
  const publicRepos = data.filter(repo => !repo.private && !repo.archived);
  const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork);

  const repoGroups: Record<string, Repo[]> = {
    'Angular': filterRepos(publicAndNotForkRepos, 'angular'),
    'Vue Ecosystem': filterRepos(publicAndNotForkRepos, 'vue'),
    'React': filterRepos(publicAndNotForkRepos, 'react'),
    'C#': filterRepos(publicAndNotForkRepos, 'csharp'),
    'TypeScript': filterRepos(publicAndNotForkRepos, 'typescript'),
    'JavaScript': filterRepos(publicAndNotForkRepos, 'javascript'),
    'Python': filterRepos(publicAndNotForkRepos, 'python'),
    'Apps': filterRepos(publicAndNotForkRepos, 'apps'),
    'Mobile': filterRepos(publicRepos, 'mobile'),
    'UI': filterRepos(publicRepos, 'ui'),
    'API': filterRepos(publicAndNotForkRepos, 'api'),
    'Library': filterRepos(publicAndNotForkRepos, 'library'),
    'Templates': filterRepos(publicAndNotForkRepos, 'template'),
    'All': publicAndNotForkRepos,
  };

  repoGroup.value = repoGroups;
});

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key));
}

const repoGroup = ref({} as Record<string, Repo[]>)

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
      <div v-if="item.key === 'showcase'" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
        />
      </div>

      <div v-else-if="item.key === 'gitHub'">
        <ProjectGitHubPanel v-for="(repos, key) in repoGroup" :key="key.toString()" :label="key.toString()" :data="repos" />
      </div>
    </template>
  </UTabs>
</template>

<style scoped></style>
