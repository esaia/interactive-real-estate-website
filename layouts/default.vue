<script setup lang="ts"></script>

<template>
  <div class="relative mx-auto">
    <global-provider />
    <the-header />
    <div class="h-[80px]"></div>
    <slot />
    <the-footer />
  </div>
</template>
