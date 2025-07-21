<script setup lang="ts">
import type { DemoType } from "~/types/general";

const features = [
  {
    title: "Create any kind of polygon shapes",
    description:
      "Easily design and customize a variety of polygon shapes to enhance your wordpress adminpanel. Whether you need simple outlines or complex designs, our intuitive tools make it effortless to bring your vision to life. No coding required. Start creating stunning visuals today in you wordpress website!",
    badge: "Easy to use",
    video: "createPolygon",
    poster: "poster-createPolygon",
  },
  {
    title: "Easy zoom and pan for comfortable creation of polygon shapes",
    description:
      "Use the keyboard shortcut to zoom in on your SVG and create detailed polygons. When you're zoomed in, simply press the spacebar to pan around and explore your design easily.",
    badge: "Try it now",
    video: "editPolygon",
    poster: "poster-editPolygon",
  },
  {
    title: "Choose svg path colors",
    description:
      "Easily customize the colors of your SVG paths to match your design aesthetic. With just a few clicks, you can select any color and apply it to paths.",
    badge: "Customizable",
    video: "colors",
    poster: "poster-colors",
    isPremium: true,
  },
  {
    title: "Run script on click of path",
    description:
      "Easily add interactivity to your designs by running custom scripts when a user clicks on any path. This feature allows you to trigger animations or even interact with other elements, enhancing the functionality and user experience of your designs.",
    badge: "Interactive",
    video: "script",
    poster: "poster-script",
    isPremium: true,
  },

  {
    title: "Dynamic Multiple Tooltips",
    description:
      "Simply select your preferred style and it will be applied to your design instantly. No need for custom coding—just pick and go!",
    badge: "Simple and Effective",
    video: "tooltip",
    poster: "poster-tooltip",
    isPremium: false,
  },
];

const demos = useState<DemoType[]>("demos");
</script>

<template>
  <div>
    <main-banner />

    <div class="container-fluid">
      <demo :shortcodeData="demos[2].shortcodeData" />
    </div>

    <feature-cards :features="features" />

    <review />

    <div
      class="container-fluid mx-auto flex max-w-[989px] items-center justify-center pt-20"
    >
      <video-demo />
    </div>

    <plan-cards />

    <todo />

    <faq />

    <services />

    <div
      class="hero-bg pointer-events-none absolute left-0 top-0 z-0 h-[100vh] w-full"
    ></div>
  </div>
</template>
