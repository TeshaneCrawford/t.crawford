/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.buymeacoffee.com",
      "res.cloudinary.com",
      "imgur.com",
      "i.imgur.com",
      "cutt.ly",
      "activity-graph.herokuapp.com",
      "i.scdn.co", // images from spotify
      "images.unsplash.com"
    ],
  },
  swcMinify: true,
}

module.exports = nextConfig
