<script setup lang="ts">
import { NuxtLink } from "#components";

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
      <h1
        class="mb-4 font-sans text-3xl font-extrabold capitalize leading-none tracking-tight text-black md:text-5xl lg:text-7xl"
      >
        The Ultimate <br />
        <span class="gradient-text font-sans font-extrabold">
          interactive Building
        </span>
        generator
      </h1>
      <p class="desc m-auto max-w-[700px]">
        Quickly make your property images interactive with adding pins, creating
        polygon! Elevate Interactive Real Estate™ lets you create dynamic
        visuals in just minutes.

        <span class="break-before-avoid whitespace-nowrap">
          (
          <NuxtLink
            to="https://wordpress.org/plugins/interactive-real-estate/"
            target="_blank"
            class="link relative pl-5"
          >
            <wordpress-icon
              class="absolute left-0 top-1 h-4 w-4 [&_path]:fill-[#20749a]"
            />

            WordPress Plugin
          </NuxtLink>
          )
        </span>
      </p>

      <div class="mt-10 flex items-center justify-center">
        <div
          class="flex cursor-pointer items-center gap-3 transition-all duration-500 ease-out hover:scale-110 active:scale-90 active:duration-150"
          @click="openVideoModal = true"
        >
          <play-icon class="h-12 w-12 lg:h-16 lg:w-16" />

          <p>See how it works</p>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition name="fade-in-out">
      <div
        v-if="openVideoModal"
        class="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-700/50 p-4 lg:p-20"
      >
        <div
          class="absolute right-12 top-12 cursor-pointer rounded-full bg-white p-5 transition-all duration-500 hover:scale-110 active:scale-90 active:duration-150 [&_svg]:h-5 [&_svg]:w-5"
          @click="openVideoModal = false"
        >
          <x />
        </div>

        <div class="relative w-full max-w-screen-2xl">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/1066104737?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              title="Interactive Real Estate (WordPress plugin)"
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
