export type Tool = {
    title: string,
    toolData: {
        name: string,
        label: string,
        icon: string,
        link: string,
        color?: string
    }[]
}

export type ToolList = {
    lastUpdate: string,
    toolsData: Tool[]
}