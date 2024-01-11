import type { Repo } from '../../types'

export default defineEventHandler(async() => {
  const data = await $fetch<Repo[]>('https://api.github.com/users/TeshaneCrawford/repos?per_page=100&type=owner&sort=updated')

  const publicRepos = data.filter(repo => !repo.private && !repo.archived)
  const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork)

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
  }

  return repoGroups
})

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key))
}