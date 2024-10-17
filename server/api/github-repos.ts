import type { Repository, RepoGroup } from '~~/types/github'
import { fetchUserRepos } from '../utils/github'

function filterRepos(repos: Repository[], keyword: string): Repository[] {
  return repos.filter(repo =>
    repo.name.toLowerCase().includes(keyword.toLowerCase()) ||
    repo.description?.toLowerCase().includes(keyword.toLowerCase())
  );
}

export default defineCachedEventHandler(async (_event) => {
  const repos = await fetchUserRepos()

  const publicRepos = repos.filter(repo => !repo.private && !repo.archived)
  const publicAndNotForkRepos = publicRepos.filter(repo => !repo.fork)

  const repoGroups: RepoGroup = {
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

  return {
    allRepos: repos,
    groupedRepos: repoGroups
  }
}, {
  group: 'api',
  name: 'github-repos',
  getKey: () => 'github-user-repos',
  swr: true,
  maxAge: 60 * 5, // 5 minutes
})