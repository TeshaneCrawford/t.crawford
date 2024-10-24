export interface CloudinaryImage {
  public_id: string
  width: number
  height: number
  format: string
  secure_url: string
  context?: {
    alt?: string
  }
}

export interface PhotoProps {
  src: string
  alt: string
  width: number
  height: number
  aspectRatio: number
  isCarousel?: boolean
  format: 'webp'
  loading?: 'eager' | 'lazy'
  'data-carousel-index'?: number
  classWrapper?: string
}

export const useCloudinaryImages = (folder?: string) => {
  const images = ref<PhotoProps[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/images/${folder}`)
      const cloudinaryImages: CloudinaryImage[] = await response.json()

      images.value = cloudinaryImages.map((img) => ({
        src: img.secure_url,
        alt: img.public_id,
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
        isCarousel: true,
        format: 'webp' as const,
      }))
    } catch (e) {
      error.value = 'Failed to fetch images'
    } finally {
      loading.value = false
    }
  }

  const imagesGrid = computed(() =>
    images.value.map((img, i) => ({
      ...img,
      loading: i < 3 ? 'eager' as const : 'lazy' as const,
      'data-carousel-index': i,
      isCarousel: false,
    }))
  )

  return {
    images,
    imagesGrid,
    loading,
    error,
    fetchImages
  }
}
