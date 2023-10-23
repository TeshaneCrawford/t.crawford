import type { Repo } from '../../types'

export default defineEventHandler(async() => {
  const data = await $fetch<Repo[]>('https://api.github.com/users/TeshaneCrawford/repos?per_page=100&type=owner&sort=updated')

  const publicRepos = data.filter(repo => !repo.private && !repo.archived)
  const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork)

  const repoGroups: Record<string, Repo[]> = {
    'Vue Ecosystem': filterRepos(publicAndNotForkRepos, 'vue'),
    'Apps': filterRepos(publicAndNotForkRepos, 'apps'),
    'Angular': filterRepos(publicAndNotForkRepos, 'angular'),
    'React': filterRepos(publicAndNotForkRepos, 'react'),
    'Mobile': filterRepos(publicRepos, 'mobile'),
    'UI': filterRepos(publicRepos, 'ui'),
    'C#': filterRepos(publicAndNotForkRepos, 'c#'),
    'Library': filterRepos(publicAndNotForkRepos, 'library'),
    'Templates': filterRepos(publicAndNotForkRepos, 'template'),
    'All': publicAndNotForkRepos,
  }

  return repoGroups
})

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key))
}