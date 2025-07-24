// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  devServer: {
    port: 4040,
    host: "0.0.0.0",
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/device",
    "@nuxtjs/fontaine",
    "@nuxt/content",
  ],

  runtimeConfig: {
    public: {
      fsPublicKey: process.env.FS_PUBLIC_KEY,
      fsStorePublicKey: process.env.FS_store_PUBLIC_KEY,
      fsProductId: process.env.FS_PRODUCT_ID,
      siteUrl: process.env.SITE_URL,
    },
  },

  sitemap: {
    // inferStaticPagesAsRoutes: false,
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
    exclude: ["/__nuxt_content/**", "/404"],
  },

  content: {
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false },
    },
  },
  routeRules: {
    "/doc": {
      redirect: "/doc/intro",
    },
  },
});
