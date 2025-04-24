<script setup lang="ts">
import { pluginName } from "~/composable/constants";
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");

const route = useRoute();
const router = useRouter();

const { data } = await useAsyncData("all-doc", async () => {
  const data = await queryCollection("doc").all();

  const ordered = data.sort((a: any, b: any) => a.meta?.order - b.meta?.order);

  return ordered;
});

const { data: item } = await useAsyncData(route.path, async () => {
  const data = await queryCollection("doc")
    .where("path", "LIKE", route.path)
    .first();

  if (data) {
    return data;
  } else {
    router.push("/doc/intro");
  }
});

const title = computed(() => {
  return item.value?.meta.metaTitle || item.value?.seo.title;
});

const description = computed(() => {
  return item.value?.meta?.metaDesc?.toString() || item.value?.seo.description;
});

const isIntroPage = computed(() => {
  return route.path.startsWith("/doc/intro");
});

onMounted(() => {
  // @ts-ignore
  window?.twttr?.widgets.load();
});

useSeoMeta({
  title: title.value + " | " + pluginName,
  description: description.value,
});
</script>

<template>
  <div
    class="container-fluid flex flex-col justify-between gap-10 pt-12 lg:flex-row lg:gap-12"
  >
    <div
      class="top-28 mr-4 flex h-fit flex-col gap-2 rounded-md p-3 pl-0 text-gray-800 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gray-100 lg:sticky lg:w-96"
    >
      <NuxtLink
        v-for="item in data"
        :to="item.path"
        class="cursor-pointer hover:text-primary"
      >
        {{ item.title }}
      </NuxtLink>
    </div>

    <div v-if="item" class="w-full [&_hr]:mb-8 [&_thead]:border-[#e5e7eb]">
      <ContentRenderer :value="item" class="prose contents" />
      <div v-if="isIntroPage">
        <demo :shortcode-data="demos[1]?.shortcodeData" />
      </div>
    </div>
  </div>
</template>
