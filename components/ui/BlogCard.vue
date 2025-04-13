<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";
import { formatBlogDate } from "~/composable/helpers";

const props = defineProps<{
  item: BlogCollectionItem;
  layout?: "horizontal" | "vertical";
  imageSize?: string;
}>();

const horizontal = computed(() => {
  return props.layout === "horizontal";
});
</script>

<template>
  <nuxt-link
    :to="item.path"
    class="group"
    :class="{
      'mx-auto flex w-full flex-col justify-center gap-10 md:flex-row':
        horizontal,
    }"
  >
    <div :class="horizontal ? 'w-full md:max-w-[400px]' : ''">
      <img
        :src="(item.meta as any)?.image?.src"
        :alt="(item.meta as any)?.image?.alt || ''"
        class="aspect-[4/2] object-cover"
        :class="imageSize ? imageSize : 'w-full'"
      />
    </div>

    <div :class="horizontal ? 'flex-1' : 'mt-5'">
      <div
        class="flex flex-col items-start gap-3 pb-5 lg:flex-row lg:items-center"
      >
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

      <h3
        class="mb-3 line-clamp-2 text-lg font-semibold group-hover:underline lg:text-xl"
      >
        {{ item.title }}
      </h3>

      <h4 class="line-clamp-3 text-sm text-gray-500">
        {{ item.description }}
      </h4>
    </div>
  </nuxt-link>
</template>
