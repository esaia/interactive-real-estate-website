<script setup>
const route = useRoute();
const openDropdown = ref(false);
const menu = [
  { title: "Home", link: "/" },
  { title: "Demos", link: "" },
  { title: "Tutorial", link: "" },
  { title: "Documentation", link: "/doc" },
  { title: "FAQ", link: "" },
];

watch(
  () => route.fullPath,
  () => {
    openDropdown.value = false;
  },
);
</script>

<template>
  <div class="container-fluid relative flex justify-between py-4">
    <div class="z-[3] flex items-center">
      <nuxt-link to="/" class="mr-5">LOGO</nuxt-link>
      <div class="hidden items-center gap-6 text-gray-800 lg:flex">
        <nuxt-link
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          class="cursor-pointer hover:text-red-700"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <div class="z-[3] flex items-center gap-5">
      <nuxt-link to="/#pricing">
        <base-button title="Buy now" class="shadow-lg" />
      </nuxt-link>

      <burger
        :active="openDropdown"
        class="h-8 w-8 lg:hidden"
        @click="openDropdown = !openDropdown"
      />
    </div>

    <header-dropdown
      class="pointer-events-none absolute left-0 top-0 z-[2] w-full origin-top bg-white p-4 pt-16 opacity-0 transition-all duration-500"
      :class="{ 'pointer-events-auto opacity-100': openDropdown }"
      :menu="menu"
    />
  </div>
</template>
