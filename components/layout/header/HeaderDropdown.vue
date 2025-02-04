<script setup lang="ts">
defineProps<{
  menu: { title: string; link: string }[];
}>();
</script>

<template>
  <div class="flex flex-col border-b text-gray-800 shadow-lg">
    <nuxt-link
      v-for="item in menu"
      :key="item.title"
      :to="item.link"
      class="cursor-pointer py-3 hover:text-primary"
    >
      {{ item.title }}
    </nuxt-link>

    <nuxt-link to="/account" class="mt-3">
      <base-button title="Account" type="2" />
    </nuxt-link>
  </div>
</template>
