<script setup lang="ts"></script>

<template>
  <footer class="bg-gray-50">
    <div class="container-fluid relative mt-20 w-full py-5">
      <div
        class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
      >
        <div>
          <div class="flex items-center gap-3">
            <h5 class="text-xl font-medium text-slate-800">
              About the developer
            </h5>
          </div>

          <div class="mt-2 flex flex-col items-start gap-3 md:flex-row">
            <img
              src="/assets/images/esaia.webp"
              alt=""
              class="aspect-square h-[60px] w-[60px] object-cover"
            />

            <p class="max-w-[420px] text-sm text-gray-500">
              I'm Esaia Gaprindashvili, web developer from Tbilisi, Georgia. I
              love wordpress. In my free time, I’m either fixing bugs or
              creating new ones. I'm not sure which one is more fun.
            </p>
          </div>
        </div>
        <div
          class="flex min-w-max flex-col items-start gap-5 lg:flex-row lg:items-center"
        >
          <!-- <nuxt-link to="/#pricing" class="text-sm hover:underline">
            Pricing
          </nuxt-link> -->

          <nuxt-link to="/doc/intro" class="text-sm hover:underline">
            Documentation
          </nuxt-link>

          <nuxt-link to="/demos" class="text-sm hover:underline">
            Demos
          </nuxt-link>

          <nuxt-link to="/module" class="text-sm hover:underline">
            Module
          </nuxt-link>

          <nuxt-link to="/affiliate" class="text-sm hover:underline">
            affiliate program
          </nuxt-link>

          <nuxt-link
            to="https://wordpress.org/plugins/interactive-real-estate/#developers"
            target="_blank"
            class="text-sm hover:underline"
          >
            Change Log
          </nuxt-link>
        </div>
      </div>

      <div
        class="mt-12 flex w-full flex-col items-center justify-center border-t border-slate-200 py-4 md:flex-row md:justify-between"
      >
        <p class="mb-4 block text-center text-sm text-slate-500 md:mb-0">
          Copyright © 2025
          <nuxt-link href="/">Interactive Real Estate™</nuxt-link>. All Rights
          Reserved.
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
        </div>
      </div>
    </div>
  </footer>
</template>
