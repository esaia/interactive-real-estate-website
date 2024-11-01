<script setup lang="ts">
import type { PolygonDataCollection } from "~/types/DemoTypes";

const polygonData = ref<PolygonDataCollection[]>([]);
const svgRef = ref();
const activeGroup = ref();
</script>

<template>
  <div>
    <ClientOnly>
      <Canvas
        :projectImage="'http://localhost:10008/wp-content/uploads/2024/10/a530135d14c04e4dbc8b399771c0911e_raw.jpg'"
        :polygon_data="polygonData"
        :svgRef="svgRef"
        :svg="''"
        :activeGroup="activeGroup"
        :isFloorsCanvas="false"
        :isImageContain="false"
        @set-svg-ref="(svgContainer) => (svgRef = svgContainer)"
        @set-active-g="(gTag) => (activeGroup = gTag)"
        @add-polygon-data="
          (key: string) =>
            (polygonData = [...polygonData, { id: '', key, type: '' }])
        "
      />
    </ClientOnly>
  </div>
</template>
