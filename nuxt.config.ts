// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true,
  },

  devtools: { enabled: true },
  modules: ["@nuxt/eslint"]
})