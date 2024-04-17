import MiniSearch from 'minisearch'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const files = await serverQueryContent(event).find()

  // Only works for MD
  const sections = (await Promise.all(
    files
      .filter(file => file._extension === 'md' && !file?._draft && !file?.empty)
      .map(page => splitPageIntoSections(page)),
  ))
    .flat()

  // Add an option to enable index
  const miniSearch = new MiniSearch({
    fields: ['title', 'titles'],
    storeFields: ['title', 'titles'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        title: 4,
        content: 2,
        titles: 1,
      },
    },
  })

  // Index the documents
  miniSearch.addAll(sections)

  setHeader(event, 'Content-Type', 'text/plain')
  // Send the index to the client
  return JSON.stringify(miniSearch)
})
