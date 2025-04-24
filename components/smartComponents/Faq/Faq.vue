<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";

const faq = useState<any>("faq");

const slideUpDownModel = ref(new Array(faq.value.length).fill(false));

const handleQusetionClick = (index: number) => {
  slideUpDownModel.value = slideUpDownModel.value.map((item, i) => {
    if (index === i) {
      return !item;
    } else {
      return false;
    }
  });
};
</script>

<template>
  <div class="container-fluid padding-top max-w-[800px] text-center">
    <h2 class="title">
      Frequently asked <span class="gradient-text"> questions</span>
    </h2>

    <h3 class="desc mb-5 mt-2">Have Questions? We've Got Answers!</h3>

    <div class="flex w-full flex-col rounded-2xl p-2 text-left lg:p-8">
      <div v-for="(item, i) in faq">
        <div
          class="duration-400 group flex cursor-pointer items-center justify-between gap-3 border-b border-b-gray-300 py-3 transition-all"
          @click="handleQusetionClick(i)"
        >
          <h4
            class="title-sm font-medium text-gray-800 transition-all group-hover:text-primary"
          >
            <span :class="{ 'gradient-text font-medium': slideUpDownModel[i] }">
              {{ item.question }}
            </span>
          </h4>
          <arrow-up-icon
            class="h-4 min-h-4 w-4 min-w-4 rotate-180 transition-all duration-300 group-hover:[&_path]:fill-primary"
            :class="{ '!rotate-[360deg]': slideUpDownModel[i] }"
          />
        </div>

        <vue3-slide-up-down v-model="slideUpDownModel[i]" :duration="300">
          <div
            v-html="item.answer"
            class="border-b border-b-gray-300 py-3 text-gray-800 md:text-base [&_a]:text-blue-600 hover:[&_a]:underline"
          />
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
