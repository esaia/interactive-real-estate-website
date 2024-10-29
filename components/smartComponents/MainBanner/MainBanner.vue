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
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-7xl"
      >
        Elevate <br /><span class="gradient-text">Interactive Real Estate</span>
      </h2>
      <p class="desc m-auto max-w-[700px]">
        Quickly make your property images interactive with pins, polygon!
        Elevate Interactive Real Estate lets you create dynamic visuals in just
        minutes.
      </p>

      <div class="mt-10 flex items-center justify-center">
        <div
          @click="openVideoModal = true"
          class="flex cursor-pointer items-center gap-3 transition-all duration-500 ease-out hover:scale-110"
        >
          <play-icon class="h-16 w-16" />

          <p>see how it works</p>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition name="fade-in-out">
      <div
        v-if="openVideoModal"
        class="fixed left-0 top-0 z-10 h-full w-full bg-gray-600"
      >
        youtube link
      </div>
    </transition>
  </teleport>
</template>
