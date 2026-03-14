// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "preload",
          href: "/assets/fonts/Poppins-Regular.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/assets/fonts/Poppins-SemiBold.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/assets/fonts/Poppins-Bold.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
      ],
    },
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
    "@nuxt/image",
  ],

  image: {
    format: ["webp", "avif"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Allow external image optimization (e.g. giphy, demo CDNs)
    domains: [
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
    ],
  },

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

  nitro: {
    routeRules: {
      "/public/assets/fonts/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/assets/fonts/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
  },
});
