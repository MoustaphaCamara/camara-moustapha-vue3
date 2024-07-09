import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../pages/ListPage.vue"),
    },
  ],
  linkActiveClass: "current"
});

export default router;
