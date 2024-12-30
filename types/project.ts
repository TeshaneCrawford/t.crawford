import type { ParsedContentv2 } from '@nuxt/content'
import type { Endpoints } from '@octokit/types'

export interface Project {
  name: string
  description: string
  icon?: string
  webLink: string
  githubUrl?: string
  tags: { name: string, icon: string }[]
}

export interface ProjectList extends ParsedContentv2 {
  name: string
  projects: Project[]
}

export type OctokitRepo = Endpoints['GET /users/{username}/repos']['response']['data'][number]

export interface Repo {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    url: string
    html_url: string
    type: string
    site_admin: boolean
  }
  html_url: string
  description: string | null
  fork: boolean
  url: string
  archived: boolean
  disabled: boolean
  topics: string[]
  license?: {
    key?: string
    name?: string
    url?: string | null
    spdx_id?: string | null
    node_id?: string
  } | null
  homepage: string | null | undefined
  stargazers_count: number | undefined
  is_template?: boolean | undefined
  language: string | null | undefined
  forks_count: number | undefined
  created_at: string
  pushed_at: string
  updated_at: string
  open_graph_image_url?: string | null | undefined
}

export type User = Endpoints['GET /user']['response']['data']
