<script setup lang="ts">
import "ire-preview/dist/styles.css";

useHead({
  script: [
    { src: "https://code.jquery.com/jquery-3.7.1.min.js", defer: true },
    { src: "https://checkout.freemius.com/js/v1/", defer: true },
    { src: "  https://users.freemius.com/dashboard.js", defer: true },
  ],

  title: "Interactive Real Estate - Create Interactive Buildings",

  htmlAttrs: {
    lang: "en",
  },

  link: [
    {
      rel: "canonical",
      href: "https://interactive-real-estate.vercel.app",
    },
    {
      rel: "alternate",
      href: "https://interactive-real-estate.vercel.app",
      hreflang: "en",
    },
  ],

  meta: [
    {
      name: "google-site-verification",
      content: "A_2D8ZsPADq9beTODArYgEDwbXOI17OlN4UJ5bIIneQ",
    },
    {
      name: "author",
      property: "og:author",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://interactive-real-estate.vercel.app",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Interactive Real Estate - Create Interactive Buildings",
    },
    {
      property: "og:description",
      content:
        "Create interactive buildings with clickable SVG, hotspots and layers. Display floor plans, property details, and 2D/3D plans—no coding required.",
    },

    {
      name: "title",
      content: "Interactive Real Estate - Create Interactive Buildings",
    },
    {
      name: "description",
      content:
        "Create interactive buildings with clickable SVG, hotspots and layers. Display floor plans, property details, and 2D/3D plans—no coding required.",
    },

    {
      property: "og:image",
      content: "http://interactive-real-estate.vercel.app/featured.png",
    },
    {
      property: "og:image:secure",
      content: "http://interactive-real-estate.vercel.app/featured.png",
    },
    {
      property: "og:image:alt",
      content: "The #1 WordPress plugin for creating interactive buildings.",
    },
    {
      property: "og:image:width",
      content: "500",
    },
    {
      property: "og:image:height",
      content: "261",
    },

    {
      name: "keywords",
      content:
        "interactive real estate, wp plugin, WordPress real estate plugin, floor plan, SVG, property hotspots, 3D property view, building layers, interactive buildings, apartments",
    },
    {
      name: "pageUrl",
      content: "https://interactive-real-estate.vercel.app",
    },
    {
      name: "url",
      content: "https://interactive-real-estate.vercel.app",
    },

    {
      name: "robots",
      content: "index,follow",
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
