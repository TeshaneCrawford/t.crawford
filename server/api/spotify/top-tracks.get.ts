import { getAccessToken } from './auth'
import config from './config'
import type { TopTracksResponse } from './types'

export default defineEventHandler(async () => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(
      `${config.spotifyApiUrl}/me/top/tracks?limit=5&time_range=short_term`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )

    const data = await response.json() as TopTracksResponse
    return data.items.map(track => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      albumArt: track.album.images[0]?.url,
      previewUrl: track.preview_url,
      spotifyUrl: track.external_urls.spotify,
    }))
  }
  catch (error) {
    console.error('Error fetching top tracks:', error)
    return []
  }
})
