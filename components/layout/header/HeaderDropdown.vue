<script setup lang="ts">
interface MenuItem {
  title: string;
  link: string;
  children?: MenuItem[];
}

const props = defineProps<{
  menu: MenuItem[];
}>();

const route = useRoute();
const subItems = ref<string[]>([]);

const checkIfTitleExists = (title: string) => {
  const index = subItems.value.indexOf(title);
  return index;
};

const showSubItem = (title: string) => {
  const index = checkIfTitleExists(title);
  if (index !== -1) {
    subItems.value.splice(index, 1);
  } else {
    subItems.value.push(title);
  }
};

onMounted(() => {
  setTimeout(() => {
    props.menu.forEach((item) => {
      if (item?.children?.some((i) => i.link === route.path)) {
        subItems.value.push(item.title);
      }
    });
  }, 300);
});
</script>

<template>
  <div class="border-b text-gray-800 shadow-lg">
    <div class="my-4 flex flex-col">
      <div v-for="item in menu" :key="item.title">
        <div v-if="item?.children?.length" class="py-2">
          <div
            class="flex cursor-pointer items-center justify-between"
            @click="showSubItem(item.title)"
          >
            <p>
              {{ item.title }}
            </p>

            <Arrow
              class="rotate-90 transition-all"
              :class="{ '!-rotate-90': checkIfTitleExists(item.title) >= 0 }"
            />
          </div>

          <div
            v-if="checkIfTitleExists(item.title) >= 0"
            class="mt-4 flex flex-col gap-4"
          >
            <nuxt-link
              v-for="sub in item.children"
              :key="sub.title"
              :to="sub.link"
              class="cursor-pointer bg-gray-50 p-2"
            >
              {{ sub.title }}
            </nuxt-link>
          </div>
        </div>
        <nuxt-link
          v-else
          :to="item.link"
          class="block cursor-pointer py-2 hover:text-primary"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <nuxt-link to="/account" class="mt-3">
      <base-button title="Account" type="2" />
    </nuxt-link>
  </div>
</template>
