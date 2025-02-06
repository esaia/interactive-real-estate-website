<script setup lang="ts">
import { Vue3SlideUpDown } from "vue3-slide-up-down";
const faqData = [
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
      "This plugin allows you to make property images interactive by adding pins, creating polygons, and enabling users to interact with these elements. It's especially useful for showcasing real estate listings, floor plans or architectural designs, where users can click on specific areas (like units or rooms) to view more information.",
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
      "Yes! The plugin allows you to customize the color, size, and style of pins and polygons to match your website's design. You can also adjust the transparency, borders, and hover effects to create a visually appealing and intuitive user interface. But keep in mind this is a premium feature.",
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
      class="flex w-full flex-col rounded-2xl border border-gray-200 p-8 text-left"
    >
      <div v-for="(item, i) in faqData">
        <div
          class="duration-400 group flex cursor-pointer items-center justify-between gap-3 rounded-lg py-3 transition-all"
          @click="handleQusetionClick(i)"
        >
          <p
            class="title-sm font-semibold text-gray-800 transition-all group-hover:text-primary"
          >
            <span :class="{ 'gradient-text': slideUpDownModel[i] }">
              {{ item.question }}
            </span>
          </p>
          <arrow-up-icon
            class="h-4 min-h-4 w-4 min-w-4 rotate-180 transition-all duration-300 group-hover:[&_path]:fill-primary"
            :class="{ '!rotate-[360deg]': slideUpDownModel[i] }"
          />
        </div>

        <vue3-slide-up-down v-model="slideUpDownModel[i]" :duration="300">
          <div
            v-html="item.answer"
            class="text-gray-800 md:text-base [&_a]:text-blue-600 hover:[&_a]:underline"
          />
        </vue3-slide-up-down>
      </div>
    </div>
  </div>
</template>
