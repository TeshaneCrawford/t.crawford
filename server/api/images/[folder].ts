import cloudinary from 'cloudinary'

interface CloudinaryImage {
  public_id: string
  width: number
  height: number
  format: string
  secure_url: string
  context?: {
    alt?: string
  }
}

export default defineEventHandler(async (event) => {
  try {
    const environmental = useRuntimeConfig(event)
    const folder = event.context.params?.folder

    if (!folder) {
      throw createError({
        statusCode: 400,
        message: 'Folder parameter is required'
      })
    }

    cloudinary.v2.config({
      cloud_name: environmental.cloudName,
      api_key: environmental.cloudKey,
      api_secret: environmental.cloudSecret,
      secure: true,
    })

    const images = await cloudinary.v2.search
      .expression(`folder:${folder}`)
      .with_field('context')
      .max_results(30)
      .execute() as { resources: CloudinaryImage[] }

    if (!images || !images.resources) {
      throw createError({
        statusCode: 404,
        message: 'No images found'
      })
    }

    return images.resources
  } catch (error) {
    console.error('Cloudinary API error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch images from Cloudinary'
    })
  }
})