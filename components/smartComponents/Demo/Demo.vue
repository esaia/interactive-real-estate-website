<script setup lang="ts">
import { Project } from "ire-preview";

defineProps<{ shortcodeData: any }>();
</script>

<template>
  <div>
    <!-- <ClientOnly> -->
    <Project :data="shortcodeData" />
    <!-- </ClientOnly> -->
  </div>
</template>
