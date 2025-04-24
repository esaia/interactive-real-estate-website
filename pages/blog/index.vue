<script setup lang="ts">
const title = "Blog | Interactive Real Estate";
const description =
  "Discover how our Interactive Real Estate WordPress plugin revolutionizes property displays with 3D building visualization, SVG floor plans with hotspots, and interactive maps.";

const { data: articles } = await useAsyncData("articles", async () => {
  const all = await queryCollection("blog").all();

  return all.sort((a, b) => {
    const dateA = new Date((a.meta as any)?.publishedAt || 0);
    const dateB = new Date((b.meta as any)?.publishedAt || 0);
    return dateB.getTime() - dateA.getTime();
  });
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <div class="container-fluid">
    <h1 class="title pt-10 text-center">Our blog</h1>
    <h2 class="mx-auto max-w-3xl py-5 text-center text-gray-500">
      Discover blogs on interactive images, HTML image maps in WordPress pages
      with our plugin for creating clickable maps. Boost engagement with
      step-by-step guides on converting images to interactive maps. Start
      building today!
    </h2>

    <div class="m-auto mt-10 grid max-w-5xl grid-cols-1 gap-10">
      <blogCard
        v-for="item in articles"
        :key="item.id"
        :item="item"
        layout="horizontal"
      />
    </div>
  </div>
</template>
