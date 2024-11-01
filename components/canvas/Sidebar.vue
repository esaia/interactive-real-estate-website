<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
// import Collapse from "../icons/Collapse.vue";
// import Edit from "../icons/Edit.vue";
// import Info from "../icons/Info.vue";
// import Delete from "../icons/Delete.vue";
// import Unlink from "../icons/Unlink.vue";
import type { PolygonDataCollection } from "~/types/DemoTypes";
import Edit from "../icons/Edit.vue";
import Unlink from "../icons/Unlink.vue";
import Delete from "../icons/Delete.vue";
import Collapse from "../icons/Collapse.vue";
import Info from "../icons/Info.vue";

const isClollapsed = ref(false);

const emit = defineEmits<{
  (e: "setActiveG", gTag: SVGGElement | null): void;
  (e: "deleteG", key: string): void;
  (
    e: "updatePolygonData",
    key: string,
    updatedData: PolygonDataCollection,
  ): void;
}>();

const props = defineProps<{
  polygon_data: PolygonDataCollection[] | undefined;
  activeGroup: SVGGElement | null;
  svgRef: HTMLElement | null;
}>();

const sidebarRef = ref<HTMLDivElement>();
const showEditModal = ref<"tooltip" | "flat" | "floor" | "block" | "">("");
const showInfo = ref(false);

const setActiveG = (item: PolygonDataCollection) => {
  const gTag =
    (props.svgRef?.querySelector(`g#${item.key}`) as SVGGElement) || null;

  if (gTag) {
    emit("setActiveG", gTag);
  }
};

const deleteG = (item: PolygonDataCollection) => {
  emit("deleteG", item.key);
};

const unlink = (key: string) => {
  emit("updatePolygonData", key, { id: "", key, type: "" });
  emit("setActiveG", null);
};

watch(
  () => props.activeGroup,
  async (ns) => {
    await nextTick();

    const activeElement = sidebarRef.value?.querySelector(".active");

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  },
);
</script>

<template>
  <div>
    <div
      class="custom-scroll absolute left-0 top-0 flex h-full flex-col bg-white/70 transition-all duration-300 ease-out"
      :class="{
        '-translate-x-full': isClollapsed,
        'translate-x-0': !isClollapsed,
      }"
    >
      <div
        class="absolute left-full top-1/2 translate-y-1/2 cursor-pointer rounded-r-md bg-white/60 p-1 transition-all hover:bg-white"
        @click="isClollapsed = !isClollapsed"
      >
        <Collapse
          :class="{
            'rotate-180': isClollapsed,
            'rotate-0': !isClollapsed,
          }"
        />
      </div>

      <div class="flex items-center justify-between border-b p-3">
        <h3 class="!text-lg">Shapes:</h3>

        <div
          class="cursor-pointer"
          @mouseenter="showInfo = true"
          @mouseleave="showInfo = false"
        >
          <Info />
        </div>
      </div>

      <div
        ref="sidebarRef"
        class="flex max-h-full flex-col gap-[1px] overflow-y-auto py-2"
      >
        <div
          v-if="polygon_data"
          v-for="item in Object.values(polygon_data)"
          :key="item.key"
          class="group flex w-full min-w-60 cursor-pointer items-center justify-between gap-5 px-3 py-3 transition-colors hover:bg-white/90 hover:ring-1 hover:ring-black"
          :class="{
            'active bg-white/90 ring-1 ring-black':
              item.key === activeGroup?.getAttribute('id'),
          }"
          @click="setActiveG(item)"
        >
          <div class="flex items-center gap-1 text-sm">
            <p>shape |</p>
            <span v-if="item.type"> {{ item.type }} id: {{ item.id }} </span>
            <span v-else>#{{ item.key?.slice(0, 6) }}</span>
          </div>

          <div class="flex">
            <div class="sidebar-item-icon icon-hover-text" title="unlink">
              <Unlink />
            </div>

            <div class="sidebar-item-icon icon-hover-text" title="edit">
              <Edit />
            </div>

            <div
              class="sidebar-item-icon icon-hover-text"
              @click.stop="deleteG(item)"
              title="delete"
            >
              <Delete />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.info-item {
  @apply flex items-center gap-2 !text-lg;
}

.sidebar-item-icon {
  @apply h-fit cursor-pointer !border !border-r-0 !border-solid !border-black p-1 !transition-all first:rounded-l-sm last-of-type:rounded-r-sm last-of-type:!border-r hover:text-white [&_svg]:h-3 [&_svg]:w-3;
}

.icon-hover-text {
  @apply transition-all hover:bg-black/80 [&_path]:hover:fill-white [&_path]:hover:text-white;
}
</style>
