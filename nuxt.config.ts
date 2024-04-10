// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/seo"]
})