interface SpotifyImage {
  url: string
  height: number
  width: number
}

interface SpotifyArtist {
  id: string
  name: string
  external_urls: {
    spotify: string
  }
}

interface SpotifyTrack {
  id: string
  name: string
  artists: SpotifyArtist[]
  album: {
    images: SpotifyImage[]
  }
  preview_url: string | null
  external_urls: {
    spotify: string
  }
  duration_ms: number
}

export interface NowPlayingResponse {
  is_playing: boolean
  progress_ms: number
  item: SpotifyTrack
}

export interface TopTracksResponse {
  items: SpotifyTrack[]
}
