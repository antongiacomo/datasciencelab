// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,

    timeline: {
      enabled: true
    }
  },
  nitro: {
    prerender:{
      failOnError: false,
    },

  },
  modules: ["@nuxtjs/tailwindcss",'@nuxt/content']
})