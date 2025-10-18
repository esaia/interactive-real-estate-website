<script setup lang="ts">
import "ire-preview/dist/styles.css";
import {
  SITE_TITLE,
  SITE_BASE_URL,
  SITE_DESC,
  KEYWORDS,
} from "./composable/constants";
import { FAQ } from "~/composable/data";

const config = useRuntimeConfig();
const faq = useState<any>("faq");

const baseUrl = config.app.siteUrl || SITE_BASE_URL;
const route = useRoute();

faq.value = FAQ;

const vimeoScriptLoaded = ref(false);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.value.map((item: any) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]+>/g, ""),
    },
  })),
};

useHead({
  script: [
    // { src: "https://player.vimeo.com/api/player.js", async: true },
    {
      src: "https://www.googletagmanager.com/gtag/js?id=AW-16923193829",
      async: true,
    },
    {
      innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16923193829');
          `,
      type: "text/javascript",
    },

    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Interactive Real Estate - WordPress Plugin",
        description: SITE_DESC,
        applicationCategory: "WordPress Plugin",
        operatingSystem: "WordPress",
        offers: {
          "@type": "Offer",
          price: "0", // Free tier or starting price
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9", // Update with actual rating
          reviewCount: "20", // Update with real data
        },
        screenshot: {
          "@type": "ImageObject",
          url: `${baseUrl}/featured.png`,
          caption: "Interactive floor plan with SVG hotspots",
        },
      }),
    },

    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Interactive Real Estate Plugin",
        url: `${baseUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
          width: 300,
          height: 60,
          caption: "IRE Plugin Logo",
        },
        sameAs: ["https://x.com/ireplugin"],
      }),
    },

    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqSchema),
    },
  ],

  title: SITE_TITLE,

  htmlAttrs: {
    lang: "en",
  },

  link: [
    {
      rel: "canonical",
      // href: baseUrl,
      href: `${baseUrl}${route.path}`,
    },
    {
      rel: "alternate",
      href: "https://interactive-real-estate.vercel.app",
      hreflang: "en",
    },

    {
      rel: "icon",
      href: `${baseUrl}/favicon.ico`,
    },
  ],

  meta: [
    {
      name: "google-site-verification",
      content: "yzBJmVx5W6EPVBVlFTZqzKpdOABjpbHLAA5ExnwTiE8",
    },

    {
      name: "author",
      property: "og:author",
      content: "website",
    },
    {
      property: "og:url",
      content: baseUrl,
    },
    {
      property: "og:type",
      content: "website",
    },

    {
      name: "description",
      content: SITE_DESC,
    },

    {
      property: "og:title",
      content: SITE_TITLE,
    },
    {
      property: "og:description",
      content: SITE_DESC,
    },

    {
      property: "og:image",
      content: `${baseUrl}/featured.png`,
    },

    {
      property: "og:image:alt",
      content:
        "The #1 WordPress plugin for creating interactive buildings with SVG hotspots.",
    },

    {
      name: "keywords",
      content: KEYWORDS,
    },

    {
      name: "url",
      content: baseUrl,
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },

    {
      name: "twitter:title",
      content: SITE_TITLE,
    },
    {
      name: "twitter:description",
      content: SITE_DESC,
    },
    {
      name: "twitter:image",
      content: `${baseUrl}/featured.png`,
    },
    {
      name: "twitter:image:alt",
      content: "The #1 WordPress plugin for creating interactive buildings.",
    },

    {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
