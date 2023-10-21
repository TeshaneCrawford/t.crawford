import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

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