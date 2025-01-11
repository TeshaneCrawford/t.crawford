import { fetchUserData } from '../utils/github'
import type { User } from '~~/types/github'

export default defineCachedEventHandler(async (event) => {
  const userData = await fetchUserData()

  // Add cache headers
  setResponseHeaders(event, {
    'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'max-age=3600',
  })

  const user: User = {
    name: userData.name ?? userData.login,
    username: userData.login,
    avatar: userData.avatar_url ?? `https://github.com/${userData.login}.png`,
    bio: userData.bio,
    followers: userData.followers,
    following: userData.following,
    public_repos: userData.public_repos,
    location: userData.location,
  }

  return user
}, {
  group: 'api',
  name: 'github-user',
  getKey: () => 'github-user-data',
  swr: true,
  maxAge: 60 * 5, // 5 minutes
})
