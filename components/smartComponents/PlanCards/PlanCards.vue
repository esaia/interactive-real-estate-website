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
      { title: "Open <b> modal</b> on click of path" },
      { title: "Follow <b>link</b> on click of path" },
      { title: "Run <b>script</b> on click of path", hasNotFeature: true },
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
      { title: "Open <b> modal</b> on click of path" },
      { title: "Follow <b>link</b> on click of path" },
      { title: "Run <b>script</b> on click of path" },
      { title: "24/7 Support" },
      { title: "Access to <b>updates</b>" },
      { title: "Customize svg path colors" },
    ],
    subscrption: "/ month",
    bottomText:
      "All sales are handled by <a href='https://freemius.com/'' target='_blank'>Freemius</a> , Inc., as the Merchant of Record (MoR). Try logging in to your <a href='/account'> account</a>, where you'll also find the necessary information.",
  },
  {
    title: "Lifetime",
    desc: "The ultimate plan for long-term users, providing all premium features with a one-time payment.",
    price: "$199",
    cent: "99",

    features: [
      { title: "Create Unlimited <b> projects </b>" },
      { title: "Create <b> Unlimited </b> blocks " },
      { title: "Create <b> Unlimited </b> floors " },
      { title: "Create <b> Unlimited </b> flats" },
      { title: "Open <b> modal</b> on click of path" },
      { title: "Follow <b>link</b> on click of path" },
      { title: "Run <b>script</b> on click of path" },
      { title: "24/7 Support" },
      { title: "Access to <b>updates</b>" },
      { title: "Customize svg path colors" },
      { title: "License for: <b>1 website</b>" },
    ],
    subscrption: "/ once",
    bottomText:
      "All sales are handled by <a href='https://freemius.com/'' target='_blank'>Freemius</a> , Inc., as the Merchant of Record (MoR). Try logging in to your <a href='/account'> account</a>, where you'll also find the necessary information.",
  },
];

const isServicesTab = ref(false);

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
    <h2 class="title text-center">
      Get Interactive Real Estate <span class="gradient-text"> Premium</span>
    </h2>

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

    <div v-if="!isServicesTab">
      <div class="m-auto max-w-[700px] [&_ul]:list-disc">
        <p class="desc mt-3 text-center">
          Save time, reduce costs, and captivate your audience! Transform the
          way properties are showcased, making every listing an engaging
          experience.
        </p>
      </div>

      <div class="mt-14 flex flex-col items-start gap-4 lg:flex-row">
        <pricing-card
          v-for="(item, i) in wpPricePlanData"
          :key="i"
          :item="item"
          @handle-click-plan="buyPackage"
        />
      </div>
    </div>

    <div
      v-else
      class="editor title-sm mt-5 flex w-full flex-1 flex-col gap-5 rounded-lg border border-gray-200 bg-gray-50/50 p-5 lg:p-7"
    >
      <h2 class="title">Customization</h2>

      <p>
        Do you love our plugin but need it to do more? We're here to help! Our
        Customization Service ensures your plugin works exactly the way you want
        it to. Whether it's adding new features, modifying existing
        functionality, or integrating with other tools, we'll tailor the plugin
        to meet your specific requirements.
      </p>

      <div>
        <p class="title-sm mb-1">
          <span class="font-medium">
            Why Choose Our Customization Service?
          </span>
        </p>

        <ul>
          <li>
            <span class="font-medium"> Tailored Solutions:</span> We customize
            the plugin to align with your business goals and workflows.
          </li>
          <li>
            <span class="font-medium"> Save Time and Effort:</span> Focus on
            running your business while we handle the technical details.
          </li>
          <li>
            <span class="font-medium">Seamless Integration:</span> We ensure the
            customized plugin works perfectly with your existing setup.
          </li>
        </ul>
      </div>

      <div>
        <p class="title-sm mb-1">
          <span class="font-medium"> How It Works? </span>
        </p>

        <ul class="!list-decimal">
          <li>
            <nuxt-link to="/contact" class="cursor-pointer">
              <span class="font-medium"> Contact Us:</span>
            </nuxt-link>
            Share your requirements via email.
          </li>

          <li>
            <span class="font-medium"> Get a Quote:</span> We'll provide a
            detailed estimate based on your needs.
          </li>

          <li>
            <span class="font-medium"> Development: </span> Our team will
            customize the plugin and keep you updated throughout the process.
          </li>

          <li>
            <span class="font-medium"> Delivery: </span>
            Receive your customized plugin, fully tested and ready to use.
          </li>
        </ul>
      </div>

      <div>
        <p class="title-sm mb-1">
          <span class="font-medium"> Pricing </span>
        </p>
        <p>
          Customization costs very depending on the complexity of your request.
          <nuxt-link to="/contact" class="cursor-pointer">
            Contact us
          </nuxt-link>
          for a free consultation and quote!
        </p>
      </div>
    </div>

    <div v-if="!isServicesTab" class="m-auto max-w-[700px] pt-10">
      <div class="text-center">
        <p class="title-md font-bold">Need Custom Licenses?</p>
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
