// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: "preload",
  //         href: "/assets/fonts/Poppins-Regular.woff2",
  //         as: "font",
  //         type: "font/woff2",
  //         crossorigin: "anonymous",
  //       },
  //       {
  //         rel: "preload",
  //         href: "/assets/fonts/Poppins-Bold.woff2",
  //         as: "font",
  //         type: "font/woff2",
  //         crossorigin: "anonymous",
  //       },
  //       {
  //         rel: "preload",
  //         href: "/assets/fonts/Poppins-SemiBold.woff2",
  //         as: "font",
  //         type: "font/woff2",
  //         crossorigin: "anonymous",
  //       },
  //     ],
  //   },
  // },

  devServer: {
    port: 4040,
    host: "0.0.0.0",
  },

  // routeRules: {
  //   "/": { prerender: true },
  // },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [{ path: "./components", pathPrefix: false }],
  typescript: {
    // typeCheck: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/device",
    "@nuxtjs/fontaine",
  ],

  sitemap: {
    // inferStaticPagesAsRoutes: false,
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
  },
});
