<script setup lang="ts">
const { data: articles } = await useAsyncData("articles", async () => {
  const all = await queryCollection("content").all();

  return all.sort((a, b) => {
    const dateA = new Date((a.meta as any)?.publishedAt || 0);
    const dateB = new Date((b.meta as any)?.publishedAt || 0);
    return dateB.getTime() - dateA.getTime();
  });
});

useSeoMeta({
  title: "Blog - Interactive Real Estate",
  description:
    "Discover how our Interactive Real Estate WordPress plugin revolutionizes property displays with 3D building visualization, SVG floor plans with hotspots, and interactive maps.",
});
</script>

<template>
  <div class="container-fluid">
    <h1 class="title pt-10 text-center">Our blog</h1>
    <h2 class="mx-auto max-w-2xl py-5 text-center text-gray-500">
      Discover expert perspectives on property markets alongside powerful tools
      from our Interactive Real Estate plugin. Whether you're an agent, buyer,
      or investor, our blog delivers actionable advice enhanced by interactive
      buildings, property listing, and floor plans - all powered by our
      innovative WordPress solution."
    </h2>

    <div class="mt-10 grid grid-cols-1 gap-10">
      <blogCard
        v-for="item in articles"
        :key="item.id"
        :item="item"
        layout="horizontal"
      />
    </div>
  </div>
</template>
