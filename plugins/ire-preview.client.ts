// plugins/my-plugin.ts
import Preview from "ire-preview";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Preview);
});
