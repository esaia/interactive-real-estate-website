<script setup lang="ts">
const reviews = [
  {
    name: "Zoe",
    review:
      "For the price, this is an amazing product. Does exactly what it promises with no issues.",
  },

  {
    name: "Emily",
    review:
      "Interactive Real Estate is the best investment i made in months. It's simple and works, exactly what i was searching to create interactive images.",
  },

  {
    name: "Steven",
    review:
      "This exceeded all my expectations. The quality is outstanding and it arrived sooner than expected.",
  },

  {
    name: "Sarah ",
    review:
      "The features are incredibly comprehensive but the interface could be more intuitive. The documentation helped, but there's a learning curve.",
  },
  {
    name: "Alex",
    review:
      "Completely transformed how I approach my work. The quality is exceptional and it's very intuitive.",
  },
];
</script>

<template>
  <div class="container-fluid padding-top mx-auto rounded-lg bg-white p-6">
    <h3 class="title padding-top mb-10 text-center">
      Customer <span class="gradient-text">Reviews</span>
    </h3>

    <div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="h-fit w-full rounded-md border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md md:w-min"
      >
        <div class="flex items-center justify-between gap-20">
          <h4 class="w-max text-lg font-semibold">{{ review.name }}</h4>

          <div class="flex items-center">
            <star v-for="i in 5" class="h-6 w-6" />
          </div>
        </div>

        <p class="mt-4 text-gray-600">
          {{ review.review }}
        </p>
      </div>
    </div>
  </div>
</template>
