<script setup lang="ts">
import "ire-preview/dist/styles.css";

const title = "Interactive Real Estate - Create Interactive Buildings";
const desc =
  "Create interactive buildings with clickable SVG, hotspots and layers. Display floor plans, property details, and 2D/3D plans—no coding required.";

useHead({
  script: [
    { src: "https://code.jquery.com/jquery-3.7.1.min.js", defer: true },
    { src: "https://checkout.freemius.com/js/v1/", defer: true },
    { src: "  https://users.freemius.com/dashboard.js", defer: true },
  ],

  title,

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

    // {
    //   name: "twitter:card",
    //   content: "summary_large_image", // Use "summary" for small images or "summary_large_image" for larger images
    // },
    // {
    //   name: "twitter:site",
    //   content: "@YourTwitterHandle", // Replace with your Twitter handle
    // },
    // {
    //   name: "twitter:creator",
    //   content: "@YourTwitterHandle", // Replace with the creator's Twitter handle (if different from the site)
    // },
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
      content: "http://interactive-real-estate.vercel.app/featured.png",
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
