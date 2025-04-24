<script setup lang="ts">
import { pluginName } from "~/composable/constants";
import type { DemoType } from "~/types/general";
const demos = useState<DemoType[]>("demos");

useSeoMeta({
  title: "Demos" + " | " + pluginName,
  description:
    "Explore live demos of Interactive Real Estate's powerful WordPress plugin. See clickable floor plans, property showcases, and interactive building maps in action before you buy.",
});
</script>

<template>
  <div
    class="container-fluid grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-3"
  >
    <div v-for="demo in demos" :key="demo.id" class="group cursor-pointer">
      <nuxt-link
        :to="`/demos/${demo.slug}`"
        class="relative block w-full overflow-hidden rounded-md pt-[60%]"
      >
        <img
          :src="demo.img"
          alt="Create Project"
          class="absolute left-0 top-0 h-full w-full transition-all group-hover:scale-105 group-hover:opacity-85"
        />

        <div
          class="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-slate-900/0 to-black/40"
        ></div>
        <h3
          class="title-md absolute bottom-0 left-0 z-10 p-4 !font-normal text-white"
        >
          {{ demo.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>
