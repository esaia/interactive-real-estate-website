<script setup lang="ts"></script>

<template>
  <footer class="bg-gray-50">
    <div class="container-fluid relative mt-20 w-full py-5">
      <div
        class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
      >
        <div>
          <div class="flex items-center gap-3">
            <logo class="h-12 w-12" />
            <h5 class="text-xl font-semibold text-slate-800">
              Interactive Real Estate
            </h5>
          </div>
          <p class="mt-2 max-w-[500px] text-gray-500">
            Create clickable, customizable interactive buildings and property
            layouts for a dynamic and engaging website experience.
          </p>
        </div>
        <div
          class="flex flex-col items-start gap-5 lg:flex-row lg:items-center"
        >
          <!-- <nuxt-link to="/#pricing" class="text-sm hover:underline">
            Pricing
          </nuxt-link> -->

          <nuxt-link to="/doc" class="text-sm hover:underline">
            Documentation
          </nuxt-link>

          <nuxt-link to="/demos" class="text-sm hover:underline">
            Demos
          </nuxt-link>

          <nuxt-link to="/module" class="text-sm hover:underline">
            Module
          </nuxt-link>

          <nuxt-link class="text-sm hover:underline"> Change Log </nuxt-link>
        </div>
      </div>

      <div
        class="mt-12 flex w-full flex-col items-center justify-center border-t border-slate-200 py-4 md:flex-row md:justify-between"
      >
        <p class="mb-4 block text-center text-sm text-slate-500 md:mb-0">
          Copyright © 2024
          <nuxt-link href="/">Interactive Real Estate™</nuxt-link>. All Rights
          Reserved.
        </p>

        <div class="flex items-center gap-2">
          <nuxt-link
            to="https://www.youtube.com/@interactiverealestate"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <youtube class="h-6 w-6 cursor-pointer [&_path]:!fill-black" />
          </nuxt-link>

          <nuxt-link
            to="/"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <wordpress-icon
              class="h-6 w-6 cursor-pointer [&_path]:!fill-black"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
