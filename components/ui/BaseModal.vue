<script setup lang="ts">
defineEmits<{
  (e: "close"): void;
}>();
</script>
<template>
  <div
    class="fixed inset-0 z-40 flex cursor-pointer items-center justify-center bg-black bg-opacity-50 p-4"
    @click="$emit('close')"
  >
    <div class="w-fit cursor-default lg:min-w-[500px]" @click.prevent.stop="">
      <slot />
    </div>
  </div>
</template>
