<script setup lang="ts">
import "ire-preview/dist/styles.css";

const title = "Interactive Real Estate - Create Interactive Buildings";
const desc =
  "Create interactive buildings with clickable SVG, hotspots and layers. Display floor plans, property details, and 2D/3D plans—no coding required.";

useHead({
  script: [{ src: "https://checkout.freemius.com/js/v1/", defer: true }],

  title,

  htmlAttrs: {
    lang: "en",
  },

  link: [
    {
      rel: "canonical",
      href: "http://ireplugin.com",
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
      content: "http://ireplugin.com",
    },
    {
      property: "og:type",
      content: "website",
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
      name: "title",
      content: title,
    },
    {
      name: "description",
      content: desc,
    },

    {
      property: "og:image",
      content: "http://ireplugin.com/featured.png",
    },
    {
      property: "og:image:secure",
      content: "http://ireplugin.com/featured.png",
    },
    {
      property: "og:image:alt",
      content: "The #1 WordPress plugin for creating interactive buildings.",
    },

    {
      name: "keywords",
      content:
        "interactive real estate, wp plugin, WordPress real estate plugin, floor plan, SVG, property hotspots, 3D property view, building layers, interactive buildings, apartments",
    },
    {
      name: "pageUrl",
      content: "http://ireplugin.com",
    },
    {
      name: "url",
      content: "http://ireplugin.com",
    },

    {
      name: "robots",
      content: "index,follow",
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
      content: "http://ireplugin.com/featured.png",
    },
    {
      name: "twitter:image:alt",
      content: "The #1 WordPress plugin for creating interactive buildings.",
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
