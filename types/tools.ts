export type toolsType = {
    title: string,
    toolData: {
        name: string,
        label: string,
        icon: string,
        link: string
    }[]
}

export type toolsDataType = {
    lastUpdate: string,
    toolsData: toolsType[]
}