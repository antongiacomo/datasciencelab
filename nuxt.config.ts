// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: 'https://localhost:3000',
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

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
});
