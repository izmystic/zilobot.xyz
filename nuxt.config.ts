// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image", "nuxt-aos", "@nuxtjs/google-fonts"],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    preload: true,
    families: {
        Montserrat: true
    }
  },
  aos: {
    disable: "mobile",
  },
  devtools: { enabled: false },
  typescript: { strict: true },
});
