<script setup lang="ts">
import type { DemoType } from "~/types/general";
import Demo from "~/components/smartComponents/Demo/Demo.vue";

const demos = useState<DemoType[]>("demos");

const route = useRoute();

const activeDemo = computed(() => {
  return demos.value?.find((demo) => route.params?.slug === demo.id.toString());
});
</script>

<template>
  <div class="mt-10">
    <Demo
      v-if="activeDemo && activeDemo.shortcodeData"
      :shortcode-data="activeDemo.shortcodeData"
    />
  </div>
</template>
