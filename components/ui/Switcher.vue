<script setup lang="ts">
const model = defineModel<boolean>();

defineProps<{
  ariaLabel?: string;
}>();

const inputId = `switcher-${Math.random().toString(36).slice(2, 9)}`;

const handleCheckboxChange = () => {
  model.value = !model.value;
};
</script>

<template>
  <label :for="inputId" class="flex cursor-pointer select-none items-center">
    <div class="relative">
      <input
        :id="inputId"
        type="checkbox"
        class="sr-only"
        :aria-label="ariaLabel ?? 'Toggle option'"
        @change="handleCheckboxChange"
      />
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
