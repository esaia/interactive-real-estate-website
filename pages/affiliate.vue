<script setup lang="ts">
const isModalOpen = ref(false);
</script>

<template>
  <div class="container-fluid pt-10">
    <h1 class="title mb-10 text-center text-4xl font-bold">
      Affiliate Program
    </h1>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-4 text-2xl font-semibold">
          Why Join Our Affiliate Program?
        </h2>
        <ul class="list-disc space-y-3 pl-5">
          <li class="text-gray-700">
            Earn <span class="font-bold">10% commission</span> on every new
            license purchase.
          </li>
          <li class="text-gray-700">
            Benefit from a
            <span class="font-bold">15-day tracking cookie</span> to maximize
            your earnings.
          </li>
          <li class="text-gray-700">
            Minimum payout of <span class="font-bold">$100</span>.
          </li>
          <li class="text-gray-700">
            Payouts are processed
            <span class="font-bold">monthly via PayPal</span> in USD.
          </li>
          <li class="text-gray-700">
            Commissions are paid after a
            <span class="font-bold">30-day refund period</span>.
          </li>
        </ul>
      </div>

      <div class="rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-4 text-2xl font-semibold">How It Works</h2>
        <p class="mb-4 text-gray-700">
          Our affiliate program is designed to help you earn money by promoting
          our products. Here's a quick overview of how it works:
        </p>
        <ol class="list-decimal space-y-3 pl-5">
          <li class="text-gray-700">Sign up for the affiliate program.</li>
          <li class="text-gray-700">
            Share your unique affiliate link with your audience.
          </li>
          <li class="text-gray-700">
            Earn commissions on every sale made through your link.
          </li>
          <li class="text-gray-700">
            Get paid monthly via PayPal once you reach the minimum payout.
          </li>
        </ol>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-center text-center">
      <BaseButton
        title="Join now"
        type="2"
        class="w-max px-8 py-3 text-lg"
        @click="isModalOpen = true"
      />
    </div>

    <div class="mt-10 text-center">
      <div class="mt-4 rounded-lg bg-gray-50 p-6 shadow-inner">
        <h3 class="mb-4 text-xl font-semibold">Additional Information</h3>
        <p class="text-gray-700">
          Our affiliate program is open to everyone. Whether you're a blogger,
          influencer, or just someone who loves our products, you can join and
          start earning today. We provide all the tools you need to succeed,
          including banners, links, and real-time tracking.
        </p>
        <p class="mt-3 text-gray-700">
          If you have any questions, feel free to reach out to our
          <nuxt-link to="/contact" class="link">support</nuxt-link>. We're here
          to help you maximize your earnings!
        </p>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade-in-out">
        <BaseModal v-if="isModalOpen" @close="isModalOpen = false">
          <div class="w-full rounded-lg bg-white p-6 shadow-lg">
            <h2 class="mb-4 text-2xl font-semibold">
              Join Our Affiliate Program
            </h2>
            <form action="https://formspree.io/f/xldjrgww" method="POST">
              <div class="space-y-4">
                <Input
                  label="Full Name*"
                  placeholder="john doe"
                  name="name"
                  required
                />

                <Input
                  label="Email*"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  required
                />

                <Input
                  label="Website (optional)"
                  placeholder="example.com"
                  name="website"
                />

                <div>
                  <label
                    for="reason"
                    class="block text-sm font-medium text-gray-700"
                  >
                    What is your plan for promoting our products?*
                  </label>

                  <textarea
                    id="reason"
                    rows="3"
                    class="text-body-color placeholder:text-body-color/60 w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 transition-colors focus:border-primary focus:outline-none"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  class="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  @click="isModalOpen = false"
                >
                  Cancel
                </button>
                <BaseButton
                  title="Submit"
                  btnType="submit"
                  class="w-fit rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                </BaseButton>
              </div>
            </form>
          </div>
        </BaseModal>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.shadow-lg {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.shadow-inner {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
