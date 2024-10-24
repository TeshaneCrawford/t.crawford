import cloudinary from 'cloudinary'

interface CloudinaryFolder {
  name: string
  path: string
  thumbnail?: {
    public_id: string
    width: number
    height: number
    format: string
    secure_url: string
  }
}

export default defineEventHandler(async (event) => {
  const environmental = useRuntimeConfig(event)

  cloudinary.v2.config({
    cloud_name: environmental.cloudName,
    api_key: environmental.cloudKey,
    api_secret: environmental.cloudSecret,
    secure: true,
  })

  // Fetch folders
  const folderData = await cloudinary.v2.api.root_folders() as { folders: CloudinaryFolder[] }

  // Fetch a thumbnail with additional metadata for each folder
  const foldersWithThumbnails = await Promise.all(
    folderData.folders.map(async (folder) => {
      const images = await cloudinary.v2.search
        .expression(`folder:${folder.path}`)
        .sort_by('created_at', 'desc')
        .with_field('context')
        .max_results(1)
        .execute() as {
          resources: Array<{
            public_id: string
            width: number
            height: number
            format: string
            secure_url: string
          }>
        }

      return {
        ...folder,
        thumbnail: images.resources[0],
      }
    }),
  )

  return foldersWithThumbnails
})