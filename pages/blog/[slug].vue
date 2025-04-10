<script setup lang="ts">
const route = useRoute();

const { data: item } = await useAsyncData(route.path, () =>
  queryCollection("content")
    .where("stem", "LIKE", route.path.split("/")?.[2])
    .first(),
);
</script>
<template>
  <div v-if="item" class="container-fluid">
    <div class="relative mx-auto aspect-[4/2] w-full max-w-3xl">
      <img
        :src="(item.meta as any)?.image?.src"
        :alt="(item.meta as any)?.image?.alt || ''"
        class="absolute left-0 top-0 h-full w-full rounded-md object-cover"
      />
    </div>

    <div class="flex flex-1 items-center gap-3 pb-5">
      <p class="text-xs">Mar 16, 2020</p>

      <div class="flex flex-1 flex-wrap items-center gap-2">
        <p
          v-for="cat in item.meta.categories"
          :key="cat"
          class="h-fit w-max rounded-full bg-gray-100 px-3 py-1 text-center text-xs"
        >
          {{ cat }}
        </p>
      </div>
    </div>
  </div>
</template>
