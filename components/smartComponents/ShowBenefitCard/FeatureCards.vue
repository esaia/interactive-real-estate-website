<script setup lang="ts">
defineProps<{
  features: {
    title: string;
    description: string;
    badge: string;
    video: string;
    isPremium?: boolean;
  }[];
}>();
</script>

<template>
  <div
    class="container-fluid padding-top flex flex-col items-start gap-4 rounded lg:flex-row lg:gap-28 [&:nth-child(odd)]:lg:flex-row-reverse [&_.glow]:odd:hidden"
    v-for="(item, index) in features"
    :key="index"
  >
    <div class="relative flex-1">
      <p class="gradient-text inline-block uppercase">
        {{ item?.badge }}
      </p>

      <h2 class="title mb-4">
        {{ item?.title }}
      </h2>

      <p class="desc">{{ item?.description }}</p>
      <p class="number" :data-number="index + 1">{{ index + 1 }}</p>

      <div
        v-if="item?.isPremium"
        class="w-fit rounded-full bg-black p-2 text-xs"
      >
        <p class="gradient-text inline-block uppercase">premium feature</p>
      </div>
    </div>
    <div class="relative flex-1 overflow-hidden rounded-xl">
      <video
        playsinline
        loop
        muted
        :autoplay="!$device.isMobileOrTablet"
        :controls="$device.isMobileOrTablet"
        :poster="`/assets/videos/poster-${item?.video}.webp`"
      >
        <source :src="`/assets/videos/${item?.video}.webm`" type="video/webm" />
        <source :src="`/assets/videos/${item?.video}.mp4`" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
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
  background: url(/decor.webp);
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
