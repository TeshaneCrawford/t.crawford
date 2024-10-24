<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useGeolocation, useNow } from '@vueuse/core'

interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
  cod: number;
}

const { coords, isSupported } = useGeolocation()
const now = useNow({ interval: 60000 })
const temperature = ref<number | null>(null)
const error = ref<string | null>(null)
const loading = ref(true)
const config = useRuntimeConfig()

const formattedTime = computed(() => {
  return now.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})

const fetchTemperature = async (): Promise<void> => {
  if (!config.public.NUXT_WEATHER_API_KEY) {
    error.value = "Missing OpenWeatherMap API key"
    loading.value = false
    return
  }

  if (!isSupported.value) {
    error.value = "Geolocation is not supported by your browser"
    loading.value = false
    return
  }

  if (!coords.value?.latitude || !coords.value?.longitude) {
    error.value = "Waiting for geolocation data..."
    return
  }

  loading.value = true
  error.value = null

  try {
    const response = await $fetch<WeatherResponse>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: coords.value.latitude,
          lon: coords.value.longitude,
          units: 'metric',
          appid: config.public.NUXT_WEATHER_API_KEY
        }
      }
    )

    if (response.main && typeof response.main.temp === 'number') {
      temperature.value = Math.round(response.main.temp)
    } else {
      throw new Error('Temperature data not found in API response')
    }
  } catch (e) {
    console.error('Error fetching temperature:', e)
    error.value = "Failed to fetch temperature. Please check your API key and try again."
    temperature.value = null
  } finally {
    loading.value = false
  }
}

watch(
  () => coords.value,
  fetchTemperature,
  { immediate: true }
)
</script>

<template>
  <div
   mx-auto mb-4 max-w-3xl flex items-center justify-between px-4 op-50 lg:px-0 md:px-8 sm:px-0
  >
    <span
       inline-flex items-center badge-lg-zinc dark:badge-lg-zinc fw-semibold font-dank important-rounded-none
    >
      {{ formattedTime }}
    </span>

    <span
      v-if="loading"
       inline-flex items-center badge-lg-zinc dark:badge-lg-zinc font-dank italic important-rounded-none
    >
      Loading temperature...
    </span>

    <span
      v-else-if="error"
      inline-flex items-center badge-lg-zinc dark:badge-lg-zinc text-red-500 font-dank important-rounded-none
    >
      {{ error }}
    </span>

    <span
      v-else-if="temperature !== null"
      inline-flex items-center badge-lg-zinc dark:badge-lg-zinc fw-semibold font-dank important-rounded-none
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