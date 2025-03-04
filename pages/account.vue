<script setup lang="ts">
import { ref, onMounted } from "vue";

useHead({
  script: [
    { src: "https://code.jquery.com/jquery-3.7.1.min.js", defer: true },
    { src: "  https://users.freemius.com/dashboard.js", defer: true },
  ],
});

const account = ref<HTMLDivElement | null>(null);

onMounted(() => {
  FS?.Members?.configure({
    store_id: 8007,
    public_key: "pk_b32358e8552d82fa6462620256b20",
    left: "0",
    right: "0",
    top: "195px",
    bottom: "0",
  }).open();

  const iframe: HTMLDivElement | null = document.querySelector(
    "#fs_dashboard_container",
  );

  if (iframe && account.value) {
    iframe.style.display = "none";

    account.value.appendChild(iframe);

    iframe.style.display = "block";
  }
});
</script>

<template>
  <div class="container-fluid">
    <div ref="account" class="relative h-[700px]"></div>
    <p class="editor py-10">
      If you can't see the login form or encounter any issues, please visit the
      <a href="https://users.freemius.com/" target="_blank"
        >Freemius Members Dashboard</a
      >
      for more details or assistance. If the problem persists, feel free to
      contact support.
    </p>
  </div>
</template>
