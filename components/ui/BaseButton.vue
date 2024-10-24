<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <button
    type="button"
    class="w-full rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
  >
    {{ title }}
  </button>
</template>
