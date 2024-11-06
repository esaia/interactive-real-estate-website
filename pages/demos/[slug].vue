<script setup lang="ts">
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");

const route = useRoute();

const activeDemo = computed(() => {
  return demos.value?.find((demo) => route.params?.slug === demo.id.toString());
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
