// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
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
  css: ['~/assets/css/main.css'],
  vite:{
    plugins: [
      tailwindcss()
    ]
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
    // "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-lodash",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],

  compatibilityDate: "2024-11-02",
});