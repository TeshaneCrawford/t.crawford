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
  const { data: userData } = await useOctokit().request('GET /user')
  return userData
}, {
  maxAge: 60 * 10, // 10 minutes
  swr: true,
  group: 'functions',
  name: 'getUserData',
  getKey: () => 'github-user-data',
})

export const fetchUserRepos = defineCachedFunction(async () => {
  console.log('Fetching personal repositories only')
  // First get the authenticated user's username
  const userData = await fetchUserData()

  // Then fetch only personal repositories
  const { data } = await useOctokit().request('GET /users/{username}/repos', {
    username: userData.login,
    sort: 'updated',
    per_page: 100,
    type: 'owner', // This ensures only repositories owned by the user are returned
  })
  return data
}, {
  maxAge: 60 * 10, // 10 minutes
  swr: true,
  group: 'functions',
  name: 'getUserRepos',
  getKey: () => 'github-user-repos',
})
