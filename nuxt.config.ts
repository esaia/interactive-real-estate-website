// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devServer: {
    port: 4040,
    host: "0.0.0.0",
  },

  routeRules: {
    "/": { prerender: true },
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [{ path: "./components", pathPrefix: false }],
  typescript: {
    // typeCheck: true,
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],

  sitemap: {
    // inferStaticPagesAsRoutes: false,
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
  },
});
