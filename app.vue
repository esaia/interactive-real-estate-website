<script setup lang="ts">
import "ire-preview/dist/styles.css";

useHead({
  script: [
    { src: "https://code.jquery.com/jquery-3.7.1.min.js", defer: true },
    { src: "https://checkout.freemius.com/js/v1/", defer: true },
    { src: "  https://users.freemius.com/dashboard.js", defer: true },
  ],

  title:
    "Interactive Real Estate - WordPress Plugin for Create Interactive Buildings",

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
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "use-credentials",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ],

  meta: [
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
      content:
        "Interactive Real Estate - Wordpress Plugin For Create Interactive Buildings",
    },
    {
      property: "og:description",
      content:
        "Create interactive buildings with clickable SVG, hotspots and layers. Display floor plans, property details, and 2D/3D plans—no coding required.",
    },

    {
      name: "title",
      content:
        "Interactive Real Estate - WordPress Plugin for Create Interactive Buildings",
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
        "interactive real estate, wp plugin , WordPress real estate plugin, floor plan, SVG, property hotspots, 3D property view, building layers, interactive buildings, apartments",
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
