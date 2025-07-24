<script setup lang="ts">
const props = defineProps<{
  item: any;

  licenseType: "free" | "annual" | "lifetime";
}>();

defineEmits<{
  (e: "handleClickPlan", licenseType: string, licenseCount: string): void;
}>();

const licenseCount = ref("1");

const isFree = computed(() => {
  return props.item?.title === "Free";
});

const isAnnual = computed(() => {
  return props.licenseType === "annual";
});

const isLifetime = computed(() => {
  return props.licenseType === "lifetime";
});

const priceIndex = computed(() => {
  switch (licenseCount.value) {
    case "1":
      return 0;
    case "5":
      return 1;

    case "10":
      return 2;
    case "30":
      return 3;

    default:
      return 0;
  }
});

watch(
  () => isLifetime.value,
  () => {
    licenseCount.value = "1";
  },
);
</script>

<template>
  <div
    class="relative flex h-full w-full flex-1 flex-col justify-between rounded-lg border border-gray-200 bg-gray-50/50 p-5 lg:p-7"
    :class="{
      'mt-11 rounded-t-none border-2 border-primary lg:mt-0': item?.isPopular,
    }"
  >
    <div
      v-if="item?.isPopular"
      class="absolute left-0 top-0 w-[calc(100%+4px)] -translate-x-[2px] -translate-y-full rounded-t-lg bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2 text-center text-lg font-bold uppercase tracking-widest text-white"
    >
      Popular
    </div>

    <div>
      <p
        class="title text-gray-800"
        :class="{
          'gradient-text via-orange-00 bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text font-medium text-transparent':
            item?.isPopular,
        }"
      >
        {{ item?.title }}
      </p>

      <p class="desc pt-2 lg:h-[150px] xl:h-[110px]">
        {{ item?.desc }}
      </p>

      <div class="my-4">
        <nuxt-link
          v-if="isFree"
          to="https://wordpress.org/plugins/interactive-real-estate"
          target="_blank"
        >
          <base-button title="Get it now" type="2" />
        </nuxt-link>

        <base-button
          v-else
          title="Buy now"
          :type="item?.isPopular ? '1' : '2'"
          @click="$emit('handleClickPlan', item.title, licenseCount)"
        />
      </div>

      <div
        class="my-4 flex items-end justify-start gap-2"
        :class="{ '!items-center': item.cent }"
      >
        <p class="text-5xl font-medium tracking-tight text-gray-800 lg:h-12">
          <span v-if="isAnnual || isLifetime">
            {{ item?.price?.[priceIndex] }}
          </span>
          <span v-else>
            {{ item?.price }}
          </span>
        </p>
        <span class="text-xs text-gray-600">
          <p v-if="!isFree">.99</p>
          <p>{{ isAnnual ? "/ year" : "/ once" }}</p>
        </span>
      </div>

      <div class="my-5 flex flex-col gap-3 text-gray-800">
        <div
          v-for="feature in item?.features"
          class="flex items-center gap-2 text-left"
        >
          <x v-if="feature?.hasNotFeature" class="h-4 w-6 fill-red-500" />
          <correct-icon v-else class="!h-6 !w-6" />
          <div
            v-html="feature?.title"
            class="text-md border-b border-dashed border-black"
          ></div>
        </div>

        <div
          v-if="(isAnnual || isLifetime) && !isFree"
          class="flex h-6 items-center gap-2 text-left"
        >
          <correct-icon class="!h-6 !w-6" />

          <div class="flex w-full flex-wrap items-center gap-2">
            <p class="min-w-max border-b border-dashed border-black">
              license for:
            </p>

            <div class="max-w-52 flex-1">
              <div class="relative">
                <select
                  v-model="licenseCount"
                  aria-label="Number of Websites"
                  class="ease w-full cursor-pointer appearance-none rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none lg:w-full"
                >
                  <option value="1" selected>1 Website</option>
                  <template v-if="isAnnual">
                    <option value="5">5 Website</option>
                    <option value="10">10 Website</option>
                  </template>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="editor desc m-auto text-center text-xs">
        <p>
          All sales are handled by
          <a href="https://freemius.com/" target="_blank">Freemius</a> , Inc.,
          as the Merchant of Record (MoR). Try logging in to your
          <a href="/account"> account</a>, where you'll also find the necessary
          information.
        </p>
      </div>
    </div>
  </div>
</template>
