<script setup lang="ts">
import type { DemoType } from "~/types/general";
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { DEMOS } from "~/composable/data";

const demos = useState<DemoType[]>("demos");

demos.value = DEMOS;
</script>

<template>
  <div>
    <Analytics />
    <SpeedInsights />
  </div>
</template>
