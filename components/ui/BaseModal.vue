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
    <div
      class="max-h-[96vh] w-fit cursor-default overflow-y-auto lg:min-w-[500px]"
      @click.prevent.stop=""
    >
      <slot />
    </div>
  </div>
</template>
