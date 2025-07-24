<script setup lang="ts">
import { Checkout } from "@freemius/checkout";
import { GOLD_PLAN_ID, PREMIUM_PLAN_ID } from "~/composable/constants";
import { ANNUAL_PLAN, LIFETIME_PLAN } from "~/composable/data";

defineProps<{
  hasH1?: boolean;
}>();

// {
//   "user": {
//       "email": "test@gmail.com",
//       "first": "Test",
//       "last": "Test",
//       "public_key": "pk_95227c53e88a0c479f29fa8e286fa",
//       "id": "1107120",
//       "created": "2018-04-16 18:22:14",
//       "resend_email_endpoint": "https://api.freemius.com/v1/plugins/17710/licenses/1692941/resend.json?authorization=FSLA+17710%3AhTQC-zIc4E0dEpFm4hoeB86Qe1BpXMi2-EitgZxDKGWxAhjjxAGee3HQiuVI3qUc4NMp6f4u_mE1oNEQ8ddEcoSOmlr_-jxcaYlLzrVV5FkpHxiOZnprQVWV3wJ-Hv2mHEWt-LlaFo_vlHCLSaRPaAqnUBVDaRu1veOz1nbFDeWPNH9HKTH_yDD_aYN-vDg3zFkbZOi3wj3GBeqt_1U-JsXqTED1qPWqQyfl_ucdB55tagplh4-nOkHQGFRkiEfzWyAw-VVquLddNIzL_tbujw"
//   },
//   "purchase": {
//       "tax_rate": 0,
//       "total_gross": 0,
//       "amount_per_cycle": 95.9,
//       "initial_amount": 95.9,
//       "renewal_amount": 95.9,
//       "renewals_discount": null,
//       "renewals_discount_type": null,
//       "billing_cycle": 12,
//       "outstanding_balance": 0,
//       "failed_payments": 0,
//       "trial_ends": null,
//       "next_payment": "2026-03-30 07:16:13",
//       "canceled_at": null,
//       "user_id": "1107120",
//       "install_id": null,
//       "plan_id": "29444",
//       "pricing_id": "36952",
//       "license_id": "1692941",
//       "ip": "212.58.102.208",
//       "country_code": "ge",
//       "zip_postal_code": 12345,
//       "vat_id": null,
//       "coupon_id": null,
//       "user_card_id": "540824",
//       "source": 0,
//       "plugin_id": "17710",
//       "external_id": "sub_1R8G6LFmXz63vF5vRz0gfPvO",
//       "gateway": "stripe",
//       "environment": 1,
//       "id": "658887",
//       "created": "2025-03-30 07:16:16",
//       "updated": null,
//       "currency": "usd",
//       "license_key": "sk_gtCz4i=N2=6!XWXI+~m*=_0SC_RJr"
//   }
// }

const isServicesTab = ref(false);
const isLifetime = ref(false);

const plansData = computed(() => {
  return isLifetime.value ? LIFETIME_PLAN : ANNUAL_PLAN;
});

const buyPackage = (licenseType: string, licenses: string) => {
  const conf = useRuntimeConfig();

  const { fsProductId: product_id, fsPublicKey: public_key } = conf.public;

  const handler = new Checkout({
    public_key,
    product_id,
    plan_id: licenseType === "Premium" ? PREMIUM_PLAN_ID : GOLD_PLAN_ID,
  });

  if (!handler) return;

  handler.open({
    name: "Interactive real estate",
    licenses,
    billing_cycle: isLifetime.value ? "lifetime" : "annual",
    show_reviews: true,

    purchaseCompleted: (response: any) => {
      // @ts-ignore
      if (window?.gtag) {
        // @ts-ignore
        window.gtag("event", "conversion", {
          send_to: "AW-16923193829/kzgxCPW6vKsaEOXjzYU_",
          value: response?.purchase?.initial_amount || 1.0,
          currency: "USD",
          transaction_id: response?.purchase?.id?.toString() || "",
        });
      }

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
    <!-- <h2 class="title text-center">
      Get Interactive Real Estate <span class="gradient-text"> Premium</span>
    </h2> -->

    <component :is="hasH1 ? 'h1' : 'h2'" class="title text-center">
      Get Interactive Real Estate <span class="gradient-text">Premium</span>
    </component>

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
          experience. Make your wordpress website Interactive.
        </p>
      </div>

      <div class="desc flex w-full items-center justify-center gap-4 py-10">
        <p class="cursor-pointer" @click="isLifetime = false">Annual</p>
        <switcher v-model="isLifetime" />
        <p class="cursor-pointer" @click="isLifetime = true">Lifetime</p>
      </div>

      <div class="flex flex-col items-start gap-4 lg:grid lg:grid-cols-3">
        <plan-card
          v-for="(item, i) in plansData"
          :key="i"
          :item="item"
          :license-type="isLifetime ? 'lifetime' : 'annual'"
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
        <p class="title-md font-bold">
          Need Custom <span class="gradient-text">Licenses?</span>
        </p>
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
