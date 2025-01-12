<script setup lang="ts">
interface Track {
  id: string
  title: string
  artist: string
  albumArt: string
  previewUrl: string | null
  spotifyUrl: string
}

const { data: topTracks } = await useFetch<Track[]>('/api/spotify/top-tracks', {
  default: () => [],
})

const updateTime = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
</script>

<template>
  <section aria-labelledby="top-tracks-heading" class="space-y-4">
    <div class="space-y-1">
      <h2 id="top-tracks-heading" class="text-xl text-gray-12 font-semibold">
        My Top Spotify Tracks
      </h2>
      <p v-if="topTracks?.length" class="text-sm text-gray-11">
        {{ topTracks[0]?.title }} by {{ topTracks[0]?.artist }} is my most streamed track in the last month.
        Here's my top tracks on Spotify updated {{ updateTime }}.
      </p>
    </div>
    <ul class="space-y-3" role="list">
      <li
        v-for="track in topTracks"
        :key="track.id"
        class="flex items-center gap-4 rounded-lg bg-gray-3 p-3 transition hover:bg-gray-4"
      >
        <img
          :src="track.albumArt"
          :alt="`Album artwork for ${track.title}`"
          class="h-12 w-12 rounded-md"
        >
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm text-gray-12 font-medium">
            {{ track.title }}
          </div>
          <div class="truncate text-xs text-gray-11">
            {{ track.artist }}
          </div>
        </div>
        <a
          :href="track.spotifyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 text-sage-11 transition-colors hover:text-sage-12"
          :aria-label="`Listen to ${track.title} by ${track.artist} on Spotify`"
        >
          <span class="sr-only">Open in Spotify</span>
          <svg
            role="img"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>
