<script setup lang="ts">
defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <div class="group h-fit w-fit cursor-pointer py-3">
    <div class="space-y-2">
      <span
        class="block h-1 w-10 origin-center rounded-full bg-slate-800 transition-transform ease-in-out"
        :class="{ 'translate-y-1.5 rotate-45': active }"
      ></span>
      <span
        class="block h-1 w-8 origin-center rounded-full bg-slate-800 transition-transform ease-in-out"
        :class="{ '!w-10 !-translate-y-1.5 !-rotate-45': active }"
      ></span>
    </div>
  </div>
</template>
