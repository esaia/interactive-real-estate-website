<script setup>
const benefitData = [
  {
    title: "Create Any Kind of Polygon Shapes",
    description:
      "Easily design and customize a variety of polygon shapes to enhance your projects. Whether you need simple outlines or complex designs, our intuitive tools make it effortless to bring your vision to life. No coding required—start creating stunning visuals today!",
    badge: "Easy to use",
  },
  {
    title: "Easy Zoom and Pan for Precise Creation",
    description:
      "Use the Control + '+' keyboard shortcut to zoom in on your SVG and create detailed polygons. When you're zoomed in, simply press the spacebar to pan around and explore your design easily.",
    badge: "Try it now",
  },
  {
    title: "Easy Zoom and Pan for Precise Creation",
    description:
      "Use the Control + '+' keyboard shortcut to zoom in on your SVG and create detailed polygons. When you're zoomed in, simply press the spacebar to pan around and explore your design easily.",
    badge: "Try it now",
  },
];
</script>

<template>
  <div>
    <main-banner />
    <demo />

    <show-benefit-card
      v-for="(item, i) in benefitData"
      :key="item.title"
      class="[&:nth-child(odd)]:lg:flex-row-reverse [&_.glow]:odd:hidden"
      :badge="item.badge"
      :title="item.title"
      :description="item.description"
      :index="i + 1"
    />

    <pricing-card />

    <faq />

    <div
      class="hero-bg pointer-events-none absolute left-0 top-0 z-0 h-[100vh] w-full"
    ></div>
  </div>
</template>
