<script setup lang="ts">
defineProps<{
  features: {
    title: string;
    description: string;
    badge: string;
    video: string;
    isPremium?: boolean;
    isGold?: boolean;
  }[];
}>();

const img = useImage();
const getPosterUrl = (video: string) =>
  video
    ? img(`/assets/videos/poster-${video}.webp`, {
        width: 800,
        height: 565,
        format: "webp",
      })
    : "";
</script>

<template>
  <div
    class="rounded bg-gray-50 [&_.irep-feature-desc]:[&:nth-child(even)]:lg:pr-0 [&_.irep-feature-desc]:[&:nth-child(odd)]:lg:pl-0 [&_.irep-video]:[&:nth-child(even)]:lg:-order-1"
    v-for="(item, index) in features"
    :key="index"
  >
    <div
      class="container-fluid grid items-start lg:grid-cols-2 [&_.glow]:odd:hidden"
    >
      <div class="irep-feature-desc relative py-4 lg:p-10">
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
          <p class="gradient-text inline-block uppercase">premium license</p>
        </div>

        <div
          v-if="item?.isGold"
          class="w-fit rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-2 text-xs font-semibold"
        >
          <p class="inline-block font-semibold uppercase text-white">
            gold license
          </p>
        </div>
      </div>

      <div class="irep-video relative w-full flex-1 overflow-hidden pt-[85%]">
        <video
          playsinline
          loop
          muted
          :autoplay="!$device.isMobileOrTablet"
          :controls="$device.isMobileOrTablet"
          :poster="getPosterUrl(item?.video ?? '')"
          class="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source
            :src="`/assets/videos/${item?.video}.webm`"
            type="video/webm"
          />
          <source :src="`/assets/videos/${item?.video}.mp4`" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
