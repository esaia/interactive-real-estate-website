<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <button
    type="button"
    class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    {{ title }}
  </button>
</template>
