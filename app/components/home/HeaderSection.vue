<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useNow } from '@vueuse/core'

interface WeatherResponse {
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  name: string
  cod: number
}

// Coordinates
const FIXED_LATITUDE = 40.7128
const FIXED_LONGITUDE = -74.0060

const now = useNow({ interval: 1000 })
const temperature = ref<number | null>(null)
const error = ref<string | null>(null)
const loading = ref(true)
const config = useRuntimeConfig()
let refreshInterval: NodeJS.Timeout | null = null

const formattedTime = computed(() => {
  return now.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
})

const fetchTemperature = async (): Promise<void> => {
  if (!config.public.NUXT_WEATHER_API_KEY) {
    error.value = 'Missing OpenWeatherMap API key'
    loading.value = false
    return
  }

  loading.value = true
  error.value = null

  try {
    const response = await $fetch<WeatherResponse>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: FIXED_LATITUDE,
          lon: FIXED_LONGITUDE,
          units: 'metric',
          appid: config.public.NUXT_WEATHER_API_KEY,
        },
      },
    )

    if (response.main && typeof response.main.temp === 'number') {
      temperature.value = Math.round(response.main.temp)
    }
    else {
      throw new Error('Temperature data not found in API response')
    }
  }
  catch (e) {
    console.error('Error fetching temperature:', e)
    error.value = 'Failed to fetch temperature. Will try again.'
    temperature.value = null
  }
  finally {
    loading.value = false
  }
}

// Setup interval and initial fetch on client-side only
onMounted(() => {
  fetchTemperature()
  // Refresh every 5 minutes
  refreshInterval = setInterval(fetchTemperature, 300000)
})

// Clean up interval when component is destroyed
onBeforeUnmount(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
    refreshInterval = null
  }
})
</script>

<template>
  <div
    mx-auto
    mb-4
    max-w-3xl
    flex
    items-center
    justify-between
    px-4
    op-70
    lg:px-0
    md:px-8
    sm:px-0
  >
    <span
      inline-flex
      items-center
      badge-lg-gray
      font-mono
      important-rounded-none
    >
      {{ formattedTime }}
    </span>
    <span
      v-if="loading"
      inline-flex
      items-center
      badge-lg-gray
      font-mono
      italic
      important-rounded-none
    >
      Loading temperature...
    </span>
    <span
      v-else-if="error"
      inline-flex
      items-center
      badge-lg-gray
      text-red-9
      font-mono
      important-rounded-none
    >
      {{ error }}
    </span>
    <span
      v-else-if="temperature !== null"
      inline-flex
      items-center
      badge-lg-gray
      font-mono
      important-rounded-none
    >
      {{ temperature }}°C
    </span>
  </div>
</template>

<style scoped>
.important-rounded-none {
  border-radius: 0 !important;
}
</style>
