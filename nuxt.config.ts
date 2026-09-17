// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
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
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],

  content: {
    experimental: {
      nativeSqlite: true,
    },
  },

  compatibilityDate: "2024-11-02",
});