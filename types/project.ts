import type { ParsedContent } from '@nuxt/content'
import type { Endpoints } from '@octokit/types';
export interface Project {
    name: string
    description: string
    icon?: string
    webLink: string
    githubUrl?: string
    tags: { name: string, icon: string }[]
}

export interface ProjectList extends ParsedContent {
    name: string
    projects: Project[]
}

export type Repo = Endpoints['GET /user/repos']['response']['data'][number]
export type User = Endpoints['GET /user']['response']['data']