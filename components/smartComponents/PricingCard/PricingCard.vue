<script setup lang="ts">
const pricePlanData = [
  { title: "Wordpress plugin", desc: "Regular License", price: "39$" },
  { title: "Wordpress plugin", desc: "Extended License", price: "169$" },
];
</script>

<template>
  <div id="pricing" class="container-fluid padding-top">
    <h2 class="title text-center">Get Interactive Real Estate</h2>

    <div class="m-auto max-w-[700px]">
      <p class="desc mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
        assumenda doloremque molestias dignissimos quaerat! Explicabo ullam fuga
        corporis accusantium consequuntur!
      </p>
    </div>

    <div class="mt-10 flex flex-col items-start gap-4 lg:flex-row">
      <div
        v-for="(item, i) in pricePlanData"
        class="w-full flex-1 rounded-lg border border-gray-200 bg-gray-50/80 p-5 text-center lg:p-7"
      >
        <p class="title-sm">{{ item.title }}</p>
        <p class="desc py-2">{{ item.desc }}</p>
        <p class="title text-center">{{ item.price }}</p>

        <div class="my-4">
          <base-button title="Buy now" />
        </div>

        <div v-if="i === 0" class="my-5 flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p>Free 24/7 Support for <b>6 Months</b></p>
          </div>

          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p>Lifetime Access to <b>Updates</b></p>
          </div>

          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p>Create Unlimited <b> Projects </b></p>
          </div>

          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p>License For a <b> Single Project</b></p>
          </div>
        </div>

        <div v-else class="my-5 flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p class="text-gray-500">Everything from Regular License</p>
          </div>

          <div class="flex items-center gap-2">
            <correct-icon class="h-6 w-6" />
            <p>License For <b>Unlimited Projects</b></p>
          </div>
        </div>

        <p class="m-auto text-center text-sm text-gray-400">
          After Click <span class="underline"> Buy Now</span>, You will be
          redirected to CodeCanyon to complete your order. Check the complete
          license terms
          <a
            class="text-blue-600 hover:underline"
            href="https://codecanyon.net/licenses/standard"
            target="_blank"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
