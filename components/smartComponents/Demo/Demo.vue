<script setup lang="ts">
import { Project } from "ire-preview";

const props = defineProps<{ shortcodeData: any }>();

const irePlugin = {
  is_premium: true,
  is_gold: true,
};

const isClient = ref(false);

const getMeta = (metaKey: string) => {
  return props.shortcodeData.meta.find(
    (item: any) => item.meta_key === metaKey,
  );
};

const constants = ref({
  PREVIEW_PATH_COLOR:
    getMeta("path_color")?.meta_value || "rgba(255, 255, 255, 0.3)",
  PREVIEW_PATH_HOVER_COLOR:
    getMeta("path_hover_color")?.meta_value || "rgba(250, 250, 250, 0.54)",
  PREVIEW_RESERVED_COLOR:
    getMeta("reserved_color")?.meta_value || "rgba(255, 247, 89, 0.53)",
  PREVIEW_SOLD_COLOR:
    getMeta("sold_color")?.meta_value || "rgba(219, 64, 64, 0.45)",
  PREVIEW_STROKE_COLOR:
    getMeta("stroke_color")?.meta_value || "rgba(0, 0, 0,  1)",
  PREVIEW_PRIMARY_COLOR:
    getMeta("primary_color")?.meta_value || "rgba(45, 45, 46,  1)",
  PREVIEW_STROKE_WIDTH: +getMeta("stroke_width")?.meta_value || 1,
  PREVIEW_BORDER_RADIUS: +getMeta("border_radius")?.meta_value || 0,
});

const colors = reactive({
  path: constants.value?.PREVIEW_PATH_COLOR,
  path_hover: constants.value?.PREVIEW_PATH_HOVER_COLOR,
  reserved: constants.value?.PREVIEW_RESERVED_COLOR,
  sold: constants.value?.PREVIEW_SOLD_COLOR,
  stroke_color: constants.value?.PREVIEW_STROKE_COLOR,
  primary_color: constants.value?.PREVIEW_PRIMARY_COLOR,
  stroke_width: constants.value?.PREVIEW_STROKE_WIDTH,
  border_radius: constants.value?.PREVIEW_BORDER_RADIUS,
});

const cssVariables = computed(() => {
  return {
    "--reserved-color": colors.reserved,
    "--sold-color": colors.sold,
    "--path-hover-color": colors.path_hover,
    "--path-color": colors.path,
    "--stroke-color": colors.stroke_color,
    "--primary-color": colors.primary_color,
    "--stroke-width": colors.stroke_width + "px",
    "--border-radius": colors.border_radius + "px",
  };
});

onMounted(() => {
  isClient.value = true;
});
</script>

<template>
  <div
    :class="{
      '[&_.interactive-real-estate_img]:!rounded-2xl md:[&_.interactive-real-estate_img]:!rounded-[40px]':
        props.shortcodeData.project.id === '166',
    }"
  >
    <div
      v-if="!isClient"
      class="interactive-real-estate ire-relative ire-h-full ire-select-none ire-overflow-hidden pt-3"
      :style="cssVariables"
    >
      <img
        :src="shortcodeData.project.project_image?.[0]?.url"
        alt=""
        class="ire-left-0 ire-top-0 ire-h-full ire-w-full"
      />
      <div
        v-html="shortcodeData.project.svg"
        class="canvas ire-absolute ire-left-0 ire-top-0 ire-h-full ire-w-full path-color pt-3"
      ></div>
    </div>

    <ClientOnly>
      <Project :data="shortcodeData" :irePlugin="irePlugin" />
    </ClientOnly>
  </div>
</template>

<style>
.interactive-real-estate img {
  border-radius: var(--border-radius);
  overflow: hidden;
}
</style>
