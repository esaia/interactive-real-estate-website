<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  badge?: string;
}>();
</script>

<template>
  <div
    class="container-fluid my-52 flex flex-col items-start gap-10 lg:flex-row"
  >
    <div class="relative flex-1">
      <p class="gradient-text inline-block">
        {{ badge }}
      </p>

      <h2 class="title mb-4">
        {{ title }}
      </h2>
      <p class="text-gray-500">{{ description }}</p>
      <img
        class="glow pointer-events-none absolute -left-72 -top-72 w-full"
        src="/assets/images/Glow-1.png"
        alt=""
      />
    </div>

    <img
      class="flex-1"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndSKnbPY00VnpzMkkfLSOm5xJgMmLCoPwOQ&s"
      alt=""
    />
  </div>
</template>
