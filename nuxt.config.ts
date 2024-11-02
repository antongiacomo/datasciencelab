// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: 'https://localhost:3000/datasciencelab',
    }
  },

  devtools: {
    enabled: false,
    timeline: {
      enabled: true,

    },
  },

  nitro: {

    prerender: {
      failOnError: false,

    },
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-lodash",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],

  compatibilityDate: "2024-11-02",
});