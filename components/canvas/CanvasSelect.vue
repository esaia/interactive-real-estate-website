<script setup lang="ts">
import type { selectDataItem } from "~/types/moduleTypes";

withDefaults(
  defineProps<{
    data: selectDataItem[];
    placeholder?: string;
    label?: string;
    clearable?: boolean;
    required?: boolean;
  }>(),
  {
    placeholder: "Choose",
    placeholderPrefix: "",
    label: "",
    clearable: false,
  },
);

// const selectModel = defineModel();
</script>

<template>
  <div
    class="ire-w-full ire-min-w-[150px] ire-border ire-border-slate-200 lg:ire-min-w-[250px] w-full"
  >
    <p class="label">{{ label }}</p>
    <div class="ire-relative">
      <select
        class="ire-w-full ire-cursor-pointer ire-appearance-none ire-rounded-none ire-bg-transparent ire-py-2 ire-pl-3 ire-pr-8 ire-text-sm ire-text-slate-700 ire-shadow-sm ire-transition ire-duration-300 ire-ease-linear placeholder:ire-text-slate-400 hover:ire-border-slate-400 focus:ire-border-slate-400 focus:ire-shadow-md focus:ire-outline-none"
      >
        <option
          v-for="item in data"
          :value="item.value"
          :disabled="
            item.title.includes('reserved') || item.title.includes('sold')
          "
        >
          {{ item.title }}
        </option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.2"
        stroke="currentColor"
        class="ire-absolute ire-right-2.5 ire-top-2.5 ire-ml-1 ire-h-5 ire-w-5 ire-text-slate-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
    </div>
  </div>
</template>
