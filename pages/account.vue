<script setup lang="ts">
const account = ref();

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://users.freemius.com/dashboard.js";
  script.onload = () => {
    FS.Members.configure({
      store_id: 8007,
      public_key: "pk_b32358e8552d82fa6462620256b20",
      position: "fixed",
      left: "0",
      right: "0",
      top: "195px",
      bottom: "0",
    }).open();
  };

  if (!account.value) return;

  document.body.appendChild(script);
});
</script>

<template>
  <div ref="account" class="container-fluid h-[600px]">
    <!-- Dashboard will load dynamically in your app -->
  </div>
</template>
