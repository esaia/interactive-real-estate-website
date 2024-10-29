<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="container-fluid flex flex-col justify-between gap-10 pt-12 lg:flex-row lg:gap-16"
  >
    <div
      class="flex h-fit flex-col gap-2 rounded-md border border-gray-200 p-3 text-gray-500 lg:w-60"
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
    </div>

    <div
      class="w-full [&_li]:text-lg [&_li]:text-gray-600 [&_p]:text-lg [&_p]:text-gray-600 [&_ul]:list-disc"
    >
      <div v-if="route.params?.slug === ''">
        <h2 class="title">Introduction</h2>
        <br />

        <p>
          Welcome to the documentation for the Interactive Real Estate Plugin!
          This plugin provides an interactive experience for real estate
          listings, enabling potential buyers or renters to visually explore
          properties. With easy navigation through different building layers,
          users can get detailed information about each unit directly from the
          visual interface.
        </p>
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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          recusandae illum enim possimus ipsa quisquam laboriosam ab assumenda
          harum sed?
        </p>

        <div class="flex flex-col gap-20">
          <img
            src="/assets/images/doc/createProject.png"
            alt=""
            class="h-full w-full"
          />
          <img src="/assets/images/doc/selectFloor.gif" alt="" />
          <img src="/assets/images/doc/zoomingPaning.gif" alt="" />
          <img src="/assets/images/doc/createFloor.gif" alt="" />
          <img src="/assets/images/doc/createType.gif" alt="" />
          <img src="/assets/images/doc/createFlat.gif" alt="" />
          <img src="/assets/images/doc/linkFloorPolygon.gif" alt="" />
          <img src="/assets/images/doc/preview.gif" alt="" />
          <img src="/assets/images/doc/colorVariables.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
