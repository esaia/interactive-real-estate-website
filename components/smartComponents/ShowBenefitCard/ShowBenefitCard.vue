<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  badge?: string;
  index?: number;
}>();
</script>

<template>
  <div
    class="container-fluid margin-top flex flex-col items-start gap-4 lg:flex-row lg:gap-28"
  >
    <div class="relative flex-1">
      <p class="gradient-text inline-block">
        {{ badge }}
      </p>

      <h2 class="title mb-4">
        {{ title }}
      </h2>
      <p class="text-gray-500">{{ description }}</p>
      <p class="number" :data-number="index">{{ index }}</p>
    </div>

    <img
      class="w-full flex-1"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndSKnbPY00VnpzMkkfLSOm5xJgMmLCoPwOQ&s"
      alt=""
    />
  </div>
</template>

<style scoped>
.number {
  width: fit-content;
  position: relative;
  font-size: 150px;
  cursor: pointer;
  font-weight: bold;
  font-family: monospace;
  color: white;
  text-shadow:
    rgba(191, 191, 191, 0.5) 1px 0px 0px,
    rgba(191, 191, 191, 0.5) 0.540302px 0.841471px 0px,
    rgba(191, 191, 191, 0.5) -0.416147px 0.909297px 0px,
    rgba(191, 191, 191, 0.5) -0.989993px 0.14112px 0px,
    rgba(191, 191, 191, 0.5) -0.653644px -0.756803px 0px,
    rgba(191, 191, 191, 0.5) 0.283662px -0.958924px 0px,
    rgba(191, 191, 191, 0.5) 0.96017px -0.279416px 0px;
}

.number:hover.number::after {
  background-size: 150%;
  color: rgba(255, 255, 255, 0);
  opacity: 1;
  background-position: center;
}

.number::after {
  content: attr(data-number);
  color: rgb(255, 255, 255);
  position: absolute;
  inset: 0;
  background: url(https://d2diavcdqru7hy.cloudfront.net/homepage/our-services/numbwea-01.png-1712148724.webp);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-background-size: 100%;
  background-size: 100%;
  -webkit-background-position: center;
  background-position: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  text-shadow: none;
  background-position: center;
}
</style>
