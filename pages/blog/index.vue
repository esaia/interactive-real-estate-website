<script setup lang="ts">
const { data: articles } = await useAsyncData("articles", () => {
  return queryCollection("content").all();
});

console.log("DATAAA ->>", articles.value);
</script>

<template>
  <div class="container-fluid">
    <h1 class="title pt-10 text-center">From the blog</h1>
    <p class="mx-auto max-w-2xl py-5 text-center text-gray-600">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
      exercitationem impedit, ipsum cum ducimus reiciendis voluptate officiis
      corporis esse repellat?
    </p>

    <div class="mt-10 grid grid-cols-1 gap-10">
      <blogCard
        v-for="item in articles"
        :key="item.id"
        :item="item"
        layout="horizontal"
      />
    </div>

    <div class="mt-10 grid grid-cols-3 gap-10">
      <blogCard
        v-for="item in articles"
        :key="item.id"
        :item="item"
        layout="vertical"
      />
    </div>

    <!-- {{ articles }} -->
    <!-- <ContentRenderer v-if="data" :value="data" /> -->
  </div>
</template>
