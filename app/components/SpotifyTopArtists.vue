<script setup lang="ts">
interface Artist {
  id: string
  name: string
  image: string
  genres: string[]
  spotifyUrl: string
  popularity: number
}

const { data: topArtists } = await useFetch<Artist[]>('/api/spotify/top-artists', {
  default: () => [],
})
</script>

<template>
  <section class="space-y-4" aria-labelledby="spotify-top-artists-heading">
    <div class="space-y-1">
      <h2 id="spotify-top-artists-heading" class="text-xl text-gray-12 font-semibold">
        My Top Spotify Artists
      </h2>
      <p v-if="topArtists && topArtists.length > 0" class="text-sm text-gray-12">
        {{ topArtists[0]?.name }} is my most listened artist in the last month on Spotify.
      </p>
    </div>
    <div
      class="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2"
      role="grid"
      aria-label="Top Spotify artists grid"
    >
      <a
        v-for="artist in topArtists"
        :key="artist.id"
        :href="artist.spotifyUrl"
        :aria-label="`Open ${artist.name}'s profile on Spotify. Genre: ${artist.genres.slice(0, 2).join(', ')}`"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative aspect-square overflow-hidden rounded-lg bg-gray-3 ring-offset-2 ring-offset-gray-1 transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-8"
      >
        <img
          :src="artist.image"
          :alt="`${artist.name}'s artist photo`"
          class="h-full w-full object-cover transition-all duration-300"
        >
        <div
          class="absolute inset-0 flex flex-col justify-end from-gray-12/90 to-transparent bg-gradient-to-t opacity-90 transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        >
          <div class="p-4 space-y-1">
            <h3 class="text-lg text-gray-1 font-semibold">{{ artist.name }}</h3>
            <p class="text-sm text-gray-3">
              {{ artist.genres.slice(0, 2).join(', ') }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
