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
  <div class="container-fluid margin-top">
    <h2 class="title mb-5">FAQ</h2>

    <div>
      <div
        v-for="(item, i) in faqData"
        @click="handleQusetionClick(i)"
        class="mb-2"
      >
        <div
          class="duration-400 flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100"
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
          <p class="p-4">
            {{ item.answer }}
          </p>
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
