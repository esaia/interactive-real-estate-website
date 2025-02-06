<script setup lang="ts">
const openVideoModal = ref(false);
</script>

<template>
  <div class="container-fluid">
    <div
      class="mx-auto max-w-screen-xl px-4 pb-16 pt-8 text-center lg:px-2 lg:pb-32 lg:pt-32"
    >
      <div class="mb-4 flex items-center justify-center gap-3 lg:mb-8">
        <lightning-icon class="h-14 w-14" />
      </div>
      <h2
        class="mb-4 text-3xl font-extrabold capitalize leading-none tracking-tight text-black md:text-5xl lg:text-7xl"
      >
        The Ultimate <br /><span class="gradient-text"
          >interactive Building</span
        >
        generator
      </h2>
      <p class="desc m-auto max-w-[700px]">
        Quickly make your property images interactive with adding pins, creating
        polygon! Elevate Interactive Real Estate™ lets you create dynamic
        visuals in just minutes.
      </p>

      <div class="mt-10 flex items-center justify-center">
        <nuxt-link
          to="https://youtu.be/dQmqouszdK0"
          target="_blank"
          class="flex cursor-pointer items-center gap-3 transition-all duration-500 ease-out hover:scale-110 active:scale-90 active:duration-150"
        >
          <play-icon class="h-12 w-12 lg:h-16 lg:w-16" />

          <p>See how it works</p>
        </nuxt-link>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition name="fade-in-out">
      <div
        v-if="openVideoModal"
        class="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-700"
      >
        <div
          class="absolute right-12 top-12 cursor-pointer rounded-full bg-white p-5 transition-all duration-500 hover:scale-110 active:scale-90 active:duration-150 [&_svg]:h-5 [&_svg]:w-5"
          @click="openVideoModal = false"
        >
          <x />
        </div>

        <div class="text-white">Video is in progress...</div>
      </div>
    </transition>
  </teleport>
</template>
