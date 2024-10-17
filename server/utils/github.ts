import { Octokit } from 'octokit'

let _octokit: Octokit

export function useOctokit() {
  if (!_octokit) {
    _octokit = new Octokit({
      auth: process.env.NUXT_GITHUB_TOKEN,
    })
  }
  return _octokit
}

export const fetchUserData = defineCachedFunction(async () => {
  console.log('Fetching user data')
  const { data } = await useOctokit().request('GET /user')
  return data
}, {
  maxAge: 60 * 10, // 10 minutes
  swr: true,
  group: 'functions',
  name: 'getUserData',
  getKey: () => 'github-user-data',
})

export const fetchUserRepos = defineCachedFunction(async () => {
  console.log('Fetching user repositories')
  const { data } = await useOctokit().request('GET /user/repos', {
    sort: 'updated',
    per_page: 100,
  })
  return data
}, {
  maxAge: 60 * 10, // 10 minutes
  swr: true,
  group: 'functions',
  name: 'getUserRepos',
  getKey: () => 'github-user-repos',
})