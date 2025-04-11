<script setup lang="ts">
const props = defineProps<{
  item: any;
}>();

defineEmits<{
  (e: "handleClickPlan", planName: string, annualLicense: string): void;
}>();

const annualLicense = ref("1");

const isFree = computed(() => {
  return props.item?.title === "Free";
});

const isAnnual = computed(() => {
  return props.item?.title === "Annual";
});

const isLifetime = computed(() => {
  return props.item?.title === "Lifetime";
});

const priceIndex = computed(() => {
  switch (annualLicense.value) {
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
</script>

<template>
  <div
    class="relative w-full flex-1 rounded-lg border border-gray-200 bg-gray-50/50 p-5 lg:p-7"
    :class="{
      'mt-11 rounded-t-none border-2 border-primary lg:mt-0': isAnnual,
    }"
  >
    <div
      v-if="isAnnual"
      class="absolute left-0 top-0 w-[calc(100%+4px)] -translate-x-[2px] -translate-y-full rounded-t-lg bg-primary px-3 py-2 text-center text-lg font-bold uppercase tracking-widest text-white"
    >
      Popular
    </div>
    <p class="title text-gray-800">{{ item?.title }}</p>
    <p class="desc pt-2 lg:h-[120px]">{{ item?.desc }}</p>

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
        <p v-if="item?.cent">.{{ item?.cent }}</p>
        <p>{{ item?.subscrption }}</p>
      </span>
    </div>

    <div class="my-5 flex flex-col gap-3 text-gray-800">
      <div
        v-for="feature in item?.features"
        class="flex items-center gap-2 text-left"
      >
        <x v-if="feature?.hasNotFeature" class="h-4 w-6 fill-red-500" />
        <correct-icon v-else class="!h-6 !w-6" />
        <div v-html="feature?.title" class="text-md"></div>
      </div>

      <div
        v-if="isAnnual || isLifetime"
        class="flex h-6 items-center gap-2 text-left"
      >
        <correct-icon class="!h-6 !w-6" />

        <div class="flex w-full flex-wrap items-center gap-2">
          <p class="min-w-max">license for:</p>

          <div class="max-w-52 flex-1">
            <div class="relative">
              <select
                v-model="annualLicense"
                aria-label="Number of Websites"
                class="ease w-full cursor-pointer appearance-none rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none lg:w-full"
              >
                <option value="1" selected>1 Website</option>
                <option value="5">5 Website</option>
                <option value="10">10 Website</option>
                <option value="30">30 Website</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

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
        :type="isAnnual ? '1' : '2'"
        @click="$emit('handleClickPlan', item.title, annualLicense)"
      />
    </div>

    <div
      v-if="item?.bottomText"
      v-html="item?.bottomText"
      class="editor desc m-auto text-center text-xs"
    ></div>
  </div>
</template>
