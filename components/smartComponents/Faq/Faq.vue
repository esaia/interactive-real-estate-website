<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const faqData = [
  { question: "question", answer: "answer" },
  { question: "question", answer: "answer" },
  { question: "question", answer: "answer" },
];

const slideUpDownModel = ref(new Array(faqData.length).fill(false));

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
    <h2 class="title">Frequently asked questions</h2>

    <p class="desc mb-5 mt-2">Have Questions? We've Got Answers!</p>

    <div
      class="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 p-8 text-left"
    >
      <div
        v-for="(item, i) in faqData"
        @click="handleQusetionClick(i)"
        class="group"
      >
        <div
          class="duration-400 flex cursor-pointer items-center justify-between rounded-lg transition-all"
        >
          <p
            class="group-hover:text-primary font-semibold"
            :class="{ '': slideUpDownModel[i] }"
          >
            {{ item.question }}
          </p>

          <arrow-up-icon
            class="group-hover:[&_path]:fill-primary h-4 w-4 rotate-180 transition-all"
          />
        </div>

        <vue3-slide-up-down v-model="slideUpDownModel[i]" :duration="300">
          <p class="mt-2 text-sm text-gray-600 md:text-base">
            {{ item.answer }}
          </p>
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
