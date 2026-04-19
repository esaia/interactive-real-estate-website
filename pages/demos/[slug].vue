<script setup lang="ts">
import { FlatsList } from "ire-preview";
import { PLUGIN_NAME } from "~/composable/constants";
import type { DemoType } from "~/types/general";
import { IRE_PLUGIN } from "~/composable/data";
const demos = useState<DemoType[]>("demos");

const router = useRouter();
const route = useRoute();

const activeDemo = computed(() => {
  return demos.value?.find((demo) => route.params?.slug === demo.slug);
});

onMounted(() => {
  if (!activeDemo.value) return router.push("/404");
});

useSeoMeta({
  title: activeDemo.value?.title + " | " + PLUGIN_NAME,
  description: activeDemo.value?.desc,
});
</script>

<template>
  <div class="container-fluid mt-10">
    <template v-if="activeDemo">
      <demo
        v-if="!activeDemo.isFlatsShortcode && activeDemo.shortcodeData"
        :key="activeDemo?.title"
        :shortcode-data="activeDemo.shortcodeData"
      />

      <client-only v-else>
        <FlatsList
          :data="activeDemo?.shortcodeData"
          :irePlugin="IRE_PLUGIN"
          layout="mixed"
          fromListView
        />
      </client-only>
    </template>
  </div>
</template>
