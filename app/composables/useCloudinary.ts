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
  'src': string
  'alt': string
  'width': number
  'height': number
  'aspectRatio': number
  'isCarousel'?: boolean
  'format': 'webp'
  'loading'?: 'eager' | 'lazy'
  'data-carousel-index'?: number
  'classWrapper'?: string
  'sizes'?: string
  'modifiers'?: {
    effect?: string
    dpr?: string
    quality?: string
    format?: string
  }
}

export const useCloudinaryImages = (folder?: string) => {
  const images = ref<PhotoProps[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchImages = async () => {
    if (!folder) {
      error.value = 'No folder specified'
      loading.value = false
      return
    }

    try {
      const response = await useFetch(`/api/images/${folder}`, {
        // error handling
        onResponseError: (error) => {
          console.error('Failed to fetch images:', error)
          throw new Error('Failed to fetch images')
        },
      })

      if (response.error.value) {
        throw new Error(response.error.value.message)
      }

      const cloudinaryImages = response.data.value as CloudinaryImage[]

      if (!cloudinaryImages || !Array.isArray(cloudinaryImages)) {
        throw new Error('Invalid response format')
      }

      images.value = cloudinaryImages.map(img => ({
        src: img.secure_url,
        alt: img.public_id,
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
        isCarousel: true,
        format: 'webp' as const,
      }))
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch images'
    }
    finally {
      loading.value = false
    }
  }

  const imagesGrid = computed(() =>
    images.value.map((img, i) => ({
      ...img,
      'loading': i < 4 ? 'eager' as const : 'lazy' as const,
      'data-carousel-index': i,
      'isCarousel': false,
      'sizes': '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      'modifiers': {
        effect: 'sharpen',
        dpr: 'auto',
        quality: 'auto:best',
        format: 'webp',
      },
    })),
  )

  return {
    images,
    imagesGrid,
    loading,
    error,
    fetchImages,
  }
}
