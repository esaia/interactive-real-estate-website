<script setup lang="ts">
const reviews = [
  {
    name: "Zoe",
    review:
      "For the price, this is an amazing wordpress plugin. Does exactly what it promises with no issues.",
  },

  // {
  //   name: "Emily",
  //   review:
  //     "It is the <span>best investment</span> i made in months. It's simple and works, exactly what i was searching to create interactive images in my wordpress website.",
  // },

  // {
  //   name: "Sarah ",
  //   review:
  //     "The features are incredibly comprehensive but the interface could be more intuitive. The documentation helped, but there's a learning curve.",
  // },
  // {
  //   name: "Alex",
  //   review:
  //     "Completely transformed how I approach my work. The quality is exceptional and it's very intuitive.",
  // },

  {
    name: "mpanaszek",
    review:
      "One of the biggest advantages is the <span>professional online help</span> center provided by the author, where you can get quick and comprehensive support on any topic related to the plugin. Whether you need technical assistance, documentation, or advice on advanced features - it's all there.",
    link: "https://wordpress.org/support/topic/powerful-and-user-friendly-real-estate-plugin-with-excellent-support/",
  },

  {
    name: "Steven",
    review:
      "This exceeded all my expectations. The <span>quality is outstanding</span> and it arrived sooner than expected.",
  },

  {
    name: "smbldigital",
    review:
      "This plugin has been a great addition to our site — it’s clean, interactive, and works exactly as we needed. It made it easy to create a visual layout that users can click through intuitively, and it looks professional across all devices. What really stood out was the <span>developer support</span>. Any time we had a question or needed help, the response was quick and helpful. It’s rare to find such reliable support these days. Highly recommended!",
    link: "https://wordpress.org/support/topic/excellent-functionality-and-support-10/",
  },

  {
    name: "alexvan22",
    review:
      "The plugin has few installations, even though it's a <span>damn gem</span> for those who just want to create a neat grid for their objects and manage them natively.  <br /> The plugin's author is a  <span>wonderful person</span> who promptly resolves all issues and implements quick updates. I believe this plugin has a great future.",
    link: "https://wordpress.org/support/topic/%d0%bf%d1%80%d0%be%d1%81%d1%82%d0%be-%d0%bb%d1%83%d1%87%d1%88%d0%b8%d0%b9-%d0%bf%d0%bb%d0%b0%d0%b3%d0%b8%d0%bd-%d0%b4%d0%bb%d1%8f-%d1%88%d0%b0%d1%85%d0%bc%d0%b0%d1%82%d0%be%d0%ba-%d0%ba%d0%b2%d0%b0/",
  },
];
</script>

<template>
  <div class="container-fluid padding-top mx-auto rounded-lg bg-white p-6">
    <h3 class="title padding-top mb-10 text-center">
      Customer <span class="gradient-text">Reviews</span>
    </h3>

    <div
      class="min-w-5xl mx-auto flex max-w-5xl flex-wrap justify-center gap-6"
    >
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="h-fit w-full rounded-md border border-gray-200 bg-gray-50/50 p-6 shadow-sm transition-shadow hover:shadow-md md:w-min"
      >
        <div class="flex items-center justify-between gap-20">
          <h4 class="w-max text-lg font-semibold">{{ review.name }}</h4>

          <div class="flex items-center">
            <star v-for="i in 5" class="h-5 w-5 [&_path]:fill-red-500" />
          </div>
        </div>

        <div
          v-html="review.review"
          class="mt-4 text-gray-800 [&_span]:inline-block [&_span]:rounded-lg [&_span]:bg-primary [&_span]:px-1 [&_span]:py-[2px] [&_span]:font-medium [&_span]:italic [&_span]:text-white"
        />

        <nuxt-link
          v-if="review?.link"
          :to="review.link"
          target="_blank"
          class="mt-2 block w-fit rounded-full bg-white p-2 transition-all"
        >
          <wordpress-icon
            class="h-6 w-6 cursor-pointer [&_path]:!fill-black"
            aria-label="wordpress icon"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
