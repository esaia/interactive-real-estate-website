<script setup lang="ts">
const openVideoModal = ref(false);
</script>

<template>
  <div class="container-fluid">
    <div class="mx-auto max-w-screen-xl px-4 pb-16 pt-32 text-center lg:px-12">
      <img src="" alt="Logo" class="mx-auto mb-8 w-24" />
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl"
      >
        Elevate <br /><span class="gradient-text">Interactive Real Estate</span>
      </h1>
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
