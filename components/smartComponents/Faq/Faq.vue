<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const faqData = [
  {
    question:
      "What is the difference between a Regular License and an Extended License?",
    answer:
      "<p>With a <b>Regular License</b>, you are allowed to use the product in one project, either for yourself or a single client. You can create as many interactive buildings as needed within that project. An <i>'project'</i> refers to a website, app or other. <br><br>An <b>Extended License</b> gives you more flexibility and broader usage rights. You can use the item in multiple projects. For example, if you're building multiple client projects, you can use the asset for each project. For a detailed comparison, please refer to the full explanation <a href='https://codecanyon.net/licenses/standard' target='_blank' class='link'>here</a>.</p>",
  },
  {
    question: "What is CodeCanyon?",
    answer:
      "CodeCanyon is an online marketplace where you can buy and sell various types of code, scripts, plugins, themes, and digital assets. It's part of the Envato Market, offering developers and designers a platform to sell their creations, and allowing users to purchase ready-made solutions for websites, apps, and software projects.",
  },
  {
    question: "I bought the product by accident. Can I get a refund?",
    answer:
      "No, refunds are generally not provided for mistaken purchases. It's important to check the product details before buying. If the product is broken or not as described, you may be able to get a refund, but before, please contact us and we will try to solve the issue.",
  },
  {
    question: "Can I get support for more than 6 months?",
    answer:
      "Yes, you can get support for more than 6 months. For further information, read <a href='https://help.market.envato.com/hc/en-us/articles/207886473-Extend-or-renew-Item-Support' target='_blank' class='link'>here</a>.",
  },
  {
    question: "WordPress Plugin vs Standalone Version",
    answer:
      "It is important to know, Standalone Version requires work in WordPress environment to generate building project data. <a href='/doc/plugin-vs-standalone' class='link'>see more</a>.",
  },
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
      class="flex w-full flex-col gap-1 rounded-2xl border border-gray-200 p-8 text-left"
    >
      <div v-for="(item, i) in faqData">
        <div
          class="duration-400 group flex cursor-pointer items-center justify-between gap-3 rounded-lg py-3 transition-all"
          @click="handleQusetionClick(i)"
        >
          <p
            class="font-semibold group-hover:text-primary"
            :class="{ '': slideUpDownModel[i] }"
          >
            {{ item.question }}
          </p>
          <arrow-up-icon
            class="h-4 min-h-4 w-4 min-w-4 rotate-180 transition-all duration-300 group-hover:[&_path]:fill-primary"
            :class="{ '!rotate-[360deg]': slideUpDownModel[i] }"
          />
        </div>

        <vue3-slide-up-down v-model="slideUpDownModel[i]" :duration="300">
          <div
            v-html="item.answer"
            class="text-sm text-gray-500 md:text-base"
          />
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
