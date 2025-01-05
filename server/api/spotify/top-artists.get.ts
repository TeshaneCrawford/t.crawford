import { getAccessToken } from './auth'
import config from './config'
import type { SpotifyTopArtistsResponse } from './types'

export default defineEventHandler(async () => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(
      `${config.spotifyApiUrl}/me/top/artists?limit=5&time_range=short_term`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )

    const data = await response.json() as SpotifyTopArtistsResponse
    return data.items.map(artist => ({
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url,
      genres: artist.genres,
      spotifyUrl: artist.external_urls.spotify,
      popularity: artist.popularity,
    }))
  }
  catch (error) {
    console.error('Error fetching top artists:', error)
    return []
  }
})
