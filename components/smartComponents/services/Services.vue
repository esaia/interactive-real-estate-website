<script setup lang="ts">
const data = [
  {
    title: "24/7 Customer Support",
    desc: "Message us any day of the week and we will get back to you within 24 hours.",
    link: "Get Support",
    url: "/contact",
  },
  {
    title: "Demos",
    desc: "Explore plugin demos.",
    link: "See Demos",
    url: "/demos",
  },
  {
    title: "Docs",
    desc: "Explore WordPress plugin full documentation.",
    link: "Read Docs",
    url: "/doc/intro",
  },
];
</script>

<template>
  <div class="container-fluid padding-top text-center">
    <h3 class="title">Need <span class="gradient-text">help?</span></h3>

    <div
      class="mt-10 flex w-full flex-col items-center gap-20 lg:flex-row lg:gap-4"
    >
      <div
        v-for="(item, i) in data"
        class="flex flex-1 flex-col items-center gap-2"
      >
        <chat-icon v-if="i === 0" class="h-10 w-10" />
        <building-icon v-else-if="i === 1" class="h-10 w-10" />
        <doc-icon v-else-if="i === 2" class="h-10 w-10" />

        <h4 class="title-md font-medium">{{ item.title }}</h4>
        <p class="desc">
          {{ item.desc }}
        </p>

        <nuxt-link
          :to="item.url"
          class="flex items-center gap-1 font-medium text-primary hover:underline"
        >
          <p class="min-w-max">
            {{ item.link }}
          </p>

          <arrow-up-icon class="h-3 w-3 rotate-90" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
