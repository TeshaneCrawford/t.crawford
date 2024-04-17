import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Section } from '../../types/search'

const HEADING = /^h([1-6])$/
const isHeading = (tag: string) => HEADING.test(tag)

export function splitPageIntoSections(page: ParsedContent) {
  const path = page._path ?? ''

  const sections: Section[] = []

  // TODO: upstream to content (and try if md have a h1 or a title)
  if (page.title) {
    sections.push({
      id: path,
      title: page.title,
      titles: [],
      content: '',
      level: 0,
    })
  }

  // No section
  let section = -1
  let previousHeadingLevel = page.title ? 1 : 0
  const titles = page.title ? [page.title] : []
  for (const item of page.body.children) {
    if (isHeading(item.tag)) {
      const currentHeadingLevel: number = Number(item.tag.match(HEADING)?.[1]) ?? 0

      const title = extractTextFromAst(item).trim()

      if (currentHeadingLevel === 1) {
        // Reset the titles
        titles.splice(0, titles.length)
      }
      else if (currentHeadingLevel < previousHeadingLevel) {
        // Go up tree, remove every title after the current level
        titles.splice(currentHeadingLevel - 1, titles.length - 1)
      }
      else if (currentHeadingLevel === previousHeadingLevel) {
        // Same level, remove the last title (add title later to avoid to it in titles)
        titles.pop()
      }

      sections.push({
        id: `${path}#${item.props.id}`,
        title,
        titles: [...titles],
        content: '',
        level: currentHeadingLevel,
      })

      titles.push(title)

      // Swap to a new section
      previousHeadingLevel = currentHeadingLevel
      section += 1
    }

    if (!isHeading(item.tag)) {
      if (!sections[section]) {
        sections[section] = {
          id: '',
          title: '',
          titles: [],
          content: '',
          level: 0,
        }
      }

      sections[section].content += extractTextFromAst(item).trim()
    }
  }

  return sections
}

function extractTextFromAst(node: any) {
  let text = ''

  // Get text from markdown AST
  if (node.type === 'text')
    text += node.value

  // Do not explore children
  if (node.tag === 'code' || node.tag === 'style')
    return ''

  // Explore children
  if (node.children) {
    for (const child of node.children)
      text += ` ${extractTextFromAst(child)}`
  }

  return text
}