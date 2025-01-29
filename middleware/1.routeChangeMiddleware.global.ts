export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!to.matched.length) {
    return navigateTo("/404");
  }
});
