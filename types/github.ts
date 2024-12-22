export interface User {
  name: string
  username: string
  avatar: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  location: string | null
}

export interface GitHubData {
  user: User
}
