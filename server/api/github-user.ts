import { fetchUserData } from '../utils/github'
import type { User } from '~~/types/github'

export default defineCachedEventHandler(async () => {
  const userData = await fetchUserData()

  const user: User = {
    name: userData.name ?? userData.login,
    username: userData.login,
    avatar: userData.avatar_url,
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
