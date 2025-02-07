<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    type?: "1" | "2";
  }>(),
  {
    type: "1",
  },
);
</script>

<template>
  <button
    type="button"
    class="w-full rounded-lg px-5 py-2.5 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
    :class="{
      'bg-primary text-white hover:bg-red-700': type === '1',
      'border border-primary hover:bg-primary hover:text-white': type === '2',
    }"
  >
    {{ title }}
  </button>
</template>
