<script setup lang="ts">
// import { MyButton, MyDiv } from "irePreview";
// "irePreview": "/Users/esaia/Desktop/my projects/ire/ire-preview-library",
import "ire-preview/dist/styles.css";
const constants = useState("constants");

constants.value = {
  CIRCLE_RADIUS: 4,
  HOVER_CIRCLE_RADIUS: 12,
  PATH_COLOR: "#cb443579",
  SELECTED_PATH_COLOR: "#cb4435af	",
  NON_SELECTED_PATH_COLOR: "#cb443529",
  CIRCLE_COLOR: "#ffff",
  CIRCLE_HOVER_COLOR: "rgba(255, 255, 255, 0.70)",

  PREVIEW_PATH_COLOR: "rgba(255, 255, 255, 0.3)",
  PREVIEW_PATH_HOVER_COLOR: "rgba(250, 250, 250, 0.54)",
  PREVIEW_RESERVED_COLOR: "rgba(255, 247, 89, 0.53)",
  PREVIEW_SOLD_COLOR: "rgba(219, 64, 64, 0.45)",
  PREVIEW_STROKE_COLOR: "rgba(0, 0, 0,  1)",
  PREVIEW_STROKE_WIDTH: 1,
};
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
