if (!process.env.NUXT_SPOTIFY_CLIENT_ID) throw new Error('NUXT_SPOTIFY_CLIENT_ID is required')
if (!process.env.NUXT_SPOTIFY_CLIENT_SECRET) throw new Error('NUXT_SPOTIFY_CLIENT_SECRET is required')
if (!process.env.NUXT_SPOTIFY_REFRESH_TOKEN) throw new Error('NUXT_SPOTIFY_REFRESH_TOKEN is required')

const config = {
  clientId: process.env.NUXT_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NUXT_SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.NUXT_SPOTIFY_REFRESH_TOKEN,
  spotifyAccountsUrl: 'https://accounts.spotify.com/api/token',
  spotifyApiUrl: 'https://api.spotify.com/v1',
} as const

export default config
