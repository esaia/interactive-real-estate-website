<script setup lang="ts">
const faq = useState<any>("faq");
const activeIndex = ref<number | null>(null);

const handleQuestionClick = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="container-fluid padding-top max-w-[800px] text-center">
    <h2 class="title">
      Frequently asked <span class="gradient-text"> questions</span>
    </h2>

    <h3 class="desc mb-5 mt-2">Have Questions? We've Got Answers!</h3>

    <div class="flex w-full flex-col rounded-2xl p-2 text-left lg:p-8">
      <div v-for="(item, i) in faq" :key="i">
        <div
          class="duration-400 group flex cursor-pointer items-center justify-between gap-3 py-3 transition-all"
          @click="handleQuestionClick(i)"
        >
          <h4
            class="title-sm font-medium text-gray-800 transition-all group-hover:text-primary"
          >
            <span :class="{ 'text-primary': activeIndex === i }">
              {{ item.question }}
            </span>
          </h4>
          <arrow-up-icon
            class="h-4 min-h-4 w-4 min-w-4 rotate-180 transition-all duration-300 group-hover:[&_path]:fill-primary"
            :class="{ '!rotate-[360deg]': activeIndex === i }"
          />
        </div>

        <div
          class="grid border-b border-b-gray-300 transition-all duration-300 ease-in-out"
          :style="{
            gridTemplateRows: activeIndex === i ? '1fr' : '0fr',
          }"
        >
          <div class="overflow-hidden">
            <div
              v-html="item.answer"
              class="py-3 text-gray-800 md:text-base [&_a]:text-blue-600 hover:[&_a]:underline"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
