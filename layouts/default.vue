<script setup lang="ts">
import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";
import Arrow from "~/components/ui/icons/Arrow.vue";
</script>

<template>
  <div class="relative mx-auto">
    <global-provider />

    <div class="fixed top-0 z-[999] h-12 w-full bg-black text-white">
      <nuxt-link
        class="container-fluid flex h-full cursor-pointer items-center justify-center gap-3"
        to="/pricing"
      >
        <p class="!text-white hover:underline">
          🔥 Black Friday Sale 2025 -
          <span class="text-2xl text-primary">25%</span> Off
        </p>
        <ArrowUpIcon class="size-5 rotate-90 [&_path]:fill-white" />
      </nuxt-link>
    </div>

    <the-header />
    <div class="h-[80px]"></div>
    <slot />
    <the-footer />
  </div>
</template>
