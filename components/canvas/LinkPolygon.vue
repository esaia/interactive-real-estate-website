<script setup lang="ts">
import type { PolygonDataCollection } from "~/types/moduleTypes";
import Close from "../icons/Close.vue";
import CanvasSelect from "./CanvasSelect.vue";

const props = defineProps<{
  activeGroup: SVGGElement | null;
  polygon_data: PolygonDataCollection[] | undefined;
  isFloorsCanvas: boolean;
  isBlockCanvas?: boolean;
}>();

const activeTab = ref<"tooltip" | "block" | "flat" | "floor" | "">("");
const showModal = ref(true);
</script>

<template>
  <Transition name="fade-in-out">
    <div
      v-if="showModal"
      class="absolute right-0 top-0 min-w-[300px] rounded-l-sm bg-white p-3 shadow-lg"
    >
      <div
        class="absolute right-0 top-0 cursor-pointer p-2"
        @click="showModal = false"
      >
        <Close />
      </div>

      <h4 class="text-lg text-gray-900">Link Polygon To Related Data</h4>

      <div v-if="!isFloorsCanvas" class="mt-2 flex [&_div]:px-3">
        <div
          class="sidebar-item-icon icon-hover-text bg-gray-100 !px-4"
          :class="{ '!bg-black text-white': activeTab === 'tooltip' }"
          @click="activeTab = 'tooltip'"
        >
          Action
        </div>

        <div
          v-if="!isBlockCanvas"
          class="sidebar-item-icon icon-hover-text bg-gray-100 !px-4"
          :class="{ '!bg-black text-white': activeTab === 'block' }"
          @click="activeTab = 'block'"
        >
          Block
        </div>
        <div
          class="sidebar-item-icon icon-hover-text bg-gray-100 !px-4"
          :class="{ '!bg-black text-white': activeTab === 'floor' }"
          @click="activeTab = 'floor'"
        >
          Floor
        </div>

        <div
          class="sidebar-item-icon icon-hover-text bg-gray-100 !px-4"
          :class="{ '!bg-black text-white': activeTab === 'flat' }"
          @click="activeTab = 'flat'"
        >
          Flat
        </div>
      </div>

      <div
        v-if="activeTab === 'tooltip'"
        class="mt-3 flex flex-col items-start"
      >
        <p class="text-red-500">You can not choose in demo</p>
        <CanvasSelect :data="[{ title: 'select action', value: '0' }]" />
      </div>

      <div v-if="activeTab === 'block'" class="mt-3 flex flex-col items-start">
        <p class="text-red-500">You can not choose in demo</p>
        <CanvasSelect :data="[{ title: 'select block', value: '0' }]" />
      </div>

      <div
        v-else-if="activeTab === 'floor'"
        class="mt-3 flex flex-col items-start"
      >
        <p class="text-red-500">You can not choose in demo</p>
        <CanvasSelect :data="[{ title: 'select floor', value: '0' }]" />
      </div>

      <div
        v-else-if="activeTab === 'flat'"
        class="mt-3 flex flex-col items-start"
      >
        <p class="text-red-500">You can not choose in demo</p>
        <CanvasSelect :data="[{ title: 'select flat', value: '0' }]" />
      </div>
    </div>
  </Transition>
</template>
