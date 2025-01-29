<script setup lang="ts">
import "ire-preview/dist/styles.css";

useHead({
  script: [{ src: "https://checkout.freemius.com/js/v1/", defer: true }],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
