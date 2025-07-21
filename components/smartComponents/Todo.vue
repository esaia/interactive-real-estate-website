<script setup lang="ts"></script>
<template>
  <div class="container-fluid padding-top max-w-[800px]">
    <h2 class="title text-center">To <span class="gradient-text"> do</span></h2>
    <div class="flex flex-col gap-2 px-2 pt-10 lg:px-8 lg:text-lg">
      <p class="list done">Project importing/exporting</p>
      <p class="list done">Multiple currencies</p>
      <p class="list done">Reservation/booking apartment feature</p>
      <p class="list">More tooltip variants</p>
      <p class="list done">Copy apartment link for sharing</p>
    </div>
  </div>
</template>

<style scoped>
.list {
  @apply relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-black;
}

.done {
  @apply line-through opacity-60;
}
</style>
