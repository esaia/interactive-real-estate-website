<script setup lang="ts">
import type { DemoType } from "~/types/general";

const demos = useState<DemoType[]>("demos");
const randomIndex = useState("randomIndex", () =>
  Math.floor(Math.random() * 5),
);

onUnmounted(() => {
  randomIndex.value = Math.floor(Math.random() * 5);
});

const route = useRoute();
</script>

<template>
  <div
    class="container-fluid flex flex-col justify-between gap-10 pt-12 lg:flex-row lg:gap-16"
  >
    <div
      class="top-5 flex h-fit flex-col gap-2 rounded-md border border-gray-200 p-5 text-gray-500 lg:sticky lg:w-60"
    >
      <NuxtLink to="/doc" class="cursor-pointer hover:text-primary">
        Introduction
      </NuxtLink>
      <NuxtLink
        to="/doc/installation"
        class="cursor-pointer hover:text-primary"
      >
        Installation
      </NuxtLink>
      <NuxtLink to="/doc/usage" class="cursor-pointer hover:text-primary">
        Usage
      </NuxtLink>
      <NuxtLink
        to="/doc/show-component"
        class="cursor-pointer hover:text-primary"
      >
        Show the component
      </NuxtLink>
      <NuxtLink
        to="/doc/plugin-vs-standalone"
        class="cursor-pointer hover:text-primary"
      >
        WordPress Plugin vs Standalone Version
      </NuxtLink>
    </div>

    <div class="editor w-full">
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
        <demo
          v-if="randomIndex >= 0"
          :key="randomIndex"
          :shortcode-data="demos[randomIndex]?.shortcodeData"
        />
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

        <br />
        <br />
        <h2 class="title">How to Download from CodeCanyon</h2>
        <br />

        <p>
          To download the Interactive Real Estate Plugin from CodeCanyon, follow
          these steps:
        </p>

        <br />

        <ul>
          <li>
            Visit the
            <a href="https://codecanyon.net/" target="_blank"
              >CodeCanyon website</a
            >.
          </li>
          <li>
            Search for "Interactive Real Estate Plugin" using the search bar.
          </li>
          <li>Click on the plugin title to view its details.</li>
          <li>Click on the <strong>Add to Cart</strong> button.</li>
          <li>Proceed to checkout and complete your purchase.</li>
          <li>
            Once the purchase is confirmed, navigate to your downloads page to
            access the plugin file.
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

          <p class="title-sm">Creating a polygon.</p>

          <img src="/assets/images/doc/selectFloor.gif" alt="" />

          <p class="title-sm">Zooming, panning, editing polygon.</p>
          <p>
            Simply press
            <span class="rounded-md bg-gray-100 p-2">ctrl +</span> for zooming
            in and <span class="rounded-md bg-gray-100 p-2">ctrl -</span> for
            zooming out. While you are zoomed in press
            <span class="rounded-md bg-gray-100 p-2">space</span> and move the
            cursor for panning.
          </p>

          <img src="/assets/images/doc/zoomingPaning.gif" alt="" />

          <p class="title-sm">Floor creating.</p>

          <img src="/assets/images/doc/createFloor.gif" alt="" />

          <p class="title-sm">Type creating.</p>
          <p>
            For apartments of the same type, (For example, apartments that have
            the same area M2, number of rooms, arrangement of rooms) you need to
            add an entry in the types and then select in the list, when you will
            create flat, Because the same records should not be created many
            times.
          </p>

          <img src="/assets/images/doc/createType.gif" alt="" />

          <p class="title-sm">Flat creating.</p>

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
        <h4 class="title-sm mb-2">WordPress Version</h4>

        <p>
          In the lower left corner you will see the text of the shortcode. Copy
          it and use it anywhere on your WordPress site.
        </p>
        <br />
        <br />

        <img src="/assets/images/doc/preview.gif" alt="" />

        <br />
        <br />

        <h4 class="title-sm mb-2">Standalone Version</h4>
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

      <div v-else-if="route.params?.slug === 'plugin-vs-standalone'">
        <h2 class="title">WordPress Plugin vs Standalone Version</h2>
        <br />
        <br />
        <h3 class="title-sm">WordPress Plugin:</h3>
        <br />

        <ul>
          <li>
            <strong>Easy Integration:</strong> This version allows you to use a
            shortcode to quickly add our interactive real estate component
            directly to your WordPress site.
          </li>
          <li>
            <strong>Real-Time Data:</strong> You can generate and display
            up-to-date property information seamlessly within your WordPress
            environment.
          </li>
          <li>
            <strong>User-Friendly:</strong> Perfect for those who want
            everything managed in one place without additional steps.
          </li>
        </ul>
        <br />
        <br />
        <h3 class="title-sm">Standalone Version:</h3>
        <br />

        <ul>
          <li>
            <strong>Data Generation with WP Plugin:</strong>
            <span class="font-semibold text-red-700">
              This version still requires the WordPress plugin
            </span>
            to generate building project data. It’s essential for creating the
            listings you want to display. In other words, this version has an
            additional feature that gives you the code: "styles.css" and
            "lib.es.js" to use this component in any website, for example:
            React, Vue, Svelte or vanilla js.
          </li>
          <li>
            <strong>Flexibility:</strong> Once the data is generated, you can
            use the interactive component on any website, not just WordPress.
            This is great for users who want more freedom in where to showcase
            their properties.
          </li>
          <li>
            <strong>Versatile Use:</strong> Ideal for businesses looking to
            integrate our tool across multiple platforms.
          </li>
        </ul>

        <p>
          Choose the version that best fits your needs—whether you prefer the
          simplicity of WordPress or the flexibility of the standalone option!
        </p>
      </div>
    </div>
  </div>
</template>
