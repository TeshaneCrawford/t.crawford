import { getAccessToken } from './auth'
import config from './config'
import type { NowPlayingResponse } from './types'

export default defineEventHandler(async () => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(
      `${config.spotifyApiUrl}/me/player/currently-playing`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )

    if (response.status === 204) {
      return null
    }

    const data = await response.json() as NowPlayingResponse

    if (!data.item) {
      return null
    }

    return {
      id: data.item.id,
      title: data.item.name,
      artist: data.item.artists.map(artist => artist.name).join(', '),
      albumArt: data.item.album.images[0]?.url,
      previewUrl: data.item.preview_url,
      spotifyUrl: data.item.external_urls.spotify,
      isPlaying: data.is_playing,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    }
  }
  catch (error) {
    console.error('Error fetching now playing:', error)
    return null
  }
})
