<script setup lang="ts">
import { FEATURES } from "~/composable/data";
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");

const num = useState("num", () => [0, 2, 6][Math.floor(Math.random() * 3)]);
const vimeoLoaded = useState<boolean>("vimeoLoaded");
</script>

<template>
  <div>
    <main-banner />

    <div class="container-fluid">
      <demo :shortcodeData="demos[num].shortcodeData" />
    </div>

    <!-- <div
      class="container-fluid padding-top mx-auto flex w-full flex-col items-center justify-center gap-4"
    >
      <h2 class="title mb-4 text-center">The Best Interactive Interface</h2>

      <NuxtImg
        src="/assets/images/adminpanel.webp"
        alt="interactive real estate dashboard"
        class="img-shadow w-full max-w-5xl"
        loading="lazy"
        width="665"
        height="520"
        sizes="(max-width: 768px) 100vw, 665px"
        format="webp"
      />
    </div> -->

    <!-- <div class="padding-top">
      <feature-cards :features="FEATURES" />
    </div> -->

    <review />

    <div
      class="container-fluid mx-auto flex max-w-[989px] items-center justify-center pt-20"
    >
      <video-demo v-if="vimeoLoaded" />
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
