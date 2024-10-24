<script setup>
const openDropdown = ref(false);
</script>

<template>
  <div class="container-fluid relative flex justify-between py-4">
    <div class="flex items-center">
      <p class="mr-5">LOGO</p>
      <div class="hidden items-center gap-6 text-gray-600 lg:flex">
        <nuxt-link class="cursor-pointer hover:text-blue-700">Home</nuxt-link>
        <nuxt-link class="cursor-pointer hover:text-blue-700">Demos</nuxt-link>
        <nuxt-link class="cursor-pointer hover:text-blue-700">
          Tutorial
        </nuxt-link>
        <nuxt-link class="cursor-pointer hover:text-blue-700">
          Documentation
        </nuxt-link>
        <nuxt-link class="cursor-pointer hover:text-blue-700">menu 5</nuxt-link>
      </div>
    </div>

    <div class="flex items-center gap-5">
      <nuxt-link to="#pricing">
        <base-button title="Buy now" class="shadow-lg" />
      </nuxt-link>

      <burger
        :active="openDropdown"
        class="h-8 w-8 lg:hidden"
        @click="openDropdown = !openDropdown"
      />

      <!-- <burger-icon
        class="h-8 w-8 cursor-pointer lg:hidden"
        @click="openDropdown = !openDropdown"
      /> -->
    </div>

    <header-dropdown
      class="absolute left-0 top-full w-full origin-top scale-y-0 bg-white p-4 transition-all"
      :class="{ 'scale-y-100': openDropdown }"
    />
  </div>
</template>
