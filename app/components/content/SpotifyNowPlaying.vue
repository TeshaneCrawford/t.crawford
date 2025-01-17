<script setup lang="ts">
interface Track {
  id: string
  title: string
  artist: string
  albumArt: string
  previewUrl: string | null
  spotifyUrl: string
  isPlaying?: boolean
  progress?: number
  duration?: number
}

const { data: nowPlaying, refresh: refreshNowPlaying, status } = useFetch<Track | null>('/api/spotify/now-playing')

const isLoading = computed(() => status.value === 'pending')

// Refresh now playing data every 30 seconds
useIntervalFn(() => {
  refreshNowPlaying()
}, 30000)
</script>

<template>
  <section class="space-y-4" aria-labelledby="spotify-now-playing-heading">
    <div class="space-y-1">
      <h2 id="spotify-now-playing-heading" class="text-xl text-gray-12 font-semibold">
        What I'm Currently Listening To
      </h2>
    </div>

    <div v-if="isLoading" class="flex items-center gap-4 rounded-lg bg-gray-3 p-4">
      <div class="h-16 w-16 animate-pulse rounded-md bg-gray-4" />
      <div class="min-w-0 flex-1 space-y-2">
        <div class="h-4 w-2/3 animate-pulse rounded bg-gray-4" />
        <div class="h-3 w-1/2 animate-pulse rounded bg-gray-4" />
        <div class="mt-4 h-1 w-full animate-pulse rounded-full bg-gray-4" />
      </div>
      <div class="h-6 w-6 animate-pulse rounded-full bg-gray-4" />
    </div>

    <template v-else>
      <div v-if="nowPlaying" class="flex items-center gap-4 rounded-lg bg-gray-3 p-4">
        <img
          :src="nowPlaying.albumArt"
          :alt="nowPlaying.title"
          class="h-16 w-16 rounded-md"
        >
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm text-gray-12 font-medium">
            {{ nowPlaying.title }}
          </p>
          <p class="truncate text-xs text-gray-11">
            {{ nowPlaying.artist }}
          </p>
          <div v-if="nowPlaying.progress && nowPlaying.duration" class="mt-2">
            <div class="h-1 rounded-full bg-gray-6">
              <div
                class="h-full rounded-full bg-green-9 transition-all duration-1000"
                :style="{ width: `${(nowPlaying.progress / nowPlaying.duration) * 100}%` }"
              />
            </div>
          </div>
        </div>
        <a
          :href="nowPlaying.spotifyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 text-sage-11 transition-colors hover:text-sage-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </a>
      </div>
      <div v-else class="flex items-center gap-4 rounded-lg bg-gray-3 p-4">
        <div class="h-16 w-16 flex items-center justify-center rounded-md bg-gray-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-gray-11"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm text-gray-12 font-medium">
            Not currently playing
          </p>
          <p class="text-xs text-gray-11">
            Check back later to see what I'm listening to
          </p>
        </div>
      </div>
    </template>
  </section>
</template>
