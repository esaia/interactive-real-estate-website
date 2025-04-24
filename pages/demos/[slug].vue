<script setup lang="ts">
import { pluginName, siteBaseUrl } from "~/composable/constants";
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");
const config = useRuntimeConfig();

const baseUrl = config.app.siteUrl || siteBaseUrl;

const router = useRouter();
const route = useRoute();

const activeDemo = computed(() => {
  return demos.value?.find((demo) => route.params?.slug === demo.slug);
});

onMounted(() => {
  if (!activeDemo.value) return router.push("/404");
});

useHead({
  script: [{ src: "https://platform.x.com/widgets.js" }],
});

useSeoMeta({
  title: activeDemo.value?.title + " | " + pluginName,
  description: activeDemo.value?.desc,
});
</script>

<template>
  <div class="container-fluid mt-10">
    <demo
      v-if="activeDemo && activeDemo.shortcodeData"
      :shortcode-data="activeDemo.shortcodeData"
    />
  </div>
</template>
