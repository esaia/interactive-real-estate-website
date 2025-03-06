<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";

withDefaults(
  defineProps<{
    placeholder: string;
    name: string;
    label?: string;
    type?: InputTypeHTMLAttribute;
    required?: boolean;
  }>(),
  { type: "text", required: false },
);
const model = defineModel();
</script>
<template>
  <div>
    <label for="fullName" class="text-body-color mb-4 block text-sm">
      {{ label }}
    </label>
    <input
      v-model="model"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="text-body-color placeholder:text-body-color/60 w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 transition-colors focus:border-primary focus:outline-none"
    />
  </div>
</template>
