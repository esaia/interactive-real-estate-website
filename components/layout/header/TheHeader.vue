<script setup>
const route = useRoute();

const openDropdown = ref(false);
const scrolled = ref(false);

const menu = [
  { title: "Home", link: "/" },
  { title: "Documentation", link: "/doc/intro" },

  {
    title: "Demos",
    children: [
      { title: "Front appearing", link: "/demos" },
      { title: "Try module", link: "/module" },
    ],
  },
  { title: "Blog", link: "/blog" },
  { title: "Pricing", link: "/pricing" },
  { title: "Contact us", link: "/contact" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

watch(
  () => route.fullPath,
  () => {
    openDropdown.value = false;
  },
);
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="fixed left-0 top-0 z-30 w-full transition-colors duration-200">
    <div
      class="absolute h-full w-full bg-white transition-all duration-300 ease-in-out"
      :class="{
        'translate-y-0 shadow-sm': scrolled,
        '-translate-y-full': !scrolled,
      }"
    />
    <div class="container-fluid relative flex justify-between py-2">
      <div class="z-[3] flex items-center">
        <nuxt-link to="/" class="mr-10" aria-current="page" aria-label="Home">
          <logo class="h-12 w-12" />
        </nuxt-link>

        <div class="hidden items-center gap-6 text-gray-800 lg:flex">
          <div v-for="item in menu" :key="item.title">
            <div
              v-if="item?.children?.length"
              class="group relative cursor-pointer"
            >
              {{ item.title }}

              <div
                class="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 gap-2 rounded-md border bg-white p-2 opacity-0 shadow-sm group-hover:pointer-events-auto group-hover:opacity-100"
              >
                <nuxt-link
                  v-for="sub in item.children"
                  :key="sub.title"
                  :to="sub.link"
                  class="block w-full min-w-max rounded-lg p-2 hover:text-primary"
                >
                  {{ sub.title }}
                </nuxt-link>
              </div>
            </div>

            <nuxt-link
              v-else
              :to="item.link"
              class="cursor-pointer hover:text-primary"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
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
        :key="openDropdown"
        :menu="menu"
      />
    </div>
  </header>
</template>
