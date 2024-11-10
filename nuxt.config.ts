// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devServer: {
    port: 4040,
    host: "0.0.0.0",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [{ path: "./components", pathPrefix: false }],
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
});
