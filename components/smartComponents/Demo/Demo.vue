<script setup lang="ts">
import { Project } from "ire-preview";

defineProps<{ shortcodeData: any }>();
</script>

<template>
  <div class="font-sans">
    <!-- <ClientOnly> -->
    <Project :data="shortcodeData" />
    <!-- </ClientOnly> -->
  </div>
</template>
