import { fetchUserRepos } from '../utils/github'
import type { Repo } from '~~/types/project'

export default defineCachedEventHandler(async () => {
  const data = await fetchUserRepos()

  const repos = data as unknown as Repo[]

  const publicRepos = repos.filter(repo => !repo.private && !repo.archived)
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
}, {
  group: 'github',
  name: 'repos-grouped',
  getKey: () => 'github-repos-grouped',
  swr: true,
  maxAge: 60 * 5, // 5 minutes
})

function filterRepos(repos: Repo[], key: string) {
  return repos.filter(repo => repo.topics && repo.topics.includes(key))
}
