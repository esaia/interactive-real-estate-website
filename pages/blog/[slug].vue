<script setup lang="ts">
import { formatBlogDate, shareInPopup } from "~/composable/helpers";

const route = useRoute();

const { data: similarArticles } = await useAsyncData("articles", () => {
  return queryCollection("content")
    .where("stem", "NOT LIKE", route.path.split("/")?.[2])
    .limit(2)
    .all();
});

const { data: item } = await useAsyncData(route.path, () =>
  queryCollection("content")
    .where("stem", "LIKE", route.path.split("/")?.[2])
    .first(),
);

const url = ref("");

const title = computed(() => {
  return item.value?.seo.title;
});

const description = computed(() => {
  return item.value?.seo.description;
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const share = (url: string) => {
  shareInPopup(url);
};

onMounted(() => {
  url.value = window.location.href;
});

useSeoMeta({
  title: title.value,
  description: description.value,

  twitterTitle: title.value,
  twitterDescription: description.value,
  twitterImage: (item.value?.meta as any).image?.src,
  twitterImageAlt: (item.value?.meta as any).image?.alt,

  ogTitle: title.value,
  ogDescription: description.value,

  ogImage: (item.value?.meta as any).image?.src,
  ogImageAlt: (item.value?.meta as any).image?.alt,
});
</script>
<template>
  <div v-if="item" class="container-fluid mx-auto max-w-4xl space-y-10">
    <div class="mt-10 flex flex-1 items-center gap-3">
      <p class="text-xs">
        {{ formatBlogDate((item.meta.publishedAt as string) || "") }}
      </p>

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

    <h1 class="text-3xl font-bold">{{ title }}</h1>

    <div class="relative aspect-[4/2] w-full">
      <img
        :src="(item.meta as any)?.image?.src"
        :alt="(item.meta as any)?.image?.alt || ''"
        class="absolute left-0 top-0 h-full w-full object-cover"
      />
    </div>

    <ContentRenderer :value="item" class="prose" />

    <div class="mt-12 border-t pt-8">
      <h3 class="mb-4 text-lg font-semibold">Share this post</h3>
      <div class="flex items-center gap-4">
        <div
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer text-gray-700 transition-colors hover:text-[#1877F2]"
          aria-label="Share on Facebook"
          @click="
            share(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            )
          "
        >
          <FbIc />
        </div>

        <div
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer text-gray-700 transition-colors hover:text-[#0077B5]"
          aria-label="Share on LinkedIn"
          @click="
            share(
              `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(item.title)}`,
            )
          "
        >
          <LinkedinIc />
        </div>

        <div
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer text-gray-700 transition-colors hover:text-black"
          aria-label="Share on Twitter"
          @click="
            share(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(item.title)}&url=${encodeURIComponent(url)}`,
            )
          "
        >
          <TwitterIc />
        </div>

        <button
          @click="copyToClipboard"
          class="text-gray-700 transition-colors hover:text-gray-900"
          aria-label="Copy link"
        >
          <ClipBloardIc />
        </button>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-10">
      <blogCard
        v-for="item in similarArticles"
        :key="item.id"
        :item="item"
        layout="vertical"
      />
    </div>
  </div>
</template>
