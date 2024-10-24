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
  const environmental = useRuntimeConfig(event)
  const folder = event.context.params?.folder

  cloudinary.v2.config({
    cloud_name: environmental.cloudName,
    api_key: environmental.cloudKey,
    api_secret: environmental.cloudSecret,
    secure: true,
  })

  const images = await cloudinary.v2.search
    .expression(`folder:${folder}`)
    .with_field('context')
    .max_results(30) // Adjust this number as needed
    .execute() as { resources: CloudinaryImage[] }

  return images.resources
})