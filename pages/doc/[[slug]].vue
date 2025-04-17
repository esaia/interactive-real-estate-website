<script setup lang="ts">
import { siteBaseUrl } from "~/composable/constants";
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");
const config = useRuntimeConfig();

const baseUrl = config.app.siteUrl || siteBaseUrl;

const route = useRoute();
const router = useRouter();

const { data: item } = await useAsyncData(route.path, async () => {
  const data = await queryCollection("doc")
    .where("path", "LIKE", route.path)
    .first();

  if (data) {
    return data;
  } else {
    router.push("/doc/intro");
  }
});

const title = computed(() => {
  return item.value?.seo.title;
});

const description = computed(() => {
  return item.value?.seo.description;
});

const isIntroPage = computed(() => {
  return route.path.startsWith("/doc/intro");
});

onMounted(() => {
  // @ts-ignore
  window?.twttr?.widgets.load();
});

useHead({
  script: [{ src: "https://platform.x.com/widgets.js" }],

  meta: [
    {
      property: "og:url",
      content: `${baseUrl}${route.path}`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `${baseUrl}${route.path}`,
    },
  ],
});

useSeoMeta({
  title: title.value,
  description: description.value,
});
</script>

<template>
  <div
    class="container-fluid flex flex-col justify-between gap-10 pt-12 lg:flex-row lg:gap-12"
  >
    <div
      class="top-28 flex h-fit flex-col gap-2 rounded-md border border-gray-200 p-5 text-gray-800 lg:sticky lg:w-96"
    >
      <NuxtLink to="/doc/intro" class="cursor-pointer hover:text-primary">
        Introduction
      </NuxtLink>
      <NuxtLink
        to="/doc/installation"
        class="cursor-pointer hover:text-primary"
      >
        Installation
      </NuxtLink>
      <NuxtLink
        to="/doc/create-your-first-interactive-building-image"
        class="cursor-pointer hover:text-primary"
      >
        Create Your First Interactive Building Image
      </NuxtLink>
      <NuxtLink
        to="/doc/show-component"
        class="cursor-pointer hover:text-primary"
      >
        Show the component
      </NuxtLink>
    </div>

    <div v-if="item" class="w-full [&_hr]:mb-8 [&_thead]:border-[#e5e7eb]">
      <ContentRenderer :value="item" class="prose contents" />
      <div v-if="isIntroPage">
        <demo :shortcode-data="demos[1]?.shortcodeData" />
      </div>
    </div>

    <!-- <div class="editor w-full">
      <div v-if="route.params?.slug === ''">
        <h2 class="title">Introduction</h2>
        <br />

        <p class="mb-4">
          Welcome to the documentation for the Interactive Real Estate Plugin!
          This plugin provides an interactive experience for real estate
          listings, enabling potential buyers or renters to visually explore
          properties. With easy navigation through different building layers,
          users can get detailed information about each unit directly from the
          visual interface.
        </p>
        <demo :shortcode-data="demos[1]?.shortcodeData" />
      </div>

      <div v-else-if="route.params?.slug === 'installation'">
        <h2 class="title">Installation</h2>
        <br />
        <p>How to Install this Plugin in WordPress</p>
        <ul>
          <li>Log in to your WordPress admin panel.</li>
          <li>
            Navigate to <strong>Plugins</strong> &gt; <strong>Add New</strong>.
          </li>
          <li>Click on <strong>Upload Plugin</strong>.</li>
          <li>
            Select the downloaded plugin .zip file and click
            <strong>Install Now</strong>.
          </li>
          <li>
            Once installed, click <strong>Activate</strong> to enable the
            plugin.
          </li>
        </ul>
      </div>

      <div v-else-if="route.params?.slug === 'usage'">
        <h2 class="title">Usage</h2>
        <br />

        <div class="flex flex-col gap-5">
          <img
            src="/assets/images/doc/createProject.png"
            alt=""
            class="h-full w-full"
          />

          <p class="title-md">Creating a polygon.</p>

          <img src="/assets/images/doc/selectFloor.gif" alt="" />

          <p class="title-md">Zooming, panning, editing polygon.</p>
          <p>
            Simply press
            <span class="rounded-md bg-gray-100 p-2">ctrl +</span> for zooming
            in and <span class="rounded-md bg-gray-100 p-2">ctrl -</span> for
            zooming out. While you are zoomed in press
            <span class="rounded-md bg-gray-100 p-2">space</span> and move the
            cursor for panning.
          </p>

          <img src="/assets/images/doc/zoomingPaning.gif" alt="" />

          <p class="title-md">Floor creating.</p>

          <img src="/assets/images/doc/createFloor.gif" alt="" />

          <p class="title-md">Type creating.</p>
          <p>
            For apartments of the same type, (For example, apartments that have
            the same area M2, number of rooms, arrangement of rooms) you need to
            add an entry in the types and then select in the list, when you will
            create flat, Because the same records should not be created many
            times.
          </p>

          <img src="/assets/images/doc/createType.gif" alt="" />

          <p class="title-md">Flat creating.</p>

          <img src="/assets/images/doc/createFlat.gif" alt="" />

          <p>
            Link polygon to related data. In this example we are connecting
            polygon to floor data.
          </p>

          <img src="/assets/images/doc/linkFloorPolygon.gif" alt="" />

          <p>
            Change polygon paths colors, stroke width and color, Sold or
            Reserved polygon colors.
          </p>

          <img src="/assets/images/doc/colorVariables.gif" alt="" />
        </div>
      </div>

      <div v-else-if="route.params?.slug === 'show-component'">
        <h3 class="title">Show the component</h3>
        <br />
        <h4 class="title-md mb-2">WordPress Version</h4>

        <p>
          In the lower left corner you will see the text of the shortcode. Copy
          it and use it anywhere on your WordPress site.
        </p>
        <br />
        <br />

        <img src="/assets/images/doc/preview.gif" alt="" />

        <br />
        <br />

        <h4 class="title-md mb-2">Standalone Version</h4>
        <p>
          In the lower left corner you will see the link "Generate data for
          standalone version". After clicking on it, a modal will open. Because
          you are using an standalone environment, you need to specify the image
          addresses as either relative or absolute. Please, fill the inputs with
          the addresses of the images. Then follow the instructions.
        </p>
        <br />
        <img src="/assets/images/doc/standaloneInstruction.png" alt="" />
      </div>
    </div> -->
  </div>
</template>
