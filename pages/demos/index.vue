<script setup lang="ts">
import type { DemoType } from "~/types/general";
const demos = useState<DemoType[]>("demos");
</script>

<template>
  <div
    class="container-fluid mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    <div v-for="demo in demos" :key="demo.id" class="group cursor-pointer">
      <nuxt-link
        :to="`/demos/${demo.id}`"
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
        <h3 class="title-sm absolute bottom-0 left-0 z-10 p-2 text-white">
          {{ demo.title }}
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>
