// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui-pro", "@nuxt/content", "@nuxt/eslint", "@nuxt/image", "nuxt-aos"],

  css: ["@/assets/css/main.css"],

  ui: {
    theme: {
      colors: ["primary", "secondary", "tertiary", "info", "success", "warning", "error", "blurple"],
    },
  },

  colorMode: {
    preference: "dark",
  },

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  typescript: { strict: false },
  compatibilityDate: "2025-03-21",
});
