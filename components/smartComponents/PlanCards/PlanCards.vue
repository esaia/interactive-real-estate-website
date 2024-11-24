<script setup lang="ts">
const wpPricePlanData = [
  { title: "Wordpress plugin", desc: "Regular License", price: "39$" },
  { title: "Wordpress plugin", desc: "Extended License", price: "169$" },
];

const standalonePricePlanData = [
  { title: "Wp plugin + Standalone", desc: "Regular License", price: "49$" },
  { title: "Wp plugin + Standalone", desc: "Extended License", price: "199$" },
];

const planData = computed(() => {
  return isStandaloneTab.value ? standalonePricePlanData : wpPricePlanData;
});

const isStandaloneTab = ref(false);
</script>

<template>
  <div id="pricing" class="container-fluid padding-top">
    <h2 class="title text-center">Get Building SVG</h2>

    <div
      class="m-auto my-5 flex w-fit items-center justify-center rounded-lg border bg-gray-50/80 p-2 text-gray-600"
    >
      <div
        class="cursor-pointer rounded-md px-5 py-2 transition-all duration-500 md:px-10"
        :class="{
          'bg-white shadow-lg': !isStandaloneTab,
          'bg-white/0': isStandaloneTab,
        }"
        @click="isStandaloneTab = false"
      >
        Wp plugin
      </div>
      <div
        class="cursor-pointer rounded-md px-5 py-2 transition-all md:px-10"
        :class="{
          'bg-white shadow-lg': isStandaloneTab,
          'bg-white/0': !isStandaloneTab,
        }"
        @click="isStandaloneTab = true"
      >
        Standalone
      </div>
    </div>

    <div class="m-auto max-w-[700px] [&_ul]:list-disc">
      <p v-if="!isStandaloneTab" class="desc mt-3 text-center">
        Save time, reduce costs, and captivate your audience! Transform the way
        properties are showcased, making every listing an engaging experience.
      </p>

      <div v-else class="desc mt-5 text-center">
        <span>
          IMPORTANT: With the standalone version, you will have full access to
          the WordPress plugin version. Why? Read:
        </span>
        <nuxt-link
          to="/doc/plugin-vs-standalone"
          class="link w-fit text-center"
        >
          WordPress Plugin vs Standalone Version
        </nuxt-link>
      </div>
    </div>

    <div class="mt-10 flex flex-col items-start gap-4 lg:flex-row">
      <pricing-card v-for="(item, i) in planData" :key="i" :item="item">
        <div v-if="i === 0" class="my-5 flex flex-col gap-3">
          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p>Free 24/7 Support for <b>6 Months</b></p>
          </div>

          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p>Lifetime Access to <b>Updates</b></p>
          </div>

          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p>Create Unlimited <b> Interactive Buildings </b></p>
          </div>

          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p>License For a <b> Single Project</b></p>
          </div>
        </div>

        <div v-else class="my-5 flex flex-col gap-3">
          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p class="text-gray-500">Everything from Regular License</p>
          </div>

          <div class="flex items-center gap-2 text-left">
            <correct-icon class="!h-6 !w-6" />
            <p>License For <b>Unlimited Projects</b></p>
          </div>
        </div>
      </pricing-card>
    </div>
  </div>
</template>
