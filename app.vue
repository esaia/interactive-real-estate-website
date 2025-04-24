<script setup lang="ts">
import "ire-preview/dist/styles.css";
import { siteBaseUrl } from "./composable/constants";

const title = "Interactive Real Estate | WordPress Plugin";
const desc =
  "The #1 WordPress plugin for creating interactive building images with SVG hotspots. Create clickable zones on building image or floor plans. No coding needed!";

const keywords =
  "interactive image, interactive building, interactive maps, interactive real estate, 3d map real estate, wp plugin, WordPress real estate plugin, interactive building visualization, floor plan, SVG, property hotspots, 3D property view, building layers, interactive buildings, apartments, real estate, floor plan, SVG, hotspots, SVG floor plan plugin";

const config = useRuntimeConfig();
const faq = useState<any>("faq");

const baseUrl = config.app.siteUrl || siteBaseUrl;
const route = useRoute();

faq.value = [
  // {
  //   question:
  //     "What is the difference between a Regular License and an Extended License?",
  //   answer:
  //     "<p>With a <b>Regular License</b>, you are allowed to use the product in one project, either for yourself or a single client. You can create as many interactive buildings as needed within that project. An <i>'project'</i> refers to a website, app or other. <br><br>An <b>Extended License</b> gives you more flexibility and broader usage rights. You can use the item in multiple projects. For example, if you're building multiple client projects, you can use the asset for each project. For a detailed comparison, please refer to the full explanation <a href='https://codecanyon.net/licenses/standard' target='_blank' class='link'>here</a>.</p>",
  // },
  // {
  //   question: "What is CodeCanyon?",
  //   answer:
  //     "CodeCanyon is an online marketplace where you can buy and sell various types of code, scripts, plugins, themes, and digital assets. It's part of the Envato Market, offering developers and designers a platform to sell their creations, and allowing users to purchase ready-made solutions for websites, apps, and software projects.",
  // },
  // {
  //   question: "I bought the product by accident. Can I get a refund?",
  //   answer:
  //     "No, refunds are generally not provided for mistaken purchases. It's important to check the product details before buying. If the product is broken or not as described, you may be able to get a refund, but before, please contact us and we will try to solve the issue.",
  // },
  // {
  //   question: "Can I get support for more than 6 months?",
  //   answer:
  //     "Yes, you can get support for more than 6 months. For further information, read <a href='https://help.market.envato.com/hc/en-us/articles/207886473-Extend-or-renew-Item-Support' target='_blank' class='link'>here</a>.",
  // },

  {
    question: "What is this plugin and what does it do?",
    answer:
      "This plugin allows you to make property images interactive by adding pins, creating polygons, and enabling users to interact with these elements. It's especially useful for showcasing real estate listings, floor plans, where users can click on specific areas (like apartments) to view more information.",
  },

  {
    question: "What is an Interactive Image?",
    answer:
      "Interactive images allow users to engage with specific elements by hovering or clicking on them. These polygons activate various responses, such as displaying details, redirecting to a webpage, executing scripts, or opening pop-up.",
  },

  {
    question:
      "Can I display different building layers (e.g., floor plans) in separate images?",
    answer:
      "Yes! You can upload multiple floor plans or building layers and display them separately, allowing users to navigate between them. For instance, users could view a 2D floor plan for one floor, and then switch to another for a different level or unit type.",
  },

  {
    question: "Can I use this plugin with any theme or page builder?",
    answer:
      "This plugin is designed to be compatible with most WordPress themes and page builders. You can easily add interactive property images to any page or post using shortcodes.",
  },

  {
    question: "Can I customize the appearance of the pins and polygons?",
    answer:
      "Yes! The plugin allows you to customize the color and style of polygons to match your website's design. You can also adjust the transparency, borders, and hover effects to create a visually appealing and intuitive user interface. But keep in mind this is a premium feature.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, as well as PayPal payments.",
  },
  {
    question: "What happens after my purchase?",
    answer:
      "You will receive two emails, with your receipt and invoice, a download link for your <b> Interactive Real Estate</b>  version, a personal license key, and installation instructions. <br/> <br/> You can then upload the plugin ZIP file through the  <b>  Plugins > Add New > Upload Plugin </b>  menu in your site's WordPress admin dashboard, and enter your license key. <br/> <br/> If you don't see those emails in your inbox, please also check your spam folder. If you still can't find them, please contact the <a href='/contact'> support team </a> or try logging in to your account, where you'll also find the necessary information.",
  },
  {
    question: "Do I get updates?",
    answer:
      "Yes! Premium Interactive Real Estate plugin updates are included with all plans. This means that as long as you have a valid and active subscription, you will receive updates, ensuring that <b> Interactive Real Estate</b>  remains up to date, secure, and running reliably.",
  },
  {
    question: "What's the time span for your contracts?",
    answer:
      "All plans are year-to-year unless you purchase a lifetime plan. A license renewal is automatically set up upon purchase, which you can cancel whenever you want on your account page. We'll send an email reminder 30 days before your subscription renews.",
  },
  {
    question: "What happens when my license expires?",
    answer:
      "You can continue using the installed version of the plugin on your site even after your license expires. However, you will lose access to updates, including important security patches and bug fixes. Additionally, direct email support will no longer be available.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "If you decide that <b> Interactive Real Estate</b> isn't the right fit for your project, you can easily cancel your subscription and disable renewals from your <a href='/account'>account page</a>. While you'll still have access to the plugin, updates and direct email support will no longer be provided.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "You are fully protected by our <b> 100% Money Back Guarantee</b>. If during the next 7 days you experience an issue that makes the plugin unusable and we are unable to resolve it, we'll happily consider offering a full refund of your money. <br /> <br /> <b>IMPORTANT:</b> Refunds are available if the product has a bug or issue that we were unable to resolve.",
  },
  {
    question: "What license do I need for my WordPress multisite installation?",
    answer:
      "Every site in a multisite installation needs its own license. You can select discounted license packages for 1, 3, 10 sites. If you need a license for more sites than that, please <a href='/contact'>contact us</a>.",
  },
];

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
    { src: "https://player.vimeo.com/api/player.js", async: true },

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
        description: desc,
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

  title,

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
      content: desc,
    },

    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: desc,
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
      content: keywords,
    },

    {
      name: "url",
      content: `${baseUrl}`,
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: desc,
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
