<script setup lang="ts">
const links = [
  { title: "Demos", url: "/demos" },
  { title: "Module", url: "/module" },
  { title: "Affiliate Program", url: "/affiliate" },
  {
    title: "Change Log",
    url: "https://wordpress.org/plugins/interactive-real-estate/#developers",
    targetBlank: true,
  },
];
</script>

<template>
  <footer class="bg-gray-50">
    <div class="container-fluid relative mt-20 w-full py-5">
      <div
        class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
      >
        <div>
          <div class="flex items-center gap-3">
            <logo class="h-12 w-12" />
            <h5 class="text-xl font-medium text-slate-800">
              Interactive Real Estate
            </h5>
          </div>
          <p class="mt-2 max-w-[500px] text-gray-500">
            Create clickable, customizable interactive buildings and property
            layouts for a dynamic and engaging website experience.
          </p>
        </div>
        <div
          class="flex min-w-max flex-col items-start gap-5 lg:flex-row lg:items-center"
        >
          <!-- <nuxt-link to="/#pricing" class="text-sm hover:underline">
            Pricing
          </nuxt-link> -->

          <nuxt-link
            v-for="item in links"
            :key="item.url"
            :to="item.url"
            :target="item.targetBlank ? '_blank' : ''"
            class="text-sm hover:underline"
          >
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>

      <div
        class="mt-12 flex w-full flex-col items-center justify-center border-t border-slate-200 py-4 md:flex-row md:justify-between"
      >
        <p class="mb-4 block text-center text-sm text-slate-500 md:mb-0">
          Copyright © 2025
          <nuxt-link href="/" class="underline hover:underline"
            >Interactive Real Estate™</nuxt-link
          >. All Rights Reserved.
        </p>

        <div class="flex items-center gap-2">
          <!-- <nuxt-link
            to="https://www.youtube.com/@interactiverealestate"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <youtube
              class="h-6 w-6 cursor-pointer [&_path]:!fill-black"
              aria-label="youtube icon"
            />
          </nuxt-link> -->

          <nuxt-link
            to="https://x.com/esaia__"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <TwitterIc
              class="h-5 w-5 cursor-pointer [&_path]:!fill-black"
              aria-label="twitter icon"
            />
          </nuxt-link>

          <nuxt-link
            to="https://wordpress.org/plugins/interactive-real-estate/"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <wordpress-icon
              class="h-6 w-6 cursor-pointer [&_path]:!fill-black"
              aria-label="wordpress icon"
            />
          </nuxt-link>

          <nuxt-link
            to="https://www.producthunt.com/products/interactive-real-estate-wordpress-plugin"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <product-hunt-icon
              class="h-6 w-6 cursor-pointer"
              aria-label="wordpress icon"
            />
          </nuxt-link>

          <nuxt-link
            to="https://github.com/esaia"
            target="_blank"
            class="rounded-full bg-white p-2 transition-all hover:scale-105"
          >
            <github-icon
              class="h-6 w-6 cursor-pointer"
              aria-label="wordpress icon"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
