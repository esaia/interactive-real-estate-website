<script setup lang="ts">
const wpPricePlanData = [
  {
    title: "Free",
    desc: "A great starting point for individuals or small projects to try out the basic features.",
    price: "",
    features: [
      { title: "Create only <b> 1 project</b>" },
      { title: "Create <b> Unlimited </b> blocks " },
      { title: "Create <b> Unlimited </b> floors " },
      { title: " Create only <b>25 flat</b>" },
      { title: "24/7 Support", hasNotFeature: true },
      { title: "Access to <b>updates</b>", hasNotFeature: true },
      { title: "Customize svg path colors", hasNotFeature: true },
      { title: "License for: <b>1 website</b>", hasNotFeature: false },
    ],
    subscrption: "",
  },
  {
    title: "Annual",
    desc: "Perfect for professionals and businesses, offering full access to advanced features and premium support.",
    price: ["$4", "$8", "$16"],
    cent: "99",
    features: [
      { title: "Create <b> Unlimited </b> projects " },
      { title: "Create <b> Unlimited </b> blocks " },
      { title: "Create <b> Unlimited </b> floors " },
      { title: "Create <b> Unlimited </b> flats " },
      { title: "24/7 Support" },
      { title: "Access to <b>updates</b>" },
      { title: "Customize svg path colors" },
    ],
    subscrption: "/ month",
  },
  {
    title: "Lifetime",
    desc: "The ultimate plan for long-term users, providing all premium features with a one-time payment.",
    price: "$299",
    cent: "99",

    features: [
      { title: "Create Unlimited <b> projects </b>" },
      { title: "Create <b> Unlimited </b> blocks " },
      { title: "Create <b> Unlimited </b> floors " },
      { title: "Create Unlimited <b> flats </b>" },
      { title: "24/7 Support" },
      { title: "Access to <b>updates</b>" },
      { title: "Customize svg path colors" },
      { title: "License for: <b>1 website</b>" },
    ],
    subscrption: "/ once",
  },
];

const standalonePricePlanData = [
  {
    title: "Customization",
    desc: "Regular License",
    price: "",
    features: [],
  },
  {
    title: "Custom Website",
    desc: "Extended License",
    price: "",
    features: [],
  },
];

const isServicesTab = ref(false);

const planData = computed(() => {
  return isServicesTab.value ? standalonePricePlanData : wpPricePlanData;
});

const buyPackage = (planName: string, licenses: string) => {
  const isLifetime = planName === "Lifetime";

  if (!FS) return;

  const handler = new FS.Checkout({
    product_id: "17710",
    plan_id: "29444",
    public_key: "pk_28cee94284e5b1a7fc7fcde632e02",
  });

  if (!handler) return;

  handler.open({
    name: "Interactive real estate",
    licenses,
    billing_cycle: isLifetime ? "lifetime" : "annual",
    purchaseCompleted: (response: any) => {
      // The logic here will be executed immediately after the purchase confirmation
      console.log("Purchase completed:", response);
      console.log("User email:", response.user.email);
      console.log("License key:", response.license.key);
    },
    success: (response: any) => {
      // The logic here will be executed after the customer closes the checkout,
      // after a successful purchase
      console.log("Checkout closed after successful purchase:", response);
      console.log("User email:", response.user.email);
      console.log("License key:", response.license.key);
    },
  });
};
</script>

<template>
  <div id="pricing" class="container-fluid padding-top">
    <h2 class="title text-center">Get Interactive Real Estate</h2>

    <div
      class="m-auto my-5 flex w-fit items-center justify-center rounded-lg border bg-gray-50/80 p-2 text-gray-600"
    >
      <div
        class="cursor-pointer rounded-md px-5 py-2 transition-all duration-500 md:px-10"
        :class="{
          'bg-white shadow-lg': !isServicesTab,
          'bg-white/0': isServicesTab,
        }"
        @click="isServicesTab = false"
      >
        Wp plugin
      </div>
      <div
        class="cursor-pointer rounded-md px-5 py-2 transition-all md:px-10"
        :class="{
          'bg-white shadow-lg': isServicesTab,
          'bg-white/0': !isServicesTab,
        }"
        @click="isServicesTab = true"
      >
        Services
      </div>
    </div>

    <div class="m-auto max-w-[700px] [&_ul]:list-disc">
      <p v-if="!isServicesTab" class="desc mt-3 text-center">
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

    <div class="mt-14 flex flex-col items-start gap-4 lg:flex-row">
      <pricing-card
        v-for="(item, i) in planData"
        :key="i"
        :item="item"
        @handle-click-plan="buyPackage"
      />
    </div>

    <div v-if="!isServicesTab" class="m-auto max-w-[700px] pt-10">
      <div class="text-center">
        <p class="title-sm font-bold">Need Custom Licenses?</p>
        <p class="desc editor">
          If you need a license for more sites than the options available,
          please don't hesitate to
          <nuxt-link to="/contact">contact us</nuxt-link> for a custom solution.
          We're here to help!
        </p>
      </div>

      <money-back />
    </div>
  </div>
</template>
