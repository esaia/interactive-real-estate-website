<script setup lang="ts">
import { FEATURES } from "~/composable/data";
import type { DemoType } from "~/types/general";

const features = FEATURES;

const demos = useState<DemoType[]>("demos");
</script>

<template>
  <div>
    <main-banner />

    <div class="container-fluid">
      <demo :shortcodeData="demos[2].shortcodeData" />
    </div>

    <feature-cards :features="features" />

    <review />

    <div
      class="container-fluid mx-auto flex max-w-[989px] items-center justify-center pt-20"
    >
      <video-demo />
    </div>

    <plan-cards />

    <todo />

    <faq />

    <services />

    <div
      class="hero-bg pointer-events-none absolute left-0 top-0 z-0 h-[100vh] w-full"
    ></div>
  </div>
</template>
