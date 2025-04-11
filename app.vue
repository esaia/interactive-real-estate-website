<script setup lang="ts">
import "ire-preview/dist/styles.css";

const title = "Interactive Images | WordPress Plugin";
const desc =
  "The #1 WordPress plugin for creating interactive building images with SVG hotspots. Create clickable zones on building image or floor plans. No coding needed!";

const keywords =
  "interactive real estate, 3d map real estate, wp plugin, WordPress real estate plugin, interactive building visualization, floor plan, SVG, property hotspots, 3D property view, building layers, interactive buildings, apartments, real estate, floor plan, SVG, hotspots, SVG floor plan plugin";

useHead({
  script: [
    { src: "  https://player.vimeo.com/api/player.js", defer: true },

    {
      src: "https://www.googletagmanager.com/gtag/js?id=AW-16923193829",
      async: true,
    },
    {
      innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16923193829');
          `,
      type: "text/javascript",
    },

    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Interactive Real Estate - WordPress Plugin",
        description: desc,
        applicationCategory: "WordPress Plugin",
        operatingSystem: "WordPress",
        offers: {
          "@type": "Offer",
          price: "0", // Free tier or starting price
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9", // Update with actual rating
          reviewCount: "20", // Update with real data
        },
        screenshot: {
          "@type": "ImageObject",
          url: "https://www.ireplugin.com/featured.png",
          caption: "Interactive floor plan with SVG hotspots",
        },
      }),
    },

    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@type": "Organization",
        "@id": "https://www.ireplugin.com/#organization",
        name: "Interactive Real Estate Plugin",
        url: "https://www.ireplugin.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.ireplugin.com/logo.png",
          width: 300,
          height: 60,
          caption: "IRE Plugin Logo",
        },
        sameAs: ["https://x.com/ireplugin"],
      }),
    },
  ],

  title,

  htmlAttrs: {
    lang: "en",
  },

  link: [
    {
      rel: "canonical",
      href: "https://www.ireplugin.com",
    },
    {
      rel: "alternate",
      href: "https://interactive-real-estate.vercel.app",
      hreflang: "en",
    },

    { rel: "icon", sizes: "512x512", href: "/icon-256x256.png" },
  ],

  meta: [
    {
      name: "google-site-verification",
      content: "yzBJmVx5W6EPVBVlFTZqzKpdOABjpbHLAA5ExnwTiE8",
    },
    {
      name: "author",
      property: "og:author",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.ireplugin.com",
    },
    {
      property: "og:type",
      content: "website",
    },

    {
      name: "description",
      content: desc,
    },

    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: desc,
    },

    {
      property: "og:image",
      content: "https://www.ireplugin.com/featured.png",
    },

    {
      property: "og:image:alt",
      content:
        "The #1 WordPress plugin for creating interactive buildings with SVG hotspots.",
    },

    {
      property: "og:image:secure",
      content: "https://www.ireplugin.com/featured.png",
    },

    {
      name: "keywords",
      content: keywords,
    },

    {
      name: "url",
      content: "https://www.ireplugin.com",
    },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: desc,
    },
    {
      name: "twitter:image",
      content: "https://www.ireplugin.com/featured.png",
    },
    {
      name: "twitter:image:alt",
      content: "The #1 WordPress plugin for creating interactive buildings.",
    },

    {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
