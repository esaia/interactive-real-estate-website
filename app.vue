<script setup lang="ts">
import "ire-preview/dist/styles.css";

useHead({
  script: [
    { src: "https://code.jquery.com/jquery-3.7.1.min.js", defer: true },
    { src: "https://checkout.freemius.com/js/v1/", defer: true },
    { src: "  https://users.freemius.com/dashboard.js", defer: true },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
