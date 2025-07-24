<script setup lang="ts">
const model = defineModel();

const handleCheckboxChange = () => {
  model.value = !model.value;
};
</script>

<template>
  <label class="flex cursor-pointer select-none items-center">
    <div class="relative">
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <div
        class="block h-8 w-14 rounded-full bg-black"
        :class="{ '!bg-primary': model }"
      ></div>
      <div
        :class="{ 'translate-x-full bg-primary': model }"
        class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"
      ></div>
    </div>
  </label>
</template>
