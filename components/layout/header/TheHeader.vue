<script setup>
const route = useRoute();
const openDropdown = ref(false);
const menu = [
  { title: "Home", link: "/" },
  { title: "Documentation", link: "/doc" },
  { title: "Demos", link: "/demos" },
  { title: "Try module", link: "/module" },
  { title: "Contact us", link: "/contact" },
  { title: "Pricing", link: "/pricing" },
];

watch(
  () => route.fullPath,
  () => {
    openDropdown.value = false;
  },
);
</script>

<template>
  <header>
    <div class="container-fluid relative flex justify-between py-4">
      <div class="z-[3] flex items-center">
        <nuxt-link to="/" class="mr-10" aria-current="page" aria-label="Home">
          <logo class="h-16 w-16" />
        </nuxt-link>

        <div class="hidden items-center gap-6 text-gray-800 lg:flex">
          <nuxt-link
            v-for="item in menu"
            :key="item.title"
            :to="item.link"
            class="cursor-pointer hover:text-primary"
          >
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>

      <div class="z-[3] flex items-center gap-5">
        <nuxt-link to="/account" class="hidden lg:block">
          <base-button title="Account" type="2" />
        </nuxt-link>

        <nuxt-link
          to="https://wordpress.org/plugins/interactive-real-estate/"
          target="_blank"
        >
          <base-button title="Free Download" />
        </nuxt-link>

        <burger
          :active="openDropdown"
          class="h-8 w-8 lg:hidden"
          @click="openDropdown = !openDropdown"
        />
      </div>

      <header-dropdown
        class="pointer-events-none absolute left-0 top-0 z-[2] w-full origin-top bg-white p-4 pt-20 opacity-0 transition-all duration-500"
        :class="{ 'pointer-events-auto opacity-100': openDropdown }"
        :menu="menu"
      />
    </div>
  </header>
</template>
