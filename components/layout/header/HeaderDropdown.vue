<script setup lang="ts">
defineProps<{
  menu: { title: string; link: string }[];
}>();
</script>

<template>
  <div class="flex flex-col text-gray-600">
    <nuxt-link
      v-for="item in menu"
      :key="item.title"
      :to="item.link"
      class="cursor-pointer py-3 hover:text-blue-700"
    >
      {{ item.title }}
    </nuxt-link>
  </div>
</template>
