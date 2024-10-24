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
  <div class="container-fluid padding-top">
    <h2 class="title">FAQ</h2>

    <p class="desc mb-5 mt-2">Have Questions? We've Got Answers!</p>

    <div>
      <div
        v-for="(item, i) in faqData"
        @click="handleQusetionClick(i)"
        class="mb-2"
      >
        <div
          class="duration-400 flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100"
          :class="{ 'ring-1 ring-red-500': slideUpDownModel[i] }"
        >
          <p :class="{ 'font-semibold': slideUpDownModel[i] }">
            {{ item.question }}
          </p>

          <arrow-up-icon
            class="h-4 w-4 rotate-180 transition-all"
            :class="{ '!rotate-0': slideUpDownModel[i] }"
          />
        </div>

        <vue3-slide-up-down v-model="slideUpDownModel[i]" :duration="300">
          <p class="px-8 py-2">
            {{ item.answer }}
          </p>
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
