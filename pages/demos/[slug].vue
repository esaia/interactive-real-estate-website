<script setup lang="ts">
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");

const router = useRouter();
const route = useRoute();

const activeDemo = computed(() => {
  return demos.value?.find((demo) => route.params?.slug === demo.id.toString());
});

onMounted(() => {
  if (!activeDemo.value) return router.push("/404");
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
