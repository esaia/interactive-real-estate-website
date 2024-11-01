<script setup lang="ts">
defineProps<{
  item: any;
}>();
</script>

<template>
  <div>
    <div
      class="w-full flex-1 rounded-lg border border-gray-200 bg-gray-50/80 p-5 text-center lg:p-7"
    >
      <p class="title-sm">{{ item.title }}</p>
      <p class="desc py-2">{{ item.desc }}</p>
      <p class="text-center text-3xl font-bold tracking-tight lg:text-4xl">
        {{ item.price }}
      </p>

      <div class="my-4">
        <base-button title="Buy now" />
      </div>

      <slot />

      <p class="m-auto text-center text-sm text-gray-400">
        After Click <span class="underline"> Buy Now</span>, You will be
        redirected to CodeCanyon to complete your order. Check the complete
        license terms
        <a
          class="link"
          href="https://codecanyon.net/licenses/standard"
          target="_blank"
        >
          here.
        </a>
      </p>
    </div>
  </div>
</template>
